import { helper } from '@ember/component/helper';
import { CITIES } from '../utils/constants';

export default helper(function getCityPosX([cityCardId, index]) {
  debugger;
  let city_info = CITIES[cityCardId];
  return city_info.pos[index];
});
