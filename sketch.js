var url = 'http://api.population.io/1.0/population/2016/aged/18/?format=json';
var population;


function setup() {
  createCanvas(600, 600);
  loadJSON(url, gotData);
}

function gotData(data) {
  population = data;
  print(data);
  background(24, 53, 111);
  for (var i = 0; i < population[i].total; i++) {
    fill(255);
    ellipse(random(width), random(height), 10, 10);
  }

}

function draw() {


}