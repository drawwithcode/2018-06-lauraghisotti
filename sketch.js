var myData;
var myMc;
var myKFC;
var myFiveGuys;

function preload(){
  // put preload code here
    myData=loadJSON("./assets/fastfoods.json");
    myMc=loadImage("./assets/mcdonalds.png");
    myKFC=loadImage("./assets/kfc.png");
    myFiveGuys=loadImage("./assets/fiveguys.jpg");
}

var balls=[];


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

image(myMc, 0, 0);

  for(var i=0; i<myData.people.length; i++) {
    var food=myData.people[i];

  if (i==0){
    var x=(1+i)*(width/5);
  } else if (i==1) {
    var x=width/2;
  } else {
    var x=(2+i)*(width/5);
  }
    var y=height/2;
    var d= food.restaurants+100;
    var l= food.name;
    var s= food.since;
    var c= food.country;
    var spec= food.specialty;
    var p= food.price;
    var img= food.biophoto;
    var txt= food.text;

    var newBall= new Ball(x, y, d, l, s, c, spec, p, txt, img);
    balls.push(newBall);
    console.log(food);
  }
}

function draw() {
  // put drawing code here
  background("red");
  push();
  imageMode(CENTER);
  translate(width/2, height/2);
  scale(0.2);
  image(myFiveGuys, 0, 0);
  pop();

  push();
  imageMode(CENTER);
  translate(width/5, height/2);
  scale(0.5);
  image(myKFC, 0, 0);
  pop();

  push();
  imageMode(CENTER);
  translate(4*width/5, height/2);
  scale(0.2);
  image(myMc, 0, 0);
  pop();

	for(var j = 0; j < balls.length; j++) {
	//	balls[j].move();
  if (j==0 && mouseX<3*width/8 && mouseIsPressed==true){
    balls[j].display();
  }

  if (j==1 && mouseX>3*width/8 && mouseX<5*width/8 && mouseIsPressed==true){
		balls[j].display();
  }

  if (j==2 && mouseX>5*width/8 && mouseIsPressed==true){
		balls[j].display();
  }
	}

  if (mouseIsPressed==false) {
  textAlign(CENTER);
  textFont("Calibri");
  textSize(20);
  fill("white");
  text("Click on the fast food chain to found out about its foundation date, its specialty and its price range. The more restaurants it owns, the bigger the rectangle is.", width/2, height-20);
  }

}



function Ball(_x, _y, _diameter, _label, _date, _country, _spec, _price, _txt, _image) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
  this.label= _label;
  this.date=_date;
  this.image= _image;
  this.country=_country;
  this.spec=_spec;
  this.price=_price;
  this.txt=_txt;
	// Hardcoded properties
	this.color = 'white';
	/*this.speed = 2;

	this.yDir = 1;
	this.xDir = 1;*/
	// Methods
	/*this.move = function() {
		this.x += this.speed * this.xDir;
		this.y += this.speed * this.yDir;

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			this.yDir *= -1;
		}

		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
	}*/

	this.display = function() {
		fill(this.color);
    noStroke();
    rectMode(CENTER);
		rect(this.x, this.y, this.size, this.size);
    fill("black");
    textAlign(CENTER);
    textFont("Calibri");
    textSize(this.txt);
    text(this.label, this.x, this.y-50);
    text(this.date, this.x, this.y-30);
    text(this.country, this.x, this.y+10);
    text(this.spec, this.x, this.y+30);
    text(this.price, this.x, this.y+50);
    console.log("since");
    //image(this.image, this.x, this.y);

	}
}
