console.log("Welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "You And Me", filePath: "songs/1.mp3", CoverPath: "images/img-1.jpeg" },
    { songName: "Thousand Year", filePath: "songs/1.mp3", CoverPath: "images/img-2.jpeg" },
    { songName: "Peelings-Pushpa2", filePath: "songs/", CoverPath: "images/img-3.jpeg" },
    { songName: "Kuch is Tarah", filePath: "song/", CoverPath: "images/img-4.jpeg" },
    { songName: "Love me Like You Do", filePath: "song/", CoverPath: "images/img-5.jpeg" },
    { songName: "Abhi Abhi", filePath: "song/", CoverPath: "images/img-6.jpeg" },
    { songName: "Teri Ore", filePath: "song/", CoverPath: "images/img-7.jpeg" },
    { songName: "Saathiya", filePath: "song/", CoverPath: "images/img-8.jpeg" },
    { songName: "Closer", filePath: "song/", CoverPath: "images/img-9.jpeg" }
]
songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByclassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.4;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex =parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = "songs/${songIndex+1}.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
