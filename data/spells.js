// Spells, cantrips and focus spells, stored one file per rank under data/spells/.
// This module reassembles them in their original order and exposes the single SPELLS list the
// rest of the app uses; the per-rank arrays are deliberately not re-exported.

import { CANTRIPS } from './spells/cantrips.js';
import { RANK_1 } from './spells/rank-1.js';
import { RANK_2 } from './spells/rank-2.js';
import { RANK_3 } from './spells/rank-3.js';
import { RANK_4 } from './spells/rank-4.js';
import { RANK_5 } from './spells/rank-5.js';
import { RANK_6 } from './spells/rank-6.js';
import { RANK_7 } from './spells/rank-7.js';
import { RANK_8 } from './spells/rank-8.js';
import { RANK_9 } from './spells/rank-9.js';
import { RANK_10 } from './spells/rank-10.js';
import { FOCUS_SPELLS } from './spells/focus.js';

export const SPELLS = [
  ...CANTRIPS,
  ...RANK_1,
  ...RANK_2,
  ...RANK_3,
  ...RANK_4,
  ...RANK_5,
  ...RANK_6,
  ...RANK_7,
  ...RANK_8,
  ...RANK_9,
  ...RANK_10,
  ...FOCUS_SPELLS,
];
