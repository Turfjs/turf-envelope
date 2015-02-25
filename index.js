var extent = require('turf-extent');
var bboxPolygon = require('turf-bbox-polygon');

/**
 * Takes any number of features and returns a rectangular {@link Polygon} feature that encompasses all vertices.
 *
 * @module turf/envelope
 * @category measurement
 * @param {FeatureCollection<(Point|LineString|Polygon)>} fc input features
 * @return {Feature<Polygon>} a rectangular Polygon feature that encompasses all vertices
 * @example
 * var fc = {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {
 *         "name": "Location A"
 *       },
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [-75.343, 39.984]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {
 *         "name": "Location B"
 *       },
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [-75.833, 39.284]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {
 *         "name": "Location C"
 *       },
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [-75.534, 39.123]
 *       }
 *     }
 *   ]
 * };
 *
 * var enveloped = turf.envelope(fc);
 *
 * var resultFeatures = fc.features.concat(enveloped);
 * var result = {
 *   "type": "FeatureCollection",
 *   "features": resultFeatures
 * };
 *
 * //=result
 */

module.exports = function(features){
  var bbox = extent(features);
  var poly = bboxPolygon(bbox);
  return poly;
}
