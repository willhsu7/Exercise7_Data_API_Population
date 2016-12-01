var url = 'http://api.population.io/1.0/population/2016/aged/18/?format=json';
var population;


function setup() {
  createCanvas(500, 500);
  loadJSON(url, gotData);
}

function gotData(data) {
  population = data;
  background(0);
  for (var i = 0; i < population[i].total; i++) {
    fill(255);
    ellipse(random(width), random(height), 10, 10);
  }
  print(data);
}

function draw() {

} 

