function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(0,75);

    canvas=createCanvas(600,450);
    canvas.position(750,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        lwristX=results[0].pose.leftWrist.x;
        rwristX=results[0].pose.rightWrist.x;
        difference=floor(lwristX-rwristX);
        console.log(noseX+" "+noseY+" "+leftWrist+" "+rwristX+" "+difference);
        document.getElementById("side").innerHTML="side of square = "+difference;
    }
}

noseX=0;
noseY=0;
difference=0;
lwristX=0;
rwristX=0;
function preload(){

}