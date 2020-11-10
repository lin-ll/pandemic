import D3 from 'd3';
import { action } from '@ember/object';


export default Ember.Component.extend({
    @action
    growCity(cardId) {
        let  htmlSVG = document.getElementById('svgMap');
        let cityGroup = D3.select(htmlSVG, `city{cardId}`);
        debugger
    }
  });