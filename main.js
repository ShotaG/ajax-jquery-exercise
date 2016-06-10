/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

/*'use strict';
(function() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "";

  });
})();

$.ajax({
	url: 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD',
	type: 'GET', 
	//if success, do a function because you're gonna probably gonna do something
	success: function() {
		console.log('great success');
	},
	error: function() {
		console.error('API error');
	}
});

//shorthand, does the same as above
/*$.get({
	url: 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD',
	//if success, do a function because you're gonna probably gonna do something
	success: function() {
		console.log('great success');
	},
	error: function() {
		console.error('API error');
	}
});
*/



'use strict';
(function() {
	var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
	//**  i think I have to attach an event listener
	// on the submit button, then below can be the handler???
	//var $city = ('#userInput').val();
	//var $city = 'Tokyo'
	var apiKey = '&APPID=03c2a980555574c1812de024ec41c372';
	var unit = '&units=imperial';

	$('#getData').on('click', function() {
		var $city = $('userInput').val();
		console.log('click');
		$.ajax({
			type: 'GET', 
			url: weatherUrl + $city + apiKey + unit,
	//if success, do a function because you're gonna probably gonna do something
			success: function(response) {
				console.log(response);
				console.log(responseText);
		//console.log('Current temperature in ' + $city + ' is ' + response.main.temp);
			},
			error: function(response) {
				console.error('API error');
			}
		});
	});
})()
	/*$.ajax({
	url: weatherUrl + $city + apiKey + unit,
	type: 'GET', 
	//if success, do a function because you're gonna probably gonna do something
	success: function(response) {
		console.log(response);
		console.log(textResponse);
		//console.log('Current temperature in ' + $city + ' is ' + response.main.temp);
	},
	error: function(response) {
		console.error('API error');
	}
	});
})();
*/