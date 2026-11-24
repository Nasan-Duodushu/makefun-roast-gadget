// One-Line Roast: The Gadget You Use Every Day — one original line roasting
// autocorrect, the critic living in every keyboard.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Autocorrect has watched me type 'definitely' eleven thousand times and still thinks I mean 'defiantly' — it is not a keyboard, it is a critic.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
