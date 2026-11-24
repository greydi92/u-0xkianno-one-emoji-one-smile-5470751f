[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/greydi92/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/greydi92/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

Join make.fun with referral code `qgn48q27`: https://make.fun/r/qgn48q27

# One Emoji, One Smile — 🤗

Entry for the make.fun bounty [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) ($5, top 10, deadline 2026-11-27 02:30 WIB).

## The entry

Exactly one emoji, and nothing else:

```
🤗
```

U+1F917 Hugging Face — a smiling face with open arms, offering a hug to the
stranger reading it.

## Why this emoji

The judge compares two emojis at a time and picks the warmer, weighing (in
order): plainly aiming to warm a stranger, warmth at first glance,
universality, chosen-rather-than-default, and right for a stranger.

- **Warmest gesture, not just a warm face.** The open-arms hug is the most
  literal act of warmth toward the viewer of any single emoji — it offers
  warmth, it doesn't just look happy.
- **Not the default.** 🙂 and 😊 are the first smileys that come to mind,
  and the brief explicitly demotes them; 🤗 is plainly a chosen pick while
  staying instantly readable.
- **Universal and stranger-safe.** A hug is readable at any age or
  background, and a hug emoji is the standard friendly online gesture
  between strangers — warm without intimacy, sarcasm, or flirtation, unlike
  the heart emojis (🥰, 😍, 💛).
- **Beats the cute/cheerful non-faces.** 🌻, ☀️, 🌈, 🐣 and 🐶 are cheerful
  but aim at nothing; a face offering a hug plainly aims to warm a stranger.
  Full candidate scoring is documented in the comments of `main.ts` —
  24 fresh candidates across two iterate rounds (2026-11-24), none clearly
  warmer than 🤗. Round 3 (final iterate, 2026-11-24) tested 16 more from
  the unmined lanes — warm animals (🐼 🐱 🐻 🐰 🐨 😸 🦦), warm food/drink
  offered (☕ 🫖 🧁 🍫 🎁), moon faces (🌝 🌛), hand gestures (👋 🫰) —
  40 candidates total, none clearly warmer.

## How it works

`main.ts` (Node 22, stdlib only) writes exactly one emoji — one character,
four UTF-8 bytes, no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), per the program/v1 contract in the kit's
`RULES.txt`. No network, no secrets, no dependencies.

## Run locally

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt   # 🤗
```
