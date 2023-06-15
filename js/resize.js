let video = document.querySelector('.video-block');




window.addEventListener('load', () => {
  video.style.width = `${video.offsetHeight/1.55}px`
})

window.addEventListener('resize', () => {
  video.style.width = `${video.offsetHeight / 1.55}px`
})
