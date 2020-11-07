import { tracked } from '@glimmer/tracking';
import { COLORS } from './constants';

export default class City {
  /**
   * @description Name of the city
   * @type {String}
   * @public
   */
  name;

  /**
   * @description Color of the city
   * @type {String}
   * @public
   */
  color;

  /**
   * @description Array of connected cities
   * @type {Array<City>}
   * @public
   */
  connections = [];

  /**
   * @description Position { x, y } of the city
   * @type {Object}
   * @public
   */
  position;

  /**
   * @description Number of black disease cubes on the city
   * @type {Number}
   * @public
   */
  @tracked diseaseCubesBlack = 0;

  /**
   * @description Number of blue disease cubes on the city
   * @type {Number}
   * @public
   */
  @tracked diseaseCubesBlue = 0;

  /**
   * @description Number of red disease cubes on the city
   * @type {Number}
   * @public
   */
  @tracked diseaseCubesRed = 0;

  /**
   * @description Number of yellow disease cubes on the city
   * @type {Number}
   * @public
   */
  @tracked diseaseCubesYellow = 0;

  /**
   * @description Whether or not it has a research station
   * @type {Boolean}
   * @public
   */
  @tracked hasResearchStation = false;

  /**
   *
   * @param {String} name
   * @param {String} color
   * @param {Object} position
   */
  constructor(name, color, position) {
    this.name = name;
    this.color = color;
    this.position = position;
  }

  /**
   * @description Add a connected city to connections
   * @param {City} connectedCity
   */
  addConnection(connectedCity) {
    this.connections.push(connectedCity);
  }

  /**
   * @description Build a research station at this city
   */
  buildResearchStation() {
    this.hasResearchStation = true;
  }

  /**
   * @description Infect the city's color with the disease of specified quantity
   * @param {Number} quantity
   */
  infectSetup(quantity) {
    switch (this.color) {
      case COLORS.BLACK:
        this.diseaseCubesBlack += quantity;
        break;
      case COLORS.BLUE:
        this.diseaseCubesBlue += quantity;
        break;
      case COLORS.RED:
        this.diseaseCubesRed += quantity;
        break;
      case COLORS.YELLOW:
        this.diseaseCubesYellow += quantity;
        break;
    }
  }

  /**
   * @description Infect the city with a disease
   * @param {String} [color=this.color] Color of the disease
   * @param {Number} [quantity=1] Quantity of disease cubes to add
   * @param {Array<City>} [outbreakHistory=[]] List of previous cities it outbroke from
   */
  infect(color = this.color, outbreakHistory = []) {
    switch (color) {
      case COLORS.BLACK:
        if (this.diseaseCubesBlack == 3) this._outbreak(color, outbreakHistory);
        else this.diseaseCubesBlack += 1;
        break;
      case COLORS.BLUE:
        if (this.diseaseCubesBlue == 3) this._outbreak(color, outbreakHistory);
        else this.diseaseCubesBlue += 1;
        break;
      case COLORS.RED:
        if (this.diseaseCubesRed == 3) this._outbreak(color, outbreakHistory);
        else this.diseaseCubesBlue += 1;
        break;
      case COLORS.YELLOW:
        if (this.diseaseCubesYellow == 3)
          this._outbreak(color, outbreakHistory);
        else this.diseaseCubesYellow += 1;
        break;
    }
  }

  /**
   * @description Treat the city for a disease
   * @param {String} color Color of the disease
   * @param {Number} quantity Quantity of disease cubes to remove
   * @returns {Number} Number removed from the city
   */
  treat(color = this.color, quantity) {
    let minRemove;
    switch (color) {
      case COLORS.BLACK:
        minRemove = Math.min(this.diseaseCubesBlack, quantity);
        this.diseaseCubesBlack -= minRemove;
        break;
      case COLORS.BLUE:
        minRemove = Math.min(this.diseaseCubesBlue, quantity);
        this.diseaseCubesBlue -= minRemove;
        break;
      case COLORS.RED:
        minRemove = Math.min(this.diseaseCubesRed, quantity);
        this.diseaseCubesRed -= minRemove;
        break;
      case COLORS.YELLOW:
        minRemove = Math.min(this.diseaseCubesYellow, quantity);
        this.diseaseCubesYellow -= minRemove;
        break;
    }
    return minRemove;
  }

  /**
   * @description Outbreak the disease to the connected cities
   * @param {String} color Color of the disease
   * @param {Array<City>} [outbreakHistory] List of previous cities it outbroke from
   * @private
   */
  _outbreak(color, outbreakHistory) {
    const newOutbreakHistory = [...outbreakHistory, this];
    this.connections.forEach((connectedCity) => {
      if (!outbreakHistory.includes(connectedCity)) {
        connectedCity.infect(color, 1, newOutbreakHistory);
      }
    });
  }
}
