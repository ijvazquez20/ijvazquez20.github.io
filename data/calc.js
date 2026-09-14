// Derived-stat helpers shared across the sheet.

import { RANK_BONUS } from './rules.js';

export function calcMod(score) { return Math.floor((score - 10) / 2); }

export function calcProfBonus(rank, level) { return rank > 0 ? level + RANK_BONUS[rank] : 0; }

export function fmtMod(n) { return n >= 0 ? `+${n}` : `${n}`; }


// Ancestry HP is a flat one-time grant; class HP and the Constitution modifier are both
// gained again every level (Player Core p.29: "increase your maximum Hit Points by the
// amount indicated for your class" each level, recalculated whenever Con mod changes).
export function calcHpMax(ancestryHp, classHp, conMod, level, hasToughness) {
  const lvl = level || 1;
  return (ancestryHp || 0) + ((classHp || 0) + (conMod || 0)) * lvl + (hasToughness ? lvl : 0);
}


// Sum of max-HP increases from worn gear (e.g. Belt of Good Health). Unlike an item bonus to a
// skill, these are untyped increases to the HP pool — like ancestry HP or the Toughness feat — so
// multiple different sources stack rather than only the highest applying.
export function wornHpBonus(inventory, GEAR) {
  return (inventory || [])
    .filter(it => it.worn)
    .flatMap(it => ((GEAR.find(g => g.name === it.name) || {}).grants) || [])
    .reduce((sum, gr) => sum + (typeof gr.hpMax === 'number' ? gr.hpMax : 0), 0);
}


// Strips a trait's trailing die size / range / damage-type suffix (e.g. "Deadly d8" -> "Deadly",
// "Thrown 10ft" -> "Thrown", "Versatile S" -> "Versatile") so it can be looked up in TRAIT_DESCRIPTIONS.
export function traitBaseName(trait) {
  return (trait || '').replace(/\s+d\d+$/, '').replace(/\s+\d+ft$/, '').replace(/\s+[BPS]$/, '').trim();
}

