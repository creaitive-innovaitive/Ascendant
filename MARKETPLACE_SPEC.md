# Ascendant Marketplace: Product Spec

## Summary

Ascendant becomes an education marketplace built on Cardano. Independent teachers and authors sell courses, and buyers pay per lesson, module or course through x402 with Masumi escrow. The first listing is the existing Ascendant beginner Cardano course, and further courses from the founder (beginner investing, Economics, Computer Science) follow. The founder's courses are the first listings on the marketplace, not a separate product.

This replaces the earlier pay-per-lesson concept in PROJECT_BRIEF.md as the primary direction. The brief's tiers, NFT economy and epoch challenges remain available as an engagement layer later.

## Payments

- Buyers can pay by card, stablecoin or ADA. All settle on Cardano behind the scenes, so every purchase, refund and payout is an on-chain event whatever the buyer used.
- ADA is prominent but never forced: a "pay with ADA" badge and a small discount (5-10%, funded by the creator or the platform), a platform fee collected in ADA, and a public "settled on Cardano" counter.
- Card buyers receive their access pass in a background wallet, with the option to claim it into their own wallet later.
- Prices are set per lesson, module or course. Lessons already bought count towards the course price.

## Escrow and refunds

Payments sit in Masumi escrow. Funds release to the creator when the buyer opens the content, and refund automatically inside a set window if the content fails to load or does not match its description. Decisions are logged on-chain.

## Access

Each purchase mints an access NFT held by the buyer's wallet. The content server checks the NFT, so there is no shared login and no database to trust.

## Creators

- Sign up with a Veridian verifiable credential for identity.
- Upload lessons (text, video links, PDFs, quizzes), set prices and submit for approval.
- Get paid directly to a payout address. A small platform fee is taken, published openly.
- All investing courses must follow educational and historical framing, never personalised advice.

## Buyers

- Free preview lessons on every course.
- Start with a single lesson for a few cents, then upgrade to the full course.
- Automatic refund window, visible on every listing.

## Catalogue plan

1. Beginner Cardano course (first listing, already drafted in this repo under courses/).
2. Beginner investing (educational and historical framing).
3. Economics and Computer Science for students, subject to the checks below.
4. Third-party teachers and authors.

## MVP

1. Storefront with course listing pages and free previews.
2. One x402-gated course on preprod using the Masumi contract.
3. Card payment path that settles to the background wallet.
4. Access NFT mint and check.
5. Creator dashboard with earnings, and a public transparency page for platform fees.

## Checks before launch

- Employer contract and IP position on materials made for the school job.
- Selling to under-18s: age and parental consent requirements.
- Exam-board copyright: nothing derived from past papers can be sold.
- Tax and VAT on digital sales, and money-transmission rules for card-to-crypto settlement.
- Legal review of refunds, fees and any ADA discount.
- Creator content moderation and course approval process.

## Risks

- Most students and parents do not hold ADA, so the card path is essential.
- Maturity of Masumi and x402 Cardano tooling needs checking against current docs.
- Two-sided cold start: buyers need courses and creators need buyers. The founder's own courses and audience seed the supply side.

## Open questions

- Platform fee percentage and who funds the ADA discount.
- Card payment provider, and how it settles to Cardano.
- Whether course pricing is shown in fiat, ADA or both.
