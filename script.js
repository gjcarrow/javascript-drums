const keys = [...document.querySelectorAll('.key')]
keys.forEach(el=>{el.addEventListener('transitionend', removePlayingClass)})
window.addEventListener('keydown', playSound)

function removePlayingClass(e) {
  e.target.classList.remove('playing')
}

function playSound(e) {
  console.log(e)
  let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if(!sound) return;
  document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add('playing')
  // Setting currentTime
  sound.currentTime = 5
  sound.play()
}