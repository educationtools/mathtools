const oldElements = [
    {
        "atomic_number": 1,
        "english": "Hydrogen",
        "german": "Wasserstoff",
        "symbol": "H",
        "atomic_mass": 1008,
        "period": 1,
        "group": 1,
        "row": 1,
        "column": 1
    },
    {
        "atomic_number": 2,
        "english": "Helium",
        "german": "Helium",
        "symbol": "He",
        "atomic_mass": 4003,
        "period": 1,
        "group": 18,
        "row": 1,
        "column": 18
    },
    {
        "atomic_number": 3,
        "english": "Lithium",
        "german": "Lithium",
        "symbol": "Li",
        "atomic_mass": 6939,
        "period": 2,
        "group": 1,
        "row": 2,
        "column": 1
    },
    {
        "atomic_number": 4,
        "english": "Beryllium",
        "german": "Beryllium",
        "symbol": "Be",
        "atomic_mass": 9012,
        "period": 2,
        "group": 2,
        "row": 2,
        "column": 2
    },
    {
        "atomic_number": 5,
        "english": "Boron",
        "german": "Bor",
        "symbol": "B",
        "atomic_mass": 10811,
        "period": 2,
        "group": 13,
        "row": 2,
        "column": 13
    },
    {
        "atomic_number": 6,
        "english": "Carbon",
        "german": "Kohlenstoff",
        "symbol": "C",
        "atomic_mass": 12011,
        "period": 2,
        "group": 14,
        "row": 2,
        "column": 14
    },
    {
        "atomic_number": 7,
        "english": "Nitrogen",
        "german": "Stickstoff",
        "symbol": "N",
        "atomic_mass": 14007,
        "period": 2,
        "group": 15,
        "row": 2,
        "column": 15
    },
    {
        "atomic_number": 8,
        "english": "Oxygen",
        "german": "Sauerstoff",
        "symbol": "O",
        "atomic_mass": 15999,
        "period": 2,
        "group": 16,
        "row": 2,
        "column": 16
    },
    {
        "atomic_number": 9,
        "english": "Fluorine",
        "german": "Fluor",
        "symbol": "F",
        "atomic_mass": 18998,
        "period": 2,
        "group": 17,
        "row": 2,
        "column": 17
    },
    {
        "atomic_number": 10,
        "english": "Neon",
        "german": "Neon",
        "symbol": "Ne",
        "atomic_mass": 20183,
        "period": 2,
        "group": 18,
        "row": 2,
        "column": 18
    },
    {
        "atomic_number": 11,
        "english": "Sodium",
        "german": "Natrium",
        "symbol": "Na",
        "atomic_mass": 22.99,
        "period": 3,
        "group": 1,
        "row": 3,
        "column": 1
    },
    {
        "atomic_number": 12,
        "english": "Magnesium",
        "german": "Magnesium",
        "symbol": "Mg",
        "atomic_mass": 24312,
        "period": 3,
        "group": 2,
        "row": 3,
        "column": 2
    },
    {
        "atomic_number": 13,
        "english": "Aluminium",
        "german": "Aluminium",
        "symbol": "Al",
        "atomic_mass": 26982,
        "period": 3,
        "group": 13,
        "row": 3,
        "column": 13
    },
    {
        "atomic_number": 14,
        "english": "Silicon",
        "german": "Silizium",
        "symbol": "Si",
        "atomic_mass": 28086,
        "period": 3,
        "group": 14,
        "row": 3,
        "column": 14
    },
    {
        "atomic_number": 15,
        "english": "Phosphorus",
        "german": "Phosphor",
        "symbol": "P",
        "atomic_mass": 30974,
        "period": 3,
        "group": 15,
        "row": 3,
        "column": 15
    },
    {
        "atomic_number": 16,
        "english": "Sulphur",
        "german": "Schwefel",
        "symbol": "S",
        "atomic_mass": 32064,
        "period": 3,
        "group": 16,
        "row": 3,
        "column": 16
    },
    {
        "atomic_number": 17,
        "english": "Chlorine",
        "german": "Chlor",
        "symbol": "Cl",
        "atomic_mass": 35453,
        "period": 3,
        "group": 17,
        "row": 3,
        "column": 17
    },
    {
        "atomic_number": 18,
        "english": "Argon",
        "german": "Argon",
        "symbol": "Ar",
        "atomic_mass": 39948,
        "period": 3,
        "group": 18,
        "row": 3,
        "column": 18
    },
    {
        "atomic_number": 19,
        "english": "Potassium",
        "german": "Kalium",
        "symbol": "K",
        "atomic_mass": 39102,
        "period": 4,
        "group": 1,
        "row": 4,
        "column": 1
    },
    {
        "atomic_number": 20,
        "english": "Calcium",
        "german": "Calcium",
        "symbol": "Ca",
        "atomic_mass": 40.08,
        "period": 4,
        "group": 2,
        "row": 4,
        "column": 2
    },
    {
        "atomic_number": 21,
        "english": "Scandium",
        "german": "Scandium",
        "symbol": "Sc",
        "atomic_mass": 44956,
        "period": 4,
        "group": 3,
        "row": 4,
        "column": 3
    },
    {
        "atomic_number": 22,
        "english": "Titanium",
        "german": "Titan",
        "symbol": "Ti",
        "atomic_mass": 47.9,
        "period": 4,
        "group": 4,
        "row": 4,
        "column": 4
    },
    {
        "atomic_number": 23,
        "english": "Vanadium",
        "german": "Vanadium",
        "symbol": "V",
        "atomic_mass": 50.94,
        "period": 4,
        "group": 5,
        "row": 4,
        "column": 5
    },
    {
        "atomic_number": 24,
        "english": "Chromium",
        "german": "Chrom",
        "symbol": "Cr",
        "atomic_mass": 52,
        "period": 4,
        "group": 6,
        "row": 4,
        "column": 6
    },
    {
        "atomic_number": 25,
        "english": "Manganese",
        "german": "Mangan",
        "symbol": "Mn",
        "atomic_mass": 54.94,
        "period": 4,
        "group": 7,
        "row": 4,
        "column": 7
    },
    {
        "atomic_number": 26,
        "english": "Iron",
        "german": "Eisen",
        "symbol": "Fe",
        "atomic_mass": 55.85,
        "period": 4,
        "group": 8,
        "row": 4,
        "column": 8
    },
    {
        "atomic_number": 27,
        "english": "Cobalt",
        "german": "Cobalt",
        "symbol": "Co",
        "atomic_mass": 58.93,
        "period": 4,
        "group": 9,
        "row": 4,
        "column": 9
    },
    {
        "atomic_number": 28,
        "english": "Nickel",
        "german": "Nickel",
        "symbol": "Ni",
        "atomic_mass": 58.71,
        "period": 4,
        "group": 10,
        "row": 4,
        "column": 10
    },
    {
        "atomic_number": 29,
        "english": "Copper",
        "german": "Kupfer",
        "symbol": "Cu",
        "atomic_mass": 63.54,
        "period": 4,
        "group": 11,
        "row": 4,
        "column": 11
    },
    {
        "atomic_number": 30,
        "english": "Zinc",
        "german": "Zink",
        "symbol": "Zn",
        "atomic_mass": 65.37,
        "period": 4,
        "group": 12,
        "row": 4,
        "column": 12
    },
    {
        "atomic_number": 31,
        "english": "Gallium",
        "german": "Gallium",
        "symbol": "Ga",
        "atomic_mass": 69.72,
        "period": 4,
        "group": 13,
        "row": 4,
        "column": 13
    },
    {
        "atomic_number": 32,
        "english": "Germanium",
        "german": "Germanium",
        "symbol": "Ge",
        "atomic_mass": 72.59,
        "period": 4,
        "group": 14,
        "row": 4,
        "column": 14
    },
    {
        "atomic_number": 33,
        "english": "Arsenic",
        "german": "Arsen",
        "symbol": "As",
        "atomic_mass": 74.92,
        "period": 4,
        "group": 15,
        "row": 4,
        "column": 15
    },
    {
        "atomic_number": 34,
        "english": "Selenium",
        "german": "Selenium",
        "symbol": "Se",
        "atomic_mass": 78.96,
        "period": 4,
        "group": 16,
        "row": 4,
        "column": 16
    },
    {
        "atomic_number": 35,
        "english": "Bromine",
        "german": "Brom",
        "symbol": "Br",
        "atomic_mass": 79909,
        "period": 4,
        "group": 17,
        "row": 4,
        "column": 17
    },
    {
        "atomic_number": 36,
        "english": "Krypton",
        "german": "Krypton",
        "symbol": "Kr",
        "atomic_mass": 83.8,
        "period": 4,
        "group": 18,
        "row": 4,
        "column": 18
    },
    {
        "atomic_number": 37,
        "english": "Rubidium",
        "german": "Rubidium",
        "symbol": "Rb",
        "atomic_mass": 85.47,
        "period": 5,
        "group": 1,
        "row": 5,
        "column": 1
    },
    {
        "atomic_number": 38,
        "english": "Strontium",
        "german": "Strontium",
        "symbol": "Sr",
        "atomic_mass": 87.62,
        "period": 5,
        "group": 2,
        "row": 5,
        "column": 2
    },
    {
        "atomic_number": 39,
        "english": "Yttrium",
        "german": "Yttrium",
        "symbol": "Y",
        "atomic_mass": 88905,
        "period": 5,
        "group": 3,
        "row": 5,
        "column": 3
    },
    {
        "atomic_number": 40,
        "english": "Zirconium",
        "german": "Zirconium",
        "symbol": "Zr",
        "atomic_mass": 91.22,
        "period": 5,
        "group": 4,
        "row": 5,
        "column": 4
    },
    {
        "atomic_number": 41,
        "english": "Niobium",
        "german": "Niob",
        "symbol": "Nb",
        "atomic_mass": 92906,
        "period": 5,
        "group": 5,
        "row": 5,
        "column": 5
    },
    {
        "atomic_number": 42,
        "english": "Molybdenum",
        "german": "Molybdän",
        "symbol": "Mo",
        "atomic_mass": 95.94,
        "period": 5,
        "group": 6,
        "row": 5,
        "column": 6
    },
    {
        "atomic_number": 43,
        "english": "Technetium",
        "german": "Technetium",
        "symbol": "Tc",
        "atomic_mass": 99,
        "period": 5,
        "group": 7,
        "row": 5,
        "column": 7
    },
    {
        "atomic_number": 44,
        "english": "Ruthenium",
        "german": "Ruthenium",
        "symbol": "Ru",
        "atomic_mass": 101.07,
        "period": 5,
        "group": 8,
        "row": 5,
        "column": 8
    },
    {
        "atomic_number": 45,
        "english": "Rhodium",
        "german": "Rhodium",
        "symbol": "Rh",
        "atomic_mass": 102.92,
        "period": 5,
        "group": 9,
        "row": 5,
        "column": 9
    },
    {
        "atomic_number": 46,
        "english": "Palladium",
        "german": "Palladium",
        "symbol": "Pd",
        "atomic_mass": 106.4,
        "period": 5,
        "group": 10,
        "row": 5,
        "column": 10
    },
    {
        "atomic_number": 47,
        "english": "Silver",
        "german": "Silber",
        "symbol": "Ag",
        "atomic_mass": 107.87,
        "period": 5,
        "group": 11,
        "row": 5,
        "column": 11
    },
    {
        "atomic_number": 48,
        "english": "Cadmium",
        "german": "Cadmium",
        "symbol": "Cd",
        "atomic_mass": 112.4,
        "period": 5,
        "group": 12,
        "row": 5,
        "column": 12
    },
    {
        "atomic_number": 49,
        "english": "Indium",
        "german": "Indium",
        "symbol": "In",
        "atomic_mass": 114.82,
        "period": 5,
        "group": 13,
        "row": 5,
        "column": 13
    },
    {
        "atomic_number": 50,
        "english": "Tin",
        "german": "Zinn",
        "symbol": "Sn",
        "atomic_mass": 118.69,
        "period": 5,
        "group": 14,
        "row": 5,
        "column": 14
    },
    {
        "atomic_number": 51,
        "english": "Antimony",
        "german": "Antimon",
        "symbol": "Sb",
        "atomic_mass": 121.75,
        "period": 5,
        "group": 15,
        "row": 5,
        "column": 15
    },
    {
        "atomic_number": 52,
        "english": "Tellurium",
        "german": "Tellur",
        "symbol": "Te",
        "atomic_mass": 127.6,
        "period": 5,
        "group": 16,
        "row": 5,
        "column": 16
    },
    {
        "atomic_number": 53,
        "english": "Iodine",
        "german": "Jod",
        "symbol": "I",
        "atomic_mass": 126904,
        "period": 5,
        "group": 17,
        "row": 5,
        "column": 17
    },
    {
        "atomic_number": 54,
        "english": "Xenon",
        "german": "Xenon",
        "symbol": "Xe",
        "atomic_mass": 131.3,
        "period": 5,
        "group": 18,
        "row": 5,
        "column": 18
    },
    {
        "atomic_number": 55,
        "english": "Caesium",
        "german": "Caesium",
        "symbol": "Cs",
        "atomic_mass": 132905,
        "period": 6,
        "group": 1,
        "row": 6,
        "column": 1
    },
    {
        "atomic_number": 56,
        "english": "Barium",
        "german": "Barium",
        "symbol": "Ba",
        "atomic_mass": 137.34,
        "period": 6,
        "group": 2,
        "row": 6,
        "column": 2
    },
    {
        "atomic_number": 57,
        "english": "Lanthanum",
        "german": "Lanthan",
        "symbol": "La",
        "atomic_mass": 138.91,
        "period": 6,
        "group": 3,
        "row": 9,
        "column": 3
    },
    {
        "atomic_number": 58,
        "english": "Cerium",
        "german": "Cer",
        "symbol": "Ce",
        "atomic_mass": 140.12,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 4
    },
    {
        "atomic_number": 59,
        "english": "Praseodymium",
        "german": "Praseodym",
        "symbol": "Pr",
        "atomic_mass": 140907,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 5
    },
    {
        "atomic_number": 60,
        "english": "Neodymium",
        "german": "Neodym",
        "symbol": "Nd",
        "atomic_mass": 144.24,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 6
    },
    {
        "atomic_number": 61,
        "english": "Promethium",
        "german": "Promethium",
        "symbol": "Pm",
        "atomic_mass": 147,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 7
    },
    {
        "atomic_number": 62,
        "english": "Samarium",
        "german": "Samarium",
        "symbol": "Sm",
        "atomic_mass": 150.35,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 8
    },
    {
        "atomic_number": 63,
        "english": "Europium",
        "german": "Europium",
        "symbol": "Eu",
        "atomic_mass": 151.96,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 9
    },
    {
        "atomic_number": 64,
        "english": "Gadolinium",
        "german": "Gadolinium",
        "symbol": "Gd",
        "atomic_mass": 157.25,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 10
    },
    {
        "atomic_number": 65,
        "english": "Terbium",
        "german": "Terbium",
        "symbol": "Tb",
        "atomic_mass": 158.92,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 11
    },
    {
        "atomic_number": 66,
        "english": "Dysprosium",
        "german": "Dysprosium",
        "symbol": "Dy",
        "atomic_mass": 162.5,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 12
    },
    {
        "atomic_number": 67,
        "english": "Holmium",
        "german": "Holmium",
        "symbol": "Ho",
        "atomic_mass": 164.93,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 13
    },
    {
        "atomic_number": 68,
        "english": "Erbium",
        "german": "Erbium",
        "symbol": "Er",
        "atomic_mass": 167.26,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 14
    },
    {
        "atomic_number": 69,
        "english": "Thulium",
        "german": "Thulium",
        "symbol": "Tm",
        "atomic_mass": 168.93,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 15
    },
    {
        "atomic_number": 70,
        "english": "Ytterbium",
        "german": "Ytterbium",
        "symbol": "Yb",
        "atomic_mass": 173.04,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 16
    },
    {
        "atomic_number": 71,
        "english": "Lutetium",
        "german": "Lutetium",
        "symbol": "Lu",
        "atomic_mass": 174.97,
        "period": 6,
        "group": "La",
        "row": 9,
        "column": 17
    },
    {
        "atomic_number": 72,
        "english": "Hafnium",
        "german": "Hafnium",
        "symbol": "Hf",
        "atomic_mass": 178.49,
        "period": 6,
        "group": 4,
        "row": 6,
        "column": 4
    },
    {
        "atomic_number": 73,
        "english": "Tantalum",
        "german": "Tantal",
        "symbol": "Ta",
        "atomic_mass": 180.95,
        "period": 6,
        "group": 5,
        "row": 6,
        "column": 5
    },
    {
        "atomic_number": 74,
        "english": "Tungsten",
        "german": "Wolfram",
        "symbol": "W",
        "atomic_mass": 183.85,
        "period": 6,
        "group": 6,
        "row": 6,
        "column": 6
    },
    {
        "atomic_number": 75,
        "english": "Rhenium",
        "german": "Rhenium",
        "symbol": "Re",
        "atomic_mass": 186.2,
        "period": 6,
        "group": 7,
        "row": 6,
        "column": 7
    },
    {
        "atomic_number": 76,
        "english": "Osmium",
        "german": "Osmium",
        "symbol": "Os",
        "atomic_mass": 190.2,
        "period": 6,
        "group": 8,
        "row": 6,
        "column": 8
    },
    {
        "atomic_number": 77,
        "english": "Iridium",
        "german": "Iridium",
        "symbol": "Ir",
        "atomic_mass": 192.2,
        "period": 6,
        "group": 9,
        "row": 6,
        "column": 9
    },
    {
        "atomic_number": 78,
        "english": "Platinum",
        "german": "Platin",
        "symbol": "Pt",
        "atomic_mass": 195.09,
        "period": 6,
        "group": 10,
        "row": 6,
        "column": 10
    },
    {
        "atomic_number": 79,
        "english": "Gold",
        "german": "Gold",
        "symbol": "Au",
        "atomic_mass": 196.97,
        "period": 6,
        "group": 11,
        "row": 6,
        "column": 11
    },
    {
        "atomic_number": 80,
        "english": "Mercury",
        "german": "Quecksilber",
        "symbol": "Hg",
        "atomic_mass": 200.59,
        "period": 6,
        "group": 12,
        "row": 6,
        "column": 12
    },
    {
        "atomic_number": 81,
        "english": "Thallium",
        "german": "Thallium",
        "symbol": "Tl",
        "atomic_mass": 204.37,
        "period": 6,
        "group": 13,
        "row": 6,
        "column": 13
    },
    {
        "atomic_number": 82,
        "english": "Lead",
        "german": "Blei",
        "symbol": "Pb",
        "atomic_mass": 207.19,
        "period": 6,
        "group": 14,
        "row": 6,
        "column": 14
    },
    {
        "atomic_number": 83,
        "english": "Bismuth",
        "german": "Wismut",
        "symbol": "Bi",
        "atomic_mass": 208.98,
        "period": 6,
        "group": 15,
        "row": 6,
        "column": 15
    },
    {
        "atomic_number": 84,
        "english": "Polonium",
        "german": "Polonium",
        "symbol": "Po",
        "atomic_mass": 210,
        "period": 6,
        "group": 16,
        "row": 6,
        "column": 16
    },
    {
        "atomic_number": 85,
        "english": "Astatine",
        "german": "Astat",
        "symbol": "At",
        "atomic_mass": 211,
        "period": 6,
        "group": 17,
        "row": 6,
        "column": 17
    },
    {
        "atomic_number": 86,
        "english": "Radon",
        "german": "Radon",
        "symbol": "Rn",
        "atomic_mass": 222,
        "period": 6,
        "group": 18,
        "row": 6,
        "column": 18
    },
    {
        "atomic_number": 87,
        "english": "Francium",
        "german": "Francium",
        "symbol": "Fr",
        "atomic_mass": 223,
        "period": 7,
        "group": 1,
        "row": 7,
        "column": 1
    },
    {
        "atomic_number": 88,
        "english": "Radium",
        "german": "Radium",
        "symbol": "Ra",
        "atomic_mass": 226.05,
        "period": 7,
        "group": 2,
        "row": 7,
        "column": 2
    },
    {
        "atomic_number": 89,
        "english": "Actinium",
        "german": "Actinium",
        "symbol": "Ac",
        "atomic_mass": 227.05,
        "period": 7,
        "group": 3,
        "row": 10,
        "column": 3
    },
    {
        "atomic_number": 90,
        "english": "Thorium",
        "german": "Thorium",
        "symbol": "Th",
        "atomic_mass": 232.12,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 4
    },
    {
        "atomic_number": 91,
        "english": "Protactinium",
        "german": "Protactinium",
        "symbol": "Pa",
        "atomic_mass": 231.05,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 5
    },
    {
        "atomic_number": 92,
        "english": "Uranium",
        "german": "Uran",
        "symbol": "U",
        "atomic_mass": 238.07,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 6
    },
    {
        "atomic_number": 93,
        "english": "Neptunium",
        "german": "Neptunium",
        "symbol": "Np",
        "atomic_mass": 237,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 7
    },
    {
        "atomic_number": 94,
        "english": "Plutonium",
        "german": "Plutonium",
        "symbol": "Pu",
        "atomic_mass": 239,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 8
    },
    {
        "atomic_number": 95,
        "english": "Americium",
        "german": "Americium",
        "symbol": "Am",
        "atomic_mass": 241,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 9
    },
    {
        "atomic_number": 96,
        "english": "Curium",
        "german": "Curium",
        "symbol": "Cm",
        "atomic_mass": 242,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 10
    },
    {
        "atomic_number": 97,
        "english": "Berkelium",
        "german": "Berkelium",
        "symbol": "Bk",
        "atomic_mass": 243,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 11
    },
    {
        "atomic_number": 98,
        "english": "Californium",
        "german": "Californium",
        "symbol": "Cf",
        "atomic_mass": 251,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 12
    },
    {
        "atomic_number": 99,
        "english": "Einsteinium",
        "german": "Einsteinium",
        "symbol": "Es",
        "atomic_mass": 246,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 13
    },
    {
        "atomic_number": 100,
        "english": "Fermium",
        "german": "Fermium",
        "symbol": "Fm",
        "atomic_mass": 250,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 14
    },
    {
        "atomic_number": 101,
        "english": "Mendelevium",
        "german": "Mendelevium",
        "symbol": "Md",
        "atomic_mass": 256,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 15
    },
    {
        "atomic_number": 102,
        "english": "Nobelium",
        "german": "Nobelium",
        "symbol": "No",
        "atomic_mass": 254,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 16
    },
    {
        "atomic_number": 103,
        "english": "Lawrencium",
        "german": "Lawrencium",
        "symbol": "Lr",
        "atomic_mass": 257,
        "period": 7,
        "group": "Ac",
        "row": 10,
        "column": 17
    },
    {
        "atomic_number": 104,
        "english": "Rutherfordium",
        "german": "Rutherfordium",
        "symbol": "Rf",
        "atomic_mass": 267,
        "period": 7,
        "group": 4,
        "row": 7,
        "column": 4
    },
    {
        "atomic_number": 105,
        "english": "Dubnium",
        "german": "Dubnium",
        "symbol": "Db",
        "atomic_mass": 268,
        "period": 7,
        "group": 5,
        "row": 7,
        "column": 5
    },
    {
        "atomic_number": 106,
        "english": "Seaborgium",
        "german": "Seaborgium",
        "symbol": "Sg",
        "atomic_mass": 271,
        "period": 7,
        "group": 6,
        "row": 7,
        "column": 6
    },
    {
        "atomic_number": 107,
        "english": "Bohrium",
        "german": "Bohrium",
        "symbol": "Bh",
        "atomic_mass": "",
        "period": 7,
        "group": 7,
        "row": 7,
        "column": 7
    },
    {
        "atomic_number": 108,
        "english": "Hassium",
        "german": "Hassium",
        "symbol": "Hs",
        "atomic_mass": "",
        "period": 7,
        "group": 8,
        "row": 7,
        "column": 8
    },
    {
        "atomic_number": 109,
        "english": "Meitnerium",
        "german": "Meitnerium",
        "symbol": "Mt",
        "atomic_mass": "",
        "period": 7,
        "group": 9,
        "row": 7,
        "column": 9
    },
    {
        "atomic_number": 110,
        "english": "Darmstadtium",
        "german": "Darmstadtium",
        "symbol": "Ds",
        "atomic_mass": "",
        "period": 7,
        "group": 10,
        "row": 7,
        "column": 10
    },
    {
        "atomic_number": 111,
        "english": "Roentgenium",
        "german": "Roentgenium",
        "symbol": "Rg",
        "atomic_mass": "",
        "period": 7,
        "group": 11,
        "row": 7,
        "column": 11
    },
    {
        "atomic_number": 112,
        "english": "Copernicium",
        "german": "Copernicium",
        "symbol": "Cn",
        "atomic_mass": "",
        "period": 7,
        "group": 12,
        "row": 7,
        "column": 12
    },
    {
        "atomic_number": 113,
        "english": "Ununtrium",
        "german": "Ununtrium",
        "symbol": "Uut",
        "atomic_mass": "",
        "period": 7,
        "group": 13,
        "row": 7,
        "column": 13
    },
    {
        "atomic_number": 114,
        "english": "Flerovium",
        "german": "Flerovium",
        "symbol": "Fl",
        "atomic_mass": "",
        "period": 7,
        "group": 14,
        "row": 7,
        "column": 14
    },
    {
        "atomic_number": 115,
        "english": "Ununpentium",
        "german": "Ununpentium",
        "symbol": "Uup",
        "atomic_mass": "",
        "period": 7,
        "group": 15,
        "row": 7,
        "column": 15
    },
    {
        "atomic_number": 116,
        "english": "Livermorium",
        "german": "Livermorium",
        "symbol": "Lv",
        "atomic_mass": "",
        "period": 7,
        "group": 16,
        "row": 7,
        "column": 16
    },
    {
        "atomic_number": 117,
        "english": "Ununseptium",
        "german": "Ununseptium",
        "symbol": "Uus",
        "atomic_mass": "",
        "period": 7,
        "group": 17,
        "row": 7,
        "column": 17
    },
    {
        "atomic_number": 118,
        "english": "Ununoctium",
        "german": "Ununoctium",
        "symbol": "Uuo",
        "atomic_mass": "",
        "period": 7,
        "group": 18,
        "row": 7,
        "column": 18
    }
];

