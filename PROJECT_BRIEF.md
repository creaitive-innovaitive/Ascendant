# Cardano Education Platform: Project Brief

## Mission

Make it easy for people to use and build on Cardano. Cardano has strong technology but poor onboarding, a bad reputation and no compelling cultural entry point for newcomers. This platform is education first, with gamification as a secondary layer. It is not a social engagement platform and not a prediction market.

## Principles

- Learning is free, with no gatekeeping and no wallet needed to start.
- Gamification is present but never dominates the homepage.
- No forced social-media posting for points.
- Transparency is a brand pillar: a published wallet, open-source contracts and public financials.
- The 5-day Cardano epoch sets the cadence for challenges and competitions.
- NFTs are the qualification keys. The wallet holds them and smart contracts check them, so no database has to be trusted.
- Onboarding stays simple: hold ADA in a non-custodial wallet, stake, trade.

## Tiers

1. **Seeker:** beginner, free, no wallet required at first.
2. **Builder:** intermediate, wallet required, actively using Cardano.
3. **Architect:** advanced, developing on Cardano.
4. **Founder:** top tier, definition still to be decided.

Sub-roles within tiers depend on ADA staked, for example "Whale Architect" and "Shrimp Architect".

## Features

- **Learn platform:** modules, quizzes, downloadable worksheets and videos with simple progression.
- **NFT economy:** earned, purchasable, scarce event, membership and progress NFTs.
- **Portfolio page:** wallet-connected, with NFTs categorised by type, ADA and native tokens, plus a portfolio balancer.
- **Epoch challenges:** different challenge types per tier, with a leaderboard that resets each season.
- **Light prediction activity:** for example, predicting Cardano TVL at epoch end, with a league table. Kept small.
- **Monthly trading competitions:** free at first, paid later. Legal review is required before any real money is involved.
- **Subscriptions:** unlock more content and community roles. Never required for basic access.
- **Newsletter:** Cardano news and tips.
- **Transparency page:** wallet, contracts and financials.
- **Funding:** partner sponsorships, Project Catalyst and treasury funding.

## Design references

- binance.com/en/academy
- coinbase.com/en-gb/learn
- etoro.com/academy/courses/

## x402 layer (new)

Source: cardano.org/ai. Cardano has native x402 support, and the Cardano Foundation is an x402 Foundation member. The relevant ecosystem pieces are:

- **Masumi Smart Contract:** escrow that releases funds on delivery, refunds failed work and logs decisions on-chain. It supports address-to-address payments, refund mechanics and script-parameterised payments.
- **Masumi Network** for agent-to-agent payments.
- **Decentralized Agent Registry** for discovering agents on-chain.
- **Sokosumi**, a live marketplace for hiring agents.
- **Veridian Wallet** for DIDs and verifiable credentials.
- **Hydra** for sub-second, sub-cent transactions.
- **Cardano Dev Skills**, a plugin toolkit for Claude Code and other agent frameworks.

### Concept: pay-per-lesson with refund on completion

1. A newcomer gets a sponsor-funded starter wallet.
2. Their first action is a pennies-level x402 payment in ADA to unlock a lesson or quiz. This is the first on-chain transaction, and it teaches how wallets and fees work.
3. The payment sits in Masumi escrow. On a quiz pass, the funds release to the content provider and the learner receives a progress NFT. On a fail or abandon, the funds refund automatically with an on-chain log.
4. Net cost to the learner is close to zero, and every step is a real on-chain action.

The same x402 endpoints serve AI agents (pay-per-call Cardano data such as epoch stats, TVL and token metadata). Architect-tier users can list their own paid agents or endpoints in the registry and Sokosumi, which gives builders a way to earn on arrival.

### Risks

- Sybil abuse of sponsor-funded wallets, so per-person limits are needed.
- Legal review of refunds and rewards, since they can look like earnings.
- Maturity of the Masumi and x402 Cardano tooling, which needs checking against current docs.

## Build order

1. Content and page structure.
2. Design.
3. Free lessons plus one x402-gated lesson, using the Masumi payment contract on preprod.
4. Progress NFT minted on quiz pass.
5. Sponsor-funded starter wallets.
6. Tiers, epoch challenges and portfolio page.
7. Architect marketplace via the agent registry.

## Status

Concept only. No code exists yet. The original planning chat was lost, and this brief is rebuilt from the saved project memory plus a review of cardano.org/ai on 2026-09-23.

## Open questions

- Definition of the Founder tier.
- Which sponsors or Catalyst fund to approach first.
- Whether the x402 gate is the core loop or an optional extra.
