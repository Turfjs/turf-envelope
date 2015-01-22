var extent = require('turf-extent');
var bboxPolygon = require('turf-bbox-polygon');

/**
 * Takes a {@link Feature} or {@link FeatureCollection} and returns a rectangular {@link Polygon} feature that encompasses all vertices.
 *
 * @module turf/envelope
 * @param {FeatureCollection} fc a FeatureCollection of any type
 * @return {Polygon} a rectangular Polygon feature that encompasses all vertices
 * @example
 * var fc = turf.featurecollection([
 *  turf.point([-75.343, 39.984], {name: 'Location A'}),
 *  turf.point([-75.833, 39.284], {name: 'Location B'}),
 *  turf.point([-75.534, 39.123], {name: 'Location C'})
 * ]);
 *
 * var enveloped = turf.envelope(fc);
 *
 * var result = turf.featurecollection(
 * 	fc.features.concat(enveloped));
 *
 * //=result
 */

module.exports = function(features, done){
  var bbox = extent(features);
  var poly = bboxPolygon(bbox);
  return poly;
}
