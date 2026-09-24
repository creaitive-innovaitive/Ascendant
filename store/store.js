const SUBJECTS = { cardano: 'Cardano', investing: 'Investing', economics: 'Economics', cs: 'Computer Science' };
const ADA_DISCOUNT = 0.05; // placeholder until the fee and discount funding are decided

const money = n => (n === 0 ? 'Free' : '£' + n.toFixed(2));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const load = () => fetch('courses.json').then(r => r.json());

function cardHtml(c) {
  const live = c.status === 'live';
  const tag = live ? 'a' : 'div';
  const href = live ? ` href="course.html?id=${encodeURIComponent(c.id)}"` : '';
  const foot = live
    ? `<span>${esc(c.duration || '')}</span><span class="price">${money(c.price)}</span>`
    : `<span>${esc(c.author)}</span><span class="badge-soon">Coming soon</span>`;
  return `<${tag} class="card${live ? '' : ' soon'}"${href}>
    <div class="card-top"><span>${esc(SUBJECTS[c.subject])}</span><span>${esc(c.level)}</span></div>
    <h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p>
    <div class="card-foot">${foot}</div></${tag}>`;
}

function initStore() {
  const grid = document.getElementById('grid');
  const bar = document.getElementById('filters');
  let courses = [], current = 'all';
  const render = () => {
    const list = courses.filter(c => current === 'all' || c.subject === current);
    grid.innerHTML = list.length ? list.map(cardHtml).join('') : '<p class="empty">Nothing here yet.</p>';
  };
  bar.addEventListener('click', e => {
    const b = e.target.closest('.filter');
    if (!b) return;
    current = b.dataset.subject;
    bar.querySelectorAll('.filter').forEach(x => x.classList.toggle('active', x === b));
    render();
  });
  load().then(d => { courses = d; render(); }).catch(() => { grid.innerHTML = '<p class="empty">Could not load courses.</p>'; });
}

function initCourse() {
  const root = document.getElementById('course');
  const id = new URLSearchParams(location.search).get('id');
  load().then(all => {
    const c = all.find(x => x.id === id && x.status === 'live');
    if (!c) { root.innerHTML = '<p class="empty">Course not found. <a href="index.html">Back to the marketplace</a></p>'; return; }
    document.title = c.title + ' — Ascendant';
    const paid = c.price > 0;
    const mods = c.modules.map((m, i) => `<li><span>${i + 1}. ${esc(m.title)}</span>${
      m.preview || !paid ? `<a href="${esc(m.url)}">${paid ? 'Free preview' : 'Open'} →</a>` : '<span class="lock">🔒 Included in course</span>'}</li>`).join('');
    const adaPrice = paid ? (c.price * (1 - ADA_DISCOUNT)) : 0;
    const opts = paid ? `
      <div class="pay-opts" id="payOpts">
        <button class="pay-opt sel" data-m="card"><span>Card</span><span>${money(c.price)}</span></button>
        <button class="pay-opt" data-m="stable"><span>Stablecoin</span><span>${money(c.price)}</span></button>
        <button class="pay-opt" data-m="ada"><span>Pay with ADA <span class="tag">−${ADA_DISCOUNT * 100}%</span></span><span>${money(adaPrice)}</span></button>
      </div>
      <button class="btn-primary buy-btn" disabled>Checkout opens at launch</button>
      <p class="buy-note">Payments settle on Cardano whichever method you choose.</p>` : `
      <a class="btn-primary buy-btn" style="display:block;text-align:center;text-decoration:none" href="${esc(c.url)}">Start the course</a>
      <p class="buy-note">No payment or wallet needed to start.</p>`;
    root.innerHTML = `
      <div class="crumb"><a href="index.html">Marketplace</a> / ${esc(SUBJECTS[c.subject])}</div>
      <div class="course-layout">
        <div class="course-main">
          <span class="chip">${esc(c.level)}</span>
          <h1>${esc(c.title)}</h1>
          <p class="lead">${esc(c.summary)}</p>
          <p class="crumb" style="margin-top:.75rem">By ${esc(c.author)} · ${esc(c.duration || '')} · ${c.modules.length} modules</p>
          <h2>What's inside</h2><ul class="mod-list">${mods}</ul>
        </div>
        <aside class="buy-box">
          <div class="buy-price">${money(c.price)} ${paid ? '<small>one-off</small>' : ''}</div>
          ${opts}
          ${paid ? `<ul class="assure">
            <li>↩ Automatic refund window, held in escrow</li>
            <li>🔑 Access pass held in your own wallet</li>
            <li>👁 Free preview lessons before you buy</li>
          </ul>` : ''}
        </aside>
      </div>`;
    const po = document.getElementById('payOpts');
    if (po) po.addEventListener('click', e => {
      const b = e.target.closest('.pay-opt');
      if (b) po.querySelectorAll('.pay-opt').forEach(x => x.classList.toggle('sel', x === b));
    });
  }).catch(() => { root.innerHTML = '<p class="empty">Could not load this course.</p>'; });
}
