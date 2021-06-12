const typeStrengthWeakness = [{
    'bug': [{ superEffective: ['grass', 'dark', 'psychic'] }, { weakness: ['fire', 'flying', 'rock'] }],
    'dark': [{ superEffective: ['ghost', 'psychic'] }, { weakness: ['bug', 'fairy', 'fighting'] }],
    'dragon': [{ superEffective: ['dragon'] }, { weakness: ['dragon', 'fairy', 'ice'] }],
    'electric': [{ superEffective: ['flying', 'water'] }, { weakness: ['ground'] }],
    'fairy': [{ superEffective: ['fighting', 'dark', 'dragon'] }, { weakness: ['poison', 'steel'] }],
    'fighting': [{ superEffective: ['dark', 'ice', 'normal', 'rock', 'steel'] }, { weakness: ['fairy', 'flying', 'psychic'] }],
    'fire': [{ superEffective: ['bug', 'grass', 'ice', 'steel'] }, { weakness: ['ground', 'rock', 'water'] }],
    'flying': [{ superEffective: ['bug', 'fighting', 'grass'] }, { weakness: ['electric', 'ice', 'rock'] }],
    'ghost': [{ superEffective: ['ghost', 'psychic'] }, { weakness: ['dark', 'ghost'] }],
    'grass': [{ superEffective: ['ground', 'rock', 'water'] }, { weakness: ['bug', 'fire', 'flying', 'ice', 'poison'] }],
    'ground': [{ superEffective: ['electric', 'fire', 'poison', 'rock', 'steel'] }, { weakness: ['grass', 'water', 'ice'] }],
    'ice': [{ superEffective: ['dragon', 'flying', 'grass', 'ground'] }, { weakness: ['fighting', 'fire', 'rock', 'steel'] }],
    'normal': [{ superEffective: [] }, { weakness: ['fighting'] }],
    'poison': [{ superEffective: ['grass', 'fairy'] }, { weakness: ['ground', 'psychic'] }],
    'psychic': [{ superEffective: ['fighting', 'poison'] }, { weakness: ['bug', 'dark', 'ghost'] }],
    'rock': [{ superEffective: ['bug', 'fire', 'flying', 'ice'] }, { weakness: ['fighting', 'grass', 'ground', 'steel', 'water'] }],
    'steel': [{ superEffective: ['fairy', 'ice', 'rock'] }, { weakness: ['fighting', 'fire', 'ground'] }],
    'water': [{ superEffective: ['fire', 'ground', 'rock'] }, { weakness: ['electric', 'grass'] }],
}];

export default typeStrengthWeakness;