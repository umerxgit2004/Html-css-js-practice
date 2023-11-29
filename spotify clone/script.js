console.log("welcome to spotify")
// Initialize Variables
let songIndex = 0;
let audioElement = new Audio("audio1.mp3"); //Audio is a built in class new is used to initialize a object of a class
let masterPlay = document.getElementById("masterplay");
let myProgressBar= document.getElementById("myProgressBar");
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
   {songName:"rishtey", filePath:"audio1.mp3",coverPath:"cover1.jpg"},
   {songName:"Sajina", filePath:"audio2.mp3",coverPath:"cover2.jpg"},
   {songName:"King", filePath:"audio3.mp3",coverPath:"cover3.jpg"},
   {songName:"King2", filePath:"audio4.mp3",coverPath:"cover4.jpg"},
   {songName:"rishtey", filePath:"audio5.mp3",coverPath:"cover5.jpg"},
   {songName:"rishtey", filePath:"audio1.mp3",coverPath:"cover6.jpg"},
   {songName:"rishtey", filePath:"audio1.mp3",coverPath:"cover7.jpg"},
   {songName:"rishtey", filePath:"audio1.mp3",coverPath:"cover8.jpg"},
   {songName:"rishtey", filePath:"audio1.mp3",coverPath:"cover9.jpg"},
   {songName:"rishtey", filePath:"audio1.mp3",coverPath:"cover10.jpg"},
];

songItems.forEach((element, i) => {
   
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
});


// Handle play / pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.querySelector('img').src = 'pause.png';
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.querySelector('img').src = 'playC.png';
        gif.style.opacity = 0;
    }
});

// Listen for the 'play' event on the audio element
audioElement.addEventListener('play', () => {
    masterPlay.querySelector('img').src = 'pause.png';
});

// Listen for the 'pause' event on the audio element
audioElement.addEventListener('pause', () => {
    masterPlay.querySelector('img').src = 'playC.png';
});

// listen to Events
audioElement.addEventListener('timeupdate', () => {
       
       // update seek bar
      
       progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
       myProgressBar.value = progress
   });

   //sync audio
   myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100
   })


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        e.target.classList.remove('"playC.png"></')
    })
})