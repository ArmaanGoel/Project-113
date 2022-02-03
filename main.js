function preload(){

}
function setup(){
    canvas= createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video,230,150,220,200);
    fill(255,0,0);
    stroke(100,30,70);
    circle(100,60,50);

    fill(255,0,0);
    stroke(100,30,70);
    circle(530,60,50);

    fill(255,0,0);
    stroke(100,30,70);
    circle(100,430,50);

    fill(255,0,0);
    stroke(100,30,70);
    circle(530,430,50);

    fill(0,128,0)
    stroke(255,255,0)
    rect(115,420,400,20)

    fill(0,128,0)
    stroke(255,255,0)
    rect(115,50,400,20)

    fill(0,128,0)
    stroke(255,255,0)
    rect(94,50,20,390)

    fill(0,128,0)
    stroke(255,255,0)
    rect(510,50,20,390)
}