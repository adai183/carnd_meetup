var ref = require('./ref');

module.exports = function(username, country, town, zip, distance, lat, lng) {
  var userId = ref.child('users').push().key
  var dbData = {
    username: username,
    country: country,
    town: town,
    zip: zip,
    distance: distance,
    lat: lat,
    lng: lng
  }
  ref.child('users/' + userId)
    .set(dbData)
}