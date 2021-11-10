video="";

function preload()
{
video=createVideo('video.mp4');
video.hide();
}

function setup()
{
canvas=createCanvas(450,350);
canvas.center();
}

function start()
{
objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status:detecting objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw()
{
image(video, 0, 0, 450, 350);
}