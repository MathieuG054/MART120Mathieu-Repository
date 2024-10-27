function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(65, 150, 186);
  
 stroke(0,0,0,)
  
  fill(255)
  textSize(20);
  text('Mathieu Portrait', 10, 50);
  stroke(0,0,0);
     
   fill(173, 143, 71);
  stroke(173,143,71)
 ellipse(250,90,200,120)
stroke(0,0,0)
  
  fill(141, 88, 191);
   circle(250,500,450);
  fill(235,196,141)
  rect(180,185,130,180);
  circle(250,190,250); 
     triangle(240, 210, 250, 155, 260,210);
   fill(255,255,255)
   ellipse(190,160,40,35);
 ellipse (300,160,40,35);
  fill(107,68,13);
  circle(195,160,20);
  circle(295,160,20);
  fill(0,0,0)
  circle(195,160,8);
  circle(295,160,8);
      strokeWeight(3); 
  line(200, 270, 290, 250);
 stroke(173,143,71) 
  push();
translate(270,1);
rotate(45);
fill(173, 143, 71);
rect(10,50,65, 155);
pop();
  fill(173,143,71);
ellipse(255,90,10,110)
triangle(240, 10,150,25,260,30);
  
  push();
translate(270, 1); // Adjust x translation to place it next to the original
scale(-1, 1); // Mirror horizontally
rotate(45);
fill(173, 143, 71);
rect(20,20, 65, 150); 
pop();
 

}