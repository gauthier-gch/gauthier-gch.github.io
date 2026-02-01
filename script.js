if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("/sw.js");
}
const LOG_ENDPOINT = "https://script.google.com/macros/s/AKfycbwJU3Z4KnSB1g5L-BdxwIY6Vt60oBnajV35A6QZK8Ys6eovZA9ehN07oX-y6sMmLDI5/exec";

/***********************
 * DONNÉES MARIO KART *
 ***********************/
const marioKartData = {
  pilots: [
    {
      name: "Mario",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/mario.png"
    },
    {
      name: "Luigi",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/luigi.png"
    },
    {
      name: "Peach",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/peach.png"
    },
    {
      name: "Daisy",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/daisy.png"
    },
    {
      name: "Harmonie",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/rosalina.png"
    },
    {
      name: "Mario Tanuki",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/tanouki_mario.png"
    },
    {
      name: "Peach Chat",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/cat_peach.png"
    },
    {
      name: "Birdo",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/birdo.png"
    },
    {
      name: "Yoshi",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/yoshi.png"
    },
    {
      name: "Toad",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/toad.png"
    },
    {
      name: "Koopa",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/koopa.png"
    },
    {
      name: "Maskass",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/shy_guy.png"
    },
    {
      name: "Lakitu",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/lakitu.png"
    },
    {
      name: "Toadette",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/toadette.png"
    },
    {
      name: "Roi Boo",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/king_boo.png"
    },
    {
      name: "Flora Piranha",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/petey_piranha.png"
    },
    {
      name: "Bébé Mario",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_mario.png"
    },
    {
      name: "Bébé Luigi",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_luigi.png"
    },
    {
      name: "Bébé Peach",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_peach.png"
    },
    {
      name: "Bébé Daisy",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_daisy.png"
    },
    {
      name: "Bébé Harmonie",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_rosalina.png"
    },
    {
      name: "Mario de métal",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/metal_mario.png"
    },
    {
      name: "Peach d'or rose",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/pink_gold_peach.png"
    },
    {
      name: "Wiggler",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wiggler.png"
    },
    {
      name: "Wario",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wario.png"
    },
    {
      name: "Waluigi",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/waluigi.png"
    },
    {
      name: "Donky Kong",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/donkey_kong.png"
    },
    {
      name: "Bowser",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/bowser.png"
    },
    {
      name: "Skelerex",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/dry_bones.png"
    },
    {
      name: "Bowser Jr",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/bowser_jr.png"
    },
    {
      name: "Bowser Skelet",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/dry_bowser.png"
    },
    {
      name: "Kamek",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/kamek.png"
    },
    {
      name: "Lemmy",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/lemmy.png"
    },
    {
      name: "Larry",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/larry.png"
    },
    {
      name: "Wendy",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wendy.png"
    },
    {
      name: "Ludwig",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/ludwig.png"
    },
    {
      name: "Iggy",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/iggy.png"
    },
    {
      name: "Roy",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/roy.png"
    },
    {
      name: "Morton",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/morton.png"
    },
    {
      name: "Peachette",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/peachette.png"
    },
    {
      name: "Fille Inkling",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/inkling_girl.png"
    },
    {
      name: "Villageois",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/villager_male.png"
    },
    {
      name: "Marie la P",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/isabelle.png"
    },
    {
      name: "Link",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/link.png"
    },
    {
      name: "Diddy Kong",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/diddy_kong.png"
    },
    {
      name: "Funky Kong",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/funky_kong.png"
    },
    {
      name: "Pauline",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/pauline.png"
    },
    {
      name: "Mii",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/mii.png"
    }
  ],
  karts: [
    {
      name: "Kart standard",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/standard_kart.png"
    },
    {
      name: "Rétro",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/pipe_frame.png"
    },
    {
      name: "Proto 8",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/mach_8.png"
    },
    {
      name: "Nautomobile",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/steel_driver.png"
    },
    {
      name: "Chabriolet",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/cat_cruiser.png"
    },
    {
      name: "Mach-célère",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/circuit_special.png"
    },
    {
      name: "tubul R3",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/tri_speeder.png"
    },
    {
      name: "Beat-bolide",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/badwagon.png"
    },
    {
      name: "Cavalkart",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/prancer.png"
    },
    {
      name: "Paracoccinelly",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/biddybuggy.png"
    },
    {
      name: "Caravéloce",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/landship.png"
    },
    {
      name: "Sneakart",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/sneeker.png"
    },
    {
      name: "Propulsar",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/sports_coupe.png"
    },
    {
      name: "Or",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/gold_standard.png"
    },
    {
      name: "GLA",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/gla.png"
    },
    {
      name: "W25 Flèche d'argent",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/w_25_silver_arrow.png"
    },
    {
      name: "300 SL Roadster",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/300_sl_roadster.png"
    },
    {
      name: "Blue Falcon",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/blue_falcon.png"
    },
    {
      name: "Buggy Tanuki",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/tanooki_kart.png"
    },
    {
      name: "Intrépide",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/b_dasher.png"
    },
    {
      name: "Autorhino",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/streetle.png"
    },
    {
      name: "Magikart",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/p_wing.png"
    },
    {
      name: "Koopa-mobile",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/koopa_clown.png"
    },
    {
      name: "Moto standard",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/standard_bike.png"
    },
    {
      name: "Météore",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/comet.png"
    },
    {
      name: "Sport GP",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/sport_bike.png"
    },
    {
      name: "Cybertrombe",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/the_duke.png"
    },
    {
      name: "Flamboyante",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/flame_rider.png"
    },
    {
      name: "Mécabécane",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/varmint.png"
    },
    {
      name: "Scootinette",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/mr_scooty.png"
    },
    {
      name: "Epervier",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/jet_bike.png"
    },
    {
      name: "Yoshimoto",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/yoshi_bike.png"
    },
    {
      name: "Destrier de légende",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/master_cycle.png"
    },
    {
      name: "Destrier de légende 0.1",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/master_cycle_zero.png"
    },
    {
      name: "Scooter AC",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/city_tripper.png"
    },
    {
      name: "Quad standard",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/standard_atv.png"
    },
    {
      name: "Quad Wiggler",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/wild_wiggler.png"
    },
    {
      name: "Quad Nounours",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/teddy_buggy.png"
    },
    {
      name: "Malécycle",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/bone_rattler.png"
    },
    {
      name: "Kartoon",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/splat_buggy.png"
    },
    {
      name: "Missile tornade",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/inkstriker.png"
    }
  ],
  wheels: [
    {
      name: "Standard",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/standard.png"
    },
    {
      name: "Mastodonte",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/monster.png"
    },
    {
      name: "Roller",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/roller.png"
    },
    {
      name: "Classique",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/slim.png"
    },
    {
      name: "Lisse",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/slick.png"
    },
    {
      name: "Métal",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/metal.png"
    },
    {
      name: "Bouton",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/button.png"
    },
    {
      name: "Hors-piste",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/off_road.png"
    },
    {
      name: "Eponge",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/sponge.png"
    },
    {
      name: "Bois",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/wood.png"
    },
    {
      name: "Coussin",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/cushion.png"
    },
    {
      name: "Standard bleu",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/blue_standard.png"
    },
    {
      name: "Masto-flamme",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/hot_monster.png"
    },
    {
      name: "Roller azur",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/azure_roller.png"
    },
    {
      name: "Classique rouge",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/crimson_slim.png"
    },
    {
      name: "Cyber-lisse",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/cyber_slick.png"
    },
    {
      name: "Hors-piste rétro",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/retro_off_road.png"
    },
    {
      name: "Or",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/gold_tires.png"
    },
    {
      name: "GLA",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/gla_tires.png"
    },
    {
      name: "Triforce",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/triforce_tires.png"
    },
    {
      name: "Archéonique",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/ancient_tires.png"
    },
    {
      name: "Feuille",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/leaf_tires.png"
    }
  ],
  gliders: [
    {
      name: "Standard",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/super_glider.png"
    },
    {
      name: "Ailes nuages",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/cloud_glider.png"
    },
    {
      name: "Aile Wario",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/wario_wing.png"
    },
    {
      name: "Dendinaile",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/waddle_wing.png"
    },
    {
      name: "Ombrelle Peach",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/peach_parasol.png"
    },
    {
      name: "Parachute",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/parachute.png"
    },
    {
      name: "Parapente",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/parafoil.png"
    },
    {
      name: "Aile fleurie",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/flower_glider.png"
    },
    {
      name: "Bowser-volant",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/bowser_kite.png"
    },
    {
      name: "Planeur",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/plane_glider.png"
    },
    {
      name: "Parapente MKTV",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/mktv_parafoil.png"
    },
    {
      name: "Or",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/gold_glider.png"
    },
    {
      name: "Aile hylienne",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/hylian_kite.png"
    },
    {
      name: "Paravoile",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/paraglider.png"
    },
    {
      name: "Aile en papier",
      img:
        "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/paper_glider.png"
    }
  ]
};

