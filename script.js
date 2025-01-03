
let secondRadius;
let minuteRadius;
let hoursRadius;
let clockRadius;

function setup() {
    createCanvas(710, 400);
    stroke(255);
    angleMode(DEGREES);

    let radius = min(width, height) / 2;
    console.log(radius);
    secondRadius = radius * 0.71;
    minuteRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockRadius = radius * 1.7;
    console.log(clockRadius);
}

function draw() {
    background(233);

    translate(width / 2, height / 2);
    
    stroke(0);
    strokeWeight(2);
    fill(244, 122, 158);
    ellipse(0, 0, clockRadius + 25, clockRadius + 25);

    fill(237, 34, 93);
    ellipse(0, 0, clockRadius, clockRadius);


    //angles
    let secondAngle = map(second(), 0, 60, 0, 360);
    let minuteAngle = map(minute(), 0, 60, 0, 360);
    let hoursAngle = map(hour() % 12, 0, 12, 0, 360);

    //  console.log(secondAngle, minuteAngle, hoursAngle);

    //line
    stroke(0);

    push();
    rotate(secondAngle);
    strokeWeight(1);
    line(0, 0, 0, -secondRadius);
    pop();

    push();
    rotate(minuteAngle);
    strokeWeight(2);
    line(0, 0, 0, -minuteRadius);
    pop();


    push();
    rotate(hoursAngle);
    strokeWeight(3);
    line(0, 0, 0, -hoursRadius);
    pop();

    push()
    fill(0);
    noStroke();
    circle(0, 0, 5);
    pop();
    //tick

    push();
    for (let i = 0; i < 60; i++) {
        point(0, -secondRadius);
        rotate(6);
    }
    pop();

    //cutomising with numbers
    push();
    textAlign(CENTER, CENTER);
    textSize(16);
    for (let i = 1; i <= 12; i++) {
        let angle = map(i, 0, 12, 0, 360) - 90;
        let x = (clockRadius - 180) * cos(angle);
        let y = (clockRadius - 180) * sin(angle);
        //  console.log(x, y);
        text(i, x, y);
        //rotate(angle);
    }
    pop();

}
























