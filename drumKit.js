"use strict";

function playSound(e) {
  const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-keycode="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();

}

function removeTransition(e) {
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);