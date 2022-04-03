var noseX
var noseY
var rightwristX
var leftwristX










function setup(){
    video=createCapture(VIDEO)
    video.size(550,550)
    canvas=createCanvas(550,450)
    canvas.position(560,150)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}
function modelloaded(){
    console.log("modelloaded")
}
function gotposes(results){
if (results.length>0) {
   console.log(results) 
}
}