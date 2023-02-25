import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    // console.log(seconds);
    localStorage.setItem(STORAGE_KEY, seconds);
  }


  function setStopTime() {
    const timeInStorage = localStorage.getItem(STORAGE_KEY);
    if (timeInStorage) {
      player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
    }
  }
  setStopTime();
 