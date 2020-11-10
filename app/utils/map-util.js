// import D3 from 'd3';
// import { hash } from 'rsvp';
// import { NUM_CITIES, CITIES } from '../utils/constants';

// export function mapInit(game) {
//   const mapPromise = D3.xml('assets/map.svg');
//   const housePromise = D3.xml('assets/house.svg');

//   hash({ map: mapPromise, house: housePromise }).then(({ map, house }) => {
//     // Take all the info we need from the map.svg in the assets folder
//     var xmlSVG = D3.select(map.getElementsByTagName('svg')[0]);
//     let mapPath = map.documentElement.getElementById('maproot');
//     let mapWidth = xmlSVG.attr('width');
//     let mapHeight = xmlSVG.attr('height');

//     // grab info from house.svg
//     let stationPath = house.documentElement.getElementById('layer1');

//     // Put the map info into the html <svg> object
//     var htmlSVG = document.getElementById('map');
//     htmlSVG.appendChild(mapPath);
//     htmlSVG.setAttribute('viewBox', `0 0 ${mapWidth} ${mapHeight}`);

//     // d3 objects for later use
//     let svg = D3.select(htmlSVG);
//     let maproot = svg.select('#maproot');
//     // let svg_house =

//     // set up cloneable svg elements for city, research station
//     let templateGroup = maproot.append('g').attr('visibility', 'hidden');
//     templateGroup
//       .append('circle')
//       .attr('id', 'city-template')
//       .attr('class', 'city-marker')
//       .attr('r', 10)
//       .attr('y', '-20');
//       // TODO fix the station svg so we don't have to translate here
//     templateGroup.append(() => stationPath).attr('id', 'station-template')
//     .attr('transform', 'translate(-80, -10)');

//     // create links between cities
//     for (let i = 0; i < NUM_CITIES; i++) {
//       let a = CITIES[i];
//       a.connections.forEach((j) => {
//         if (i < j) {
//           let b = CITIES[j];
//           let x1 = a.pos[0];
//           let y1 = a.pos[1];
//           let x2 = b.pos[0];
//           let y2 = b.pos[1];
//           maproot
//             .append('path')
//             .attr('id', `city_link_${i}_${j}`)
//             .attr('class', `city_link_${i}`)
//             .attr('class', `city_link_${j}`)
//             .attr(
//               'd',
//               `m ${x1},${y1} Q ${(x1 + x2) / 2},${
//                 (y1 + y2) / 2 - 60
//               } ${x2},${y2}`
//             )
//             .attr('stroke', 'gray')
//             .attr('stroke-width', 3)
//             .attr('fill', 'none');
//         }
//       });
//     }

//     // all the per-city svg elements
//     for (let i = 0; i < NUM_CITIES; i++) {
//       let cityInfo = CITIES[i];
//       let cityGroup = maproot
//         .append('g')
//         .attr('id', cityInfo.name)
//         .attr('transform', `translate(${cityInfo.pos[0]},${cityInfo.pos[1]})`);

//       // create city markers
//       cityGroup
//         .append('use')
//         .attr('href', '#city-template')
//         .attr('visibility', 'visible')
//         .attr('fill', cityInfo.color);

//       // research station (currently hidden)
      
//       debugger
//       let stationVisibility = 'hidden';
//       if (game.inProgress) {
//           stationVisibility = 'visible';
//       }
//       cityGroup
//         .append('use')
//         .attr('href', '#station-template')
//         .attr('class', 'station-marker')
//         .attr('visibility', stationVisibility)
//         .attr('fill', 'red');
//     }

//     // test: add station
//     maproot
//       .select('#Atlanta')
//       .select('.station-marker')
//       .attr('visibility', 'visible');
//   });
// }

// // let tri = document.createElement("path");
// // tri.d = "m 500,300 50,100 50,-100";
// // tri.id = "test_city";
// // maproot.appendChild(tri);

// /*
        
      
          
//           // maproot
//           //   .append('use')
//           //   .attr('href', '#city_marker')
//           //   .attr('fill', city_info.color)
//           //   .attr('x', city_info.pos[0])
//           //   .attr('y', city_info.pos[1]);
//         }

//         var x = 450;
//         var y = 400;

//         maproot
//           .append('g')
//           .attr('id', 'test_house')
//           .attr('transform', `translate(${x} ${y})`)
//           .append(() => house_path)
//           .attr('stroke', 'red');
//         // .append('path')
//         // .attr('d', 'm -50,-35 50,70 50,-70')

//         // debugger

//         function mouseoverAction() {
//           D3.select(this).transition().duration(500).attr('fill', 'blue');
//         }
//         function mouseoutAction() {
//           D3.select(this).transition().duration(500).attr('fill', 'green');
//         }

//         maproot.select('#test_city').on('mouseover', mouseoverAction);
//         maproot.select('#test_city').on('mouseout', mouseoutAction);
//       });
//     });
//     */
