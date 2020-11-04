import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { MAX_PLAYERS } from '../utils/constants';
import D3 from 'd3';
import { action } from '@ember/object';

export default class GameRoute extends Route {
  model({ code }) {
    return this.store
      .queryRecord('game', { filter: { code } })
      .then((game) => hash({ game, players: game.players }))
      .then(({ game, players }) => {
        // if (game.inProgress || players.length >= MAX_PLAYERS) {
        //   this.replaceWith('index');
        // }

        const currentPlayer = this.store.createRecord('player', {
          game,
          name: `Player ${players.length + 1}`,
          hand: [],
        });

        return hash({ game, currentPlayer: currentPlayer.save() });
        // return { game };
      });
  }

  @action
  didTransition() {
    this.initMap();
    return true; // Bubble the didTransition event
  }

  initMap() {
    console.log('Before xml call');

    D3.xml('assets/map.svg').then(function (xml) {
      console.log('Inside passed function');

      // if (error) throw error;

      // "xml" is the XML DOM tree
      var htmlSVG = document.getElementById('map'); // the svg-element in our HTML file
      // append the "maproot" group to the svg-element in our HTML file
      htmlSVG.appendChild(xml.documentElement.getElementById('maproot'));

      // d3 objects for later use
      let svg = D3.select(htmlSVG);
      let maproot = svg.select('#maproot');

      // get the svg-element from the original SVG file
      var xmlSVG = D3.select(xml.getElementsByTagName('svg')[0]);
      // copy its "viewBox" attribute to the svg element in our HTML file
      //D3.select(htmlSVG).attr('viewBox', xmlSVG.attr('viewBox'));
      maproot.select('#RU').style('fill', 'blue');

      // let tri = document.createElement("path");
      // tri.d = "m 500,300 50,100 50,-100";
      // tri.id = "test_city";
      // maproot.appendChild(tri);
      maproot
        .append('path')
        .attr('id', 'test_city')
        .attr('d', 'm 500,300 50,100 50,-100')
        .attr('fill', 'green');

      function mouseoverAction() {
        D3.select(this).transition().duration(500).attr('fill', 'blue');
      }
      function mouseoutAction() {
        D3.select(this).transition().duration(500).attr('fill', 'green');
      }

      maproot.select('#test_city').on('mouseover', mouseoverAction);
      maproot.select('#test_city').on('mouseout', mouseoutAction);
    });
  }
}
