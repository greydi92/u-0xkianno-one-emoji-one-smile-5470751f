// One Emoji, One Smile — entry program (make.fun, program/v1, Node 22, stdlib only)
//
// The program writes exactly one emoji to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (default /output). No network, no secrets, no dependencies.
//
// ---------------------------------------------------------------------------
// THE PICK: 🤗  U+1F917 Hugging Face
// ---------------------------------------------------------------------------
// Candidates scored against the judge's brief, in the brief's own order:
//   1. plainly aims to warm a stranger   2. warmth at first glance
//   3. universality                      4. chosen rather than default
//   5. right for a stranger
//
//   🙂 Slightly Smiling Face — the default. Fails (4) outright: it is the
//      first smiley that comes to mind, and the brief explicitly demotes it.
//   😊 Smiling Face with Smiling Eyes — genuinely warm and universal, but
//      almost as default as 🙂; loses on (4) to anything equally warm that
//      was actually chosen. Also the most likely pick of the whole field.
//   😄 / 😁 open-mouth grins — joyful, but read as laughing/loud rather
//      than warm-kind; lose on (1)/(2) to a gentle smile or a hug.
//   🥰 / 😍 hearts — affectionate, but hearts from a stranger read as
//      intimate/flirtatious; fail (5).
//   🫶 Heart Hands — a warm gesture, but newer (Unicode 14) so older
//      strangers may not read it, and a heart still leans intimate; loses
//      on (3)/(5) to 🤗.
//   🌻 / ☀️ / 🌈 / 🐣 / 🐶 — cheerful or cute, but none is a face offering
//      warmth to the viewer; they lose on (1)/(2) to any warm face, because
//      the brief's first test is whether the emoji plainly aims to warm a
//      stranger, and a flower/sun/animal aims at nothing.
//   😌 Relieved Face — calm and gentle, but serene rather than
//      smile-making; loses on (2).
//   🥹 Face Holding Back Tears — touching, but reads as sad/overwhelmed as
//      easily as moved; fails (3) universality.
//   🤝 Handshake — friendly but formal/business; not smile-inducing.
//   😇 Smiling Face with Halo — sweet, but the halo invites an ironic
//      "angelic" read; fails (3).
//   💛 Yellow Heart — abstract; a heart from a stranger is intimate-ish,
//      and it carries no face, so it loses on (1)/(2)/(5).
//
//   🤗 Hugging Face wins:
//
// ITERATE round 1 (2026-11-24): 10 FRESH candidates scored on warmth and
// pairwise-compared against 🤗 — none beat it, so the entry is KEPT.
//   🫂 People Hugging — the strongest challenger: a literal hug. But the
//      hug is between two depicted figures, so the viewer watches a hug
//      instead of receiving one; 🤗's open arms reach AT the stranger.
//      Also Unicode 13 (2020) vs 🤗's Unicode 8 (2015), so 🤗 is more
//      universal on (3). 🤗 wins, margin ~2.
//   ☺️ Smiling Face — gentle and instantly warm, but passive: it offers
//      nothing, and it is a near-default classic smiley, demoted on (4).
//      🤗 wins, margin ~2.
//   😃 Smiling Face with Open Mouth — joyful/laughing, not warm-kind;
//      loses on (1), and is a default-ish grin, losing on (4).
//      🤗 wins, margin ~2-3.
//   🥺 Pleading Face — reads needy/sad as easily as sweet; fails (2).
//   🥲 Smiling Face with Tear — bittersweet, mixed read; fails (3).
//   🫠 Melting Face — embarrassed/overwhelmed read; fails (3).
//   🌞 Sun with Face — cheerful symbol, aims warmth at nobody; fails (1).
//   🧸 Teddy Bear — cuddly object, no face, aims at nothing; fails (1)/(2).
//   😺 Smiling Cat Face — cute, but a cat, not a human warmth gesture;
//      fails (1).
//   🤲 Palms Up Together — offering hands, but prayer/please connotation
//      and no smile; fails (2)/(3).
// Verdict: KEEP 🤗 — no fresh candidate is clearly warmer on the judge's
// criteria; the hug offered directly to the viewer remains the warmest pick.
//
// ITERATE round 2 (2026-11-24): 14 FRESH candidates scored on warmth and
// the best 4 pairwise-compared against 🤗 — none beat it, so the entry is
// KEPT again. (All 14 verified single emoji, 4 UTF-8 bytes each; ✌️ is 6
// bytes with VS16 — still valid — but loses anyway.)
//   💐 Bouquet — strongest non-face challenger: a gift of flowers offered
//      to the viewer. But a bouquet is a pretty object, not a friendly
//      face: it carries no smile and no kindness at first glance. 🤗
//      offers a hug AND a smile; a flower gift offers neither. 🤗 wins
//      on (1)/(2), margin ~3.
//   👐 Open Hands — the hug without the face: open hands toward the
//      viewer. But with no face it reads as presenting / "here you go",
//      or even shrug-like in some renders — and nothing in it smiles.
//      The face is what makes the stranger smile. 🤗 wins, margin ~2.
//   🙌 Raising Hands — joyful cheer, but the sender celebrating something,
//      not warmth directed at the viewer; "hooray" is not "I like you".
//      Loses on (1)/(2) to 🤗, margin ~2-3.
//   🍀 Four Leaf Clover — a good-luck wish aimed at the viewer, warm in
//      intent, but a symbol with no face and no smile; luck-wishing is
//      abstract where a hug is direct. 🤗 wins on (1), margin ~3.
//   🙏 Folded Hands — thanks/prayer, but the read splits by culture
//      (prayer vs thanks vs please) and there is no smile; fails (3).
//   ✌️ Victory Hand — peace sign is friendly but reads "cool/peace",
//      not warm-kind; no smile; loses on (2).
//   🥳 Partying Face — joyful celebration, but loud/party, not warm-kind;
//      fails (1).
//   🙃 Upside-Down Face — playful and gently funny, could raise a smile
//      through humour, but irony/silliness risk and not warm; fails (2)/(3).
//   🫣 Face with Peeking Eye — shy-peeking is endearing, but the read is
//      mixed (shy / embarrassed / hiding); fails (3) universality.
//   😻 Smiling Cat with Heart-Eyes — cute animal plus hearts; not human
//      warmth, and hearts from a stranger lean intimate; fails (1)/(5).
//   👍 Thumbs Up — friendly approval, universal and stranger-safe, but
//      approval is not warmth and it has no smile; loses on (2).
//   🌸 Cherry Blossom — pretty and gentle, but aims at nothing, like 🌻;
//      fails (1).
//   💝 Heart with Ribbon — a gift-wrapped heart is a gift gesture, but a
//      heart from a stranger reads intimate and it has no face; fails (5).
//   😂 Face with Tears of Joy — the most-used emoji on earth, laughing
//      not warm-kind; fails (1) and (4) outright.
// Verdict round 2: KEEP 🤗 — after 24 fresh candidates across two iterate
// rounds, nothing is clearly warmer. Every challenger lacks at least one
// of the three things 🤗 combines: a smiling face, open arms reaching AT
// the viewer, and a gesture that is warm without intimacy.
//
// ITERATE round 3 (2026-11-24) — FINAL iterate round: 16 FRESH candidates
// from the unmined lanes (warm animals with faces, warm food/drink offered
// to the viewer, warm weather/nature with a face, hand gestures with a
// smile), all verified single emoji (1 codepoint; ☕ is 3 UTF-8 bytes, the
// rest 4). Best 4 pairwise-compared against 🤗 — none beat it, KEEP again.
//   👋 Waving Hand — strongest gesture challenger: a wave is a warm
//      greeting aimed AT the stranger, universal and stranger-safe. But
//      a wave is a hello, not warmth: it has no face and nothing smiles.
//      🤗 greets AND hugs AND smiles. 🤗 wins on (1)/(2), margin ~2.
//   🌝 Full Moon Face — a smiling face in nature, warm at first glance
//      and plainly a chosen pick. But it is the moon: whimsical and odd
//      rather than a human warmth gesture, and a moon face reads "night"
//      as easily as "warm". 🤗 wins on (1)/(2), margin ~2-3.
//   🐼 Panda Face — universally beloved cute face; cuteness can make a
//      stranger smile. But a panda just sits there — it offers nothing
//      to the viewer and aims at nothing. Cute is not warm-kind.
//      🤗 wins on (1), margin ~2-3.
//   ☕ Hot Beverage — a warm drink offered is a real hospitality gesture
//      ("have a coffee on me"), aimed at the viewer. But an object with
//      no face and no smile: abstract where a hug is direct. 🤗 wins
//      on (1)/(2), margin ~3.
//   🐱 Cat Face / 🐻 Bear Face / 🐰 Rabbit Face / 🐨 Koala Face /
//   😸 Smiling Cat with Smiling Eyes / 🦦 Otter — cute animal faces, and
//      😸 even smiles. But they are animals, not a human warmth gesture:
//      they offer nothing to the viewer and aim at nothing. A cute face
//      is not a warm face. All fail (1).
//   🫖 Teapot — offering tea to a guest is hospitality, but an object
//      with no face; fails (1)/(2). 🧁 Cupcake / 🍫 Chocolate Bar — a
//      sweet treat offered, cheerful, but objects with no face and no
//      smile; fail (1)/(2). 🎁 Wrapped Gift — a gift to the viewer is
//      warm in intent, but an object with no face, and a gift from a
//      stranger can read odd; fails (1)/(5).
//   🫰 Hand with Index Finger and Thumb Crossed — finger heart is a
//      warm gesture, but Unicode 14 (2021), less universal for older
//      strangers, and a heart gesture from a stranger leans intimate;
//      fails (3)/(5). 🌛 First Quarter Moon Face — smiling moon, but a
//      crescent profile face that reads "night/sleepy" more than warm;
//      loses to 🌝, let alone 🤗.
// Verdict round 3 (FINAL): KEEP 🤗 — after 40 fresh candidates across
// three iterate rounds, nothing is clearly warmer. The unmined lanes
// produced only gestures without a face (👋), faces without a gesture
// (🌝, 🐼), or objects with neither (☕, 🎁). Only 🤗 combines all three:
// a smiling face, open arms reaching AT the viewer, and warmth without
// intimacy. Nothing left unmined that could plausibly beat it: the
// remaining emoji space is faces that laugh/cry/rage, objects, symbols,
// and animals — none of which offers a warm human gesture to a stranger.
//   - (1) The open-arms hug is the most literal act of warmth toward the
//     viewer of any single emoji: it does not just look happy, it offers
//     warmth to the stranger reading it. [round 3 note: 40 candidates
//     total across 3 iterate rounds, none clearly warmer — entry final.]
//   - (2) Smiling face + open arms reads instantly as kind and friendly,
//     with no context needed.
//   - (3) A hug is a universal gesture, readable at any age or background
//     (Unicode 8, 2015 — established, not a novelty glyph).
//   - (4) It is plainly a chosen pick, not the first smiley that comes to
//     mind, while staying instantly readable — exactly what (4) rewards.
//   - (5) A hug emoji is the standard friendly online gesture between
//     strangers and acquaintances: warm without romance, sarcasm or
//     flirtation.
//   Novelty for its own sake does not count — and 🤗 is not novelty: the
//   hug is the reason it is warmer than the default smile.
//
// The entry is exactly one emoji: one character, four UTF-8 bytes, no
// trailing newline, no words, no caption, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗"; // U+1F917 Hugging Face

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EMOJI, "utf8");
