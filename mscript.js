"use strict";

console.log("Welcome to Musify");

//Initialise the Variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let activity = true;

let songs = [
  {
    songName: "Tera Fitoor",
    filePath: "music/1.mp3",
    coverPath: "media-files/1.jpg",
  },
  {
    songName: "Shayad",
    filePath: "music/2.mp3",
    coverPath: "media-files/2.jpg",
  },
  {
    songName: "Tum Se Hi(Lofi)",
    filePath: "music/3.mp3",
    coverPath: "media-files/3.jpg",
  },
  {
    songName: "Mast Magan",
    filePath: "music/4.mp3",
    coverPath: "media-files/4.jpg",
  },
  {
    songName: "Dekh Lena",
    filePath: "music/5.mp3",
    coverPath: "media-files/5.jpg",
  },
  {
    songName: "Tose Naina",
    filePath: "music/6.mp3",
    coverPath: "media-files/6.jpg",
  },
  {
    songName: "Jashn-E-Bahara",
    filePath: "music/7.mp3",
    coverPath: "media-files/7.jpg",
  },
  {
    songName: "Mileya Mileya",
    filePath: "music/8.mp3",
    coverPath: "media-files/8.jpg",
  },
  {
    songName: "Kya Mujhe Pyaar Hai",
    filePath: "music/9.mp3",
    coverPath: "media-files/9.jpg",
  },
  {
    songName: "Dil Ko Kaarar Aaya",
    filePath: "music/10.mp3",
    coverPath: "media-files/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

let audioElement = new Audio("music/1.mp3");
// audioElement.play();

//Handle Play/Pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.classList.remove("songInfo");
    gif.classList.add("songInfo2");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.classList.remove("songInfo2");
    gif.classList.add("songInfo");
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update Seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `music/${songIndex + 1}.mp3 `;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.classList.remove("songInfo");
      gif.classList.add("songInfo2");
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      // activity = false;
      // console.log(activity);
    });
  }
);
// document.querySelector(".mySong").addEventListener("click", function () {
//   if (activity) {
//     gif.classList.remove("songInfo");
//     gif.classList.add("songInfo2");
//     masterPlay.classList.remove("fa-play-circle");
//     masterPlay.classList.add("fa-pause-circle");
//     console.log("hello");
//   }
// });

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `music/${songIndex + 1}.mp3 `;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.classList.remove("songInfo");
  gif.classList.add("songInfo2");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `music/${songIndex + 1}.mp3 `;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.classList.remove("songInfo");
  gif.classList.add("songInfo2");
});

//<------------------------------------------------->
//<------------------------------------------------->
//<------------------------------------------------->
//SEARCH BUTTON FUNCTIONALITY
document.querySelector(".btn").addEventListener("click", function () {
  let display = document.querySelector(".searchButton").value;
  console.log(display);
  if (display == songs[0].songName) {
    audioElement.src = songs[0].filePath;
    console.log(parseInt(audioElement.duration));
    masterSongName.innerText = songs[0].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    // document.querySelector(".container").classList.add("songSearchNPlay");
    // document.querySelector(".container").classList.add("song1");
    // document.querySelector(".container").classList.remove("songItem");
    // document.querySelector(".songMain").classList.add("demo");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
    document.querySelector(".container").classList.add("containerSearch");
    document.querySelector(".containerSearch").classList.remove("container");
  } else if (display == songs[1].songName) {
    audioElement.src = songs[1].filePath;
    masterSongName.innerText = songs[1].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[2].songName) {
    audioElement.src = songs[2].filePath;
    masterSongName.innerText = songs[2].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[3].songName) {
    audioElement.src = songs[3].filePath;
    masterSongName.innerText = songs[3].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[4].songName) {
    audioElement.src = songs[4].filePath;
    masterSongName.innerText = songs[4].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[5].songName) {
    audioElement.src = songs[5].filePath;
    masterSongName.innerText = songs[5].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[6].songName) {
    audioElement.src = songs[6].filePath;
    masterSongName.innerText = songs[6].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[7].songName) {
    audioElement.src = songs[7].filePath;
    masterSongName.innerText = songs[7].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[8].songName) {
    audioElement.src = songs[8].filePath;
    masterSongName.innerText = songs[8].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
    document.querySelector(".song10").classList.add("demo");
  } else if (display == songs[9].songName) {
    audioElement.src = songs[9].filePath;
    masterSongName.innerText = songs[9].songName;
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.classList.remove("songInfo");
    // gif.classList.add("songInfo2");
    document.querySelector(".song2").classList.add("demo");
    document.querySelector(".song3").classList.add("demo");
    document.querySelector(".song4").classList.add("demo");
    document.querySelector(".song5").classList.add("demo");
    document.querySelector(".song6").classList.add("demo");
    document.querySelector(".song7").classList.add("demo");
    document.querySelector(".song8").classList.add("demo");
    document.querySelector(".song9").classList.add("demo");
    document.querySelector(".song1").classList.add("demo");
  }
});
