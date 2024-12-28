console.log("Welcome to spotify");

//initialize the variables
let songIndex=0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs =[
    {songName: "Let me Love You" , filePath:"songs/1.mp3" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"songs/1.mp3" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"}
]

// audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.4;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
}) 
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    // update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value* audioElement.duration)/100;
})