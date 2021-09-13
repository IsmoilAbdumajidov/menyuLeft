let links = document.querySelector('.nav-center')
let btn = document.querySelector('.nav-toggler')
let btn2 = document.querySelector('.nav-toggle')


// function(e) == (e)=>
btn.addEventListener('click',(e)=>{
    //1-usul
    // if (btn.classList.contains('open')) {
    //     btn.classList.remove('open')
            // links.classList.remove('show-links')
    // }
    // else{
    //     btn.classList.add(open')
        //    links.classList.add('show-links')
    // }

    //2-usul
//   btn.classList.toggle('open')
  links.classList.toggle('show-links')

})
btn2.addEventListener('click',(e)=>{
  links.classList.toggle('show-links')

})