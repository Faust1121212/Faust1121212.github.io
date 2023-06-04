const postCont = document.querySelector('.post_container')

let pressed=false
let startX= 0

  postCont.addEventListener('mousedown',function(e) {
    pressed=true
    startX= e.clientX
    this.style.cursor = 'grabbing'
    console.log(startX)
  })
  postCont.addEventListener('mouseleave',function(e) {
    pressed=false
  })
    window.addEventListener('mouseup',function(e) {
    pressed=false
    postCont.style.cursor = 'grab'
    console.log(startX)
  })
  postCont.addEventListener('mousemove',function(e) {
    if(!pressed){
      return
    }
    this.scrollLeft += startX - e.clientX
  })
 