let elementsSortedByRowCol = {};

let width = 1;
let height = 1;

for (let element of oldElements) {
    // Get row and column index
    const row = element.row;
    const column = element.column;

    // Check whether width (height) is higher than other to get the width (height) of table
    if (column > width) {
        width = column;
    }
    if (row > height) {
        height = row;
    }

    // Check if it exists, if not, then create
    if (!(row in elementsSortedByRowCol)) {
        elementsSortedByRowCol[row] = {};
    }

    // Add element to list
    elementsSortedByRowCol[row][column] = element;

    // Print element
    console.log(element);
}

console.log(elementsSortedByRowCol);

let elements = [];

for (let y = 0; y < height; y++) {
    console.log("Y" + y);
    elements.push([]);

    for (let x = 0; x < width; x++) {
        elements[y].push(null);
        console.log(y + 1);
        if (y + 1 in elementsSortedByRowCol) {
            if (x + 1 in elementsSortedByRowCol[y + 1]) {
                elements[y][x] = elementsSortedByRowCol[y + 1][x + 1];
            }
            console.log("X" + x);
        }
    }

}
console.log(elements);

console.log(height);
console.log(width);

const groups = [
    {
        width: 2,
        name: "Hauptgruppe",
        subgroups: [
            {
                width: 1,
                name: "I"
            },
            {
                width: 1,
                name: "II"
            }
        ]
    },
    {
        width: 10,
        name: "Nebengruppe",
        subgroups: [
            {
                width: 1,
                name: "III"
            },
            {
                width: 1,
                name: "IV"
            },
            {
                width: 1,
                name: "V"
            },
            {
                width: 1,
                name: "VI"
            },
            {
                width: 1,
                name: "VII"
            },
            {
                width: 3,
                name: "VIII"
            },
            {
                width: 1,
                name: "I"
            },
            {
                width: 1,
                name: "II"
            }
        ]
    },
    {
        width: 6,
        name: "Hauptgruppe",
        subgroups: [
            {
                width: 1,
                name: "III"
            },
            {
                width: 1,
                name: "IV"
            },
            {
                width: 1,
                name: "V"
            },
            {
                width: 1,
                name: "VI"
            },
            {
                width: 1,
                name: "VII"
            },
            {
                width: 1,
                name: "VIII"
            }
        ]
    },
];

const periodicTable = {
    width_in_percent: 100 / width,
    elements: elements,
    groups: groups
};


export default periodicTable;