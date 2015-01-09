var extent = require('turf-extent');
var bboxPolygon = require('turf-bbox-polygon');

/**
* Takes a Feature or FeatureCollection and returns a rectangular polygon feature that encompasses all vertices.
*
* @module turf/envelope
* @param {FeatureCollection} fc - a FeatureCollection of any type
* @return {Polygon} enveloped - a rectangular Polygon feature that encompasses all vertices
* @example
* var pt1 = turf.point(-75.343, 39.984, {name: 'Location A'});
* var pt2 = turf.point(-75.833, 39.284, {name: 'Location B'});
* var pt3 = turf.point(-75.534, 39.123, {name: 'Location C'});
* var fc = turf.featurecollection([pt1, pt2, pt3]);
*
* var enveloped = turf.envelope(fc);
*
* //=enveloped
*/

module.exports = function(features, done){
  var bbox = extent(features);
  var poly = bboxPolygon(bbox);
  return poly;
}
