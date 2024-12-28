console.log("Welcome to spotify");

//initialize the variables
let songIndex=0;
let audioElement = new Audio('')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let songs =[
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
    {songName: "Let me Love You" , filePath:"song/" , CoverPath: "Covers/"},
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
        audioElement.play()
    }
}) 
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
})