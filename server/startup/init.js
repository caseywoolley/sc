Meteor.startup(function () {

// 	Meteor.methods({
// 	  locationName: function(lat, lng){
// 	  console.log(lat, lng);
// 	  var geo = new GeoCoder({
//     geocoderProvider: 'google',
//     httpAdapter: 'http'
//   });
// 	  console.log(lat, lng)
// 	  var reverseGeocoding = geo.reverse(lat, lng);

// 	  return reverseGeocoding;
// 	}
// });
	// process.env.MOBILE_DDP_URL = 'http://127.0.0.1:3000/';
	// process.env.MOBILE_ROOT_URL = 'http://127.0.0.1:3000/';

	// Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
	//   bucket: "mybucket",

	//   acl: "public-read",

	//   authorize: function () {
	//     //Deny uploads if user is not logged in.
	//     if (!this.userId) {
	//       var message = "Please login before posting files";
	//       throw new Meteor.Error("Login Required", message);
	//     }

	//     return true;
	//   },

	//   key: function (file) {
	//     //Store file into a directory by the user's username.
	//     var user = Meteor.users.findOne(this.userId);
	//     return user.username + "/" + file.name;
	//   }
	// });

});