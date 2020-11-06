import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { MAX_PLAYERS } from '../utils/constants';
import { action } from '@ember/object';
import { mapInit } from '../utils/map-util';

export default class GameRoute extends Route {
  @service('realtime-listener') realtimeListener;

  tempCode;

  model({ code }) {
    this.tempCode = code;
    return this.store
      .queryRecord('game', { filter: { code } })
      .then((game) => hash({ game, players: game.players }))
      .then(({ game, players }) => {
        // Subscribe to changes in the game
        this.realtimeListener.subscribe(this, game);

        // If the game is in progress or has the max number of players,
        // join as a watcher
        if (game.inProgress || players.length >= MAX_PLAYERS) {
          return { game };
        }

        // Otherwise, join as a player
        const currentPlayer = this.store.createRecord('player', {
          game,
          name: `Player ${players.length + 1}`,
          hand: [],
        });
        return hash({ game, currentPlayer: currentPlayer.save() });
      });
  }

<<<<<<< HEAD
<<<<<<< HEAD
  deactivate() {
    this.realtimeListener.unsubscribe(this, this.model.game);
=======
  @action
  didTransition() {
    this.initMap();
    return true; // Bubble the didTransition event
  }

  initMap() {
    console.log('Before xml call');

    D3.xml('assets/map.svg').then(function (xml) {
      D3.xml('assets/house.svg').then(function (xml_house) {
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
        let mapWidth = xmlSVG.attr('width');
        let mapHeight = xmlSVG.attr('height');
        svg.attr('viewBox', `0 0 ${mapWidth} ${mapHeight}`);
        //svg.attr('width', 'auto');
        maproot.select('#RU').style('fill', 'blue');

        // let tri = document.createElement("path");
        // tri.d = "m 500,300 50,100 50,-100";
        // tri.id = "test_city";
        // maproot.appendChild(tri);

        let house_path = xml_house.documentElement.getElementById('layer1');
        let hp2 = D3.select(house_path);

        maproot.append('circle').attr('id', 'city_marker').attr('r', 10);


        for (let i = 0; i < NUM_CITIES; i++) {
          let a = CITIES[i];
          a.connections.forEach((j) => {
            if (i < j) {
              let b = CITIES[j];
              let x1 = a.pos[0];
              let y1 = a.pos[1];
              let x2 = b.pos[0];
              let y2 = b.pos[1];
              maproot.append('path')
              .attr('id', `city_link_${i}_${j}`)
              .attr('class', `city_link_${i}`)
              .attr('class', `city_link_${j}`)
              .attr('d', `m ${x1},${y1} Q ${(x1+x2)/2},${(y1+y2)/2-60} ${x2},${y2}`)
              .attr('stroke', 'gray')
              .attr('stroke-width', 3)
              .attr('fill', 'none');
            }
          });
=======
  @action
  didTransition() {
    let code = this.tempCode;
    let gamePromise = this.store.queryRecord('game', { filter: { code } });
>>>>>>> 4975b9b... Better organization, but in js. Going to switch to a component

    gamePromise.then((game) => {
      mapInit(game);
    });

    return true; // Bubble the didTransition event
  }

<<<<<<< HEAD
        maproot.select('#test_city').on('mouseover', mouseoverAction);
        maproot.select('#test_city').on('mouseout', mouseoutAction);
      });
    });
>>>>>>> eb1846a... Add terrible-looking map
=======
  deactivate() {
    this.realtimeListener.unsubscribe(this, this.model.game);
>>>>>>> 4975b9b... Better organization, but in js. Going to switch to a component
  }
}
