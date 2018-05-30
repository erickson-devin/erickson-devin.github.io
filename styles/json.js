function setup() {
	createCanvas(200, 200);
	loadJSON( "http://api.open-notify.org/astros.json", gotData, 'jsonp')
	
	}

function gotData(data){

		background(0);
		for (var i = 0; i < data.number; i++) {
			fill(255);
			ellipse(random(width), random(height), 16, 16);
			}
	}