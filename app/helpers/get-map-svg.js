import { helper } from '@ember/component/helper';

export default helper(function getMapSvg() {
       // Take all the info we need from the map.svg in the assets folder
       var xmlSVG = D3.select(map.getElementsByTagName('svg')[0]);
       let mapPath = map.documentElement.getElementById('maproot');
       let mapWidth = xmlSVG.attr('width');
       let mapHeight = xmlSVG.attr('height');
   
    //    // grab info from house.svg
    //    let stationPath = house.documentElement.getElementById('layer1');
   
    //    // Put the map info into the html <svg> object
    //    var htmlSVG = document.getElementById('map');
    //    htmlSVG.appendChild(mapPath);
    //    htmlSVG.setAttribute('viewBox', `0 0 ${mapWidth} ${mapHeight}`);
       return xmlSVG;
});