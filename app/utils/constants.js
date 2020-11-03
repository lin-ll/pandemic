export const CITIES = [
  {
    name: 'Atlanta',
    color: 'blue',
    connections: [2, 4, 12],
    pos: [10.5, 20.2],
  },

  {
    name: 'Beijing',
    color: 'red',
    connections: [13, 14, 15],
    pos: [30.6, 15.2],
  },
];

export const NUM_CITIES = CITIES.length;

const non_city_player_cards = [
  { name: 'Epidemic', is_city: false },
  { name: 'Helicopter', is_city: false },
];

function city_to_card(city) {
  let card = {};

  card.name = city.name;
  card.isCity = true;

  return card;
}

export const PLAYERCARDS = CITIES.map(city_to_card).concat(
  non_city_player_cards
);

export const ROLES = [
  'Walking Jesus',
  'Quarantine Queen',
  'Scientist',
  'Researcher',
  'Dispatcher',
];

export const MAX_PLAYERS = 4;
