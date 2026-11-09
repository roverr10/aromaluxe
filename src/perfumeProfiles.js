// Perfiles olfativos oficiales de cada perfume (acordes, pirámide, longevidad, estela y momento de uso).
// Se aplican una sola vez a los productos guardados; luego se editan desde el panel de administración.
export const PERFUME_PROFILES = {
    "al-3": {
        "accords": [
            {
                "name": "Cítrico",
                "pct": 35
            },
            {
                "name": "Ahumado",
                "pct": 25
            },
            {
                "name": "Frutal",
                "pct": 20
            },
            {
                "name": "Amaderado",
                "pct": 12
            },
            {
                "name": "Cuero",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Limón",
                "piña",
                "grosella negra",
                "bergamota",
                "manzana"
            ],
            "heart": [
                "Abedul ahumado",
                "rosa",
                "jazmín"
            ],
            "base": [
                "Almizcle blanco",
                "ámbar gris",
                "pachulí",
                "vainilla"
            ]
        },
        "seasons": {
            "winter": 30,
            "spring": 90,
            "summer": 75,
            "autumn": 90,
            "day": 50,
            "night": 95
        },
        "longevity": "Duradera a Muy Duradera (9 - 12 hrs)",
        "longevityPct": 98,
        "sillage": "Pesada a Enorme",
        "sillagePct": 90
    },
    "al-4": {
        "accords": [
            {
                "name": "Especiado cálido",
                "pct": 30
            },
            {
                "name": "Vainilla",
                "pct": 25
            },
            {
                "name": "Cacao",
                "pct": 20
            },
            {
                "name": "Licoroso",
                "pct": 15
            },
            {
                "name": "Amaderado",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Ciruela Mirabel",
                "lavanda",
                "pimienta rosa"
            ],
            "heart": [
                "Vainas de cacao",
                "davana",
                "nuez moscada"
            ],
            "base": [
                "Vainilla Bourbon",
                "ámbar resinoso",
                "vetiver"
            ]
        },
        "seasons": {
            "winter": 98,
            "spring": 10,
            "summer": 5,
            "autumn": 90,
            "day": 20,
            "night": 98
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-1": {
        "accords": [
            {
                "name": "Dulce",
                "pct": 32
            },
            {
                "name": "Frutal",
                "pct": 28
            },
            {
                "name": "Tropical",
                "pct": 20
            },
            {
                "name": "Ámbar",
                "pct": 12
            },
            {
                "name": "Almizcle",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Notas verdes",
                "bergamota"
            ],
            "heart": [
                "Melón maduro",
                "piña",
                "notas dulces",
                "ámbar"
            ],
            "base": [
                "Vainilla cremosa",
                "almizcle sintético",
                "maderas nobles"
            ]
        },
        "seasons": {
            "winter": 40,
            "spring": 85,
            "summer": 80,
            "autumn": 90,
            "day": 60,
            "night": 95
        },
        "longevity": "Muy Duradera (12+ hrs)",
        "longevityPct": 98,
        "sillage": "Enorme / Estela Pesada",
        "sillagePct": 96
    },
    "al-2": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 30
            },
            {
                "name": "Especiado cálido",
                "pct": 25
            },
            {
                "name": "Ahumado",
                "pct": 20
            },
            {
                "name": "Amaderado",
                "pct": 15
            },
            {
                "name": "Resinoso",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Mango asado",
                "pimienta negra",
                "especias orientales"
            ],
            "heart": [
                "Incienso de olíbano",
                "cuero tratado",
                "maderas quemadas"
            ],
            "base": [
                "Ámbar gris",
                "vetiver",
                "almizcles oscuros"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 15,
            "summer": 5,
            "autumn": 90,
            "day": 15,
            "night": 95
        },
        "longevity": "Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-5": {
        "accords": [
            {
                "name": "Dulce",
                "pct": 30
            },
            {
                "name": "Cítrico",
                "pct": 25
            },
            {
                "name": "Caramelo",
                "pct": 20
            },
            {
                "name": "Especiado cálido",
                "pct": 15
            },
            {
                "name": "Aromático",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Mandarina",
                "naranja sanguina",
                "azafrán",
                "salvia"
            ],
            "heart": [
                "Caramelo tostado",
                "haba tonka",
                "caléndula (tagetes)"
            ],
            "base": [
                "Ambroxan",
                "cedro de Virginia",
                "vetiver"
            ]
        },
        "seasons": {
            "winter": 85,
            "spring": 80,
            "summer": 35,
            "autumn": 90,
            "day": 50,
            "night": 90
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-6": {
        "accords": [
            {
                "name": "Cítrico",
                "pct": 32
            },
            {
                "name": "Frutal",
                "pct": 28
            },
            {
                "name": "Acuático",
                "pct": 22
            },
            {
                "name": "Fresco",
                "pct": 10
            },
            {
                "name": "Almizclado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Manzana helada",
                "bergamota italiana",
                "limón",
                "anís estrellado"
            ],
            "heart": [
                "Ciruela dulce",
                "flor de azahar",
                "cardamomo"
            ],
            "base": [
                "Ámbar gris",
                "maderas flotantes (driftwood)",
                "almizcle vegetal",
                "musgo de roble"
            ]
        },
        "seasons": {
            "winter": 10,
            "spring": 85,
            "summer": 99,
            "autumn": 30,
            "day": 95,
            "night": 70
        },
        "longevity": "Muy Duradera (9 - 11 hrs)",
        "longevityPct": 92,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-8": {
        "accords": [
            {
                "name": "Especiado cálido",
                "pct": 30
            },
            {
                "name": "Amaderado",
                "pct": 25
            },
            {
                "name": "Ámbar",
                "pct": 20
            },
            {
                "name": "Ahumado",
                "pct": 15
            },
            {
                "name": "Vainilla",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Canela molida",
                "cardamomo concentrado",
                "cítricos especiados"
            ],
            "heart": [
                "Incienso",
                "clavo de olor",
                "lavanda silvestre"
            ],
            "base": [
                "Ámbar resinoso",
                "maderas oscuras",
                "pachulí",
                "vainilla"
            ]
        },
        "seasons": {
            "winter": 98,
            "spring": 10,
            "summer": 5,
            "autumn": 90,
            "day": 15,
            "night": 98
        },
        "longevity": "Muy Duradera (10 - 12+ hrs)",
        "longevityPct": 98,
        "sillage": "Enorme / Estela Pesada",
        "sillagePct": 96
    },
    "al-9": {
        "accords": [
            {
                "name": "Acuático",
                "pct": 35
            },
            {
                "name": "Cítrico",
                "pct": 25
            },
            {
                "name": "Verde",
                "pct": 20
            },
            {
                "name": "Aromático",
                "pct": 12
            },
            {
                "name": "Amaderado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Yuzu efervescente",
                "bergamota",
                "pimienta rosa"
            ],
            "heart": [
                "Hojas de violeta",
                "acorde marino ozónico"
            ],
            "base": [
                "Madera de guayaco",
                "ámbar claro",
                "almizcles limpios"
            ]
        },
        "seasons": {
            "winter": 15,
            "spring": 90,
            "summer": 95,
            "autumn": 40,
            "day": 90,
            "night": 40
        },
        "longevity": "Moderada (6 - 8 hrs)",
        "longevityPct": 67,
        "sillage": "Moderada",
        "sillagePct": 55
    },
    "al-12": {
        "accords": [
            {
                "name": "Dulce",
                "pct": 32
            },
            {
                "name": "Vainilla",
                "pct": 28
            },
            {
                "name": "Frutal",
                "pct": 20
            },
            {
                "name": "Especiado cálido",
                "pct": 12
            },
            {
                "name": "Ambarado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Manzana verde",
                "canela dulce",
                "lavanda",
                "bergamota"
            ],
            "heart": [
                "Flor de azahar del naranjo",
                "lirio de los valles"
            ],
            "base": [
                "Vainilla",
                "haba tonka",
                "ámbar",
                "pachulí"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 30,
            "summer": 10,
            "autumn": 90,
            "day": 25,
            "night": 98
        },
        "longevity": "Muy Duradera (10 - 12 hrs)",
        "longevityPct": 98,
        "sillage": "Enorme / Estela Pesada",
        "sillagePct": 96
    },
    "al-15": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 35
            },
            {
                "name": "Acuático",
                "pct": 25
            },
            {
                "name": "Dulce",
                "pct": 20
            },
            {
                "name": "Ozónico",
                "pct": 12
            },
            {
                "name": "Ambarado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Sandía jugosa",
                "bergamota fresca",
                "lavanda"
            ],
            "heart": [
                "Calone",
                "notas marinas salinas",
                "flor de azahar"
            ],
            "base": [
                "Ámbar denso",
                "cedro",
                "sándalo"
            ]
        },
        "seasons": {
            "winter": 20,
            "spring": 90,
            "summer": 98,
            "autumn": 60,
            "day": 85,
            "night": 85
        },
        "longevity": "Muy Duradera (10 - 12+ hrs)",
        "longevityPct": 98,
        "sillage": "Enorme / Estela Pesada",
        "sillagePct": 96
    },
    "al-18": {
        "accords": [
            {
                "name": "Especiado cálido",
                "pct": 30
            },
            {
                "name": "Ámbar",
                "pct": 25
            },
            {
                "name": "Amaderado",
                "pct": 20
            },
            {
                "name": "Vainilla",
                "pct": 15
            },
            {
                "name": "Café",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Pimienta negra",
                "piña",
                "hojas de tabaco seco"
            ],
            "heart": [
                "Café tostado",
                "pachulí",
                "raíz de iris"
            ],
            "base": [
                "Ámbar denso",
                "vainilla",
                "maderas secas",
                "benzoíno",
                "ládano"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 25,
            "summer": 10,
            "autumn": 90,
            "day": 25,
            "night": 95
        },
        "longevity": "Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-10": {
        "accords": [
            {
                "name": "Dulce",
                "pct": 32
            },
            {
                "name": "Atalcado",
                "pct": 28
            },
            {
                "name": "Vainilla",
                "pct": 20
            },
            {
                "name": "Floral",
                "pct": 12
            },
            {
                "name": "Tropical",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Orquídea",
                "heliotropo",
                "mandarina"
            ],
            "heart": [
                "Acorde gourmand cremoso",
                "frutas tropicales"
            ],
            "base": [
                "Vainilla",
                "almizcle blanco",
                "sándalo cremoso"
            ]
        },
        "seasons": {
            "winter": 50,
            "spring": 90,
            "summer": 85,
            "autumn": 80,
            "day": 90,
            "night": 65
        },
        "longevity": "Moderada a Duradera (6 - 8 hrs)",
        "longevityPct": 67,
        "sillage": "Moderada",
        "sillagePct": 55
    },
    "al-7": {
        "accords": [
            {
                "name": "Dulce",
                "pct": 30
            },
            {
                "name": "Vainilla",
                "pct": 28
            },
            {
                "name": "Especiado cálido",
                "pct": 20
            },
            {
                "name": "Amaderado",
                "pct": 12
            },
            {
                "name": "Ámbar",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Manzana silvestre",
                "cardamomo",
                "pimienta negra"
            ],
            "heart": [
                "Canela",
                "lavanda",
                "iris"
            ],
            "base": [
                "Vainilla de Madagascar",
                "ámbar negro",
                "maderas ahumadas"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 15,
            "summer": 5,
            "autumn": 90,
            "day": 15,
            "night": 99
        },
        "longevity": "Muy Duradera (9 - 11 hrs)",
        "longevityPct": 92,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-11": {
        "accords": [
            {
                "name": "Especiado cálido",
                "pct": 30
            },
            {
                "name": "Vainilla",
                "pct": 25
            },
            {
                "name": "Gourmand",
                "pct": 20
            },
            {
                "name": "Amaderado",
                "pct": 15
            },
            {
                "name": "Castaña",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Cardamomo",
                "pimienta rosa",
                "hojas de violeta",
                "menta"
            ],
            "heart": [
                "Piña",
                "melón",
                "salvia",
                "canela"
            ],
            "base": [
                "Vainilla",
                "acorde de castaña tostada",
                "cedro",
                "ámbar"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 30,
            "summer": 10,
            "autumn": 90,
            "day": 30,
            "night": 90
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-13": {
        "accords": [
            {
                "name": "Cítrico",
                "pct": 32
            },
            {
                "name": "Frutal",
                "pct": 28
            },
            {
                "name": "Acuático",
                "pct": 20
            },
            {
                "name": "Coco",
                "pct": 12
            },
            {
                "name": "Almizclado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Lima efervescente",
                "bergamota",
                "agua de coco"
            ],
            "heart": [
                "Brisa oceánica",
                "jazmín acuático",
                "melón fresco"
            ],
            "base": [
                "Almizcle blanco",
                "maderas flotantes",
                "ámbar cristalino"
            ]
        },
        "seasons": {
            "winter": 5,
            "spring": 65,
            "summer": 99,
            "autumn": 20,
            "day": 90,
            "night": 50
        },
        "longevity": "Duradera (7 - 8 hrs)",
        "longevityPct": 67,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-16": {
        "accords": [
            {
                "name": "Ámbar",
                "pct": 32
            },
            {
                "name": "Amaderado",
                "pct": 28
            },
            {
                "name": "Especiado",
                "pct": 20
            },
            {
                "name": "Balsámico",
                "pct": 12
            },
            {
                "name": "Oud",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Azafrán",
                "bergamota",
                "nuez moscada"
            ],
            "heart": [
                "Rosa de Damasco",
                "incienso de olíbano",
                "maderas leñosas"
            ],
            "base": [
                "Ámbar dorado",
                "madera de oud pulida",
                "vainilla",
                "sándalo"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 25,
            "summer": 10,
            "autumn": 90,
            "day": 20,
            "night": 95
        },
        "longevity": "Muy Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-25": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 35
            },
            {
                "name": "Floral",
                "pct": 28
            },
            {
                "name": "Fresco",
                "pct": 18
            },
            {
                "name": "Atalcado",
                "pct": 11
            },
            {
                "name": "Vainilla",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Lichi",
                "frambuesa jugosa",
                "hojas de violeta"
            ],
            "heart": [
                "Rosa",
                "peonía",
                "jazmín"
            ],
            "base": [
                "Vainilla cremosa",
                "almizcle blanco"
            ]
        },
        "seasons": {
            "winter": 20,
            "spring": 95,
            "summer": 90,
            "autumn": 50,
            "day": 90,
            "night": 50
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-14": {
        "accords": [
            {
                "name": "Metálico",
                "pct": 32
            },
            {
                "name": "Acuático",
                "pct": 28
            },
            {
                "name": "Cítrico",
                "pct": 20
            },
            {
                "name": "Fresco",
                "pct": 12
            },
            {
                "name": "Aromático",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Toronja helada",
                "bergamota",
                "acorde metálico brillante"
            ],
            "heart": [
                "Romero",
                "notas ozónicas",
                "geranio"
            ],
            "base": [
                "Ambroxan",
                "almizcle limpio",
                "madera de cedro"
            ]
        },
        "seasons": {
            "winter": 10,
            "spring": 90,
            "summer": 95,
            "autumn": 40,
            "day": 90,
            "night": 40
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada",
        "sillagePct": 55
    },
    "al-17": {
        "accords": [
            {
                "name": "Vainilla",
                "pct": 30
            },
            {
                "name": "Cuero",
                "pct": 28
            },
            {
                "name": "Especiado",
                "pct": 20
            },
            {
                "name": "Amaderado",
                "pct": 14
            },
            {
                "name": "Aromático",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Pimienta rosa",
                "bergamota",
                "lavanda"
            ],
            "heart": [
                "Vainilla Bourbon",
                "iris",
                "vetiver"
            ],
            "base": [
                "Cuero italiano",
                "ámbar denso",
                "madera de guayaco"
            ]
        },
        "seasons": {
            "winter": 95,
            "spring": 25,
            "summer": 10,
            "autumn": 90,
            "day": 25,
            "night": 95
        },
        "longevity": "Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-19": {
        "accords": [
            {
                "name": "Acuático",
                "pct": 35
            },
            {
                "name": "Salado",
                "pct": 28
            },
            {
                "name": "Cítrico",
                "pct": 20
            },
            {
                "name": "Verde",
                "pct": 10
            },
            {
                "name": "Mineral",
                "pct": 7
            }
        ],
        "pyramid": {
            "top": [
                "Bergamota de Calabria",
                "limón",
                "acorde marino salino"
            ],
            "heart": [
                "Lavanda marina",
                "flor de azahar",
                "brisa oceánica"
            ],
            "base": [
                "Ambroxan",
                "cedro de Virginia",
                "musgo de roble"
            ]
        },
        "seasons": {
            "winter": 10,
            "spring": 85,
            "summer": 98,
            "autumn": 30,
            "day": 95,
            "night": 45
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-20": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 32
            },
            {
                "name": "Dulce",
                "pct": 28
            },
            {
                "name": "Gourmand",
                "pct": 20
            },
            {
                "name": "Ozónico",
                "pct": 12
            },
            {
                "name": "Ambarado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Sandía concentrada",
                "ciruela",
                "frutos del bosque"
            ],
            "heart": [
                "Flor de azahar",
                "canela",
                "calone acuático"
            ],
            "base": [
                "Ámbar denso",
                "haba tonka",
                "sándalo",
                "pachulí"
            ]
        },
        "seasons": {
            "winter": 50,
            "spring": 85,
            "summer": 80,
            "autumn": 90,
            "day": 40,
            "night": 95
        },
        "longevity": "Muy Duradera (12+ hrs)",
        "longevityPct": 98,
        "sillage": "Enorme / Estela Pesada",
        "sillagePct": 96
    },
    "al-21": {
        "accords": [
            {
                "name": "Amaderado",
                "pct": 30
            },
            {
                "name": "Mineral",
                "pct": 25
            },
            {
                "name": "Especiado fresco",
                "pct": 20
            },
            {
                "name": "Aromático",
                "pct": 15
            },
            {
                "name": "Ámbar",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Mandarina silvestre",
                "cardamomo",
                "romero"
            ],
            "heart": [
                "Incienso resinoso",
                "pimienta negra",
                "nuez moscada"
            ],
            "base": [
                "Ámbar mineral",
                "vetiver de Haití",
                "cedro",
                "almizcles"
            ]
        },
        "seasons": {
            "winter": 50,
            "spring": 90,
            "summer": 40,
            "autumn": 90,
            "day": 75,
            "night": 80
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada",
        "sillagePct": 55
    },
    "al-22": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 35
            },
            {
                "name": "Tropical",
                "pct": 30
            },
            {
                "name": "Dulce",
                "pct": 18
            },
            {
                "name": "Coco",
                "pct": 10
            },
            {
                "name": "Avainillado",
                "pct": 7
            }
        ],
        "pyramid": {
            "top": [
                "Mango jugoso",
                "maracuyá",
                "piña"
            ],
            "heart": [
                "Flor de tiare",
                "agua de coco"
            ],
            "base": [
                "Almizcle blanco",
                "sándalo",
                "vainilla"
            ]
        },
        "seasons": {
            "winter": 5,
            "spring": 65,
            "summer": 99,
            "autumn": 30,
            "day": 95,
            "night": 55
        },
        "longevity": "Duradera (7 - 8 hrs)",
        "longevityPct": 67,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-23": {
        "accords": [
            {
                "name": "Fresco especiado",
                "pct": 32
            },
            {
                "name": "Cítrico",
                "pct": 28
            },
            {
                "name": "Amaderado",
                "pct": 20
            },
            {
                "name": "Aromático",
                "pct": 12
            },
            {
                "name": "Almizclado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Bergamota",
                "toronja",
                "pimienta rosa"
            ],
            "heart": [
                "Lavanda",
                "geranio",
                "nuez moscada"
            ],
            "base": [
                "Vetiver",
                "ambroxan",
                "cedro",
                "pachulí"
            ]
        },
        "seasons": {
            "winter": 30,
            "spring": 90,
            "summer": 85,
            "autumn": 80,
            "day": 90,
            "night": 50
        },
        "longevity": "Moderada a Duradera (6 - 8 hrs)",
        "longevityPct": 67,
        "sillage": "Moderada",
        "sillagePct": 55
    },
    "al-24": {
        "accords": [
            {
                "name": "Gourmand",
                "pct": 32
            },
            {
                "name": "Avellana",
                "pct": 28
            },
            {
                "name": "Vainilla",
                "pct": 20
            },
            {
                "name": "Cacao",
                "pct": 12
            },
            {
                "name": "Amaderado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Bergamota",
                "cardamomo",
                "frutos secos"
            ],
            "heart": [
                "Avellana tostada",
                "cacao",
                "manteca de iris"
            ],
            "base": [
                "Vainilla Bourbon",
                "ámbar gris",
                "maderas preciosas"
            ]
        },
        "seasons": {
            "winter": 98,
            "spring": 15,
            "summer": 5,
            "autumn": 90,
            "day": 20,
            "night": 98
        },
        "longevity": "Muy Duradera (9 - 11 hrs)",
        "longevityPct": 92,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-26": {
        "accords": [
            {
                "name": "Mineral",
                "pct": 30
            },
            {
                "name": "Amaderado",
                "pct": 26
            },
            {
                "name": "Cítrico",
                "pct": 20
            },
            {
                "name": "Cuero",
                "pct": 14
            },
            {
                "name": "Metálico",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Mandarina italiana",
                "azafrán",
                "acorde mineral"
            ],
            "heart": [
                "Flor de inmortela",
                "osmanthus"
            ],
            "base": [
                "Akigalawood",
                "cuero gamuzado",
                "ámbar"
            ]
        },
        "seasons": {
            "winter": 40,
            "spring": 90,
            "summer": 40,
            "autumn": 90,
            "day": 75,
            "night": 85
        },
        "longevity": "Muy Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-27": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 35
            },
            {
                "name": "Dulce",
                "pct": 28
            },
            {
                "name": "Tropical",
                "pct": 20
            },
            {
                "name": "Ahumado",
                "pct": 10
            },
            {
                "name": "Almizclado",
                "pct": 7
            }
        ],
        "pyramid": {
            "top": [
                "Piña jugosa",
                "bergamota",
                "manzana verde",
                "grosella negra"
            ],
            "heart": [
                "Pachulí",
                "corteza de abedul ahumada",
                "jazmín"
            ],
            "base": [
                "Almizcle",
                "musgo de roble",
                "ámbar gris",
                "vainilla"
            ]
        },
        "seasons": {
            "winter": 30,
            "spring": 90,
            "summer": 95,
            "autumn": 80,
            "day": 85,
            "night": 75
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-28": {
        "accords": [
            {
                "name": "Cuero",
                "pct": 32
            },
            {
                "name": "Amaderado",
                "pct": 28
            },
            {
                "name": "Ahumado",
                "pct": 20
            },
            {
                "name": "Especiado",
                "pct": 12
            },
            {
                "name": "Ámbar",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Pimienta negra",
                "bergamota silvestre"
            ],
            "heart": [
                "Cuero ahumado",
                "salvia",
                "incienso de olíbano"
            ],
            "base": [
                "Madera de cedro",
                "vetiver oscuro",
                "ámbar resinoso"
            ]
        },
        "seasons": {
            "winter": 98,
            "spring": 10,
            "summer": 5,
            "autumn": 90,
            "day": 15,
            "night": 98
        },
        "longevity": "Muy Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-29": {
        "accords": [
            {
                "name": "Gourmand",
                "pct": 32
            },
            {
                "name": "Caramelo",
                "pct": 28
            },
            {
                "name": "Cítrico",
                "pct": 20
            },
            {
                "name": "Resinoso",
                "pct": 12
            },
            {
                "name": "Amaderado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Mandarina sanguina",
                "cardamomo",
                "pimienta rosa"
            ],
            "heart": [
                "Caramelo tostado",
                "lavanda",
                "haba tonka"
            ],
            "base": [
                "Ámbar denso",
                "vetiver de Haití",
                "cedro ahumado"
            ]
        },
        "seasons": {
            "winter": 98,
            "spring": 25,
            "summer": 10,
            "autumn": 95,
            "day": 25,
            "night": 98
        },
        "longevity": "Muy Duradera (9 - 11 hrs)",
        "longevityPct": 92,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-30": {
        "accords": [
            {
                "name": "Vainilla",
                "pct": 32
            },
            {
                "name": "Especiado cálido",
                "pct": 28
            },
            {
                "name": "Gourmand",
                "pct": 20
            },
            {
                "name": "Castaña",
                "pct": 12
            },
            {
                "name": "Amaderado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Cardamomo",
                "pimienta rosa",
                "hojas de violeta"
            ],
            "heart": [
                "Salvia",
                "melón",
                "piña"
            ],
            "base": [
                "Vainilla",
                "castaña tostada",
                "cedro",
                "ámbar"
            ]
        },
        "seasons": {
            "winter": 98,
            "spring": 25,
            "summer": 10,
            "autumn": 90,
            "day": 25,
            "night": 98
        },
        "longevity": "Muy Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-31": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 32
            },
            {
                "name": "Dulce",
                "pct": 28
            },
            {
                "name": "Cuero",
                "pct": 20
            },
            {
                "name": "Vainilla",
                "pct": 12
            },
            {
                "name": "Ambarado",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Piña",
                "mandarina jugosa",
                "manzana verde"
            ],
            "heart": [
                "Lavanda",
                "flor de azahar",
                "pimienta rosa"
            ],
            "base": [
                "Vainilla",
                "cuero gamuzado",
                "ámbar",
                "musgo de roble"
            ]
        },
        "seasons": {
            "winter": 85,
            "spring": 75,
            "summer": 30,
            "autumn": 90,
            "day": 35,
            "night": 95
        },
        "longevity": "Muy Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-32": {
        "accords": [
            {
                "name": "Gourmand",
                "pct": 30
            },
            {
                "name": "Especiado cálido",
                "pct": 25
            },
            {
                "name": "Canela",
                "pct": 20
            },
            {
                "name": "Vainilla",
                "pct": 15
            },
            {
                "name": "Praliné",
                "pct": 10
            }
        ],
        "pyramid": {
            "top": [
                "Canela concentrada",
                "bergamota",
                "pimienta rosa"
            ],
            "heart": [
                "Praliné cremoso",
                "flor de azahar del naranjo",
                "haba tonka"
            ],
            "base": [
                "Vainilla Bourbon",
                "madera de guayaco",
                "ambroxan",
                "sándalo"
            ]
        },
        "seasons": {
            "winter": 99,
            "spring": 10,
            "summer": 5,
            "autumn": 95,
            "day": 15,
            "night": 99
        },
        "longevity": "Muy Duradera (10 - 12+ hrs)",
        "longevityPct": 98,
        "sillage": "Enorme / Estela Pesada",
        "sillagePct": 96
    },
    "al-33": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 35
            },
            {
                "name": "Dulce",
                "pct": 28
            },
            {
                "name": "Tropical",
                "pct": 20
            },
            {
                "name": "Amaderado",
                "pct": 10
            },
            {
                "name": "Balsámico",
                "pct": 7
            }
        ],
        "pyramid": {
            "top": [
                "Piña jugosa",
                "azafrán"
            ],
            "heart": [
                "Jazmín",
                "abeto balsámico"
            ],
            "base": [
                "Ámbar",
                "cedro",
                "agarwood (oud refinado)"
            ]
        },
        "seasons": {
            "winter": 40,
            "spring": 90,
            "summer": 90,
            "autumn": 85,
            "day": 80,
            "night": 80
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-34": {
        "accords": [
            {
                "name": "Floral blanco",
                "pct": 32
            },
            {
                "name": "Gourmand",
                "pct": 28
            },
            {
                "name": "Vainilla",
                "pct": 20
            },
            {
                "name": "Ambarado",
                "pct": 12
            },
            {
                "name": "Frutal",
                "pct": 8
            }
        ],
        "pyramid": {
            "top": [
                "Grosella negra",
                "flor de azahar",
                "mandarina"
            ],
            "heart": [
                "Orquídea real",
                "jazmín sambac",
                "heliotropo"
            ],
            "base": [
                "Vainilla de Madagascar",
                "ámbar cristalino",
                "sándalo cremoso"
            ]
        },
        "seasons": {
            "winter": 80,
            "spring": 85,
            "summer": 25,
            "autumn": 90,
            "day": 35,
            "night": 95
        },
        "longevity": "Muy Duradera (8 - 10 hrs)",
        "longevityPct": 83,
        "sillage": "Pesada",
        "sillagePct": 82
    },
    "al-35": {
        "accords": [
            {
                "name": "Acuático",
                "pct": 35
            },
            {
                "name": "Salado",
                "pct": 28
            },
            {
                "name": "Cítrico",
                "pct": 20
            },
            {
                "name": "Aromático",
                "pct": 10
            },
            {
                "name": "Amaderado",
                "pct": 7
            }
        ],
        "pyramid": {
            "top": [
                "Acorde marino salado",
                "toronja",
                "mandarina"
            ],
            "heart": [
                "Hojas de laurel",
                "jazmín acuático"
            ],
            "base": [
                "Ámbar gris",
                "madera de guayaco",
                "musgo de roble",
                "pachulí"
            ]
        },
        "seasons": {
            "winter": 10,
            "spring": 90,
            "summer": 98,
            "autumn": 40,
            "day": 90,
            "night": 50
        },
        "longevity": "Moderada a Duradera (6 - 8 hrs)",
        "longevityPct": 67,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    },
    "al-36": {
        "accords": [
            {
                "name": "Frutal",
                "pct": 35
            },
            {
                "name": "Dulce",
                "pct": 28
            },
            {
                "name": "Floral",
                "pct": 20
            },
            {
                "name": "Vainilla",
                "pct": 10
            },
            {
                "name": "Almizclado",
                "pct": 7
            }
        ],
        "pyramid": {
            "top": [
                "Frambuesa jugosa",
                "pera",
                "bergamota"
            ],
            "heart": [
                "Flor de azahar",
                "peonía",
                "jazmín"
            ],
            "base": [
                "Vainilla cremosa",
                "almizcle blanco",
                "pachulí"
            ]
        },
        "seasons": {
            "winter": 30,
            "spring": 95,
            "summer": 65,
            "autumn": 90,
            "day": 80,
            "night": 80
        },
        "longevity": "Duradera (7 - 9 hrs)",
        "longevityPct": 75,
        "sillage": "Moderada a Pesada",
        "sillagePct": 70
    }
};
