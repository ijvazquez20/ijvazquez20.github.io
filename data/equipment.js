// Gear you wield or wear: weapons, armor, shields and fundamental runes.

// Weapon fundamental runes (Player Core equipment rules): a potency rune grants an item bonus
// to attack rolls; a striking rune adds extra weapon damage dice (Striking +1, Greater +2,
// Major +3). Both default to none on a freshly added weapon.
export const POTENCY_RUNES = [
  { value: 'none', label: 'None', bonus: 0 },
  { value: '+1', label: '+1 Potency', bonus: 1 },
  { value: '+2', label: '+2 Potency', bonus: 2 },
  { value: '+3', label: '+3 Potency', bonus: 3 },
];

export const STRIKING_RUNES = [
  { value: 'none', label: 'None', extraDice: 0 },
  { value: 'striking', label: 'Striking', extraDice: 1 },
  { value: 'greater-striking', label: 'Greater Striking', extraDice: 2 },
  { value: 'major-striking', label: 'Major Striking', extraDice: 3 },
];


export const WEAPONS = [
  { name: 'Dagger', book: 'player-core', category: 'Simple', damage: '1d4 P', bulk: 'L', traits: 'Agile, Finesse, Thrown 10ft, Versatile S', desc: 'A small bladed weapon suited to close stabbing or throwing.' },
  { name: 'Shortsword', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: 'L', traits: 'Agile, Finesse, Versatile S', desc: 'A one-handed blade, roughly 2 feet long, made in a range of shapes and styles.' },
  { name: 'Longsword', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '1', traits: 'Versatile P', desc: 'A one- or two-edged blade, also called an arming sword, roughly 3 to 4 feet long with a heavy, well-balanced blade.' },
  { name: 'Greatsword', book: 'player-core', category: 'Martial', damage: '1d12 S', bulk: '2', traits: 'Versatile P', desc: 'An immense two-handed sword nearly as tall as its wielder, with a dulled lower blade edge for a secure two-handed grip.' },
  { name: 'Rapier', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: '1', traits: 'Deadly d8, Disarm, Finesse', desc: 'A long, thin piercing blade with a basket hilt, favored as a dueling weapon.' },
  { name: 'Warhammer', book: 'player-core', category: 'Martial', damage: '1d8 B', bulk: '1', traits: '—', desc: 'A weapon with a wooden shaft and a large, heavy metal head, single- or double-sided, built for powerful bludgeoning blows.' },
  { name: 'Battle Axe', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '1', traits: 'Sweep', desc: 'An axe built purely for combat, lighter than a tool axe with a reinforced shaft and sharper edge suited to cutting through limbs.' },
  { name: 'Longbow', book: 'player-core', category: 'Martial', damage: '1d8 P', bulk: '2', traits: 'Deadly d10, Propulsive, Volley 30ft', ranged: true, desc: 'A tall bow of a single piece of wood, usually elm, hickory, or yew, with a powerful draw for long-range shots; it requires two hands and can\'t be fired from horseback.' },
  { name: 'Shortbow', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: '1', traits: 'Deadly d10', ranged: true, desc: 'A smaller bow carved from a single piece of wood, favored by skirmishers and mounted troops for its handling.' },
  { name: 'Crossbow', book: 'player-core', category: 'Simple', damage: '1d8 P', bulk: '1', traits: 'Deadly d8', ranged: true, desc: 'A bow mounted on a handled frame called a tiller, with a locking mechanism and trigger that releases a loaded bolt.' },
  { name: 'Staff', book: 'player-core', category: 'Simple', damage: '1d4 B', bulk: '1', traits: 'Two-Hand d8', desc: 'A long wooden shaft that doubles as a walking aid and a bludgeoning weapon.' },
  { name: 'Makeshift Staff', book: 'player-core', category: 'Simple', damage: '1d4 B', bulk: '1', traits: 'Two-Hand d8', desc: 'A wizard\'s own invention, holding a cantrip and a 1st-rank spell it can unleash as its charges allow (Staff Nexus arcane thesis).' },
  { name: 'Fist', book: 'player-core', category: 'Unarmed', damage: '1d4 B', bulk: '—', traits: 'Agile, Finesse, Nonlethal', desc: 'An unarmed strike using bare hands and body weight.' },
  { name: 'Sap', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: 'L', traits: 'Agile, Nonlethal', desc: 'A padded, weighted club — often a leather-wrapped lead rod — designed to knock a target senseless rather than draw blood.' },
  { name: 'Whip', book: 'player-core', category: 'Martial', damage: '1d4 S', bulk: '1', traits: 'Disarm, Finesse, Nonlethal, Reach 10ft', desc: 'A long braided strand of thick leather that delivers a sharp, nonlethal slash at range, usually with a distinctive crack.' },
  // Simple melee
  { name: 'Club', book: 'player-core', category: 'Simple', damage: '1d6 B', bulk: '1', traits: 'Thrown 10ft', desc: 'A stout length of wood, whether a carved weapon or a simple branch, swung to bludgeon a foe.' },
  { name: 'Gauntlet', book: 'player-core', category: 'Simple', damage: '1d4 B', bulk: 'L', traits: 'Agile, Free-Hand', desc: 'A reinforced metal glove — sometimes paired with heavier armor — that protects the hand while turning it into a striking weapon.' },
  { name: 'Light Mace', book: 'player-core', category: 'Simple', damage: '1d4 B', bulk: 'L', traits: 'Agile, Finesse, Shove', desc: 'A short-shafted mace with a dense, ridged or spiked metal head, delivering focused bludgeoning force in a compact package.' },
  { name: 'Longspear', book: 'player-core', category: 'Simple', damage: '1d8 P', bulk: '2', traits: 'Reach', desc: 'A very long thrusting spear, sometimes called a pike, wielded two-handed and commonly used for crowd control or holding a line against charges.' },
  { name: 'Mace', book: 'player-core', category: 'Simple', damage: '1d6 B', bulk: '1', traits: 'Shove', desc: 'A sturdy weapon with a stout haft and heavy metal head, built to dent armor with powerful blows.' },
  { name: 'Morningstar', book: 'player-core', category: 'Simple', damage: '1d6 B', bulk: '1', traits: 'Versatile P', desc: 'A weapon with a short shaft ending in a spiked metal ball.' },
  { name: 'Sickle', book: 'player-core', category: 'Simple', damage: '1d4 S', bulk: 'L', traits: 'Agile, Finesse, Trip', desc: 'A farming tool adapted into a one-handed weapon, with a short handle and a curved blade sometimes sharpened on both edges.' },
  { name: 'Spear', book: 'player-core', category: 'Simple', damage: '1d6 P', bulk: '1', traits: 'Thrown 20ft', desc: 'A metal-shod wooden shaft that can be used one-handed in melee or thrown.' },
  { name: 'Spiked Gauntlet', book: 'player-core', category: 'Simple', damage: '1d4 P', bulk: 'L', traits: 'Agile, Free-Hand', desc: 'A metal gauntlet fitted with knuckle spikes, offering the same hand protection as a standard gauntlet with a sharper offensive edge.' },
  // Martial melee
  { name: 'Bastard Sword', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '1', traits: 'Two-Hand d12', desc: 'A broad-bladed sword with an extended grip that can be wielded in one hand or braced in two for greater striking power.' },
  { name: 'Bo Staff', book: 'player-core', category: 'Martial', damage: '1d8 B', bulk: '2', traits: 'Parry, Reach, Trip', desc: 'A slender, well-balanced fighting staff tapered at both ends, equally suited to striking and defending.' },
  { name: 'Falchion', book: 'player-core', category: 'Martial', damage: '1d10 S', bulk: '2', traits: 'Forceful, Sweep', desc: 'A heavier, two-handed relative of the scimitar, weighted toward the tip for powerful slashing blows.' },
  { name: 'Flail', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: '1', traits: 'Disarm, Sweep, Trip', desc: 'A spiked ball or cylinder swung on a chain, rope, or strap from a wooden handle.' },
  { name: 'Glaive', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '2', traits: 'Deadly d8, Forceful, Reach', desc: 'A polearm with a long, single-edged blade mounted on a roughly 7-foot pole, built to deliver cuts at range.' },
  { name: 'Greataxe', book: 'player-core', category: 'Martial', damage: '1d12 S', bulk: '2', traits: 'Sweep', desc: 'A large, heavy axe too big to wield one-handed, often double-bladed or bearded with a hook to add chopping force.' },
  { name: 'Greatclub', book: 'player-core', category: 'Martial', damage: '1d10 B', bulk: '2', traits: 'Backswing, Shove', desc: 'A massive two-handed club, ranging from a carved weapon to a sturdy tree branch.' },
  { name: 'Greatpick', book: 'player-core', category: 'Martial', damage: '1d10 P', bulk: '2', traits: 'Fatal d12', desc: 'A larger, longer-handled version of the pick, too heavy for one-handed use, built to punch through armor.' },
  { name: 'Guisarme', book: 'player-core', category: 'Martial', damage: '1d10 S', bulk: '2', traits: 'Reach, Trip', desc: 'A polearm with a long curved blade and a hook on its blunt side, mounted on an 8-foot shaft, used to trip foes at range.' },
  { name: 'Halberd', book: 'player-core', category: 'Martial', damage: '1d10 P', bulk: '2', traits: 'Reach, Versatile S', desc: 'A polearm with a short, roughly 5-foot shaft topped by a long spike paired with an axe blade.' },
  { name: 'Hatchet', book: 'player-core', category: 'Martial', damage: '1d6 S', bulk: 'L', traits: 'Agile, Sweep, Thrown 10ft', desc: 'A small axe usable in melee or thrown.' },
  { name: 'Lance', book: 'player-core', category: 'Martial', damage: '1d8 P', bulk: '2', traits: 'Deadly d8, Jousting d6, Reach', desc: 'A long spear-like weapon meant for a mounted rider to deliver a powerful charging strike.' },
  { name: 'Light Hammer', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: 'L', traits: 'Agile, Thrown 20ft', desc: 'A smaller, lighter version of the warhammer, light enough to be thrown.' },
  { name: 'Light Pick', book: 'player-core', category: 'Martial', damage: '1d4 P', bulk: 'L', traits: 'Agile, Fatal d8', desc: 'A modified mining pick with a wooden shaft, its head shaped more for punching through armor and flesh than breaking rock.' },
  { name: 'Main-gauche', book: 'player-core', category: 'Martial', damage: '1d4 P', bulk: 'L', traits: 'Agile, Disarm, Finesse, Parry, Versatile S', desc: 'A parrying dagger with a robust hand guard, designed as much to defend as to attack.' },
  { name: 'Maul', book: 'player-core', category: 'Martial', damage: '1d12 B', bulk: '2', traits: 'Shove', desc: 'A massive two-handed warhammer swung with both hands for maximum impact.' },
  { name: 'Pick', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: '1', traits: 'Fatal d10', desc: 'A combat pick with a sturdy wooden shaft and heavy, pointed head built to punch through defenses.' },
  { name: 'Ranseur', book: 'player-core', category: 'Martial', damage: '1d10 P', bulk: '2', traits: 'Disarm, Reach', desc: 'A polearm resembling a long trident whose central prong extends noticeably farther than the two outer ones, useful for disarming.' },
  { name: 'Scimitar', book: 'player-core', category: 'Martial', damage: '1d6 S', bulk: '1', traits: 'Forceful, Sweep', desc: 'A one-handed curved blade sharpened along a single edge.' },
  { name: 'Scythe', book: 'player-core', category: 'Martial', damage: '1d10 S', bulk: '2', traits: 'Deadly d10, Trip', desc: 'A farming tool adapted into a weapon, with a long wooden shaft, side handles, and a curved blade set at a right angle.' },
  { name: 'Starknife', book: 'player-core', category: 'Martial', damage: '1d4 P', bulk: 'L', traits: 'Agile, Deadly d6, Finesse, Thrown 20ft, Versatile S', desc: 'Four tapering blades radiating from a central metal ring; gripped at the center it serves as a melee weapon, and it can also be thrown short distances.' },
  { name: 'Trident', book: 'player-core', category: 'Martial', damage: '1d8 P', bulk: '1', traits: 'Thrown 20ft', desc: 'A three-pronged, spear-like weapon with a roughly 4-foot shaft that can be wielded one-handed or thrown.' },
  { name: 'War Flail', book: 'player-core', category: 'Martial', damage: '1d10 B', bulk: '2', traits: 'Disarm, Sweep, Trip', desc: 'A large flail with a long shaft connected to a shorter striking head, sometimes inlaid with spikes.' },
  // Advanced melee
  { name: 'Dwarven Waraxe', book: 'player-core', category: 'Advanced', damage: '1d8 S', bulk: '2', traits: 'Dwarf, Sweep, Two-Hand d12', desc: 'A dwarven weapon with a large, ornate axe head on a thick handle, usable one-handed or braced with both.' },
  { name: 'Gnome Flickmace', book: 'player-core', category: 'Advanced', damage: '1d8 B', bulk: '1', traits: 'Gnome, Reach, Sweep', desc: 'A flail-like weapon with a short handle and a length of chain ending in a ball, flicked out to its full reach and pulled back to the wielder by the strike\'s own momentum.' },
  // Ranged
  { name: 'Blowgun', book: 'player-core', category: 'Simple', damage: '1 P', bulk: 'L', traits: 'Agile, Nonlethal', ranged: true, desc: 'A long, narrow tube that fires small darts using nothing but a sharp exhaled breath.' },
  { name: 'Dart', book: 'player-core', category: 'Simple', damage: '1d4 P', bulk: 'L', traits: 'Agile, Thrown 20ft', desc: 'A short, weighted throwing weapon, larger than an arrow but shorter than a javelin, sometimes fletched for stability.' },
  { name: 'Javelin', book: 'player-core', category: 'Simple', damage: '1d6 P', bulk: 'L', traits: 'Thrown 30ft', desc: 'A slender spear balanced for throwing rather than melee use.' },
  { name: 'Sling', book: 'player-core', category: 'Simple', damage: '1d6 B', bulk: 'L', traits: 'Propulsive', ranged: true, desc: 'A leather cup on a pair of straps used to hurl smooth stones or sling bullets at range.' },
  { name: 'Arbalest', book: 'player-core', category: 'Martial', damage: '1d10 P', bulk: '2', traits: 'Backstabber', ranged: true, desc: 'A heavy, well-built crossbow whose refined firing mechanism makes it faster and more accurate than a standard crossbow, though it takes training to use effectively.' },
  { name: 'Bola', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: 'L', traits: 'Nonlethal, Ranged Trip, Thrown 20ft', desc: 'Weights tied to long cords that can be thrown to bludgeon a foe or wrap around and entangle their legs.' },
  { name: 'Composite Longbow', book: 'player-core', category: 'Martial', damage: '1d8 P', bulk: '2', traits: 'Deadly d10, Propulsive, Volley 30ft', ranged: true, desc: 'A longbow laminated from horn, wood, and sinew for extra pull strength, requiring two hands and unusable from horseback; anything that keys off longbows applies to this weapon too.' },
  { name: 'Composite Shortbow', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: '1', traits: 'Deadly d10, Propulsive', ranged: true, desc: 'A shortbow laminated from horn, wood, and sinew for extra pull strength, prized by mounted archers for its power and compact size; anything that keys off shortbows applies to this weapon too.' },
  { name: 'Hand Crossbow', book: 'player-core', category: 'Simple', damage: '1d6 P', bulk: 'L', traits: '—', ranged: true, desc: 'A small crossbow, sometimes called an alley bow, compact enough to fire one-handed though it still needs both hands to reload; favored for delivering poisoned bolts.' },
  { name: 'Heavy Crossbow', book: 'player-core', category: 'Simple', damage: '1d10 P', bulk: '2', traits: '—', ranged: true, desc: 'A larger, harder-to-load crossbow than the standard model, trading reload speed for greater striking power.' },
  // Uncommon simple melee
  { name: 'Clan Dagger', book: 'player-core', category: 'Simple', damage: '1d4 P', bulk: 'L', traits: 'Agile, Dwarf, Parry, Versatile B', desc: 'A broad ceremonial dagger carried by dwarves as both weapon and clan emblem; losing one is a mark of shame among most dwarves.' },
  { name: 'Katar', book: 'player-core', category: 'Simple', damage: '1d4 P', bulk: 'L', traits: 'Agile, Deadly d6, Monk', desc: 'A punching dagger with an H-shaped grip that lets the blade project straight out from the knuckles.' },
  // Martial melee (shield weapons, cane)
  { name: 'Shield Bash', book: 'player-core', category: 'Martial', damage: '1d4 B', bulk: '—', traits: '—', desc: 'A basic strike made by slamming a shield into a foe.' },
  { name: 'Shield Boss', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: '—', traits: 'Attached', desc: 'A round, convex, or conical metal fitting mounted on a shield\'s face that adds extra force to a shield bash.' },
  { name: 'Shield Spikes', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: '—', traits: 'Attached', desc: 'Metal spikes mounted on a shield\'s face that let a shield bash deal piercing damage instead of bludgeoning.' },
  { name: 'Sword Cane', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: '1', traits: 'Agile, Concealable, Finesse', desc: 'A slender, rapier-like blade hidden inside a wooden or metal cane, letting it pass as an ordinary walking stick in places where weapons aren\'t welcome.' },
  // Uncommon martial melee (ancestry weapons)
  { name: 'Dogslicer', book: 'player-core', category: 'Martial', damage: '1d6 S', bulk: 'L', traits: 'Agile, Backstabber, Finesse, Goblin', desc: 'A crude, curved makeshift blade favored by goblins, often drilled with holes to save weight.' },
  { name: 'Elven Curve Blade', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '2', traits: 'Elf, Finesse, Forceful', desc: 'A traditional elven blade resembling a longer, thinner scimitar.' },
  { name: 'Filcher’s Fork', book: 'player-core', category: 'Martial', damage: '1d4 P', bulk: 'L', traits: 'Agile, Backstabber, Deadly d6, Finesse, Halfling, Thrown 20ft', desc: 'A halfling weapon resembling a two-pronged fork that doubles as a cooking implement, usable in melee or thrown.' },
  { name: 'Gnome Hooked Hammer', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: '1', traits: 'Gnome, Trip, Two-Hand d10, Versatile P', desc: 'A gnomish tool-turned-weapon combining a hammer head with a curved pick on the other end, considered an odd choice by outsiders.' },
  { name: 'Horsechopper', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '2', traits: 'Goblin, Reach, Trip, Versatile P', desc: 'A goblin polearm built to bring down mounted riders, consisting of a long shaft ending in a hooked blade.' },
  { name: 'Kama', book: 'player-core', category: 'Martial', damage: '1d6 S', bulk: 'L', traits: 'Agile, Monk, Trip', desc: 'A short, slightly curved farming blade on a wooden handle, adapted from a grain-reaping tool.' },
  { name: 'Katana', book: 'player-core', category: 'Martial', damage: '1d6 S', bulk: '1', traits: 'Deadly d8, Two-Hand d10, Versatile P', desc: 'A curved, single-edged sword with a notably sharp blade, usable one- or two-handed.' },
  { name: 'Khakkara', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: '1', traits: 'Monk, Shove, Two-Hand d10, Versatile P', desc: 'A staff topped with a metal ring hung with small jingling rings, traditionally used to announce a traveler\'s presence and ward off wild animals, but equally effective as a weapon.' },
  { name: 'Kukri', book: 'player-core', category: 'Martial', damage: '1d6 S', bulk: 'L', traits: 'Agile, Finesse, Trip', desc: 'A foot-long knife with an inward-curving blade and no cross guard at the hilt.' },
  { name: 'Nunchaku', book: 'player-core', category: 'Martial', damage: '1d6 B', bulk: 'L', traits: 'Backswing, Disarm, Finesse, Monk', desc: 'Two wooden or metal bars connected by a short rope or chain, swung with considerable momentum and used to disarm as well as strike.' },
  { name: 'Orc Knuckle Dagger', book: 'player-core', category: 'Martial', damage: '1d6 P', bulk: 'L', traits: 'Agile, Disarm, Orc', desc: 'An orcish blade set into a horizontal basket hilt with blades jutting from each end, sometimes reduced to a single katar-like blade.' },
  { name: 'Sai', book: 'player-core', category: 'Martial', damage: '1d4 P', bulk: 'L', traits: 'Agile, Disarm, Finesse, Monk, Versatile B', desc: 'A piercing dagger formed from a central metal spike flanked by two curved prongs that can trap an opponent\'s weapon.' },
  { name: 'Spiked Chain', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '1', traits: 'Disarm, Finesse, Trip', desc: 'A roughly 4-foot barbed length of chain with spikes on one or both ends, sometimes fitted with metal hoop handgrips.' },
  { name: 'Temple Sword', book: 'player-core', category: 'Martial', damage: '1d8 S', bulk: '1', traits: 'Monk, Trip', desc: 'A heavy blade with a crescent-shaped edge blending sickle and sword, favored by guardians of religious sites and sometimes fitted with holes for bells or holy trinkets.' },
  { name: 'Wakizashi', book: 'player-core', category: 'Martial', damage: '1d4 S', bulk: 'L', traits: 'Agile, Deadly d8, Finesse, Versatile P', desc: 'A short, single-edged blade traditionally carried as a companion piece to a katana.' },
  // Uncommon advanced melee
  { name: 'Orc Necksplitter', book: 'player-core', category: 'Advanced', damage: '1d8 S', bulk: '1', traits: 'Forceful, Orc, Sweep', desc: 'A single-bladed, jagged bearded axe designed to cut cleanly through bone, tendon, and cartilage.' },
  { name: 'Sawtooth Saber', book: 'player-core', category: 'Advanced', damage: '1d6 S', bulk: 'L', traits: 'Agile, Finesse, Twin', desc: 'A curved, saw-toothed blade that serves as the signature weapon of the Red Mantis assassins.' },
  // Uncommon ranged
  { name: 'Halfling Sling Staff', book: 'player-core', category: 'Martial', damage: '1d10 B', bulk: '1', traits: 'Halfling, Propulsive', ranged: true, desc: 'A staff ending in a Y-shaped cradle that holds a sling, its length adding leverage when swung two-handed to fling stones or bullets.' },
  { name: 'Shuriken', book: 'player-core', category: 'Martial', damage: '1d4 P', bulk: '—', traits: 'Agile, Monk, Thrown 20ft', desc: 'A small, flat, sharp-edged throwing star flung with a flick of the wrist.' },
];


