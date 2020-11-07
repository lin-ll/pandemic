import Model, { attr, belongsTo } from '@ember-data/model';

export default class CityModel extends Model {
  // Unique identifier for the city, should also map to its card ID
  @attr('number') cardId;

  // @belongsTo('game') game;

  // How many disease cubes of each color are on the city
  @attr('number', { defaultValue: 0 }) diseaseCubesBlack;
  @attr('number', { defaultValue: 0 }) diseaseCubesBlue;
  @attr('number', { defaultValue: 0 }) diseaseCubesRed;
  @attr('number', { defaultValue: 0 }) diseaseCubesYellow;

  // Whether or not there's a research station located at this city
  @attr('boolean', { defaultValue: false }) hasResearchStation;
}
