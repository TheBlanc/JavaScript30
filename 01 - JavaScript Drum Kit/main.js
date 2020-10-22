function  playSound(e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function if null key hit
    audio.currentTime = 0; //rewind to the start so to allow faster cues
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if its not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