function randomFrom(array) {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
}

function generateTeamLoadout() {
  return {
    pilot: randomFrom(marioKartData.pilots),
    kart: randomFrom(marioKartData.karts),
    wheels: randomFrom(marioKartData.wheels),
    glider: randomFrom(marioKartData.gliders)
  };
}

/***********************
 * JOUEURS (INCHANGÉ)
 ***********************/
const playersData = [
  {
    name: "Clément",
    nickname: "TripleK",
    photo: "https://i.imgur.com/2BDmNxc.png"
  },
  {
    name: "Edouard",
    nickname: "Tenant du titre 🏆",
    photo:
      "https://i.imgur.com/oI8066m_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Gauthier",
    nickname: "Boss Ladyyy",
    photo:
      "https://i.imgur.com/IvyDEfG_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Julien",
    nickname: "Candymaaan",
    photo:
      "https://i.imgur.com/gogAMx3_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Loric",
    nickname: "Ça crunch",
    photo:
      "https://i.imgur.com/c7ZLbDt_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Manon",
    nickname: "Au mérite",
    photo: "https://i.imgur.com/RKUhEge.png"
  },
  {
    name: "Mathieu",
    nickname: "Ça jute",
    photo:
      "https://i.imgur.com/aFNU5Cm_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Nico",
    nickname: "LE 1 N'A RIEN",
    photo:
      "https://i.imgur.com/172Tyj2_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Noé",
    nickname: "Futur champion",
    photo: "https://i.imgur.com/NLJhQ2l.png"
  },
  {
    name: "Polem",
    nickname: "Le COUB",
    photo:
      "https://i.imgur.com/ZMoOMfV_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Quentin",
    nickname: "Tic",
    photo:
      "https://i.imgur.com/VmuolTs_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Quentin",
    nickname: "Tac",
    photo: "https://i.imgur.com/U5I93d2.png"
  },
  {
    name: "Romain",
    nickname: "Après 0 y'a 1",
    photo: "https://i.imgur.com/X5HvSz8.png"
  },
  {
    name: "Thomas",
    nickname: "Le briseur",
    photo:
      "https://i.imgur.com/JV95xh3_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Victoria",
    nickname: "Dans la fifounette",
    photo:
      "https://i.imgur.com/5o4mY7x_d.png?maxwidth=520&shape=thumb&fidelity=high"
  },
  {
    name: "Invité mystère",
    nickname: "Surprise !",
    photo: "https://pbs.twimg.com/media/E0tq3dPXoAIIbU7.jpg"
  }
];