// Named specific magic weapons (e.g. the Sparkblade). Each entry stores only the deltas layered
// on top of a WEAPONS base entry — its fixed fundamental runes, any extra traits, and its own
// description/special ability — rather than duplicating the base weapon's stat block.
export const SPECIFIC_WEAPONS = [
  { name: 'Sparkblade', book: 'player-core', baseWeapon: 'Shortsword', level: 3, potencyRune: '+1', strikingRune: 'none', traitsAdd: 'Cold Iron, Evocation, Magical', desc: 'Faint, delicate etchings of lightning trace across the blade of this +1 cold iron shortsword. Once per day, you can spend 1 action to cast \'Electric Arc\' at a foe within 30 feet of you and shoot an arc of lightning from the blade. This lightning can leap from your chosen foe to another creature you choose within 30 feet, dealing 2d4+4 electricity damage to each creature (DC 19 basic Reflex save).', activations: [
    { name: 'Sparkblade Arc', cost: '1', frequency: 'once per day', uses: 1, damage: '2d4+4', save: 'DC 19 basic Reflex', range: '30 feet', desc: "Shoot an arc of lightning from the blade at a foe within 30 feet (as Electric Arc). The lightning can leap to a second creature within 30 feet, dealing 2d4+4 electricity damage to each." },
  ] },
  { name: 'Wand Of Heal', book: 'gm-core', baseWeapon: 'Light Mace', level: 3, traitsAdd: 'Magical, Wand', desc: 'The golden caps on the ends of this white wooden wand are adorned with ruby cabochons. It can be swung as an improvised light mace, but its real use is the healing magic bound within.', activations: [
    { name: 'Heal', cost: '1-3', frequency: 'once per day', uses: 1, damage: '1d8', range: 'touch, 30 ft, or 30-ft emanation', desc: 'Cast a 1st-rank heal spell. 1 action: touch. 2 actions: 30-foot range and the healing increases by 8 (1d8+8). 3 actions: 30-foot emanation affecting all living and undead creatures.' },
  ] },
];


