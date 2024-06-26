//sub1 오디오 
const playBtn = document.getElementById("play");
const musicContainer = document.getElementById("musicContainer");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById('progress-container');
const imgCover = document.getElementById("cover");
const title = document.getElementById("title");

const songs = ["O Canada!"];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = songs ;
    audio.src = './music/music.mp3';
    imgCover.src = './images/sub1_musicx2.png';
  }

  function playMusic() {
    musicContainer.classList.add("play");
  
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  
    audio.play();
  }
  
  function pauseMusic(){
      musicContainer.classList.remove('play');
      playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  
      audio.pause();
  }
  
  
  function updateProgress(e){
      const {duration, currentTime} = e.srcElement;
  
      const progressPer = (currentTime / duration) * 100;
  
      progress.style.width = `${progressPer}%`;
  }
  
  function changeProgress(e){
  
      const width = e.target.clientWidth; // 전체 넓이
  
      const offsetX = e.offsetX; // 현재 x 좌표;
  
      const duration = audio.duration; // 재생길이
  
      audio.currentTime = (offsetX / width) * duration; 
  
  }
  
  playBtn.addEventListener("click", () => {
      const isPlaying = musicContainer.classList.contains('play');
  
      if(isPlaying){
          pauseMusic();
      } else{
          playMusic();
      }
  });
  
  audio.addEventListener('timeupdate', updateProgress);
  
  progressContainer.addEventListener('click', changeProgress);
