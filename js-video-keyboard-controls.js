function liransHandleKeyDown(event) {
  event = event || window.event;
  const vid = document.querySelector('video')

  // if (event.keyCode == '38') {
  //   // up arrow
  // }
  // else if (event.keyCode == '40') {
  //   // down arrow
  // }
  
  // LinkedIn Learning (via Lynda.com):
  //  Seems like they've recently implemented keyboard seeking already
  //  Or have they?
  //  It's weird, it seems that it was implemented (with 15 seconds jumps), but as soon as you open the Dev Tools, it suddenly stops working
  //  So keep my custom code
  // if (event.keyCode == '37') {
  //   // left arrow
  // vid.currentTime -= 5
  // return
  // }
  // if (event.keyCode == '39') {
  //   // right arrow
  // vid.currentTime += 5
  // return
  // }

  if (event.keyCode == '32') {
    // space
    if (vid.paused) {
      vid.play()
    } else {
      vid.pause()
    }
      
    return
  }
}

document.addEventListener('keydown', liransHandleKeyDown)