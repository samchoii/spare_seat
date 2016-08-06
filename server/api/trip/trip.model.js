'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var TripSchema = new Schema({
  destination: String,
  starting_location: String,
  total_seats: Number,
  available_seats: Number,
  driver_id: Schema.Types.ObjectId,
  passengers: [Schema.Types.ObjectId],
  status: String
});

module.exports = mongoose.model('Trip', TripSchema);
