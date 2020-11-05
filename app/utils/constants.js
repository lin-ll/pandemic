export const CITIES = [
  {
    name: 'Atlanta',
    color: 'blue',
    connections: [1],
    pos: [100.5, 200.2],
  },

  {
    name: 'Beijing',
    color: 'red',
    connections: [0,2],
    pos: [300.6, 400.2],
  },
  {
    name: 'Jakarta',
    color: 'yellow',
    connections: [1],
    pos: [800, 300],
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

export const ROLE_NAMES = [
  'Walking Jesus', // Medic
  'Quarantine Queen', // Quarantine Specialist
  'Plan B Planner', // Contingency Planner
  "Gotta Collect 'Em All", // Scientist
  'Dealer', // Researcher
  'Puppet Master', // Dispatcher
  'Bob the Builder', // Operations Expert
];

export const ROLE_DESCRIPTIONS = [
  '"WJ" removes all cubes, not 1, of the same color when doing the Treat Disease action. If a disease has been cured, they automatically remove all cubes of that color from a city, simply by entering it or being there. This does not take an action. The automatic removal also occurs when being moved by the "Puppet Master" or by Airlift. They also prevent placing disease cubes (and outbreaks) of cured diseases in their location.', // Medic
  '"QQ" prevents both outbreaks and the placement of disease cubes in the city they are in and all cities connected to that city. They do not affect cubes placed during setup.', // Quarantine Specialist
  '"PBP" may, as an action, take an Event card from anywhere in the Player Discard Pile. Only 1 special Event card can be possessed at a time. It does not count against their hand limit. When "PBP" plays the special Event card, it is removed from the game (instead of discarded).', // Contingency Planner
  '"GCEM" needs only 4 (not 5) City cards of the same disease color to Discover a Cure for that disease.', // Scientist
  'When doing the Share Knowledge action, "Dealer" may give any City card from their hand to another player in the same city as them, without this card having to match the location city. The transfer must be from their hand to the other player\'s hand, but it can occur on either player\'s turn.', // Researcher
  "\"PM\" may, as an action, either (1) move any pawn, if its owner agrees, to any city containing another pawn, or (2) move another player's pawn, if its owner agrees, as if it were their own. When moving a player's pawn as if it were their own, they must discard cards for Direct and Charter Flights from their own hand. A card discarded for a Charter Flight must match the city the pawn is moving from. They can only move other players' pawns (not direct them to do other actions, such as Treat Disease).", // Dispatcher
  '"BB" may, as an action, either (1) build a research station in their current city without discarding (or using) a City card, or (2) once per turn, move from a research station to any city by discarding any City card.', // Operations Expert
];

export const ROLES = ROLE_NAMES.map((name, idx) => {
  return { name, id: idx, description: ROLE_DESCRIPTIONS[idx] };
});

export const MAX_PLAYERS = 4;