// Resolves a weapon name to a full weapon-like stat block, checking the mundane WEAPONS catalog
// first and falling back to SPECIFIC_WEAPONS (merged onto their base weapon) so both can be
// looked up interchangeably by name.
export function findWeaponDef(name) {
  const base = WEAPONS.find(w => w.name === name);
  if (base) return base;
  const sw = SPECIFIC_WEAPONS.find(s => s.name === name);
  if (!sw) return null;
  const baseW = WEAPONS.find(w => w.name === sw.baseWeapon);
  if (!baseW) return null;
  const traits = [baseW.traits && baseW.traits !== '—' ? baseW.traits : '', sw.traitsAdd].filter(Boolean).join(', ') || '—';
  return { ...baseW, name: sw.name, traits, desc: sw.desc, isSpecific: true, potencyRune: sw.potencyRune || 'none', strikingRune: sw.strikingRune || 'none', activations: sw.activations || [] };
}


export const ARMORS = [
  { name: 'Explorer’s Clothing', book: 'player-core', category: 'Unarmored', acBonus: 0, dexCap: 5, bulk: 'L' },
  { name: 'Padded Armor', book: 'player-core', category: 'Light', acBonus: 1, dexCap: 3, bulk: 'L' },
  { name: 'Leather Armor', book: 'player-core', category: 'Light', acBonus: 1, dexCap: 4, bulk: '1' },
  { name: 'Studded Leather Armor', book: 'player-core', category: 'Light', acBonus: 2, dexCap: 3, bulk: '1' },
  { name: 'Chain Shirt', book: 'player-core', category: 'Light', acBonus: 2, dexCap: 3, bulk: '1' },
  { name: 'Scale Mail', book: 'player-core', category: 'Medium', acBonus: 3, dexCap: 2, bulk: '2' },
  { name: 'Chain Mail', book: 'player-core', category: 'Medium', acBonus: 4, dexCap: 1, bulk: '2' },
  { name: 'Breastplate', book: 'player-core', category: 'Medium', acBonus: 4, dexCap: 1, bulk: '2' },
  { name: 'Hide Armor', book: 'player-core', category: 'Medium', acBonus: 3, dexCap: 2, bulk: '2' },
  { name: 'Splint Mail', book: 'player-core', category: 'Heavy', acBonus: 5, dexCap: 1, bulk: '3' },
  { name: 'Half Plate', book: 'player-core', category: 'Heavy', acBonus: 5, dexCap: 1, bulk: '3' },
  { name: 'Full Plate', book: 'player-core', category: 'Heavy', acBonus: 6, dexCap: 0, bulk: '4' },
];


export const SHIELDS = [
  { name: 'Buckler', book: 'player-core', acBonus: 1, hardness: 3, hp: 6, bt: 3, bulk: 'L', price: '1 gp' },
  { name: 'Wooden Shield', book: 'player-core', acBonus: 2, hardness: 3, hp: 12, bt: 6, bulk: '1', price: '1 gp' },
  { name: 'Steel Shield', book: 'player-core', acBonus: 2, hardness: 5, hp: 20, bt: 10, bulk: '1', price: '2 gp' },
  { name: 'Tower Shield', book: 'player-core', acBonus: 2, hardness: 5, hp: 20, bt: 10, bulk: '4', price: '10 gp' },
];

