// PF2e Remastered reference data — Player Core (default) + Player Core 2 (toggle) + stub future books.
// Intentionally a curated subset (not exhaustive) so the app is usable out of the box;
// every list is meant to be extended by editing the files under data/ or freeform in the UI.
//
// Split by domain; this barrel re-exports everything so consumers import one module.

export * from './data/rules.js';
export * from './data/calc.js';
export * from './data/ancestries.js';
export * from './data/classes.js';
export * from './data/feats.js';
export * from './data/equipment.js';
export * from './data/items.js';
export * from './data/spells.js';
