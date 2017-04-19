(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

},{}],15:[function(require,module,exports){
'use strict';
function stripNullChars (str) {
  return str.replace(/\0.*/, '');
}

const pokemonName = [
	null,
	"Bulbasaur",
	"Ivysaur",
	"Venusaur",
	"Charmander",
	"Charmeleon",
	"Charizard",
	"Squirtle",
	"Wartortle",
	"Blastoise",
	"Caterpie",
	"Metapod",
	"Butterfree",
	"Weedle",
	"Kakuna",
	"Beedrill",
	"Pidgey",
	"Pidgeotto",
	"Pidgeot",
	"Rattata",
	"Raticate",
	"Spearow",
	"Fearow",
	"Ekans",
	"Arbok",
	"Pikachu",
	"Raichu",
	"Sandshrew",
	"Sandslash",
	"Nidoran♀",
	"Nidorina",
	"Nidoqueen",
	"Nidoran♂",
	"Nidorino",
	"Nidoking",
	"Clefairy",
	"Clefable",
	"Vulpix",
	"Ninetales",
	"Jigglypuff",
	"Wigglytuff",
	"Zubat",
	"Golbat",
	"Oddish",
	"Gloom",
	"Vileplume",
	"Paras",
	"Parasect",
	"Venonat",
	"Venomoth",
	"Diglett",
	"Dugtrio",
	"Meowth",
	"Persian",
	"Psyduck",
	"Golduck",
	"Mankey",
	"Primeape",
	"Growlithe",
	"Arcanine",
	"Poliwag",
	"Poliwhirl",
	"Poliwrath",
	"Abra",
	"Kadabra",
	"Alakazam",
	"Machop",
	"Machoke",
	"Machamp",
	"Bellsprout",
	"Weepinbell",
	"Victreebel",
	"Tentacool",
	"Tentacruel",
	"Geodude",
	"Graveler",
	"Golem",
	"Ponyta",
	"Rapidash",
	"Slowpoke",
	"Slowbro",
	"Magnemite",
	"Magneton",
	"Farfetch'd",
	"Doduo",
	"Dodrio",
	"Seel",
	"Dewgong",
	"Grimer",
	"Muk",
	"Shellder",
	"Cloyster",
	"Gastly",
	"Haunter",
	"Gengar",
	"Onix",
	"Drowzee",
	"Hypno",
	"Krabby",
	"Kingler",
	"Voltorb",
	"Electrode",
	"Exeggcute",
	"Exeggutor",
	"Cubone",
	"Marowak",
	"Hitmonlee",
	"Hitmonchan",
	"Lickitung",
	"Koffing",
	"Weezing",
	"Rhyhorn",
	"Rhydon",
	"Chansey",
	"Tangela",
	"Kangaskhan",
	"Horsea",
	"Seadra",
	"Goldeen",
	"Seaking",
	"Staryu",
	"Starmie",
	"Mr. Mime",
	"Scyther",
	"Jynx",
	"Electabuzz",
	"Magmar",
	"Pinsir",
	"Tauros",
	"Magikarp",
	"Gyarados",
	"Lapras",
	"Ditto",
	"Eevee",
	"Vaporeon",
	"Jolteon",
	"Flareon",
	"Porygon",
	"Omanyte",
	"Omastar",
	"Kabuto",
	"Kabutops",
	"Aerodactyl",
	"Snorlax",
	"Articuno",
	"Zapdos",
	"Moltres",
	"Dratini",
	"Dragonair",
	"Dragonite",
	"Mewtwo",
	"Mew",
	"Chikorita",
	"Bayleef",
	"Meganium",
	"Cyndaquil",
	"Quilava",
	"Typhlosion",
	"Totodile",
	"Croconaw",
	"Feraligatr",
	"Sentret",
	"Furret",
	"Hoothoot",
	"Noctowl",
	"Ledyba",
	"Ledian",
	"Spinarak",
	"Ariados",
	"Crobat",
	"Chinchou",
	"Lanturn",
	"Pichu",
	"Cleffa",
	"Igglybuff",
	"Togepi",
	"Togetic",
	"Natu",
	"Xatu",
	"Mareep",
	"Flaaffy",
	"Ampharos",
	"Bellossom",
	"Marill",
	"Azumarill",
	"Sudowoodo",
	"Politoed",
	"Hoppip",
	"Skiploom",
	"Jumpluff",
	"Aipom",
	"Sunkern",
	"Sunflora",
	"Yanma",
	"Wooper",
	"Quagsire",
	"Espeon",
	"Umbreon",
	"Murkrow",
	"Slowking",
	"Misdreavus",
	"Unown",
	"Wobbuffet",
	"Girafarig",
	"Pineco",
	"Forretress",
	"Dunsparce",
	"Gligar",
	"Steelix",
	"Snubbull",
	"Granbull",
	"Qwilfish",
	"Scizor",
	"Shuckle",
	"Heracross",
	"Sneasel",
	"Teddiursa",
	"Ursaring",
	"Slugma",
	"Magcargo",
	"Swinub",
	"Piloswine",
	"Corsola",
	"Remoraid",
	"Octillery",
	"Delibird",
	"Mantine",
	"Skarmory",
	"Houndour",
	"Houndoom",
	"Kingdra",
	"Phanpy",
	"Donphan",
	"Porygon2",
	"Stantler",
	"Smeargle",
	"Tyrogue",
	"Hitmontop",
	"Smoochum",
	"Elekid",
	"Magby",
	"Miltank",
	"Blissey",
	"Raikou",
	"Entei",
	"Suicune",
	"Larvitar",
	"Pupitar",
	"Tyranitar",
	"Lugia",
	"Ho-Oh",
	"Celebi",
	"Treecko",
	"Grovyle",
	"Sceptile",
	"Torchic",
	"Combusken",
	"Blaziken",
	"Mudkip",
	"Marshtomp",
	"Swampert",
	"Poochyena",
	"Mightyena",
	"Zigzagoon",
	"Linoone",
	"Wurmple",
	"Silcoon",
	"Beautifly",
	"Cascoon",
	"Dustox",
	"Lotad",
	"Lombre",
	"Ludicolo",
	"Seedot",
	"Nuzleaf",
	"Shiftry",
	"Taillow",
	"Swellow",
	"Wingull",
	"Pelipper",
	"Ralts",
	"Kirlia",
	"Gardevoir",
	"Surskit",
	"Masquerain",
	"Shroomish",
	"Breloom",
	"Slakoth",
	"Vigoroth",
	"Slaking",
	"Nincada",
	"Ninjask",
	"Shedinja",
	"Whismur",
	"Loudred",
	"Exploud",
	"Makuhita",
	"Hariyama",
	"Azurill",
	"Nosepass",
	"Skitty",
	"Delcatty",
	"Sableye",
	"Mawile",
	"Aron",
	"Lairon",
	"Aggron",
	"Meditite",
	"Medicham",
	"Electrike",
	"Manectric",
	"Plusle",
	"Minun",
	"Volbeat",
	"Illumise",
	"Roselia",
	"Gulpin",
	"Swalot",
	"Carvanha",
	"Sharpedo",
	"Wailmer",
	"Wailord",
	"Numel",
	"Camerupt",
	"Torkoal",
	"Spoink",
	"Grumpig",
	"Spinda",
	"Trapinch",
	"Vibrava",
	"Flygon",
	"Cacnea",
	"Cacturne",
	"Swablu",
	"Altaria",
	"Zangoose",
	"Seviper",
	"Lunatone",
	"Solrock",
	"Barboach",
	"Whiscash",
	"Corphish",
	"Crawdaunt",
	"Baltoy",
	"Claydol",
	"Lileep",
	"Cradily",
	"Anorith",
	"Armaldo",
	"Feebas",
	"Milotic",
	"Castform",
	"Kecleon",
	"Shuppet",
	"Banette",
	"Duskull",
	"Dusclops",
	"Tropius",
	"Chimecho",
	"Absol",
	"Wynaut",
	"Snorunt",
	"Glalie",
	"Spheal",
	"Sealeo",
	"Walrein",
	"Clamperl",
	"Huntail",
	"Gorebyss",
	"Relicanth",
	"Luvdisc",
	"Bagon",
	"Shelgon",
	"Salamence",
	"Beldum",
	"Metang",
	"Metagross",
	"Regirock",
	"Regice",
	"Registeel",
	"Latias",
	"Latios",
	"Kyogre",
	"Groudon",
	"Rayquaza",
	"Jirachi",
	"Deoxys",
	"Turtwig",
	"Grotle",
	"Torterra",
	"Chimchar",
	"Monferno",
	"Infernape",
	"Piplup",
	"Prinplup",
	"Empoleon",
	"Starly",
	"Staravia",
	"Staraptor",
	"Bidoof",
	"Bibarel",
	"Kricketot",
	"Kricketune",
	"Shinx",
	"Luxio",
	"Luxray",
	"Budew",
	"Roserade",
	"Cranidos",
	"Rampardos",
	"Shieldon",
	"Bastiodon",
	"Burmy",
	"Wormadam",
	"Mothim",
	"Combee",
	"Vespiquen",
	"Pachirisu",
	"Buizel",
	"Floatzel",
	"Cherubi",
	"Cherrim",
	"Shellos",
	"Gastrodon",
	"Ambipom",
	"Drifloon",
	"Drifblim",
	"Buneary",
	"Lopunny",
	"Mismagius",
	"Honchkrow",
	"Glameow",
	"Purugly",
	"Chingling",
	"Stunky",
	"Skuntank",
	"Bronzor",
	"Bronzong",
	"Bonsly",
	"Mime Jr.",
	"Happiny",
	"Chatot",
	"Spiritomb",
	"Gible",
	"Gabite",
	"Garchomp",
	"Munchlax",
	"Riolu",
	"Lucario",
	"Hippopotas",
	"Hippowdon",
	"Skorupi",
	"Drapion",
	"Croagunk",
	"Toxicroak",
	"Carnivine",
	"Finneon",
	"Lumineon",
	"Mantyke",
	"Snover",
	"Abomasnow",
	"Weavile",
	"Magnezone",
	"Lickilicky",
	"Rhyperior",
	"Tangrowth",
	"Electivire",
	"Magmortar",
	"Togekiss",
	"Yanmega",
	"Leafeon",
	"Glaceon",
	"Gliscor",
	"Mamoswine",
	"Porygon-Z",
	"Gallade",
	"Probopass",
	"Dusknoir",
	"Froslass",
	"Rotom",
	"Uxie",
	"Mesprit",
	"Azelf",
	"Dialga",
	"Palkia",
	"Heatran",
	"Regigigas",
	"Giratina",
	"Cresselia",
	"Phione",
	"Manaphy",
	"Darkrai",
	"Shaymin",
	"Arceus",
	"Victini",
	"Snivy",
	"Servine",
	"Serperior",
	"Tepig",
	"Pignite",
	"Emboar",
	"Oshawott",
	"Dewott",
	"Samurott",
	"Patrat",
	"Watchog",
	"Lillipup",
	"Herdier",
	"Stoutland",
	"Purrloin",
	"Liepard",
	"Pansage",
	"Simisage",
	"Pansear",
	"Simisear",
	"Panpour",
	"Simipour",
	"Munna",
	"Musharna",
	"Pidove",
	"Tranquill",
	"Unfezant",
	"Blitzle",
	"Zebstrika",
	"Roggenrola",
	"Boldore",
	"Gigalith",
	"Woobat",
	"Swoobat",
	"Drilbur",
	"Excadrill",
	"Audino",
	"Timburr",
	"Gurdurr",
	"Conkeldurr",
	"Tympole",
	"Palpitoad",
	"Seismitoad",
	"Throh",
	"Sawk",
	"Sewaddle",
	"Swadloon",
	"Leavanny",
	"Venipede",
	"Whirlipede",
	"Scolipede",
	"Cottonee",
	"Whimsicott",
	"Petilil",
	"Lilligant",
	"Basculin",
	"Sandile",
	"Krokorok",
	"Krookodile",
	"Darumaka",
	"Darmanitan",
	"Maractus",
	"Dwebble",
	"Crustle",
	"Scraggy",
	"Scrafty",
	"Sigilyph",
	"Yamask",
	"Cofagrigus",
	"Tirtouga",
	"Carracosta",
	"Archen",
	"Archeops",
	"Trubbish",
	"Garbodor",
	"Zorua",
	"Zoroark",
	"Minccino",
	"Cinccino",
	"Gothita",
	"Gothorita",
	"Gothitelle",
	"Solosis",
	"Duosion",
	"Reuniclus",
	"Ducklett",
	"Swanna",
	"Vanillite",
	"Vanillish",
	"Vanilluxe",
	"Deerling",
	"Sawsbuck",
	"Emolga",
	"Karrablast",
	"Escavalier",
	"Foongus",
	"Amoonguss",
	"Frillish",
	"Jellicent",
	"Alomomola",
	"Joltik",
	"Galvantula",
	"Ferroseed",
	"Ferrothorn",
	"Klink",
	"Klang",
	"Klinklang",
	"Tynamo",
	"Eelektrik",
	"Eelektross",
	"Elgyem",
	"Beheeyem",
	"Litwick",
	"Lampent",
	"Chandelure",
	"Axew",
	"Fraxure",
	"Haxorus",
	"Cubchoo",
	"Beartic",
	"Cryogonal",
	"Shelmet",
	"Accelgor",
	"Stunfisk",
	"Mienfoo",
	"Mienshao",
	"Druddigon",
	"Golett",
	"Golurk",
	"Pawniard",
	"Bisharp",
	"Bouffalant",
	"Rufflet",
	"Braviary",
	"Vullaby",
	"Mandibuzz",
	"Heatmor",
	"Durant",
	"Deino",
	"Zweilous",
	"Hydreigon",
	"Larvesta",
	"Volcarona",
	"Cobalion",
	"Terrakion",
	"Virizion",
	"Tornadus",
	"Thundurus",
	"Reshiram",
	"Zekrom",
	"Landorus",
	"Kyurem",
	"Keldeo",
	"Meloetta",
	"Genesect",
	"Chespin",
	"Quilladin",
	"Chesnaught",
	"Fennekin",
	"Braixen",
	"Delphox",
	"Froakie",
	"Frogadier",
	"Greninja",
	"Bunnelby",
	"Diggersby",
	"Fletchling",
	"Fletchinder",
	"Talonflame",
	"Scatterbug",
	"Spewpa",
	"Vivillon",
	"Litleo",
	"Pyroar",
	"Flabebe",
	"Floette",
	"Florges",
	"Skiddo",
	"Gogoat",
	"Pancham",
	"Pangoro",
	"Furfrou",
	"Espurr",
	"Meowstic",
	"Honedge",
	"Doublade",
	"Aegislash",
	"Spritzee",
	"Aromatisse",
	"Swirlix",
	"Slurpuff",
	"Inkay",
	"Malamar",
	"Binacle",
	"Barbaracle",
	"Skrelp",
	"Dragalge",
	"Clauncher",
	"Clawitzer",
	"Helioptile",
	"Heliolisk",
	"Tyrunt",
	"Tyrantrum",
	"Amaura",
	"Aurorus",
	"Sylveon",
	"Hawlucha",
	"Dedenne",
	"Carbink",
	"Goomy",
	"Sliggoo",
	"Goodra",
	"Klefki",
	"Phantump",
	"Trevenant",
	"Pumpkaboo",
	"Gourgeist",
	"Bergmite",
	"Avalugg",
	"Noibat",
	"Noivern",
	"Xerneas",
	"Yveltal",
	"Zygarde",
	"Diancie",
	"Hoopa",
	"Volcanion",
	"Rowlet",
	"Dartrix",
	"Decidueye",
	"Litten",
	"Torracat",
	"Incineroar",
	"Popplio",
	"Brionne",
	"Primarina",
	"Pikipek",
	"Trumbeak",
	"Toucannon",
	"Yungoos",
	"Gumshoos",
	"Grubbin",
	"Charjabug",
	"Vikavolt",
	"Crabrawler",
	"Crabominable",
	"Oricorio",
	"Cutiefly",
	"Ribombee",
	"Rockruff",
	"Lycanroc",
	"Wishiwashi",
	"Mareanie",
	"Toxapex",
	"Mudbray",
	"Mudsdale",
	"Dewpider",
	"Araquanid",
	"Fomantis",
	"Lurantis",
	"Morelull",
	"Shiinotic",
	"Salandit",
	"Salazzle",
	"Stufful",
	"Bewear",
	"Bounsweet",
	"Steenee",
	"Tsareena",
	"Comfey",
	"Oranguru",
	"Passimian",
	"Wimpod",
	"Golisopod",
	"Sandygast",
	"Palossand",
	"Pyukumuku",
	"Type: Null",
	"Silvally",
	"Minior",
	"Komala",
	"Turtonator",
	"Togedemaru",
	"Mimikyu",
	"Bruxish",
	"Drampa",
	"Dhelmise",
	"Jangmo-o",
	"Hakamo-o",
	"Kommo-o",
	"Tapu Koko",
	"Tapu Lele",
	"Tapu Bulu",
	"Tapu Fini",
	"Cosmog",
	"Cosmoem",
	"Solgaleo",
	"Lunala",
	"Nihilego",
	"Buzzwole",
	"Pheromosa",
	"Xurkitree",
	"Celesteela",
	"Kartana",
	"Guzzlord",
	"Necrozma",
	"Magearna",
	"Marshadow"
];

'use strict';
const formes = new Array(802);
formes[0] = null;
for (let i = 1; i < formes.length; i++) {
  formes[i] = null;
}

formes[20] = [null, 'Alola', 'Totem'];
formes[25] = [null, 'Original Cap', 'Hoenn Cap', 'Sinnoh Cap', 'Unova Cap', 'Kalos Cap', 'Alola Cap'];

formes[201] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '!',
  '?'
];

formes[351] = [null, 'Sunny', 'Rainy', 'Snowy'];

[382, 383].forEach(i => {
  formes[i] = [null, 'Primal'];
});

formes[386] = [null, 'Attack', 'Defense', 'Speed'];

[412, 413].forEach(i => {
  formes[i] = ['Plant', 'Sandy', 'Trash'];
});

formes[421] = ['Overcast', 'Sunshine'];

[422, 423].forEach(i => {
  formes[i] = ['West', 'East'];
});

formes[479] = [null, 'Heat', 'Wash', 'Frost', 'Fan', 'Mow'];
formes[487] = ['Altered', 'Origin'];
formes[492] = ['Land', 'Sky'];

formes[493] = [
  null,
  'Fighting',
  'Flying',
  'Poison',
  'Ground',
  'Rock',
  'Bug',
  'Ghost',
  'Steel',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Psychic',
  'Ice',
  'Dragon',
  'Dark',
  'Fairy'
];

formes[550] = ['Red', 'Blue'];
formes[555] = [null, 'Zen'];

[585, 586].forEach(i => {
  formes[i] = ['Spring', 'Summer', 'Autumn', 'Winter'];
});

[641, 642, 645].forEach(i => {
  formes[i] = ['Incarnate', 'Therian'];
});

formes[646] = [null, 'White', 'Black'];
formes[647] = [null, 'Resolute'];
formes[648] = ['Aria', 'Pirouette'];
formes[649] = [null, 'Douse', 'Shock', 'Burn', 'Chill'];
formes[658] = [null, null, 'Ash'];

[664, 665, 666].forEach(i => {
  formes[i] = [
    'Icy Snow',
    'Polar',
    'Tundra',
    'Continental',
    'Garden',
    'Elegant',
    'Meadow',
    'Modern',
    'Marine',
    'Archipelago',
    'High Plains',
    'Sandstorm',
    'River',
    'Monsoon',
    'Savanna',
    'Sun',
    'Ocean',
    'Jungle',
    'Fancy',
    'Poké Ball'
  ];
});

[669, 671].forEach(i => {
  formes[i] = ['Red', 'Yellow', 'Orange', 'Blue', 'White'];
});

formes[670] = ['Red', 'Yellow', 'Orange', 'Blue', 'White', 'Eternal'];
formes[676] = [null, 'Heart', 'Star', 'Diamond', 'Debutante', 'Matron', 'Dandy', 'La Reine', 'Kabuki', 'Pharaoh'];
formes[678] = [null, null];
formes[681] = ['Shield', 'Blade'];

[710, 711].forEach(i => {
  formes[i] = ['Average', 'Small', 'Large', 'Super'];
});

formes[716] = [null, 'Active'];
formes[718] = ['50%', '10%', '10%', '50%', 'Complete'];
formes[720] = ['Confined', 'Unbound'];
formes[735] = [null, 'Totem'];
formes[738] = [null, 'Totem'];
formes[741] = ['Baile', 'Pom-Pom', 'Pa’u', 'Sensu'];
formes[745] = ['Midday', 'Midnight'];
formes[746] = ['Solo', 'School'];
formes[754] = [null, 'Totem'];
formes[758] = [null, 'Totem'];

formes[773] = [
  null,
  'Fighting',
  'Flying',
  'Poison',
  'Ground',
  'Rock',
  'Bug',
  'Ghost',
  'Steel',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Psychic',
  'Ice',
  'Dragon',
  'Dark',
  'Fairy'
];

formes[774] = [
  'Meteor-Red',
  'Meteor-Orange',
  'Meteor-Yellow',
  'Meteor-Green',
  'Meteor-Blue',
  'Meteor-Indigo',
  'Meteor-Violet',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet'
];

formes[778] = [null, 'Busted', 'Totem', 'Totem-Busted'];
formes[784] = [null, 'Totem'];
formes[801] = [null, 'Original Color'];

[
  3,
  9,
  15,
  18,
  65,
  80,
  94,
  115,
  127,
  130,
  142,
  181,
  208,
  212,
  214,
  229,
  248,
  254,
  257,
  260,
  282,
  302,
  303,
  306,
  308,
  310,
  319,
  323,
  334,
  354,
  359,
  362,
  373,
  376,
  380,
  381,
  384,
  428,
  445,
  448,
  460,
  475,
  531,
  719
].forEach(i => {
  formes[i] = [null, 'Mega'];
});

[6, 150].forEach(i => {
  formes[i] = [null, 'Mega X', 'Mega Y'];
});

[
  19,
  26,
  27,
  28,
  37,
  38,
  50,
  51,
  52,
  53,
  74,
  75,
  76,
  88,
  89,
  103,
  105
].forEach(i => {
  formes[i] = [null, 'Alola'];
});

const itemName = [
	"None",
	"Master Ball",
	"Ultra Ball",
	"Great Ball",
	"Poke Ball",
	"Safari Ball",
	"Net Ball",
	"Dive Ball",
	"Nest Ball",
	"Repeat Ball",
	"Timer Ball",
	"Luxury Ball",
	"Premier Ball",
	"Dusk Ball",
	"Heal Ball",
	"Quick Ball",
	"Cherish Ball",
	"Potion",
	"Antidote",
	"Burn Heal",
	"Ice Heal",
	"Awakening",
	"Paralyze Heal",
	"Full Restore",
	"Max Potion",
	"Hyper Potion",
	"Super Potion",
	"Full Heal",
	"Revive",
	"Max Revive",
	"Fresh Water",
	"Soda Pop",
	"Lemonade",
	"Moomoo Milk",
	"Energy Powder",
	"Energy Root",
	"Heal Powder",
	"Revival Herb",
	"Ether",
	"Max Ether",
	"Elixir",
	"Max Elixir",
	"Lava Cookie",
	"Berry Juice",
	"Sacred Ash",
	"HP Up",
	"Protein",
	"Iron",
	"Carbos",
	"Calcium",
	"Rare Candy",
	"PP Up",
	"Zinc",
	"PP Max",
	"Old Gateau",
	"Guard Spec.",
	"Dire Hit",
	"X Attack",
	"X Defense",
	"X Speed",
	"X Accuracy",
	"X Sp. Atk",
	"X Sp. Def",
	"Poke Doll",
	"Fluffy Tail",
	"Blue Flute",
	"Yellow Flute",
	"Red Flute",
	"Black Flute",
	"White Flute",
	"Shoal Salt",
	"Shoal Shell",
	"Red Shard",
	"Blue Shard",
	"Yellow Shard",
	"Green Shard",
	"Super Repel",
	"Max Repel",
	"Escape Rope",
	"Repel",
	"Sun Stone",
	"Moon Stone",
	"Fire Stone",
	"Thunder Stone",
	"Water Stone",
	"Leaf Stone",
	"Tiny Mushroom",
	"Big Mushroom",
	"Pearl",
	"Big Pearl",
	"Stardust",
	"Star Piece",
	"Nugget",
	"Heart Scale",
	"Honey",
	"Growth Mulch",
	"Damp Mulch",
	"Stable Mulch",
	"Gooey Mulch",
	"Root Fossil",
	"Claw Fossil",
	"Helix Fossil",
	"Dome Fossil",
	"Old Amber",
	"Armor Fossil",
	"Skull Fossil",
	"Rare Bone",
	"Shiny Stone",
	"Dusk Stone",
	"Dawn Stone",
	"Oval Stone",
	"Odd Keystone",
	"Griseous Orb",
	"???",
	"???",
	"???",
	"Douse Drive",
	"Shock Drive",
	"Burn Drive",
	"Chill Drive",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"Sweet Heart",
	"Adamant Orb",
	"Lustrous Orb",
	"Greet Mail",
	"Favored Mail",
	"RSVP Mail",
	"Thanks Mail",
	"Inquiry Mail",
	"Like Mail",
	"Reply Mail",
	"Bridge Mail S",
	"Bridge Mail D",
	"Bridge Mail T",
	"Bridge Mail V",
	"Bridge Mail M",
	"Cheri Berry",
	"Chesto Berry",
	"Pecha Berry",
	"Rawst Berry",
	"Aspear Berry",
	"Leppa Berry",
	"Oran Berry",
	"Persim Berry",
	"Lum Berry",
	"Sitrus Berry",
	"Figy Berry",
	"Wiki Berry",
	"Mago Berry",
	"Aguav Berry",
	"Iapapa Berry",
	"Razz Berry",
	"Bluk Berry",
	"Nanab Berry",
	"Wepear Berry",
	"Pinap Berry",
	"Pomeg Berry",
	"Kelpsy Berry",
	"Qualot Berry",
	"Hondew Berry",
	"Grepa Berry",
	"Tamato Berry",
	"Cornn Berry",
	"Magost Berry",
	"Rabuta Berry",
	"Nomel Berry",
	"Spelon Berry",
	"Pamtre Berry",
	"Watmel Berry",
	"Durin Berry",
	"Belue Berry",
	"Occa Berry",
	"Passho Berry",
	"Wacan Berry",
	"Rindo Berry",
	"Yache Berry",
	"Chople Berry",
	"Kebia Berry",
	"Shuca Berry",
	"Coba Berry",
	"Payapa Berry",
	"Tanga Berry",
	"Charti Berry",
	"Kasib Berry",
	"Haban Berry",
	"Colbur Berry",
	"Babiri Berry",
	"Chilan Berry",
	"Liechi Berry",
	"Ganlon Berry",
	"Salac Berry",
	"Petaya Berry",
	"Apicot Berry",
	"Lansat Berry",
	"Starf Berry",
	"Enigma Berry",
	"Micle Berry",
	"Custap Berry",
	"Jaboca Berry",
	"Rowap Berry",
	"Bright Powder",
	"White Herb",
	"Macho Brace",
	"Exp. Share",
	"Quick Claw",
	"Soothe Bell",
	"Mental Herb",
	"Choice Band",
	"King's Rock",
	"Silver Powder",
	"Amulet Coin",
	"Cleanse Tag",
	"Soul Dew",
	"Deep Sea Tooth",
	"Deep Sea Scale",
	"Smoke Ball",
	"Everstone",
	"Focus Band",
	"Lucky Egg",
	"Scope Lens",
	"Metal Coat",
	"Leftovers",
	"Dragon Scale",
	"Light Ball",
	"Soft Sand",
	"Hard Stone",
	"Miracle Seed",
	"Black Glasses",
	"Black Belt",
	"Magnet",
	"Mystic Water",
	"Sharp Beak",
	"Poison Barb",
	"Never-Melt Ice",
	"Spell Tag",
	"Twisted Spoon",
	"Charcoal",
	"Dragon Fang",
	"Silk Scarf",
	"Up-Grade",
	"Shell Bell",
	"Sea Incense",
	"Lax Incense",
	"Lucky Punch",
	"Metal Powder",
	"Thick Club",
	"Stick",
	"Red Scarf",
	"Blue Scarf",
	"Pink Scarf",
	"Green Scarf",
	"Yellow Scarf",
	"Wide Lens",
	"Muscle Band",
	"Wise Glasses",
	"Expert Belt",
	"Light Clay",
	"Life Orb",
	"Power Herb",
	"Toxic Orb",
	"Flame Orb",
	"Quick Powder",
	"Focus Sash",
	"Zoom Lens",
	"Metronome",
	"Iron Ball",
	"Lagging Tail",
	"Destiny Knot",
	"Black Sludge",
	"Icy Rock",
	"Smooth Rock",
	"Heat Rock",
	"Damp Rock",
	"Grip Claw",
	"Choice Scarf",
	"Sticky Barb",
	"Power Bracer",
	"Power Belt",
	"Power Lens",
	"Power Band",
	"Power Anklet",
	"Power Weight",
	"Shed Shell",
	"Big Root",
	"Choice Specs",
	"Flame Plate",
	"Splash Plate",
	"Zap Plate",
	"Meadow Plate",
	"Icicle Plate",
	"Fist Plate",
	"Toxic Plate",
	"Earth Plate",
	"Sky Plate",
	"Mind Plate",
	"Insect Plate",
	"Stone Plate",
	"Spooky Plate",
	"Draco Plate",
	"Dread Plate",
	"Iron Plate",
	"Odd Incense",
	"Rock Incense",
	"Full Incense",
	"Wave Incense",
	"Rose Incense",
	"Luck Incense",
	"Pure Incense",
	"Protector",
	"Electirizer",
	"Magmarizer",
	"Dubious Disc",
	"Reaper Cloth",
	"Razor Claw",
	"Razor Fang",
	"TM01",
	"TM02",
	"TM03",
	"TM04",
	"TM05",
	"TM06",
	"TM07",
	"TM08",
	"TM09",
	"TM10",
	"TM11",
	"TM12",
	"TM13",
	"TM14",
	"TM15",
	"TM16",
	"TM17",
	"TM18",
	"TM19",
	"TM20",
	"TM21",
	"TM22",
	"TM23",
	"TM24",
	"TM25",
	"TM26",
	"TM27",
	"TM28",
	"TM29",
	"TM30",
	"TM31",
	"TM32",
	"TM33",
	"TM34",
	"TM35",
	"TM36",
	"TM37",
	"TM38",
	"TM39",
	"TM40",
	"TM41",
	"TM42",
	"TM43",
	"TM44",
	"TM45",
	"TM46",
	"TM47",
	"TM48",
	"TM49",
	"TM50",
	"TM51",
	"TM52",
	"TM53",
	"TM54",
	"TM55",
	"TM56",
	"TM57",
	"TM58",
	"TM59",
	"TM60",
	"TM61",
	"TM62",
	"TM63",
	"TM64",
	"TM65",
	"TM66",
	"TM67",
	"TM68",
	"TM69",
	"TM70",
	"TM71",
	"TM72",
	"TM73",
	"TM74",
	"TM75",
	"TM76",
	"TM77",
	"TM78",
	"TM79",
	"TM80",
	"TM81",
	"TM82",
	"TM83",
	"TM84",
	"TM85",
	"TM86",
	"TM87",
	"TM88",
	"TM89",
	"TM90",
	"TM91",
	"TM92",
	"HM01",
	"HM02",
	"HM03",
	"HM04",
	"HM05",
	"HM06",
	"???",
	"???",
	"Explorer Kit",
	"Loot Sack",
	"Rule Book",
	"Poke Radar",
	"Point Card",
	"Journal",
	"Seal Case",
	"Fashion Case",
	"Seal Bag",
	"Pal Pad",
	"Works Key",
	"Old Charm",
	"Galactic Key",
	"Red Chain",
	"Town Map",
	"Vs. Seeker",
	"Coin Case",
	"Old Rod",
	"Good Rod",
	"Super Rod",
	"Sprayduck",
	"Poffin Case",
	"Bike",
	"Suite Key",
	"Oak's Letter",
	"Lunar Wing",
	"Member Card",
	"Azure Flute",
	"S.S. Ticket",
	"Contest Pass",
	"Magma Stone",
	"Parcel",
	"Coupon 1",
	"Coupon 2",
	"Coupon 3",
	"Storage Key",
	"Secret Potion",
	"Vs. Recorder",
	"Gracidea",
	"Secret Key",
	"Apricorn Box",
	"Unown Report",
	"Berry Pots",
	"Dowsing Machine",
	"Blue Card",
	"Slowpoke Tail",
	"Clear Bell",
	"Card Key",
	"Basement Key",
	"Squirt Bottle",
	"Red Scale",
	"Lost Item",
	"Pass",
	"Machine Part",
	"Silver Wing",
	"Rainbow Wing",
	"Mystery Egg",
	"Red Apricorn",
	"Blue Apricorn",
	"Yellow Apricorn",
	"Green Apricorn",
	"Pink Apricorn",
	"White Apricorn",
	"Black Apricorn",
	"Fast Ball",
	"Level Ball",
	"Lure Ball",
	"Heavy Ball",
	"Love Ball",
	"Friend Ball",
	"Moon Ball",
	"Sport Ball",
	"Park Ball",
	"Photo Album",
	"GB Sounds",
	"Tidal Bell",
	"Rage Candy Bar",
	"Data Card 01",
	"Data Card 02",
	"Data Card 03",
	"Data Card 04",
	"Data Card 05",
	"Data Card 06",
	"Data Card 07",
	"Data Card 08",
	"Data Card 09",
	"Data Card 10",
	"Data Card 11",
	"Data Card 12",
	"Data Card 13",
	"Data Card 14",
	"Data Card 15",
	"Data Card 16",
	"Data Card 17",
	"Data Card 18",
	"Data Card 19",
	"Data Card 20",
	"Data Card 21",
	"Data Card 22",
	"Data Card 23",
	"Data Card 24",
	"Data Card 25",
	"Data Card 26",
	"Data Card 27",
	"Jade Orb",
	"Lock Capsule",
	"Red Orb",
	"Blue Orb",
	"Enigma Stone",
	"Prism Scale",
	"Eviolite",
	"Float Stone",
	"Rocky Helmet",
	"Air Balloon",
	"Red Card",
	"Ring Target",
	"Binding Band",
	"Absorb Bulb",
	"Cell Battery",
	"Eject Button",
	"Fire Gem",
	"Water Gem",
	"Electric Gem",
	"Grass Gem",
	"Ice Gem",
	"Fighting Gem",
	"Poison Gem",
	"Ground Gem",
	"Flying Gem",
	"Psychic Gem",
	"Bug Gem",
	"Rock Gem",
	"Ghost Gem",
	"Dragon Gem",
	"Dark Gem",
	"Steel Gem",
	"Normal Gem",
	"Health Wing",
	"Muscle Wing",
	"Resist Wing",
	"Genius Wing",
	"Clever Wing",
	"Swift Wing",
	"Pretty Wing",
	"Cover Fossil",
	"Plume Fossil",
	"Liberty Pass",
	"Pass Orb",
	"Dream Ball",
	"Poke Toy",
	"Prop Case",
	"Dragon Skull",
	"Balm Mushroom",
	"Big Nugget",
	"Pearl String",
	"Comet Shard",
	"Relic Copper",
	"Relic Silver",
	"Relic Gold",
	"Relic Vase",
	"Relic Band",
	"Relic Statue",
	"Relic Crown",
	"Casteliacone",
	"Dire Hit 2",
	"X Speed 2",
	"X Sp. Atk 2",
	"X Sp. Def 2",
	"X Defense 2",
	"X Attack 2",
	"X Accuracy 2",
	"X Speed 3",
	"X Sp. Atk 3",
	"X Sp. Def 3",
	"X Defense 3",
	"X Attack 3",
	"X Accuracy 3",
	"X Speed 6",
	"X Sp. Atk 6",
	"X Sp. Def 6",
	"X Defense 6",
	"X Attack 6",
	"X Accuracy 6",
	"Ability Urge",
	"Item Drop",
	"Item Urge",
	"Reset Urge",
	"Dire Hit 3",
	"Light Stone",
	"Dark Stone",
	"TM93",
	"TM94",
	"TM95",
	"Xtransceiver",
	"???",
	"Gram 1",
	"Gram 2",
	"Gram 3",
	"Xtransceiver",
	"Medal Box",
	"DNA Splicers",
	"DNA Splicers",
	"Permit",
	"Oval Charm",
	"Shiny Charm",
	"Plasma Card",
	"Grubby Hanky",
	"Colress Machine",
	"Dropped Item",
	"Dropped Item",
	"Reveal Glass",
	"Weakness Policy",
	"Assault Vest",
	"Holo Caster",
	"Prof's Letter",
	"Roller Skates",
	"Pixie Plate",
	"Ability Capsule",
	"Whipped Dream",
	"Sachet",
	"Luminous Moss",
	"Snowball",
	"Safety Goggles",
	"Poke Flute",
	"Rich Mulch",
	"Surprise Mulch",
	"Boost Mulch",
	"Amaze Mulch",
	"Gengarite",
	"Gardevoirite",
	"Ampharosite",
	"Venusaurite",
	"Charizardite X",
	"Blastoisinite",
	"Mewtwonite X",
	"Mewtwonite Y",
	"Blazikenite",
	"Medichamite",
	"Houndoominite",
	"Aggronite",
	"Banettite",
	"Tyranitarite",
	"Scizorite",
	"Pinsirite",
	"Aerodactylite",
	"Lucarionite",
	"Abomasite",
	"Kangaskhanite",
	"Gyaradosite",
	"Absolite",
	"Charizardite Y",
	"Alakazite",
	"Heracronite",
	"Mawilite",
	"Manectite",
	"Garchompite",
	"Latiasite",
	"Latiosite",
	"Roseli Berry",
	"Kee Berry",
	"Maranga Berry",
	"Sprinklotad",
	"TM96",
	"TM97",
	"TM98",
	"TM99",
	"TM100",
	"Power Plant Pass",
	"Mega Ring",
	"Intriguing Stone",
	"Common Stone",
	"Discount Coupon",
	"Elevator Key",
	"TMV Pass",
	"Honor of Kalos",
	"Adventure Rules",
	"Strange Souvenir",
	"Lens Case",
	"Makeup Bag",
	"Travel Trunk",
	"Lumiose Galette",
	"Shalour Sable",
	"Jaw Fossil",
	"Sail Fossil",
	"Looker Ticket",
	"Bike",
	"Holo Caster",
	"Fairy Gem",
	"Mega Charm",
	"Mega Glove",
	"Mach Bike",
	"Acro Bike",
	"Wailmer Pail",
	"Devon Parts",
	"Soot Sack",
	"Basement Key",
	"Pokeblock Kit",
	"Letter",
	"Eon Ticket",
	"Scanner",
	"Go-Goggles",
	"Meteorite",
	"Key to Room 1",
	"Key to Room 2",
	"Key to Room 4",
	"Key to Room 6",
	"Storage Key",
	"Devon Scope",
	"S.S. Ticket",
	"HM07",
	"Devon Scuba Gear",
	"Contest Costume",
	"Contest Costume",
	"Magma Suit",
	"Aqua Suit",
	"Pair of Tickets",
	"Mega Bracelet",
	"Mega Pendant",
	"Mega Glasses",
	"Mega Anchor",
	"Mega Stickpin",
	"Mega Tiara",
	"Mega Anklet",
	"Meteorite",
	"Swampertite",
	"Sceptilite",
	"Sablenite",
	"Altarianite",
	"Galladite",
	"Audinite",
	"Metagrossite",
	"Sharpedonite",
	"Slowbronite",
	"Steelixite",
	"Pidgeotite",
	"Glalitite",
	"Diancite",
	"Prison Bottle",
	"Mega Cuff",
	"Cameruptite",
	"Lopunnite",
	"Salamencite",
	"Beedrillite",
	"Meteorite",
	"Meteorite",
	"Key Stone",
	"Meteorite Shard",
	"Eon Flute",
	"Normalium Z",
	"Firium Z",
	"Waterium Z",
	"Electrium Z",
	"Grassium Z",
	"Icium Z",
	"Fightinium Z",
	"Poisonium Z",
	"Groundium Z",
	"Flyinium Z",
	"Psychium Z",
	"Buginium Z",
	"Rockium Z",
	"Ghostium Z",
	"Dragonium Z",
	"Darkinium Z",
	"Steelium Z",
	"Fairium Z",
	"Pikanium Z",
	"Bottle Cap",
	"Gold Bottle Cap",
	"Z-Ring",
	"Decidium Z",
	"Incinium Z",
	"Primarium Z",
	"Tapunium Z",
	"Marshadium Z",
	"Aloraichium Z",
	"Snorlium Z",
	"Eevium Z",
	"Mewnium Z",
	"Normalium Z",
	"Firium Z",
	"Waterium Z",
	"Electrium Z",
	"Grassium Z",
	"Icium Z",
	"Fightinium Z",
	"Poisonium Z",
	"Groundium Z",
	"Flyinium Z",
	"Psychium Z",
	"Buginium Z",
	"Rockium Z",
	"Ghostium Z",
	"Dragonium Z",
	"Darkinium Z",
	"Steelium Z",
	"Fairium Z",
	"Pikanium Z",
	"Decidium Z",
	"Incinium Z",
	"Primarium Z",
	"Tapunium Z",
	"Marshadium Z",
	"Aloraichium Z",
	"Snorlium Z",
	"Eevium Z",
	"Mewnium Z",
	"Pikashunium Z",
	"Pikashunium Z",
	"???",
	"???",
	"???",
	"???",
	"Forage Bag",
	"Fishing Rod",
	"Professor's Mask",
	"Festival Ticket",
	"Sparkling Stone",
	"Adrenaline Orb",
	"Zygarde Cube",
	"???",
	"Ice Stone",
	"Ride Pager",
	"Beast Ball",
	"Big Malasada",
	"Red Nectar",
	"Yellow Nectar",
	"Pink Nectar",
	"Purple Nectar",
	"Sun Flute",
	"Moon Flute",
	"???",
	"Enigmatic Card",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"Terrain Extender",
	"Protective Pads",
	"Electric Seed",
	"Psychic Seed",
	"Misty Seed",
	"Grassy Seed",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"???",
	"Fighting Memory",
	"Flying Memory",
	"Poison Memory",
	"Ground Memory",
	"Rock Memory",
	"Bug Memory",
	"Ghost Memory",
	"Steel Memory",
	"Fire Memory",
	"Water Memory",
	"Grass Memory",
	"Electric Memory",
	"Psychic Memory",
	"Ice Memory",
	"Dragon Memory",
	"Dark Memory",
	"Fairy Memory"
];

const ballName = [
	null,
	"Master Ball",
	"Ultra Ball",
	"Great Ball",
	"Poke Ball",
	"Safari Ball",
	"Net Ball",
	"Dive Ball",
	"Nest Ball",
	"Repeat Ball",
	"Timer Ball",
	"Luxury Ball",
	"Premier Ball",
	"Dusk Ball",
	"Heal Ball",
	"Quick Ball",
	"Cherish Ball",
	"Fast Ball",
	"Level Ball",
	"Lure Ball",
	"Heavy Ball",
	"Love Ball",
	"Friend Ball",
	"Moon Ball",
	"Sport Ball",
	"Dream Ball",
	"Beast Ball",
];

const moveName = [
	"-",
	"Pound",
	"Karate Chop",
	"Double Slap",
	"Comet Punch",
	"Mega Punch",
	"Pay Day",
	"Fire Punch",
	"Ice Punch",
	"Thunder Punch",
	"Scratch",
	"Vice Grip",
	"Guillotine",
	"Razor Wind",
	"Swords Dance",
	"Cut",
	"Gust",
	"Wing Attack",
	"Whirlwind",
	"Fly",
	"Bind",
	"Slam",
	"Vine Whip",
	"Stomp",
	"Double Kick",
	"Mega Kick",
	"Jump Kick",
	"Rolling Kick",
	"Sand Attack",
	"Headbutt",
	"Horn Attack",
	"Fury Attack",
	"Horn Drill",
	"Tackle",
	"Body Slam",
	"Wrap",
	"Take Down",
	"Thrash",
	"Double-Edge",
	"Tail Whip",
	"Poison Sting",
	"Twineedle",
	"Pin Missile",
	"Leer",
	"Bite",
	"Growl",
	"Roar",
	"Sing",
	"Supersonic",
	"Sonic Boom",
	"Disable",
	"Acid",
	"Ember",
	"Flamethrower",
	"Mist",
	"Water Gun",
	"Hydro Pump",
	"Surf",
	"Ice Beam",
	"Blizzard",
	"Psybeam",
	"Bubble Beam",
	"Aurora Beam",
	"Hyper Beam",
	"Peck",
	"Drill Peck",
	"Submission",
	"Low Kick",
	"Counter",
	"Seismic Toss",
	"Strength",
	"Absorb",
	"Mega Drain",
	"Leech Seed",
	"Growth",
	"Razor Leaf",
	"Solar Beam",
	"Poison Powder",
	"Stun Spore",
	"Sleep Powder",
	"Petal Dance",
	"String Shot",
	"Dragon Rage",
	"Fire Spin",
	"Thunder Shock",
	"Thunderbolt",
	"Thunder Wave",
	"Thunder",
	"Rock Throw",
	"Earthquake",
	"Fissure",
	"Dig",
	"Toxic",
	"Confusion",
	"Psychic",
	"Hypnosis",
	"Meditate",
	"Agility",
	"Quick Attack",
	"Rage",
	"Teleport",
	"Night Shade",
	"Mimic",
	"Screech",
	"Double Team",
	"Recover",
	"Harden",
	"Minimize",
	"Smokescreen",
	"Confuse Ray",
	"Withdraw",
	"Defense Curl",
	"Barrier",
	"Light Screen",
	"Haze",
	"Reflect",
	"Focus Energy",
	"Bide",
	"Metronome",
	"Mirror Move",
	"Self-Destruct",
	"Egg Bomb",
	"Lick",
	"Smog",
	"Sludge",
	"Bone Club",
	"Fire Blast",
	"Waterfall",
	"Clamp",
	"Swift",
	"Skull Bash",
	"Spike Cannon",
	"Constrict",
	"Amnesia",
	"Kinesis",
	"Soft-Boiled",
	"High Jump Kick",
	"Glare",
	"Dream Eater",
	"Poison Gas",
	"Barrage",
	"Leech Life",
	"Lovely Kiss",
	"Sky Attack",
	"Transform",
	"Bubble",
	"Dizzy Punch",
	"Spore",
	"Flash",
	"Psywave",
	"Splash",
	"Acid Armor",
	"Crabhammer",
	"Explosion",
	"Fury Swipes",
	"Bonemerang",
	"Rest",
	"Rock Slide",
	"Hyper Fang",
	"Sharpen",
	"Conversion",
	"Tri Attack",
	"Super Fang",
	"Slash",
	"Substitute",
	"Struggle",
	"Sketch",
	"Triple Kick",
	"Thief",
	"Spider Web",
	"Mind Reader",
	"Nightmare",
	"Flame Wheel",
	"Snore",
	"Curse",
	"Flail",
	"Conversion 2",
	"Aeroblast",
	"Cotton Spore",
	"Reversal",
	"Spite",
	"Powder Snow",
	"Protect",
	"Mach Punch",
	"Scary Face",
	"Feint Attack",
	"Sweet Kiss",
	"Belly Drum",
	"Sludge Bomb",
	"Mud-Slap",
	"Octazooka",
	"Spikes",
	"Zap Cannon",
	"Foresight",
	"Destiny Bond",
	"Perish Song",
	"Icy Wind",
	"Detect",
	"Bone Rush",
	"Lock-On",
	"Outrage",
	"Sandstorm",
	"Giga Drain",
	"Endure",
	"Charm",
	"Rollout",
	"False Swipe",
	"Swagger",
	"Milk Drink",
	"Spark",
	"Fury Cutter",
	"Steel Wing",
	"Mean Look",
	"Attract",
	"Sleep Talk",
	"Heal Bell",
	"Return",
	"Present",
	"Frustration",
	"Safeguard",
	"Pain Split",
	"Sacred Fire",
	"Magnitude",
	"Dynamic Punch",
	"Megahorn",
	"Dragon Breath",
	"Baton Pass",
	"Encore",
	"Pursuit",
	"Rapid Spin",
	"Sweet Scent",
	"Iron Tail",
	"Metal Claw",
	"Vital Throw",
	"Morning Sun",
	"Synthesis",
	"Moonlight",
	"Hidden Power",
	"Cross Chop",
	"Twister",
	"Rain Dance",
	"Sunny Day",
	"Crunch",
	"Mirror Coat",
	"Psych Up",
	"Extreme Speed",
	"Ancient Power",
	"Shadow Ball",
	"Future Sight",
	"Rock Smash",
	"Whirlpool",
	"Beat Up",
	"Fake Out",
	"Uproar",
	"Stockpile",
	"Spit Up",
	"Swallow",
	"Heat Wave",
	"Hail",
	"Torment",
	"Flatter",
	"Will-O-Wisp",
	"Memento",
	"Facade",
	"Focus Punch",
	"Smelling Salts",
	"Follow Me",
	"Nature Power",
	"Charge",
	"Taunt",
	"Helping Hand",
	"Trick",
	"Role Play",
	"Wish",
	"Assist",
	"Ingrain",
	"Superpower",
	"Magic Coat",
	"Recycle",
	"Revenge",
	"Brick Break",
	"Yawn",
	"Knock Off",
	"Endeavor",
	"Eruption",
	"Skill Swap",
	"Imprison",
	"Refresh",
	"Grudge",
	"Snatch",
	"Secret Power",
	"Dive",
	"Arm Thrust",
	"Camouflage",
	"Tail Glow",
	"Luster Purge",
	"Mist Ball",
	"Feather Dance",
	"Teeter Dance",
	"Blaze Kick",
	"Mud Sport",
	"Ice Ball",
	"Needle Arm",
	"Slack Off",
	"Hyper Voice",
	"Poison Fang",
	"Crush Claw",
	"Blast Burn",
	"Hydro Cannon",
	"Meteor Mash",
	"Astonish",
	"Weather Ball",
	"Aromatherapy",
	"Fake Tears",
	"Air Cutter",
	"Overheat",
	"Odor Sleuth",
	"Rock Tomb",
	"Silver Wind",
	"Metal Sound",
	"Grass Whistle",
	"Tickle",
	"Cosmic Power",
	"Water Spout",
	"Signal Beam",
	"Shadow Punch",
	"Extrasensory",
	"Sky Uppercut",
	"Sand Tomb",
	"Sheer Cold",
	"Muddy Water",
	"Bullet Seed",
	"Aerial Ace",
	"Icicle Spear",
	"Iron Defense",
	"Block",
	"Howl",
	"Dragon Claw",
	"Frenzy Plant",
	"Bulk Up",
	"Bounce",
	"Mud Shot",
	"Poison Tail",
	"Covet",
	"Volt Tackle",
	"Magical Leaf",
	"Water Sport",
	"Calm Mind",
	"Leaf Blade",
	"Dragon Dance",
	"Rock Blast",
	"Shock Wave",
	"Water Pulse",
	"Doom Desire",
	"Psycho Boost",
	"Roost",
	"Gravity",
	"Miracle Eye",
	"Wake-Up Slap",
	"Hammer Arm",
	"Gyro Ball",
	"Healing Wish",
	"Brine",
	"Natural Gift",
	"Feint",
	"Pluck",
	"Tailwind",
	"Acupressure",
	"Metal Burst",
	"U-turn",
	"Close Combat",
	"Payback",
	"Assurance",
	"Embargo",
	"Fling",
	"Psycho Shift",
	"Trump Card",
	"Heal Block",
	"Wring Out",
	"Power Trick",
	"Gastro Acid",
	"Lucky Chant",
	"Me First",
	"Copycat",
	"Power Swap",
	"Guard Swap",
	"Punishment",
	"Last Resort",
	"Worry Seed",
	"Sucker Punch",
	"Toxic Spikes",
	"Heart Swap",
	"Aqua Ring",
	"Magnet Rise",
	"Flare Blitz",
	"Force Palm",
	"Aura Sphere",
	"Rock Polish",
	"Poison Jab",
	"Dark Pulse",
	"Night Slash",
	"Aqua Tail",
	"Seed Bomb",
	"Air Slash",
	"X-Scissor",
	"Bug Buzz",
	"Dragon Pulse",
	"Dragon Rush",
	"Power Gem",
	"Drain Punch",
	"Vacuum Wave",
	"Focus Blast",
	"Energy Ball",
	"Brave Bird",
	"Earth Power",
	"Switcheroo",
	"Giga Impact",
	"Nasty Plot",
	"Bullet Punch",
	"Avalanche",
	"Ice Shard",
	"Shadow Claw",
	"Thunder Fang",
	"Ice Fang",
	"Fire Fang",
	"Shadow Sneak",
	"Mud Bomb",
	"Psycho Cut",
	"Zen Headbutt",
	"Mirror Shot",
	"Flash Cannon",
	"Rock Climb",
	"Defog",
	"Trick Room",
	"Draco Meteor",
	"Discharge",
	"Lava Plume",
	"Leaf Storm",
	"Power Whip",
	"Rock Wrecker",
	"Cross Poison",
	"Gunk Shot",
	"Iron Head",
	"Magnet Bomb",
	"Stone Edge",
	"Captivate",
	"Stealth Rock",
	"Grass Knot",
	"Chatter",
	"Judgment",
	"Bug Bite",
	"Charge Beam",
	"Wood Hammer",
	"Aqua Jet",
	"Attack Order",
	"Defend Order",
	"Heal Order",
	"Head Smash",
	"Double Hit",
	"Roar of Time",
	"Spacial Rend",
	"Lunar Dance",
	"Crush Grip",
	"Magma Storm",
	"Dark Void",
	"Seed Flare",
	"Ominous Wind",
	"Shadow Force",
	"Hone Claws",
	"Wide Guard",
	"Guard Split",
	"Power Split",
	"Wonder Room",
	"Psyshock",
	"Venoshock",
	"Autotomize",
	"Rage Powder",
	"Telekinesis",
	"Magic Room",
	"Smack Down",
	"Storm Throw",
	"Flame Burst",
	"Sludge Wave",
	"Quiver Dance",
	"Heavy Slam",
	"Synchronoise",
	"Electro Ball",
	"Soak",
	"Flame Charge",
	"Coil",
	"Low Sweep",
	"Acid Spray",
	"Foul Play",
	"Simple Beam",
	"Entrainment",
	"After You",
	"Round",
	"Echoed Voice",
	"Chip Away",
	"Clear Smog",
	"Stored Power",
	"Quick Guard",
	"Ally Switch",
	"Scald",
	"Shell Smash",
	"Heal Pulse",
	"Hex",
	"Sky Drop",
	"Shift Gear",
	"Circle Throw",
	"Incinerate",
	"Quash",
	"Acrobatics",
	"Reflect Type",
	"Retaliate",
	"Final Gambit",
	"Bestow",
	"Inferno",
	"Water Pledge",
	"Fire Pledge",
	"Grass Pledge",
	"Volt Switch",
	"Struggle Bug",
	"Bulldoze",
	"Frost Breath",
	"Dragon Tail",
	"Work Up",
	"Electroweb",
	"Wild Charge",
	"Drill Run",
	"Dual Chop",
	"Heart Stamp",
	"Horn Leech",
	"Sacred Sword",
	"Razor Shell",
	"Heat Crash",
	"Leaf Tornado",
	"Steamroller",
	"Cotton Guard",
	"Night Daze",
	"Psystrike",
	"Tail Slap",
	"Hurricane",
	"Head Charge",
	"Gear Grind",
	"Searing Shot",
	"Techno Blast",
	"Relic Song",
	"Secret Sword",
	"Glaciate",
	"Bolt Strike",
	"Blue Flare",
	"Fiery Dance",
	"Freeze Shock",
	"Ice Burn",
	"Snarl",
	"Icicle Crash",
	"V-create",
	"Fusion Flare",
	"Fusion Bolt",
	"Flying Press",
	"Mat Block",
	"Belch",
	"Rototiller",
	"Sticky Web",
	"Fell Stinger",
	"Phantom Force",
	"Trick-or-Treat",
	"Noble Roar",
	"Ion Deluge",
	"Parabolic Charge",
	"Forest's Curse",
	"Petal Blizzard",
	"Freeze-Dry",
	"Disarming Voice",
	"Parting Shot",
	"Topsy-Turvy",
	"Draining Kiss",
	"Crafty Shield",
	"Flower Shield",
	"Grassy Terrain",
	"Misty Terrain",
	"Electrify",
	"Play Rough",
	"Fairy Wind",
	"Moonblast",
	"Boomburst",
	"Fairy Lock",
	"King's Shield",
	"Play Nice",
	"Confide",
	"Diamond Storm",
	"Steam Eruption",
	"Hyperspace Hole",
	"Water Shuriken",
	"Mystical Fire",
	"Spiky Shield",
	"Aromatic Mist",
	"Eerie Impulse",
	"Venom Drench",
	"Powder",
	"Geomancy",
	"Magnetic Flux",
	"Happy Hour",
	"Electric Terrain",
	"Dazzling Gleam",
	"Celebrate",
	"Hold Hands",
	"Baby-Doll Eyes",
	"Nuzzle",
	"Hold Back",
	"Infestation",
	"Power-Up Punch",
	"Oblivion Wing",
	"Thousand Arrows",
	"Thousand Waves",
	"Land's Wrath",
	"Light of Ruin",
	"Origin Pulse",
	"Precipice Blades",
	"Dragon Ascent",
	"Hyperspace Fury",
	"Breakneck Blitz",
	"Breakneck Blitz",
	"All-Out Pummeling",
	"All-Out Pummeling",
	"Supersonic Skystrike",
	"Supersonic Skystrike",
	"Acid Downpour",
	"Acid Downpour",
	"Tectonic Rage",
	"Tectonic Rage",
	"Continental Crush",
	"Continental Crush",
	"Savage Spin-Out",
	"Savage Spin-Out",
	"Never-Ending Nightmare",
	"Never-Ending Nightmare",
	"Corkscrew Crash",
	"Corkscrew Crash",
	"Inferno Overdrive",
	"Inferno Overdrive",
	"Hydro Vortex",
	"Hydro Vortex",
	"Bloom Doom",
	"Bloom Doom",
	"Gigavolt Havoc",
	"Gigavolt Havoc",
	"Shattered Psyche",
	"Shattered Psyche",
	"Subzero Slammer",
	"Subzero Slammer",
	"Devastating Drake",
	"Devastating Drake",
	"Black Hole Eclipse",
	"Black Hole Eclipse",
	"Twinkle Tackle",
	"Twinkle Tackle",
	"Catastropika",
	"Shore Up",
	"First Impression",
	"Baneful Bunker",
	"Spirit Shackle",
	"Darkest Lariat",
	"Sparkling Aria",
	"Ice Hammer",
	"Floral Healing",
	"High Horsepower",
	"Strength Sap",
	"Solar Blade",
	"Leafage",
	"Spotlight",
	"Toxic Thread",
	"Laser Focus",
	"Gear Up",
	"Throat Chop",
	"Pollen Puff",
	"Anchor Shot",
	"Psychic Terrain",
	"Lunge",
	"Fire Lash",
	"Power Trip",
	"Burn Up",
	"Speed Swap",
	"Smart Strike",
	"Purify",
	"Revelation Dance",
	"Core Enforcer",
	"Trop Kick",
	"Instruct",
	"Beak Blast",
	"Clanging Scales",
	"Dragon Hammer",
	"Brutal Swing",
	"Aurora Veil",
	"Sinister Arrow Raid",
	"Malicious Moonsault",
	"Oceanic Operetta",
	"Guardian of Alola",
	"Soul-Stealing 7-Star Strike",
	"Stoked Sparksurfer",
	"Pulverizing Pancake",
	"Extreme Evoboost",
	"Genesis Supernova",
	"Shell Trap",
	"Fleur Cannon",
	"Psychic Fangs",
	"Stomping Tantrum",
	"Shadow Bone",
	"Accelerock",
	"Liquidation",
	"Prismatic Laser",
	"Spectral Thief",
	"Sunsteel Strike",
	"Moongeist Beam",
	"Tearful Look",
	"Zing Zap",
	"Nature's Madness",
	"Multi-Attack",
	"10,000,000 Volt Thunderbolt"
];

const natureName = [
	'Hardy',
	'Lonely',
	'Brave',
	'Adamant',
	'Naughty',
	'Bold',
	'Docile',
	'Relaxed',
	'Impish',
	'Lax',
	'Timid',
	'Hasty',
	'Serious',
	'Jolly',
	'Naive',
	'Modest',
	'Mild',
	'Quiet',
	'Bashful',
	'Rash',
	'Calm',
	'Gentle',
	'Sassy',
	'Careful',
	'Quirky'
];

var locationName, location;
locationName = {
  "2": "Mystery Zone",
  "4": "Faraway Place",
  "6": "Route 1",
  "7": "Hau’oli Outskirts",
  "8": "Route 1",
  "10": "Route 3",
  "12": "Route 2",
  "14": "Kala’e Bay",
  "16": "Melemele Sea",
  "18": "Hau’oli City",
  "19": "Beachfront",
  "20": "Hau’oli City",
  "21": "Shopping District",
  "22": "Hau’oli City",
  "23": "Marina",
  "24": "Iki Town",
  "26": "Mahalo Trail",
  "28": "Mahalo Trail",
  "29": "Plank Bridge",
  "30": "Ruins of Conflict",
  "32": "Ruins of Conflict",
  "34": "Ten Carat Hill",
  "36": "Ten Carat Hill",
  "37": "Farthest Hollow",
  "38": "Hau’oli Cemetery",
  "40": "Melemele Meadow",
  "42": "Seaward Cave",
  "44": "Berry Fields",
  "46": "Verdant Cavern",
  "47": "Trial Site",
  "48": "Verdant Cavern",
  "49": "Totem’s Den",
  "50": "Route 4",
  "52": "Route 5",
  "54": "Route 6",
  "56": "Route 7",
  "58": "Route 8",
  "60": "Route 9",
  "62": "Hano Grand Resort",
  "64": "Hano Beach",
  "66": "Akala Meadow",
  "68": "Paniola Town",
  "70": "Heahea City",
  "72": "Konikoni City",
  "74": "Royal Avenue",
  "76": "Memorial Hill",
  "78": "Paniola Ranch",
  "82": "Wela Volcano Park",
  "84": "Wela Volcano Park",
  "85": "Totem’s Den",
  "86": "Brooklet Hill",
  "88": "Brooklet Hill",
  "89": "Totem’s Den",
  "90": "Lush Jungle",
  "92": "Ruins of Life",
  "94": "Akala Outskirts",
  "100": "Diglett’s Tunnel",
  "102": "Hano Grand Resort",
  "104": "Battle Royal Dome",
  "106": "Route 10",
  "108": "Route 11",
  "110": "Secluded Shore",
  "112": "Route 13",
  "114": "Tapu Village",
  "116": "Route 15",
  "118": "Route 16",
  "120": "Route 17",
  "122": "Route 12",
  "124": "Haina Desert",
  "126": "Route 14",
  "128": "Ula’ula Meadow",
  "130": "Po Town",
  "132": "Malie City",
  "134": "Malie Garden",
  "136": "Mount Hokulani",
  "138": "Blush Mountain",
  "140": "Ruins of Abundance",
  "142": "Lake of the Sunne",
  "144": "Lake of the Moone",
  "146": "Mount Lanakila",
  "148": "Shady House",
  "150": "Thrifty Megamart",
  "151": "Abandoned Site",
  "152": "Hokulani Observatory",
  "154": "Pokemon League",
  "156": "Poni Meadow",
  "158": "Poni Wilds",
  "160": "Ancient Poni Path",
  "162": "Poni Breaker Coast",
  "164": "Poni Grove",
  "166": "Poni Plains",
  "168": "Poni Coast",
  "170": "Poni Gauntlet",
  "172": "Seafolk Village",
  "174": "Vast Poni Canyon",
  "176": "Altar of the Sunne",
  "178": "Altar of the Moone",
  "180": "Ruins of Hope",
  "182": "Resolution Cave",
  "184": "Exeggutor Island",
  "186": "Battle Tree",
  "188": "Aether Paradise",
  "190": "Ultra Space",
  "192": "Malie City",
  "193": "Outer Cape",
  "30001": "a Link Trade",
  "30002": "a Link Trade",
  "30003": "the Kanto region",
  "30004": "the Johto region",
  "30005": "the Hoenn region",
  "30006": "the Sinnoh region",
  "30007": "a distant land",
  "30008": "???",
  "30009": "the Unova region",
  "30010": "the Kalos region",
  "30011": "Pokemon Link",
  "30012": "Pokemon GO",
  "30013": "the Kanto region",
  "30014": "the Hoenn region",
  "30015": "the Alola region",
  "30016": "Poke Pelago",
  "40001": "a lovely place",
  "40002": "a faraway place",
  "40003": "a Pokemon movie",
  "40004": "2016 Pokemon Movie",
  "40005": "2017 Pokemon Movie",
  "40006": "2018 Pokemon Movie",
  "40007": "2019 Pokemon Movie",
  "40008": "2020 Pokemon Movie",
  "40009": "2021 Pokemon Movie",
  "40010": "a Pokemon Center",
  "40011": "the Pokemon animated show",
  "40012": "Pokemon Ctr. MEGA TOKYO",
  "40013": "Pokemon Center Osaka",
  "40014": "Pokemon Center Fukuoka",
  "40015": "Pokemon Center Nagoya",
  "40016": "Pokemon Center Sapporo",
  "40017": "Pokemon Center Yokohama",
  "40018": "Pokemon Center Tohoku",
  "40019": "Pokemon Center TOKYO-BAY",
  "40020": "Pokemon Center Hiroshima",
  "40021": "Pokemon Center Kyoto",
  "40022": "Pokemon Ctr. SKYTREE TOWN",
  "40023": "a Pokemon Store",
  "40024": "a WCS",
  "40025": "WCS 2016",
  "40026": "WCS 2017",
  "40027": "WCS 2018",
  "40028": "WCS 2019",
  "40029": "WCS 2020",
  "40030": "WCS 2021",
  "40031": "Worlds",
  "40032": "2016 Worlds",
  "40033": "2017 Worlds",
  "40034": "2018 Worlds",
  "40035": "2019 Worlds",
  "40036": "2020 Worlds",
  "40037": "2021 Worlds",
  "40038": "a VGE",
  "40039": "VGE 2016",
  "40040": "VGE 2017",
  "40041": "VGE 2018",
  "40042": "VGE 2019",
  "40043": "VGE 2020",
  "40044": "VGE 2021",
  "40045": "a Pokemon event",
  "40046": "a Battle Competition",
  "40047": "a game event",
  "40048": "the Pokemon Daisuki Club",
  "40049": "a Pokemon TV program",
  "40050": "a concert",
  "40051": "an online present",
  "40052": "the PGL",
  "40053": "a 2016 Pokemon event",
  "40054": "a 2017 Pokemon event",
  "40055": "a 2018 Pokemon event",
  "40056": "a 2019 Pokemon event",
  "40057": "a 2020 Pokemon event",
  "40058": "a 2021 Pokemon event",
  "40059": "a Pokemon event",
  "40060": "a 2016 Pokemon event",
  "40061": "a 2017 Pokemon event",
  "40062": "a 2018 Pokemon event",
  "40063": "a 2019 Pokemon event",
  "40064": "a 2020 Pokemon event",
  "40065": "a 2021 Pokemon event",
  "40066": "PokePark",
  "40067": "PokePark 2016",
  "40068": "PokePark 2017",
  "40069": "PokePark 2018",
  "40070": "PokePark 2019",
  "40071": "PokePark 2020",
  "40072": "PokePark 2021",
  "40073": "an event site",
  "40074": "GAME FREAK",
  "40075": "a stadium",
  "40076": "VGC",
  "40077": "the VGC 2016",
  "40078": "the VGC 2017",
  "40079": "the VGC 2018",
  "40080": "the VGC 2019",
  "40081": "the VGC 2020",
  "40082": "the VGC 2021",
  "40083": "a Virtual Console game",
  "40084": "Pokemon GO",
  "40085": "Pokemon Bank",
  "40086": "a Pokemon shop",
  "40087": "a demo version",
  "40088": "the Pokemon Trainer Club",
  "60001": "a stranger",
  "60002": "Nursery helpers",
  "60003": "a treasure hunter",
  "60004": "an old hot-springs visitor"
};

const cardText = [
	"Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to see the Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to see the 2016 Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to see the 2017 Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to see the 2018 Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to see the 2019 Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to see the 2020 Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to see the 2021 Pokemon Movie! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon Center! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center MEGA TOKYO! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center Osaka! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center Fukuoka! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center Nagoya! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center Sapporo! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center Yokohama! Please pick up your gift from the deliveryman in the game.",
	"Thank you for participating in the Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the 2016 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the 2017 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the 2018 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the 2019 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the 2020 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the 2021 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the 2016 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the 2017 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the 2018 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the 2019 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the 2020 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the 2021 Pokemon World Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a Pokemon Video Game event! Please pick up your gift from the delivery man in any Pokemon Center.",
	"Thank you for coming to a 2016 Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a 2017 Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a 2018 Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a 2019 Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a 2020 Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a 2021 Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for participating in the Pokemon Video Game Championships! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a 2016 Pokemon Video Game Championships event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a 2017 Pokemon Video Game Championships event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a 2018 Pokemon Video Game Championships event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a 2019 Pokemon Video Game Championships event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a 2020 Pokemon Video Game Championships event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a 2021 Pokemon Video Game Championships event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for playing Pokemon! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the store! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in the Battle Competition! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for participating in a Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"This is a gift from the Pokemon Video Game event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"This is a present from the Pokemon Daisuki Club! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for watching Pokemon programs! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"This is a gift from a Pokemon program! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon Concert! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for watching the Pokemon animation! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for receiving this distribution! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Please pick up your gift from the deliveryman in any Pokemon Center.",
	"This is a gift from the Pokemon Global Link! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for visiting the Pokemon Global Link! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"This is a gift from the Pokemon Global Link! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2016 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2017 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2018 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2019 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2020 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2021 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to a Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2016 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2017 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2018 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2019 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2020 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thanks for coming to a 2021 Pokemon event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"This is a gift from the PokePark! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark in 2016! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark in 2017! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark in 2018! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark in 2019! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark in 2020! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the PokePark in 2021! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the event! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon Center Tohoku! Please pick up your gift from the deliveryman in the game.",
	"This is a gift from GAME FREAK! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the stadium! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon Center TOKYO-BAY! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Store! Please pick up your gift from the deliveryman in the game.",
	"Thank you for playing the Virtual Console! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for playing Pokemon GO! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for playing Pokemon Bank! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon Shop! Please pick up your gift from the deliveryman in the game.",
	"Thank you for playing the demo version! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"Thank you for coming to the Pokemon Center Hiroshima! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center Kyoto! Please pick up your gift from the deliveryman in the game.",
	"Thank you for coming to the Pokemon Center SKYTREE TOWN. Please pick up your gift from the deliveryman in the game.",
	"This is a present from the Pokemon Trainer Club! Please pick up your gift from the deliveryman in any Pokemon Center.",
	"You have already picked up your gift from the deliveryman.",
	"Thanks for coming to see the Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to see the 2016 Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to see the 2017 Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to see the 2018 Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to see the 2019 Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to see the 2020 Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to see the 2021 Pokemon Movie! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center MEGA TOKYO! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Osaka! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Fukuoka! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Nagoya! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Sapporo! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Yokohama! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in the Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for participating in the 2016 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for participating in the 2017 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for participating in the 2018 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for participating in the 2019 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for participating in the 2020 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for participating in the 2021 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the 2016 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to the 2017 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the 2018 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the 2019 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the 2020 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the 2021 Pokemon World Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a 2016 Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a 2017 Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a 2018 Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a 2019 Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a 2020 Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a 2021 Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in the Pokemon Video Game Championships! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a 2016 Pokemon Video Game Championships event! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a 2017 Pokemon Video Game Championships event! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a 2018 Pokemon Video Game Championships event! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a 2019 Pokemon Video Game Championships event! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a 2020 Pokemon Video Game Championships event! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a 2021 Pokemon Video Game Championships event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thank you for playing Pokemon! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the store! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in the Battle Competition! You have already picked up your gift from the deliveryman.",
	"Thank you for participating in a Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"This is a gift from the Pokemon Video Game event! You have already picked up your gift from the deliveryman.",
	"This is a present from the Pokemon Daisuki Club! You have already picked up your gift from the deliveryman.",
	"Thank you for watching Pokemon programs! You have already picked up your gift from the deliveryman.",
	"This is a gift from a Pokemon program! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Concert! You have already picked up your gift from the deliveryman.",
	"Thank you for watching the Pokemon animation! You have already picked up your gift from the deliveryman.",
	"Thank you for receiving this distribution! You have already picked up your gift from the deliveryman.",
	"You have already picked up your gift from the deliveryman.",
	"This is a gift from the Pokemon Global Link! You have already picked up your gift from the deliveryman.",
	"Thank you for visiting the Pokemon Global Link! You have already picked up your gift from the deliveryman.",
	"This is a gift from the Pokemon Global Link! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2016 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2017 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2018 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2019 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2020 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2021 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to a Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2016 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2017 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2018 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2019 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2020 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thanks for coming to a 2021 Pokemon event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark! You have already picked up your gift from the deliveryman.",
	"This is a gift from the PokePark! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark in 2016! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark in 2017! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark in 2018! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark in 2019! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark in 2020! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the PokePark in 2021! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the event! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Tohoku! You have already picked up your gift from the deliveryman.",
	"This is a gift from GAME FREAK! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the stadium! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center TOKYO-BAY! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Store! You have already picked up your gift from the deliveryman.",
	"Thank you for playing the Virtual Console! You have already picked up your gift from the deliveryman.",
	"Thank you for playing Pokemon GO! You have already picked up your gift from the deliveryman.",
	"Thank you for using Pokemon Bank! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Shop! You have already picked up your gift from the deliveryman.",
	"Thank you for playing the demo version! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Hiroshima! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center Kyoto! You have already picked up your gift from the deliveryman.",
	"Thank you for coming to the Pokemon Center SKYTREE TOWN! You have already picked up your gift from the deliveryman.",
	"This is a present from the Pokemon Trainer Club! You have already picked up your gift from the deliveryman.",
];

var ribbonName1, ribbon;
ribbonName1 = {
  "1": "Battle Champ Ribbon",
  "2": "Regional Champ Ribbon",
  "4": "National Champ Ribbon",
  "8": "Country Ribbon",
  "16": "National Ribbon",
  "32": "Earth Ribbon",
  "64": "World Ribbon",
  "128": "Event Ribbon",
};

var ribbonName2, ribbon;
ribbonName2 = {
  "1": "World Champ Ribbon",
  "2": "Birthday Ribbon",
  "4": "Special Ribbon",
  "8": "Souvenir Ribbon",
  "16": "Wishing Ribbon",
  "32": "Classic Ribbon",
  "64": "Premier Ribbon",
};

exports.parseBuffer = (buf, options) => {

  const data = {};
  
  data.wcId = buf.readUInt16LE(0x00);  
  data.wcTitle = stripNullChars(buf.toString('utf16le', 0x02, 0x4B));
  //data.dateReceived = buf.readUInt32LE(0x4C);
  data.cardText = cardText[buf.readUInt8(0x50)];  
  data.cardType = ['Pokemon', 'Item'][buf.readUInt8(0x51)]; 
  data.giftType = giftType();
	function giftType() {
		if (buf.readUInt8(0x52) >= "0x07") {
			return "Unknown"; // futureproofing
		}
	}
  data.giftRedeemable = ['Infinite', 'Only once', 'Infinite', 'Only once', 'Once per day', '???', 'Once per day'][buf.readUInt8(0x52)];
  data.giftStatus = ['Unused', 'Unused', 'Used', 'Used', 'Unused', '???', 'Used'][buf.readUInt8(0x52)];
  data.cardColor = ['Green', 'Purple', 'Yellow'][buf.readUInt8(0x53)];
  data.fullId = buf.readUInt32LE(0x68);
  data.tid = buf.readUInt16LE(0x68);
  data.sid = buf.readUInt16LE(0x6A);
  //data.originGame = buf.readUInt16LE(0x6C);
  //data.quantity = buf.readUInt16LE(0x70);
  data.encryptionConstant = ecSet();
  	function ecSet() {
		if (!buf.readUInt32LE(0x70) == "0x00000000") {
			return ( ((buf.readUInt32LE(0x70)).toString(16)));
		}
	}  
  data.Ribbon = ribbonName1[buf.readUInt8(0x74)];
  data.Ribbon = ribbonName2[buf.readUInt8(0x75)];
  data.ball = ballName[buf.readUInt8(0x76)];  
  data.heldItem = itemName[buf.readUInt16LE(0x78)];
  data.move1Name = moveName[buf.readUInt16LE(0x7A)];
  data.move2Name = moveName[buf.readUInt16LE(0x7C)];  
  data.move3Name = moveName[buf.readUInt16LE(0x7E)];
  data.move4Name = moveName[buf.readUInt16LE(0x80)];  
  data.pokemonName = pokemonName[buf.readUInt16LE(0x82)];
  data.formName = hasForm();
	function hasForm() {
		if (!buf.readUInt8(0x84) == 0) {
			return formes[buf.readUInt16LE(0x82)][buf.readUInt8(0x84)];
		}
		else 
			return "None";
	}
  data.language = ['Yours', 'JPN', 'ENG', 'FRE', 'ITA', 'GER', '???', 'SPA', 'KOR', 'CHS', 'CHT'][buf.readUInt8(0x85)]; 
  data.nickname = nicknameName();
	function nicknameName() {
		if (!buf.readUInt8(0x86) == "0x00") {
			return stripNullChars(buf.toString('utf16le', 0x86, 0x9F));
		}
		else 
			return "None";
	}
  data.nature = natureType();
	function natureType() {
		if (buf.readUInt8(0xA0) == "0xFF") {
			return "Random";
		}
	}
  data.natureLock = natureName[buf.readUInt8(0xA0)];
  data.gender = ['M', 'F', 'Genderless', 'Random'][buf.readUInt8(0xA1)]; 
  data.abilityType = ['Fixed ability 1', 'Fixed ability 2', 'Fixed HA', 'Random (no HA)', 'Random (including HA)'][buf.readUInt8(0xA2)]; 
  data.pidType = ['Set PID', 'Can be shiny', 'Always shiny', 'Never shiny'][buf.readUInt8(0xA3)]; 
  data.eggLocation = locationName[buf.readUInt16LE(0xA4)];  
  data.metLocation = locationName[buf.readUInt16LE(0xA6)]; 
  data.metLevel = buf.readUInt8(0xA8);
  data.contestStatCool = buf.readUInt8(0xA9);
  data.contestStatBeauty = buf.readUInt8(0xAA);
  data.contestStatCute = buf.readUInt8(0xAB);
  data.contestStatSmart = buf.readUInt8(0xAC);
  data.contestStatTough = buf.readUInt8(0xAD);
  data.contestStatSheen = buf.readUInt8(0xAE);
  
  data.ivType = ivType();  
	function ivType() {
		if (buf.readUInt32LE(0xAF) == "0xFFFFFFFF") {
			return "No guaranteed IVs of 31";
			}
		else if (buf.readUInt8(0xAF) == "0xFE") {
			return "3 random guaranteed IVs of 31";
			}
		else if (buf.readUInt8(0xAF) == "0xFD") {
			return "2 random guaranteed IVs of 31";
			}
		else if ((buf.readUInt8(0xAF) > "0xF0") && (buf.readUInt8(0xAF) <= "0xFC")) { 
			return "Unknown"; // futureproofing
		}  
		else
			return "Has fixed IVs";
	}  
	  data.ivHp = ivHp();
		function ivHp() {
			if (buf.readUInt8(0xAF) > "0xF0") {
				return "Unset";
				}
			else
				return (buf.readUInt8(0xAF));
		}    
	  data.ivAtk = ivAtk();
		function ivAtk() {
			if (buf.readUInt8(0xB0) == "0xFF") {
				return "Unset";
				}
			else
				return (buf.readUInt8(0xB0));
		}  
	  data.ivDef = ivDef();
		function ivDef() {
			if (buf.readUInt8(0xB1) == "0xFF") {
				return "Unset";
				}
			else
				return (buf.readUInt8(0xB1));
		}
	  data.ivSpe = ivSpe();
		function ivSpe() {
			if (buf.readUInt8(0xB2) == "0xFF") {
				return "Unset";
				}
			else
				return (buf.readUInt8(0xB2));
		}
	  data.ivSpAtk = ivSpAtk();
		function ivSpAtk() {
			if (buf.readUInt8(0xB3) == "0xFF") {
				return "Unset";
				}
			else
				return (buf.readUInt8(0xB3));
		}
	  data.ivSpDef = ivSpDef();
		function ivSpDef() {
			if (buf.readUInt8(0xB4) == "0xFF") {
				return "Unset";
				}
			else
				return (buf.readUInt8(0xB4));
		}
  data.otGender = ['M', 'F', '02', 'Yours'][buf.readUInt8(0xB5)];   
  data.ot = stripNullChars(buf.toString('utf16le', 0xB6, 0xCF));
  data.Level = buf.readUInt8(0xD0);
  data.isEgg = ['Not egg', 'Is egg'][buf.readUInt8(0xD1)]; 
  data.additionalItem = itemName[buf.readUInt16LE(0xD2)];
  data.pid = pidSet();
  	function pidSet() {
		if (buf.readUInt8(0xA3) == "0x00") {
			return ( ((buf.readUInt32LE(0xD4)).toString(16)));
		}
	}
  data.eggMove1Name = moveName[buf.readUInt16LE(0xD8)];
  data.eggMove2Name = moveName[buf.readUInt16LE(0xDA)];
  data.eggMove3Name = moveName[buf.readUInt16LE(0xDC)];
  data.eggMove4Name = moveName[buf.readUInt16LE(0xDE)]; 
  data.otMemoryIntensity = buf.readUInt8(0xE0);
  data.otMemoryLine = buf.readUInt8(0xE1);
  data.otMemoryTextVar = buf.readUInt16LE(0xE2);
  data.otMemoryFeeling = buf.readUInt8(0xE4);
  data.evHp = buf.readUInt8(0xE5);
  data.evAtk = buf.readUInt8(0xE6);
  data.evDef = buf.readUInt8(0xE7);
  data.evSpe = buf.readUInt8(0xE8);
  data.evSpAtk = buf.readUInt8(0xE9);
  data.evSpDef = buf.readUInt8(0xEA);

  return data;
};

const levelToExperienceCache = {
  'slow-then-very-fast': {},
  fast: {},
  medium: {},
  'medium-slow': {},
  slow: {},
  'fast-then-very-slow': {}
};

function _baseLevelToExperience (level, growthRate) {
  // Reference: http://bulbapedia.bulbagarden.net/wiki/Experience
  if (level > 100) {
    return Infinity;
  }
  if (growthRate === 'slow-then-very-fast') {
    if (level < 50) {
      return Math.pow(level, 3) * (100 - level) / 50;
    }
    if (level < 68) {
      return Math.pow(level, 3) * (150 - level) / 100;
    }
    if (level < 98) {
      return Math.pow(level, 3) * Math.floor((1911 - 10 * level) / 3) / 500;
    }
    return Math.pow(level, 3) * (160 - level) / 100;
  }
  if (growthRate === 'fast') {
    return 4 / 5 * Math.pow(level, 3);
  }
  if (growthRate === 'medium') {
    return Math.pow(level, 3);
  }
  if (growthRate === 'medium-slow') {
    return 6 / 5 * Math.pow(level, 3) - 15 * Math.pow(level, 2) + 100 * level - 140;
  }
  if (growthRate === 'slow') {
    return 5 / 4 * Math.pow(level, 3);
  }
  if (growthRate === 'fast-then-very-slow') {
    if (level < 15) {
      return Math.pow(level, 3) * (Math.floor((level + 1) / 3) + 24) / 50;
    }
    if (level < 36) {
      return Math.pow(level, 3) * (level + 14) / 50;
    }
    return Math.pow(level, 3) * (Math.floor(level / 2) + 32) / 50;
  }
  return NaN;
}
function convertLevelToExperience (level, growthRate) {
  // Reference: http://bulbapedia.bulbagarden.net/wiki/Experience
  if (!levelToExperienceCache[growthRate]) {
    throw new TypeError(`Unrecognized growth rate '${growthRate}'`);
  }
  if (levelToExperienceCache[growthRate][level] === undefined) {
    levelToExperienceCache[growthRate][level] = Math.floor(_baseLevelToExperience(level, growthRate));
  }
  return levelToExperienceCache[growthRate][level];
}

const experienceToLevelCache = {
  'slow-then-very-fast': {},
  fast: {},
  medium: {},
  'medium-slow': {},
  slow: {},
  'fast-then-very-slow': {}
};

function _baseConvertExperienceToLevelData (exp, growthRate) {
  let i = 1;
  let currentLevelExperience = 0;
  let previousLevelExperience = 0;
  /* Checks all of the levels from 1-100 to find the correct one.
  In theory this could also be done by (a) solving cubic equations to find the level analytically, or (b) using binary search.
  However, given that there are always exactly 100 possible options, any performance improvement from using those would
  be minimal anyway. */
  while (currentLevelExperience <= exp && i <= 100) {
    previousLevelExperience = currentLevelExperience;
    currentLevelExperience = convertLevelToExperience(++i, growthRate);
  }
  return {level: i - 1, expFromPreviousLevel: exp - previousLevelExperience, expToNextLevel: currentLevelExperience - exp};
}

function convertExperienceToLevelData (exp, growthRate) {
  if (!experienceToLevelCache[growthRate]) {
    throw new TypeError(`Unrecognized growth rate '${growthRate}'`);
  }
  if (experienceToLevelCache[growthRate][exp] === undefined) {
    experienceToLevelCache[growthRate][exp] = _baseConvertExperienceToLevelData(exp, growthRate);
  }
  return experienceToLevelCache[growthRate][exp];
}

function abbreviateStat (name) {
  return {
    hp: 'Hp',
    attack: 'Atk',
    defense: 'Def',
    'special-attack': 'SpAtk',
    'special-defense': 'SpDef',
    speed: 'Spe',
    null: null
  }[name];
}

function calculateStat (baseStat, level, iv, ev, natureMultiplier, isHp) {
  if (isHp && baseStat === 1) {
    // shedinja hp
    return 1;
  }
  if (isHp) {
    return Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + level + 10;
  }
  return Math.floor((Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + 5) * natureMultiplier);
}

function assignCalculatedStat (data, statName) {
  data[`stat${statName}`] = calculateStat(
    data[`baseStat${statName}`],
    data.level,
    data[`iv${statName}`],
    data[`ev${statName}`],
    data.increasedStat === statName ? 1.1 : data.decreasedStat === statName ? 0.9 : 1,
    statName === 'Hp'
  );
}

function assignRegionAndCountryNames (data, locationNum, language) {
  const regionId = data[`geoLocation${locationNum}RegionId`];
  const countryId = data[`geoLocation${locationNum}CountryId`];
  const regionNameKey = `geoLocation${locationNum}RegionName`;
  const countryNameKey = `geoLocation${locationNum}CountryName`;
  data[regionNameKey] = regionId ? data[regionNameKey] = exports.getSubregionName(countryId, regionId, language) : null;
  data[countryNameKey] = countryId ? data[countryNameKey] = exports.getCountryName(countryId, language) : null;
}

const langMap = {ENG: 'en', SPA: 'es', FRE: 'fr', GER: 'de', ITA: 'it', JPN: 'ja', KOR: 'ko'};
exports.assignReadableNames = (data, language) => {
  language = language || 'ENG';
  const shortLang = langMap[language];
  if (!shortLang) {
    throw new TypeError(`Invalid language '${language}'`);
  }
  const findName = specificData => specificData && specificData.names.find(d => d.language === shortLang).name;

  const pkmnData = exports.getPokemonData(data.dexNo);
  data.speciesName = findName(pkmnData);
  data.growthRate = pkmnData.growth_rate.name;
  Object.assign(data, convertExperienceToLevelData(data.exp, data.growthRate));

  const natureData = exports.getNatureData(data.natureId);
  data.natureName = findName(natureData);
  const alternateForms = require('./data/alternate_forms');
  data.formName = alternateForms[data.dexNo] && alternateForms[data.dexNo][data.formId];
  data.increasedStat = abbreviateStat(natureData.increased_stat && natureData.increased_stat.name);
  data.decreasedStat = abbreviateStat(natureData.decreased_stat && natureData.decreased_stat.name);
  data.types = pkmnData.types;

  data.baseStatHp = pkmnData.base_stats.hp;
  data.baseStatAtk = pkmnData.base_stats.attack;
  data.baseStatDef = pkmnData.base_stats.defense;
  data.baseStatSpAtk = pkmnData.base_stats['special-attack'];
  data.baseStatSpDef = pkmnData.base_stats['special-defense'];
  data.baseStatSpe = pkmnData.base_stats.speed;

  ['Hp', 'Atk', 'Def', 'SpAtk', 'SpDef', 'Spe'].forEach(statName => assignCalculatedStat(data, statName));

  data.heldItemName = findName(exports.getItemData(data.heldItemId));
  /* For all the pokeballs obtainable in gen 6 (ball IDs 1-16), the ball ID is the same as the item ID for that ball.
  For johto balls (apricorn/sport), the ball IDs are 17-24 and the corresponding item IDs are 492-499, in the same order.
  For dream balls, the ball ID is 25 and the corresponding item ID is 576. */
  const correctedBallId = data.ballId < 17 ? data.ballId : data.ballId === 25 ? 576 : data.ballId + 475;
  data.ballName = findName(exports.getItemData(correctedBallId));
  data.abilityName = findName(exports.getAbilityData(data.abilityId));

  const move1Data = exports.getMoveData(data.move1Id);
  data.move1Name = move1Data && findName(move1Data);
  data.move1Type = move1Data && move1Data.type.name;
  data.move1Power = move1Data && move1Data.power;

  const move2Data = exports.getMoveData(data.move2Id);
  data.move2Name = move2Data && findName(move2Data);
  data.move2Type = move2Data && move2Data.type.name;
  data.move2Power = move2Data && move2Data.power;

  const move3Data = exports.getMoveData(data.move3Id);
  data.move3Name = move3Data && findName(move3Data);
  data.move3Type = move3Data && move3Data.type.name;
  data.move3Power = move3Data && move3Data.power;

  const move4Data = exports.getMoveData(data.move4Id);
  data.move4Name = move4Data && findName(move4Data);
  data.move4Type = move4Data && move4Data.type.name;
  data.move4Power = move4Data && move4Data.power;

  data.eggMove1Name = findName(exports.getMoveData(data.eggMove1Id));
  data.eggMove2Name = findName(exports.getMoveData(data.eggMove2Id));
  data.eggMove3Name = findName(exports.getMoveData(data.eggMove3Id));
  data.eggMove4Name = findName(exports.getMoveData(data.eggMove4Id));

  [1, 2, 3, 4, 5].forEach(num => assignRegionAndCountryNames(data, num, language));

  data.notOtMemory = exports.parseMemoryData(
    data.notOtMemoryIntensity,
    data.notOtMemoryLine,
    data.notOtMemoryFeeling,
    data.notOtMemoryTextVar,
    data.nickname,
    data.notOt,
    language
  );

  data.otMemory = exports.parseMemoryData(
    data.otMemoryIntensity,
    data.otMemoryLine,
    data.otMemoryFeeling,
    data.otMemoryTextVar,
    data.nickname,
    data.ot,
    language
  );

  data.medals = exports.getMedalData(data.medalData);
  data.ribbons = exports.getRibbonData(data.ribbonData);

  if (data.contestMemoryRibbonCount === 40) {
    data.ribbons.push('Contest Memory Ribbon (Gold)');
  } else if (data.contestMemoryRibbonCount) {
    data.ribbons.push('Contest Memory Ribbon');
  }

  if (data.battleMemoryRibbonCount === 8) {
    data.ribbons.push('Battle Memory Ribbon (Gold)');
  } else if (data.battleMemoryRibbonCount) {
    data.ribbons.push('Battle Memory Ribbon');
  }

  data.eggLocationName = exports.getLocationData(data.eggLocationId, data.otGameId, true);
  data.metLocationName = exports.getLocationData(data.metLocationId, data.otGameId);
  data.encounterTypeName = exports.getEncounterTypeData(data.encounterTypeId);
  data.otGameName = exports.getGameData(data.otGameId);

  data.countryName = exports.getCountryName(data.countryId, language);
  data.regionName = data.regionId ? exports.getSubregionName(data.countryId, data.regionId, language) : null;
  data.tsv = (data.tid ^ data.sid) >>> 4;
  data.esv = (data.pid & 0xffff ^ data.pid >>> 16) >>> 4;
  data.isShiny = !data.isEgg && data.tsv === data.esv;

  const hp = calculateHiddenPower(data.ivHp, data.ivAtk, data.ivDef, data.ivSpAtk, data.ivSpDef, data.ivSpe);
  data.hiddenPowerType = hp.type;
  data.hiddenPowerPower = hp.power;

  return data;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

function tryRequire (path, errorMessage) {
  try {
    return require(path);
  } catch (err) {
    throw errorMessage ? new TypeError(errorMessage) : err;
  }
  // TODO: Handle memory better if the process is running for a long time
}

exports.getPokemonData = dexNo => tryRequire(`./data/pokemon/${dexNo}`, `Invalid dex number: ${dexNo}`);
exports.getItemData = itemId => itemId ? tryRequire(`./data/item_gen6/${itemId}`, `Invalid item ID: ${itemId}`) : null;
exports.getMoveData = moveId => moveId ? tryRequire(`./data/move/${moveId}`, `Invalid move ID: ${moveId}`) : null;
exports.getAbilityData = abilId => abilId ? tryRequire(`./data/ability/${abilId}`, `Invalid ability ID: ${abilId}`) : null;
exports.getNatureData = natureId => tryRequire(`./data/nature/${natureId}`, `Invalid nature ID: ${natureId}`);

exports.getLocationData = (locationId, otGameId, isEggLocation) => {
  if (!locationId && isEggLocation) {
    return null;
  }
  if (otGameId >= 24 && otGameId <= 29 || otGameId === undefined) {
    return require('./data/location_gen6.json')[locationId] || null;
  }
  if (otGameId >= 20 && otGameId <= 23) {
    return require('./data/location_gen5.json')[locationId] || null;
  }
  if (!isEggLocation) {
    return 'Poke Transfer';
  }
  if (otGameId >= 7 && otGameId <= 12) {
    return require('./data/location_gen4.json')[locationId] || null;
  }
  if (otGameId >= 1 && otGameId <= 5 || otGameId === 15) {
    return require('./data/location_gen3.json')[locationId] || null;
  }
  return null;
};

exports.getRibbonData = ribbonData => {
  return parseMap(ribbonData, require('./data/ribbons.json'));
};

exports.getMedalData = medalData => {
  return parseMap(medalData, require('./data/medals.json'));
};

exports.getEncounterTypeData = encounterTypeId => {
  return require('./data/encounterTypes')[encounterTypeId];
};

exports.getGameData = gameId => require('./data/games.json')[gameId];

exports.getCountryName = (countryId, language) => require('./data/countries')[countryId][language];

exports.getSubregionName = (countryId, subregionId, language) => {
  const countryData = tryRequire(`./data/subregions/${countryId}`, `Invalid country ID ${countryId}`);
  try {
    return countryData[subregionId][language];
  } catch (err) {
    throw new TypeError(`Invalid subregion ID ${subregionId}`);
  }
};

function getTextVar (lineId, textVarId, language) {
  const shortLang = langMap[language];
  if ([5, 15, 26, 34, 40, 51].indexOf(lineId) !== -1) {
    return exports.getItemData(textVarId).names.find(d => d.language === shortLang).name;
  }
  if ([7, 9, 13, 14, 17, 18, 21, 25, 29, 44, 45, 50, 60].indexOf(lineId) !== -1) {
    return exports.getPokemonData(textVarId).names.find(d => d.language === shortLang).name;
  }
  if ([12, 16, 48, 49].indexOf(lineId) !== -1) {
    return exports.getMoveData(textVarId).names.find(d => d.language === shortLang).name;
  }
  if (lineId === 6) {
    return require('./data/location_gen6.json')[textVarId];
  }
  try {
    return require('./data/memories/memoryTextVars')[textVarId][language];
  } catch (err) {
    throw new TypeError(`Invalid memory textVar ID: ${textVarId}`);
  }
}

exports.parseMemoryData = (intensityId, lineId, feelingId, textVarId, nickname, trainerName, language) => {
  let intensity, line, feeling;
  const textVar = getTextVar(lineId, textVarId, language);
  try {
    line = require('./data/memories/memoryLines')[lineId][language];
  } catch (err) {
    throw new TypeError(`Invalid memory line ID: ${lineId}`);
  }
  if (lineId) {
    try {
      intensity = require('./data/memories/memoryIntensities')[intensityId][language];
    } catch (err) {
      throw new TypeError(`Invalid memory intensity ID: ${intensityId}`);
    }
    try {
      feeling = require('./data/memories/memoryFeelings')[feelingId][language];
    } catch (err) {
      throw new TypeError(`Invalid memory feeling ID: ${feelingId}`);
    }
  }
  return line
    .replace(/\{0\}/g, nickname)
    .replace(/\{1\}/g, trainerName)
    .replace(/\{2\}/g, textVar)
    .replace(/\{3\}/g, feeling)
    .replace(/\{4\}/g, intensity);
};

},{"./data/alternate_forms":1,"./data/countries":2,"./data/encounterTypes":3,"./data/games.json":4,"./data/location_gen3.json":5,"./data/location_gen4.json":6,"./data/location_gen5.json":7,"./data/location_gen6.json":8,"./data/medals.json":9,"./data/memories/memoryFeelings":10,"./data/memories/memoryIntensities":11,"./data/memories/memoryLines":12,"./data/memories/memoryTextVars":13,"./data/ribbons.json":14,"fs":18}],16:[function(require,module,exports){
;(function (exports) {
  'use strict'

  var i
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  var lookup = []
  for (i = 0; i < code.length; i++) {
    lookup[i] = code[i]
  }
  var revLookup = []

  for (i = 0; i < code.length; ++i) {
    revLookup[code.charCodeAt(i)] = i
  }
  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

  function decode (elt) {
    var v = revLookup[elt.charCodeAt(0)]
    return v !== undefined ? v : -1
  }

  function b64ToByteArray (b64) {
    var i, j, l, tmp, placeHolders, arr

    if (b64.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    var len = b64.length
    placeHolders = b64.charAt(len - 2) === '=' ? 2 : b64.charAt(len - 1) === '=' ? 1 : 0

    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr(b64.length * 3 / 4 - placeHolders)

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? b64.length - 4 : b64.length

    var L = 0

    function push (v) {
      arr[L++] = v
    }

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
      push((tmp & 0xFF0000) >> 16)
      push((tmp & 0xFF00) >> 8)
      push(tmp & 0xFF)
    }

    if (placeHolders === 2) {
      tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
      push(tmp & 0xFF)
    } else if (placeHolders === 1) {
      tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
      push((tmp >> 8) & 0xFF)
      push(tmp & 0xFF)
    }

    return arr
  }

  function encode (num) {
    return lookup[num]
  }

  function tripletToBase64 (num) {
    return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
  }

  function encodeChunk (uint8, start, end) {
    var temp
    var output = []
    for (var i = start; i < end; i += 3) {
      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
      output.push(tripletToBase64(temp))
    }
    return output.join('')
  }

  function uint8ToBase64 (uint8) {
    var i
    var extraBytes = uint8.length % 3 // if we have 1 byte left, pad 2 bytes
    var output = ''
    var parts = []
    var temp, length
    var maxChunkLength = 16383 // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later

    for (i = 0, length = uint8.length - extraBytes; i < length; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > length ? length : (i + maxChunkLength)))
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    switch (extraBytes) {
      case 1:
        temp = uint8[uint8.length - 1]
        output += encode(temp >> 2)
        output += encode((temp << 4) & 0x3F)
        output += '=='
        break
      case 2:
        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
        output += encode(temp >> 10)
        output += encode((temp >> 4) & 0x3F)
        output += encode((temp << 2) & 0x3F)
        output += '='
        break
      default:
        break
    }

    parts.push(output)

    return parts.join('')
  }

  exports.toByteArray = b64ToByteArray
  exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],17:[function(require,module,exports){
(function (Buffer){
/* global Blob, FileReader */

module.exports = function blobToBuffer (blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
    throw new Error('first argument must be a Blob')
  }
  if (typeof cb !== 'function') {
    throw new Error('second argument must be a function')
  }

  var reader = new FileReader()

  function onLoadEnd (e) {
    reader.removeEventListener('loadend', onLoadEnd, false)
    if (e.error) cb(e.error)
    else cb(null, new Buffer(reader.result))
  }

  reader.addEventListener('loadend', onLoadEnd, false)
  reader.readAsArrayBuffer(blob)
}

}).call(this,require("buffer").Buffer)
},{"buffer":19}],18:[function(require,module,exports){

},{}],19:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(array)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":16,"ieee754":21,"isarray":20}],20:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],21:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],22:[function(require,module,exports){
/* eslint-env browser */
'use strict';
function setOutput (obj) {
  document.getElementById('output').innerHTML = obj instanceof Error ? obj : JSON.stringify(obj, null, 4);
}
window.parseFile = fileList => {
  require('blob-to-buffer')(fileList[0].slice(0), (blobErr, result) => {
    try {
      setOutput(blobErr || require('.').parseBuffer(result), null, 4);
    } catch (parseErr) {
      setOutput(parseErr);
    }
  });
};

},{".":15,"blob-to-buffer":17}]},{},[22]);
