if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(err => console.error(err));
}
const LOG_ENDPOINT = "https://script.google.com/macros/s/AKfycby1B73aholZZDMN_UD0ygYMuljpcLbAxRE6y5En2L5SiUcEhJQs-tXJ3dtA795E5xoeZg/exec";

/***********************
 * DONNÉES MARIO KART *
 ***********************/
const marioKartData = {
  pilots: [
    { name: "Mario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/mario.png" },
    { name: "Luigi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/luigi.png" },
    { name: "Peach", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/peach.png" },
    { name: "Daisy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/daisy.png" },
    { name: "Harmonie", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/rosalina.png" },
    { name: "Mario Tanuki", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/tanouki_mario.png" },
    { name: "Peach Chat", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/cat_peach.png" },
    { name: "Birdo", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/birdo.png" },
    { name: "Yoshi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/yoshi.png" },
    { name: "Toad", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/toad.png" },
    { name: "Koopa", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/koopa.png" },
    { name: "Maskass", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/shy_guy.png" },
    { name: "Lakitu", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/lakitu.png" },
    { name: "Toadette", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/toadette.png" },
    { name: "Roi Boo", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/king_boo.png" },
    { name: "Flora Piranha", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/petey_piranha.png" },
    { name: "Bébé Mario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_mario.png" },
    { name: "Bébé Luigi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_luigi.png" },
    { name: "Bébé Peach", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_peach.png" },
    { name: "Bébé Daisy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_daisy.png" },
    { name: "Bébé Harmonie", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_rosalina.png" },
    { name: "Mario de métal", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/metal_mario.png" },
    { name: "Peach d'or rose", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/pink_gold_peach.png" },
    { name: "Wiggler", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wiggler.png" },
    { name: "Wario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wario.png" },
    { name: "Waluigi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/waluigi.png" },
    { name: "Donky Kong", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/donkey_kong.png" },
    { name: "Bowser", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/bowser.png" },
    { name: "Skelerex", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/dry_bones.png" },
    { name: "Bowser Jr", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/bowser_jr.png" },
    { name: "Bowser Skelet", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/dry_bowser.png" },
    { name: "Kamek", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/kamek.png" },
    { name: "Lemmy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/lemmy.png" },
    { name: "Larry", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/larry.png" },
    { name: "Wendy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wendy.png" },
    { name: "Ludwig", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/ludwig.png" },
    { name: "Iggy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/iggy.png" },
    { name: "Roy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/roy.png" },
    { name: "Morton", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/morton.png" },
    { name: "Peachette", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/peachette.png" },
    { name: "Fille Inkling", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/inkling_girl.png" },
    { name: "Villageois", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/villager_male.png" },
    { name: "Marie la P", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/isabelle.png" },
    { name: "Link", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/link.png" },
    { name: "Diddy Kong", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/diddy_kong.png" },
    { name: "Funky Kong", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/funky_kong.png" },
    { name: "Pauline", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/pauline.png" },
    { name: "Mii", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/mii.png" }
  ],
  karts: [
    { name: "Kart standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/standard_kart.png" },
    { name: "Rétro", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/pipe_frame.png" },
    { name: "Proto 8", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/mach_8.png" },
    { name: "Nautomobile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/steel_driver.png" },
    { name: "Chabriolet", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/cat_cruiser.png" },
    { name: "Mach-célère", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/circuit_special.png" },
    { name: "tubul R3", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/tri_speeder.png" },
    { name: "Beat-bolide", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/badwagon.png" },
    { name: "Cavalkart", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/prancer.png" },
    { name: "Paracoccinelly", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/biddybuggy.png" },
    { name: "Caravéloce", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/landship.png" },
    { name: "Sneakart", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/sneeker.png" },
    { name: "Propulsar", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/sports_coupe.png" },
    { name: "GLA", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/gla.png" },
    { name: "W25 Flèche d'argent", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/w_25_silver_arrow.png" },
    { name: "300 SL Roadster", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/300_sl_roadster.png" },
    { name: "Blue Falcon", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/blue_falcon.png" },
    { name: "Buggy Tanuki", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/tanooki_kart.png" },
    { name: "Intrépide", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/b_dasher.png" },
    { name: "Autorhino", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/streetle.png" },
    { name: "Magikart", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/p_wing.png" },
    { name: "Koopa-mobile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/koopa_clown.png" },
    { name: "Moto standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/standard_bike.png" },
    { name: "Météore", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/comet.png" },
    { name: "Sport GP", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/sport_bike.png" },
    { name: "Cybertrombe", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/the_duke.png" },
    { name: "Flamboyante", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/flame_rider.png" },
    { name: "Mécabécane", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/varmint.png" },
    { name: "Scootinette", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/mr_scooty.png" },
    { name: "Epervier", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/jet_bike.png" },
    { name: "Yoshimoto", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/yoshi_bike.png" },
    { name: "Destrier de légende", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/master_cycle.png" },
    { name: "Destrier de légende 0.1", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/master_cycle_zero.png" },
    { name: "Scooter AC", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/city_tripper.png" },
    { name: "Quad standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/standard_atv.png" },
    { name: "Quad Wiggler", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/wild_wiggler.png" },
    { name: "Quad Nounours", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/teddy_buggy.png" },
    { name: "Malécycle", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/bone_rattler.png" },
    { name: "Kartoon", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/splat_buggy.png" },
    { name: "Missile tornade", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/inkstriker.png" }
  ],
  wheels: [
    { name: "Standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/standard.png" },
    { name: "Mastodonte", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/monster.png" },
    { name: "Roller", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/roller.png" },
    { name: "Classique", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/slim.png" },
    { name: "Lisse", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/slick.png" },
    { name: "Métal", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/metal.png" },
    { name: "Bouton", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/button.png" },
    { name: "Hors-piste", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/off_road.png" },
    { name: "Eponge", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/sponge.png" },
    { name: "Bois", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/wood.png" },
    { name: "Coussin", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/cushion.png" },
    { name: "Standard bleu", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/blue_standard.png" },
    { name: "Masto-flamme", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/hot_monster.png" },
    { name: "Roller azur", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/azure_roller.png" },
    { name: "Classique rouge", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/crimson_slim.png" },
    { name: "Cyber-lisse", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/cyber_slick.png" },
    { name: "Hors-piste rétro", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/retro_off_road.png" },
    { name: "GLA", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/gla_tires.png" },
    { name: "Triforce", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/triforce_tires.png" },
    { name: "Archéonique", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/ancient_tires.png" },
    { name: "Feuille", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/leaf_tires.png" }
  ],
  gliders: [
    { name: "Standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/super_glider.png" },
    { name: "Ailes nuages", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/cloud_glider.png" },
    { name: "Aile Wario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/wario_wing.png" },
    { name: "Dendinaile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/waddle_wing.png" },
    { name: "Ombrelle Peach", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/peach_parasol.png" },
    { name: "Parachute", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/parachute.png" },
    { name: "Parapente", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/parafoil.png" },
    { name: "Aile fleurie", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/flower_glider.png" },
    { name: "Bowser-volant", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/bowser_kite.png" },
    { name: "Planeur", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/plane_glider.png" },
    { name: "Parapente MKTV", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/mktv_parafoil.png" },
    { name: "Aile hylienne", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/hylian_kite.png" },
    { name: "Paravoile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/paraglider.png" },
    { name: "Aile en papier", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/paper_glider.png" }
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
 * JOUEURS
 ***********************/
const playersData = [ 
  { name: "Clément", nickname: "TripleK", photo: "https://i.imgur.com/2BDmNxc.png", anniversaire: "12-23", simoneversaire: "07-01" },
  { name: "Edouard", nickname: "Edouard Chance", photo: "https://i.imgur.com/oI8066m_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "01-26", simoneversaire: "10-10" },
  { name: "Gauthier", nickname: "Boss Ladyyy", photo: "https://i.imgur.com/IvyDEfG_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "05-15", simoneversaire: "04-01" },
  { name: "Julien", nickname: "Candymaaan", photo: "https://i.imgur.com/gogAMx3_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "03-07", simoneversaire: "02-04" },
  { name: "Loric", nickname: "Coloric et Loricocu", photo: "https://i.imgur.com/c7ZLbDt_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "12-09", simoneversaire: "04-22" },
  { name: "Manon", nickname: "Au mérite", photo: "https://i.imgur.com/RKUhEge.png", anniversaire: "08-13", simoneversaire: "02-01" },
  { name: "Mathieu", nickname: "Ça jute", photo: "https://i.imgur.com/aFNU5Cm_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "04-23", simoneversaire: "02-01" },
  { name: "Nico", nickname: "LE 1 N'A RIEN", photo: "https://i.imgur.com/172Tyj2_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "05-16", simoneversaire: "03-20" },
  { name: "Noé", nickname: "#N/A", photo: "https://i.imgur.com/NLJhQ2l.png", anniversaire: "09-30", simoneversaire: "01-05" },
  { name: "Polem", nickname: "In a bowl", photo: "https://i.imgur.com/Gg4cj7D.png", anniversaire: "06-12", simoneversaire: "12-11" },
  { name: "Quentin D", nickname: "Tic", photo: "https://i.imgur.com/VmuolTs_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "05-10", simoneversaire: "04-01" },
  { name: "Quentin H", nickname: "Tac", photo: "https://i.imgur.com/U5I93d2.png", anniversaire: "04-17", simoneversaire: "02-19" },
  { name: "Romain", nickname: "Après 0 y'a 1", photo: "https://i.imgur.com/X5HvSz8.png", anniversaire: "08-23", simoneversaire: "01-26" },
  { name: "Thomas", nickname: "Le briseur", photo: "https://i.imgur.com/JV95xh3_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "02-26", simoneversaire: "07-24" },
  { name: "Victoria", nickname: "Dans la fifounette", photo: "https://i.imgur.com/5o4mY7x_d.png?maxwidth=520&shape=thumb&fidelity=high", anniversaire: "03-29", simoneversaire: "06-01" },
  { name: "Invité mystère", nickname: "Surprise !", photo: "https://pbs.twimg.com/media/E0tq3dPXoAIIbU7.jpg", anniversaire: "01-01", simoneversaire: "01-01" }
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
 * GESTION DE L'AUDIO 🎵
 ***********************/
const sounds = {
  theme: new Audio('./sound_theme.mp3'),
  yoshi: new Audio('./sound_yoshi.mp3'),
  bowser: new Audio('./sound_bowser.mp3'),
  suspense: new Audio('./sound_suspense.mp3')
};

// Réglages du thème principal
sounds.theme.loop = true; 
sounds.theme.volume = 0.15; 

// Réglages des bruitages
sounds.yoshi.volume = 1.0;
sounds.bowser.volume = 0.5;

// On lance la musique au premier clic sur la page
document.addEventListener('click', () => {
  if (sounds.theme.paused) {
    sounds.theme.play().catch(e => console.log("En attente d'interaction utilisateur..."));
  }
}, { once: true });

/***********************
 * DATE DU JOUR (Format MM-DD)
 ***********************/
const today = new Date();
const todayStr = String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

/***********************
 * CARTES JOUEURS
 ***********************/
playersData.forEach((player, index) => {
  const isBirthdayToday = (player.anniversaire === todayStr || player.simoneversaire === todayStr);
  const displayName = isBirthdayToday ? `${player.name} 🎂` : player.name;

  const card = document.createElement("div");
  // On ajoute la classe 'birthday-card' si c'est son anniversaire
  card.className = "player-card" + (isBirthdayToday ? " birthday-card" : "");
  
  card.innerHTML = `
    <div class="player-info">
      <img src="${player.photo}" class="player-photo">
      <div>
        <div>${displayName}</div>
        <div class="player-nickname"><em>${player.nickname}</em></div>
      </div>
    </div>
    <div class="checkbox-group">
      <label class="select-label"><input type="checkbox" class="select-player" data-index="${index}"> Sélectionné</label>
      <label class="punish-label">
        <input type="checkbox" class="punish-player" data-index="${index}"> Puni
        <span class="punish-icon">👹</span>
      </label>
    </div>
  `;
  playersCards.appendChild(card);

  // Gestion du clic sur la carte
  card.addEventListener("click", (e) => {
    // On ignore le clic si c'est sur la zone "Puni"
    if (e.target.closest('.punish-label')) return;

    const checkbox = card.querySelector(".select-player");
    
    // Si on clique ailleurs que sur la checkbox elle-même, on gère la sélection
    if (e.target !== checkbox) {
      e.preventDefault();
      checkbox.checked = !checkbox.checked;
    }
    
    // AUDIO : On joue Yoshi UNIQUEMENT si le joueur est sélectionné (coché)
    if (checkbox.checked) {
      sounds.yoshi.currentTime = 0; // Remet au début si on clique vite
      sounds.yoshi.play().catch(err => console.log(err));
    }
    
    card.classList.toggle("selected", checkbox.checked);
  });

  // La case puni
  const punishCheckbox = card.querySelector(".punish-player");
  punishCheckbox.addEventListener("change", () => {
    card.classList.toggle("punished", punishCheckbox.checked);
    
    // AUDIO : On joue Bowser UNIQUEMENT si le joueur est puni (coché)
    if (punishCheckbox.checked) {
      sounds.bowser.currentTime = 0;
      sounds.bowser.play().catch(err => console.log(err));
    }
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

  // Calcul dynamique pour synchroniser avec les 4 secondes de suspense
  let totalPlayersCount = 0;
  teams.forEach(t => totalPlayersCount += t.players.length);
  
  // On veut que le dernier joueur apparaisse à 3.8s (3800ms) 
  const targetEndTime = 3800; 
  // On divise ce temps par le nombre d'intervalles (nombre de joueurs - 1)
  const delayStep = totalPlayersCount > 1 ? targetEndTime / (totalPlayersCount - 1) : 0;
  let currentDelay = 0;

  teams.forEach((team, teamIndex) => {
    const teamDiv = teamsDiv.children[teamIndex];
    const membersContainer = teamDiv.querySelector(".team-members");

    team.players.forEach((player) => {
      const playerDiv = document.createElement("div");
      playerDiv.className = "team-player";
      
      if (player.punished) {
        playerDiv.classList.add("punished");
      } else if (player.isBirthday) {
        playerDiv.classList.add("blessed");
      }

      playerDiv.innerHTML = `
        <img src="${player.photo}">
        <div class="team-player-name">${player.displayName || player.name}</div>
      `;

      membersContainer.appendChild(playerDiv);
      
      // On utilise le délai dynamique
      setTimeout(() => playerDiv.classList.add("visible"), currentDelay);
      currentDelay += delayStep;
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
 * Fonction log
 ***********************/
function logTeamsCreation({ isTournament, selectedPlayers, teams }) {
  const payload = {
    timestamp: new Date().toISOString(),
    tournament: isTournament,
    players: selectedPlayers.map(p => ({
      name: p.name,
      punished: p.punished,
      isBirthday: p.isBirthday // Ajout de l'info anniversaire globale
    })),
    teams: teams.map(team => ({
      // Envoi d'un objet complet pour chaque joueur de l'équipe
      players: team.players.map(p => ({
        name: p.name,
        punished: p.punished,
        isBirthday: p.isBirthday
      })),
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

  // Envoi au google sheet
  fetch(LOG_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "text/plain;charset=utf-8" }
  })
  .then(res => res.json())
  .then(data => console.log("Log envoyé:", data))
  .catch(err => console.error("Erreur log Google Sheets", err));

  //Envoi au Webhook Zapier
  const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23398267/u08m3vy/"; // 
  
  fetch(WEBHOOK_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "text/plain;charset=utf-8" } // 
  })
  .then(() => console.log("Log Webhook envoyé instantanément !"))
  .catch(err => console.error("Erreur log Webhook", err));
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
      const punished = document.querySelector(`.punish-player[data-index="${index}"]`).checked;
      const player = playersData[index];
      const isBirthday = (player.anniversaire === todayStr || player.simoneversaire === todayStr);

      selectedPlayers.push({
        ...player,
        punished,
        isBirthday,
        displayName: isBirthday ? `${player.name} 🎂` : player.name
      });
    }
  });

  if (selectedPlayers.length === 0) {
    alert("Sélectionne au moins un joueur");
    return;
  }

  // AUDIO : On lance la musique du tirage des équipes !
  sounds.suspense.currentTime = 0;
  sounds.suspense.play().catch(err => console.log(err));

  // 1. On mélange d'abord tous les joueurs sélectionnés de manière aléatoire
  shuffle(selectedPlayers);

  // 2. On les trie selon la règle : Punis (D'abord) -> Normaux (Milieu) -> Anniversaires non punis (En dernier)
  // Si un joueur est puni ET que c'est son anniversaire, la punition prime !
  const sortedPlayers = [
    ...selectedPlayers.filter(p => p.punished), // Tous les punis (anniversaires inclus)
    ...selectedPlayers.filter(p => !p.punished && !p.isBirthday), // Les normaux
    ...selectedPlayers.filter(p => !p.punished && p.isBirthday) // Les anniversaires (qui ne sont pas punis)
  ];

  const numTeams = 4;
  const teams = Array.from({ length: numTeams }, () => ({
    players: [],
    loadout: isTournament ? generateTeamLoadout() : null
  }));

  const totalPlayers = selectedPlayers.length;
  const baseSize = Math.floor(totalPlayers / numTeams);
  const extra = totalPlayers % numTeams;
  
  // Calcul du nombre de places pour chaque équipe
  const teamSizes = Array(numTeams)
    .fill(baseSize)
    .map((s, i) => (i < extra ? s + 1 : s));

  // 3. Distribution en remplissant les équipes avec notre liste triée
  let queueIndex = 0;
  for (let i = 0; i < numTeams; i++) {
    while (teams[i].players.length < teamSizes[i] && queueIndex < sortedPlayers.length) {
      teams[i].players.push(sortedPlayers[queueIndex++]);
    }
  }

  displayTeamsWithSuspense(teams, isTournament);
  logTeamsCreation({
    isTournament,
    selectedPlayers,
    teams
  });
});
