Meteor.startup(function() {
  if(Locations.find().count() === 0) {
    var locations = [
      {
        'name': 'location 1',
        'address': '123 Fake Street',
        'latLng': {'latitude': 30, 'longitude': -94}
      },
      {
        'name': 'location 2'
      }
    ];
    locations.forEach(function(location) {
      Locations.insert(location);
    });
  }
});