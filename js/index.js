var music1 = document.getElementById("music1");

function Play() {
    music1.play();

    PlayNone();
}

function Pause() {
    music1.pause();

    PauseNone();
}

function Stop() {
    music1.pause();
    music1.currentTime = 0;
}
/*
var playbutton = document.getElementById("play");
var pausebutton = document.getElementById("pause");

pausebutton.style.display = "none";

function PlayNone() {
    playbutton.style.display = "none";
    pausebutton.style.display = "block";
}

function PauseNone() {
    playbutton.style.display = "block";
    pausebutton.style.display = "none";
}
*/

function transitionPage() {
    var number = document.getElementById("numtext").value;
    
    switch(number) {
        case "a":
            window.location.href = "audio1.html";
            break;
        
        case "b":
            window.location.href = "audio2.html";
            break;
        
        case "c":
            window.location.href = "audio3.html";
            break;
        
        case "four":
            window.location.href = "audio4.html";
            break;
        
        case "d":
            window.location.href = "audio5.html";
            break;
        
        case "e":
            window.location.href = "audio6.html";
            break;
        
        case "f":
            window.location.href = "audio7.html";
            break;
    }
}
