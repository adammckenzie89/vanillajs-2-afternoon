console.log('hello');
console.log('wtf');

window.addEventListener("keypress", e => {
    const tone = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!tone) return;
    const pianoKey = document.querySelector(`.pianoKey[data-key="${e.keyCode}"]`)
    tone.currentTime = 0;
    pianoKey.classList.add('pressed')
    tone.play()
    setTimeout(function(){
        pianoKey.classList.remove('pressed') 
    }, 300)
  })




