var test = require('tape')
var envelope = require('./')
var fc = require('./geojson/fc.json')

test(function(t){
  var enveloped = envelope(features)
  t.ok(enveloped)
  t.equal(enveloped.geometry.type, 'Polygon')
  t.end()
})