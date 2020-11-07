import Model, { attr, hasMany } from '@ember-data/model';
import {
  INFECTION_RATES,
  TOTAL_DISEASE_CUBES_PER_COLOR,
  TOTAL_RESEARCH_STATIONS,
} from '../utils/constants';

export default class GameModel extends Model {
  // Unique game code exposed to players to join a game
  @attr('string') code;

  // Whether or not the game is in progress
  @attr('boolean', { defaultValue: false }) inProgress;

  // List of players in this game
  @hasMany('player') players;

  // List of cities in this game
  @attr cities;

  /**
   * Decks:
   * 1. Infection pile
   * 2. Infection discard
   * 3. Draw pile
   * 4. Discard pile
   */
  @attr infectionDeck;
  @attr infectionDiscard;
  @attr playerDeck;
  @attr playerDiscard;

  // Number of outbreaks that have occurred
  @attr('number', { defaultValue: 0 }) numOutbreaks;

  // Number of epidemics that have occurred
  @attr('number', { defaultValue: 0 }) numEpidemics;

  // Infection rate, determined by number of epidemics that have occurred
  get infectionRate() {
    return INFECTION_RATES[this.numEpidemics];
  }

  // UNCURED: 0, CURED: 1, ERADICATED: 2
  @attr('number', { defaultValue: 0 }) cureStatusBlack;
  @attr('number', { defaultValue: 0 }) cureStatusBlue;
  @attr('number', { defaultValue: 0 }) cureStatusRed;
  @attr('number', { defaultValue: 0 }) cureStatusYellow;

  // How many research stations are still not built
  get remainingResearchStations() {
    return this.cities.reduce(
      (total, city) => total - (city.hasResearchStation ? 1 : 0),
      TOTAL_RESEARCH_STATIONS
    );
  }

  /**
   * How many disease cubes are remaining in each color
   */
  get diseaseCubesBlack() {
    return this.cities.reduce(
      (total, city) => total - city.diseaseCubesBlack,
      TOTAL_DISEASE_CUBES_PER_COLOR
    );
  }
  get diseaseCubesBlue() {
    return this.cities.reduce(
      (total, city) => total - city.diseaseCubesBlue,
      TOTAL_DISEASE_CUBES_PER_COLOR
    );
  }
  get diseaseCubesRed() {
    return this.cities.reduce(
      (total, city) => total - city.diseaseCubesRed,
      TOTAL_DISEASE_CUBES_PER_COLOR
    );
  }
  get diseaseCubesYellow() {
    return this.cities.reduce(
      (total, city) => total - city.diseaseCubesYellow,
      TOTAL_DISEASE_CUBES_PER_COLOR
    );
  }
}
