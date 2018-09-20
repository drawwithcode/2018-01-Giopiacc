function setup() {
	// define artboard size
	createCanvas(600,800);
	// Set here the values that are not changing all over the sketch

}

function draw() {
	background(204,136,153);

  //antenne
	strokeWeight(2);
	stroke(55,55,55);
	line(300,300,200,200);

	strokeWeight(2);
	stroke(55,55,55);
	line(300,300,400,200);

	//testa
	ellipseMode(CENTER);
  strokeWeight(2);
	fill(55,55,55);
	ellipse(300,300,130);


	rectMode(CENTER);
	strokeWeight(2);
	fill(180,180,180);
  stroke(55,55,55);
	rect(300,330,130,80);

	//occhi
	ellipseMode(CENTER);
	fill(255,255,255);
	stroke(55,55,55);
  ellipse(265,320,30);

	ellipseMode(CENTER);
	fill(255,255,255);
	stroke(55,55,55);
	ellipse(335,320,30);

	//pupille
	ellipseMode(CENTER);
	fill(95,158,160);
	noStroke();
  ellipse(265,320,15);

	ellipseMode(CENTER);
	fill(95,158,160);
	noStroke();
	ellipse(335,320,15);

	//bocca
	rectMode(CENTER);
	strokeWeight(2);
	fill(55,55,55);
  stroke(55,55,55);
	rect(300,350,60,5);

	//collo
	rectMode(CENTER);
	strokeWeight(2);
	fill(55,55,55);
  stroke(55,55,55);
	rect(300,390,20,40);

	//piedi
	ellipseMode(CENTER);
	fill(55,55,55);
	stroke(55,55,55);
	ellipse(255,605,70);

	ellipseMode(CENTER);
	fill(55,55,55);
	stroke(55,55,55);
	ellipse(345,605,70);

	//busto
	rectMode(CENTER);
	strokeWeight(2);
	fill(180,180,180);
	stroke(55,55,55);
	rect(300,500,190,200);

	//pancia
	rectMode(CENTER);
	strokeWeight(2);
	fill(215,215,215);
	stroke(55,55,55);
	rect(300,500,120,130);


	//braccia
	rectMode(CENTER);
	strokeWeight(2);
	fill(55,55,55);
  stroke(55,55,55);
	rect(205,480,30,100);

	rectMode(CENTER);
	strokeWeight(2);
	fill(55,55,55);
  stroke(55,55,55);
	rect(395,480,30,100);

	//mani
	ellipseMode(CENTER);
	fill(215,215,215);
	stroke(55,55,55);
  ellipse(205,545,40);

	ellipseMode(CENTER);
	fill(215,215,215);
	stroke(55,55,55);
	ellipse(395,545,40);





}
