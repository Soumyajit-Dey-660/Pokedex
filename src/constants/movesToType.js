const movesToType = [
    {
        "move": "air-slash",
        "type": "flying"
    },
    {
        "move": "vine-whip",
        "type": "grass"
    },
    {
        "move": "aqua-tail",
        "type": "water"
    },
    {
        "move": "skull-bash",
        "type": "normal"
    },
    {
        "move": "petal-blizzard",
        "type": "grass"
    },
    {
        "move": "psychic",
        "type": "psychic"
    },
    {
        "move": "signal-beam",
        "type": "bug"
    },
    {
        "move": "flash-cannon",
        "type": "steel"
    },
    {
        "move": "steel-wing",
        "type": "steel"
    },
    {
        "move": "wing-attack",
        "type": "flying"
    },
    {
        "move": "quick-attack",
        "type": "normal"
    },
    {
        "move": "bug-bite",
        "type": "bug"
    },
    {
        "move": "twister",
        "type": "dragon"
    },
    {
        "move": "body-slam",
        "type": "normal"
    },
    {
        "move": "poison-sting",
        "type": "poison"
    },
    {
        "move": "drill-peck",
        "type": "flying"
    },
    {
        "move": "hurricane",
        "type": "flying"
    },
    {
        "move": "brave-bird",
        "type": "flying"
    },
    {
        "move": "dig",
        "type": "ground"
    },
    {
        "move": "poison-jab",
        "type": "poison"
    },
    {
        "move": "feather-dance",
        "type": "flying"
    },
    {
        "move": "hyper-fang",
        "type": "normal"
    },
    {
        "move": "sky-attack",
        "type": "flying"
    },
    {
        "move": "air-cutter",
        "type": "flying"
    },
    {
        "move": "hyper-beam",
        "type": "normal"
    },
    {
        "move": "dark-pulse",
        "type": "dark"
    },
    {
        "move": "poison-fang",
        "type": "poison"
    },
    {
        "move": "thunder-shock",
        "type": "electric"
    },
    {
        "move": "drill-run",
        "type": "ground"
    },
    {
        "move": "discharge",
        "type": "electric"
    },
    {
        "move": "peck",
        "type": "flying"
    },
    {
        "move": "wild-charge",
        "type": "electric"
    },
    {
        "move": "dragon-tail",
        "type": "dragon"
    },
    {
        "move": "thunder-punch",
        "type": "electric"
    },
    {
        "move": "gunk-shot",
        "type": "poison"
    },
    {
        "move": "wrap",
        "type": "normal"
    },
    {
        "move": "sand-tomb",
        "type": "ground"
    },
    {
        "move": "thunderbolt",
        "type": "electric"
    },
    {
        "move": "volt-switch",
        "type": "electric"
    },
    {
        "move": "bulldoze",
        "type": "ground"
    },
    {
        "move": "stone-edge",
        "type": "rock"
    },
    {
        "move": "acid-spray",
        "type": "poison"
    },
    {
        "move": "charm",
        "type": "fairy"
    },
    {
        "move": "brick-break",
        "type": "fighting"
    },
    {
        "move": "earthquake",
        "type": "ground"
    },
    {
        "move": "acid",
        "type": "poison"
    },
    {
        "move": "mud-shot",
        "type": "ground"
    },
    {
        "move": "metal-claw",
        "type": "steel"
    },
    {
        "move": "rock-slide",
        "type": "rock"
    },
    {
        "move": "earth-power",
        "type": "ground"
    },
    {
        "move": "rock-tomb",
        "type": "rock"
    },
    {
        "move": "sludge-wave",
        "type": "poison"
    },
    {
        "move": "disarming-voice",
        "type": "fairy"
    },
    {
        "move": "horn-attack",
        "type": "normal"
    },
    {
        "move": "megahorn",
        "type": "bug"
    },
    {
        "move": "meteor-mash",
        "type": "steel"
    },
    {
        "move": "moonblast",
        "type": "fairy"
    },
    {
        "move": "iron-tail",
        "type": "steel"
    },
    {
        "move": "pound",
        "type": "normal"
    },
    {
        "move": "dazzling-gleam",
        "type": "fairy"
    },
    {
        "move": "heat-wave",
        "type": "fire"
    },
    {
        "move": "charge-beam",
        "type": "electric"
    },
    {
        "move": "psyshock",
        "type": "psychic"
    },
    {
        "move": "sludge-bomb",
        "type": "poison"
    },
    {
        "move": "seed-bomb",
        "type": "grass"
    },
    {
        "move": "tackle",
        "type": "normal"
    },
    {
        "move": "ember",
        "type": "fire"
    },
    {
        "move": "power-whip",
        "type": "grass"
    },
    {
        "move": "flame-charge",
        "type": "fire"
    },
    {
        "move": "overheat",
        "type": "fire"
    },
    {
        "move": "infestation",
        "type": "bug"
    },
    {
        "move": "ice-beam",
        "type": "ice"
    },
    {
        "move": "flame-burst",
        "type": "fire"
    },
    {
        "move": "dragon-claw",
        "type": "dragon"
    },
    {
        "move": "struggle",
        "type": "normal"
    },
    {
        "move": "water-pulse",
        "type": "water"
    },
    {
        "move": "aqua-jet",
        "type": "water"
    },
    {
        "move": "fire-fang",
        "type": "fire"
    },
    {
        "move": "scratch",
        "type": "normal"
    },
    {
        "move": "bug-buzz",
        "type": "bug"
    },
    {
        "move": "bubble",
        "type": "water"
    },
    {
        "move": "fell-stinger",
        "type": "bug"
    },
    {
        "move": "fire-blast",
        "type": "fire"
    },
    {
        "move": "solar-beam",
        "type": "grass"
    },
    {
        "move": "x-scissor",
        "type": "bug"
    },
    {
        "move": "hydro-pump",
        "type": "water"
    },
    {
        "move": "aerial-ace",
        "type": "flying"
    },
    {
        "move": "water-gun",
        "type": "water"
    },
    {
        "move": "fire-spin",
        "type": "fire"
    },
    {
        "move": "flamethrower",
        "type": "fire"
    },
    {
        "move": "struggle-bug",
        "type": "bug"
    },
    {
        "move": "razor-leaf",
        "type": "grass"
    },
    {
        "move": "bullet-seed",
        "type": "grass"
    },
    {
        "move": "leaf-tornado",
        "type": "grass"
    },
    {
        "move": "karate-chop",
        "type": "fighting"
    },
    {
        "move": "foul-play",
        "type": "dark"
    },
    {
        "move": "blizzard",
        "type": "ice"
    },
    {
        "move": "night-slash",
        "type": "dark"
    },
    {
        "move": "flame-wheel",
        "type": "fire"
    },
    {
        "move": "waterfall",
        "type": "water"
    },
    {
        "move": "grass-knot",
        "type": "grass"
    },
    {
        "move": "splash",
        "type": "normal"
    },
    {
        "move": "leaf-storm",
        "type": "grass"
    },
    {
        "move": "transform",
        "type": "normal"
    },
    {
        "move": "ominous-wind",
        "type": "ghost"
    },
    {
        "move": "dragon-breath",
        "type": "dragon"
    },
    {
        "move": "mirror-shot",
        "type": "steel"
    },
    {
        "move": "energy-ball",
        "type": "grass"
    },
    {
        "move": "ice-fang",
        "type": "ice"
    },
    {
        "move": "thunder",
        "type": "electric"
    },
    {
        "move": "cut",
        "type": "normal"
    },
    {
        "move": "lunge",
        "type": "bug"
    },
    {
        "move": "powder-snow",
        "type": "ice"
    },
    {
        "move": "draco-meteor",
        "type": "dragon"
    },
    {
        "move": "smack-down",
        "type": "rock"
    },
    {
        "move": "shadow-sneak",
        "type": "ghost"
    },
    {
        "move": "yawn",
        "type": "normal"
    },
    {
        "move": "psycho-boost",
        "type": "psychic"
    },
    {
        "move": "iron-head",
        "type": "steel"
    },
    {
        "move": "aura-sphere",
        "type": "fighting"
    },
    {
        "move": "tri-attack",
        "type": "normal"
    },
    {
        "move": "gust",
        "type": "flying"
    },
    {
        "move": "take-down",
        "type": "normal"
    },
    {
        "move": "dragon-pulse",
        "type": "dragon"
    },
    {
        "move": "giga-impact",
        "type": "normal"
    },
    {
        "move": "muddy-water",
        "type": "water"
    },
    {
        "move": "flying-press",
        "type": "fighting"
    },
    {
        "move": "doom-desire",
        "type": "steel"
    },
    {
        "move": "octazooka",
        "type": "water"
    },
    {
        "move": "ice-shard",
        "type": "ice"
    },
    {
        "move": "mirror-coat",
        "type": "psychic"
    },
    {
        "move": "draining-kiss",
        "type": "fairy"
    },
    {
        "move": "v-create",
        "type": "fire"
    },
    {
        "move": "lock-on",
        "type": "normal"
    },
    {
        "move": "parabolic-charge",
        "type": "electric"
    },
    {
        "move": "blaze-kick",
        "type": "fire"
    },
    {
        "move": "present",
        "type": "normal"
    },
    {
        "move": "feint-attack",
        "type": "dark"
    },
    {
        "move": "mud-bomb",
        "type": "ground"
    },
    {
        "move": "gyro-ball",
        "type": "steel"
    },
    {
        "move": "zen-headbutt",
        "type": "psychic"
    },
    {
        "move": "cross-poison",
        "type": "poison"
    },
    {
        "move": "fury-cutter",
        "type": "bug"
    },
    {
        "move": "shadow-ball",
        "type": "ghost"
    },
    {
        "move": "power-gem",
        "type": "rock"
    },
    {
        "move": "play-rough",
        "type": "fairy"
    },
    {
        "move": "psybeam",
        "type": "psychic"
    },
    {
        "move": "rock-smash",
        "type": "fighting"
    },
    {
        "move": "rock-blast",
        "type": "rock"
    },
    {
        "move": "swift",
        "type": "normal"
    },
    {
        "move": "mud-slap",
        "type": "ground"
    },
    {
        "move": "ice-punch",
        "type": "ice"
    },
    {
        "move": "silver-wind",
        "type": "bug"
    },
    {
        "move": "focus-blast",
        "type": "fighting"
    },
    {
        "move": "avalanche",
        "type": "ice"
    },
    {
        "move": "psycho-cut",
        "type": "psychic"
    },
    {
        "move": "magnet-bomb",
        "type": "steel"
    },
    {
        "move": "low-kick",
        "type": "fighting"
    },
    {
        "move": "thunder-fang",
        "type": "electric"
    },
    {
        "move": "close-combat",
        "type": "fighting"
    },
    {
        "move": "crabhammer",
        "type": "water"
    },
    {
        "move": "leaf-blade",
        "type": "grass"
    },
    {
        "move": "bone-club",
        "type": "ground"
    },
    {
        "move": "zap-cannon",
        "type": "electric"
    },
    {
        "move": "hex",
        "type": "ghost"
    },
    {
        "move": "sludge",
        "type": "poison"
    },
    {
        "move": "cross-chop",
        "type": "fighting"
    },
    {
        "move": "stomp",
        "type": "normal"
    },
    {
        "move": "snarl",
        "type": "dark"
    },
    {
        "move": "rock-throw",
        "type": "rock"
    },
    {
        "move": "outrage",
        "type": "dragon"
    },
    {
        "move": "bubble-beam",
        "type": "water"
    },
    {
        "move": "incinerate",
        "type": "fire"
    },
    {
        "move": "surf",
        "type": "water"
    },
    {
        "move": "power-up-punch",
        "type": "fighting"
    },
    {
        "move": "heavy-slam",
        "type": "steel"
    },
    {
        "move": "bullet-punch",
        "type": "steel"
    },
    {
        "move": "dynamic-punch",
        "type": "fighting"
    },
    {
        "move": "crunch",
        "type": "dark"
    },
    {
        "move": "night-shade",
        "type": "ghost"
    },
    {
        "move": "synchronoise",
        "type": "psychic"
    },
    {
        "move": "sucker-punch",
        "type": "dark"
    },
    {
        "move": "shadow-punch",
        "type": "ghost"
    },
    {
        "move": "lick",
        "type": "ghost"
    },
    {
        "move": "frost-breath",
        "type": "ice"
    },
    {
        "move": "payback",
        "type": "dark"
    },
    {
        "move": "ancient-power",
        "type": "rock"
    },
    {
        "move": "astonish",
        "type": "ghost"
    },
    {
        "move": "extrasensory",
        "type": "psychic"
    },
    {
        "move": "counter",
        "type": "fighting"
    },
    {
        "move": "shadow-claw",
        "type": "ghost"
    },
    {
        "move": "icy-wind",
        "type": "ice"
    },
    {
        "move": "low-sweep",
        "type": "fighting"
    },
    {
        "move": "submission",
        "type": "fighting"
    },
    {
        "move": "aurora-beam",
        "type": "ice"
    },
    {
        "move": "hidden-power",
        "type": "normal"
    },
    {
        "move": "confusion",
        "type": "psychic"
    },
    {
        "move": "spark",
        "type": "electric"
    },
    {
        "move": "bite",
        "type": "dark"
    },
    {
        "move": "fire-punch",
        "type": "fire"
    },
    {
        "move": "weather-ball-fire",
        "type": "fire"
    },
    {
        "move": "futuresight",
        "type": "psychic"
    },
    {
        "move": "super-power",
        "type": "fighting"
    },
    {
        "move": "weather-ball-water",
        "type": "water"
    },
    {
        "move": "weather-ball-ice",
        "type": "ice"
    },
    {
        "move": "vice-grip",
        "type": "normal"
    }
]

export default movesToType;