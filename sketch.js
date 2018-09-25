function setup() {
	// define artboard size
	createCanvas(600,800);
	// Set here the values that are not changing all over the sketch
	background(194,239,255);
	//nuvola
	ellipseMode(CENTER);
	fill(255,255,255);
	noStroke();
	ellipse(180,100,240,120);

	ellipseMode(CENTER);
	fill(255,255,255);
	noStroke();
	ellipse(230,170,40,20);

	ellipseMode(CENTER);
	fill(255,255,255);
	noStroke();
	ellipse(250,190,30,15);

	strokeWeight(2);
	stroke(55, 55, 55);
	line(700, 140, 900, 140);


}

function draw() {


	//terra
	rectMode(CENTER);
	noStroke();
	fill(0,124,0);
	rect(0,800,2000,350);

  //antenne
	strokeWeight(2);
	stroke(55,55,55);
	line(300,300,200,200);

	strokeWeight(2);
	stroke(55,55,55);
	line(300,300,400,200);

	ellipseMode(CENTER);
	fill(55,55,55);
	stroke(55,55,55);
	ellipse(205,200,20);

	ellipseMode(CENTER);
	fill(55,55,55);
	stroke(55,55,55);
	ellipse(395,200,20);

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
	strokeWeight(2);
	fill(255, 255, 255);
	stroke(255,65,35);
	arc(300, 343, 60, 35, TWO_PI, PI);
	fill(245, 135, 30);

	rectMode(CENTER);
	fill(255,65,35);
  noStroke();
	rect(300,344,60,5);

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

	//write
	strokeWeight(1);
	stroke(190, 190, 190);
	line(pmouseX, pmouseY, mouseX, mouseY);



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