const playersCards = document.getElementById("players-cards");
const teamsDiv = document.getElementById("teams");

/***********************
 * OUTILS
 ***********************/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/***********************
 * CARTES JOUEURS
 ***********************/
playersData.forEach((player, index) => {
  const card = document.createElement("div");
  card.className = "player-card";
  card.innerHTML = `
    <div class="player-info">
      <img src="${player.photo}" class="player-photo">
      <div>
        <div>${player.name}</div>
        <div class="player-nickname"><em>${player.nickname}</em></div>
      </div>
    </div>
    <div class="checkbox-group">
      <label><input type="checkbox" class="select-player" data-index="${index}"> Sélectionné</label>
      <label>
        <input type="checkbox" class="punish-player" data-index="${index}"> Puni
        <span class="punish-icon">👹</span>
      </label>
    </div>
  `;
  playersCards.appendChild(card);

  card.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") return;
    const checkbox = card.querySelector(".select-player");
    checkbox.checked = !checkbox.checked;
    card.classList.toggle("selected", checkbox.checked);
  });

  const punishCheckbox = card.querySelector(".punish-player");
  punishCheckbox.addEventListener("change", () => {
    card.classList.toggle("punished", punishCheckbox.checked);
  });
});

/***********************
 * AFFICHAGE ÉQUIPES
 ***********************/
