var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// var faker = require('faker');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

// var fakeData = function() {
// 	var jsonData = {
// 		users: [],
// 	}
// 	for (var i = 0; i < 2000; i++) {
// 		newUser = {};
// 		newUser.name = faker.name.findName();
// 		newUser.hours = faker.random.number(30)
// 		newUser.department = faker.name.jobArea()
// 		newUser.locationOfWork = faker.company.companyName()
// 		jsonData.users.push(newUser);
// 	}
// 	console.log (JSON.stringify(jsonData));
// }
// fakeData();