function displayTeamsWithSuspense(teams, isTournament) {
  teamsDiv.innerHTML = "";

  teams.forEach((team, index) => {
    const teamDiv = document.createElement("div");
    teamDiv.className = "team" + (isTournament ? " tournament" : "");

    teamDiv.innerHTML = `
      <h3 class="team-title">Équipe ${index + 1}</h3>
      <div class="team-members"></div>
      ${isTournament ? `<div class="team-loadout"></div>` : ""}
    `;

    teamsDiv.appendChild(teamDiv);
  });

function logTeamsCreation({ isTournament, selectedPlayers, teams }) {
  const payload = {
    timestamp: new Date().toISOString(),
    tournament: isTournament,
    players: selectedPlayers.map(p => ({
      name: p.name,
      punished: p.punished
    })),
    teams: teams.map(team => ({
      players: team.players.map(p => p.name),
      punishedCount: team.players.filter(p => p.punished).length,
      loadout: team.loadout
        ? {
            pilot: team.loadout.pilot?.name,
            kart: team.loadout.kart?.name,
            wheels: team.loadout.wheels?.name,
            glider: team.loadout.glider?.name
          }
        : null
    }))
  };

  fetch(LOG_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(err => {
    console.error("Erreur log Google Sheets", err);
  });
}

  let delay = 0;

  teams.forEach((team, teamIndex) => {
    const teamDiv = teamsDiv.children[teamIndex];
    const membersContainer = teamDiv.querySelector(".team-members");

    team.players.forEach((player) => {
      const playerDiv = document.createElement("div");
      playerDiv.className = "team-player";
      if (player.punished) playerDiv.classList.add("punished");

      playerDiv.innerHTML = `
        <img src="${player.photo}">
        <div class="team-player-name">${player.name}</div>
      `;

      membersContainer.appendChild(playerDiv);
      setTimeout(() => playerDiv.classList.add("visible"), delay);
      delay += 1000;
    });

    // 🎮 Loadout équipe (mode tournois)
    if (isTournament) {
      const loadoutDiv = teamDiv.querySelector(".team-loadout");
      const l = team.loadout;

      [l.pilot, l.kart, l.wheels, l.glider].forEach((item) => {
        if (!item) return;
        const div = document.createElement("div");
        div.className = "loadout-item";
        div.innerHTML = `
          ${item.img ? `<img src="${item.img}">` : ""}
          <span>${item.name}</span>
        `;
        loadoutDiv.appendChild(div);
      });
    }
  });
}

/***********************
 * BOUTON CRÉATION
 ***********************/
document.getElementById("validateBtn").addEventListener("click", () => {
  const isTournament = document.getElementById("tournamentMode").checked;
  const selectedPlayers = [];

  document.querySelectorAll(".select-player").forEach((checkbox) => {
    if (checkbox.checked) {
      const index = checkbox.dataset.index;
      const punished = document.querySelector(
        `.punish-player[data-index="${index}"]`
      ).checked;

      selectedPlayers.push({
        ...playersData[index],
        punished
      });
    }
  });

  if (selectedPlayers.length === 0) {
    alert("Sélectionne au moins un joueur");
    return;
  }

  shuffle(selectedPlayers);

  const punishedPlayers = selectedPlayers.filter((p) => p.punished);
  const normalPlayers = selectedPlayers.filter((p) => !p.punished);

  const numTeams = 4;
  const teams = Array.from({ length: numTeams }, () => ({
    players: [],
    loadout: isTournament ? generateTeamLoadout() : null
  }));

  const totalPlayers = selectedPlayers.length;
  const baseSize = Math.floor(totalPlayers / numTeams);
  const extra = totalPlayers % numTeams;
  const teamSizes = Array(numTeams)
    .fill(baseSize)
    .map((s, i) => (i < extra ? s + 1 : s));

  let p = 0;
  for (let i = 0; i < numTeams; i++) {
    while (
      teams[i].players.length < teamSizes[i] &&
      p < punishedPlayers.length
    ) {
      teams[i].players.push(punishedPlayers[p++]);
    }
  }

  let n = 0;
  for (let i = 0; i < numTeams; i++) {
    while (teams[i].players.length < teamSizes[i] && n < normalPlayers.length) {
      teams[i].players.push(normalPlayers[n++]);
    }
  }

  displayTeamsWithSuspense(teams, isTournament);
  logTeamsCreation({
  isTournament,
  selectedPlayers,
  teams
});
});
