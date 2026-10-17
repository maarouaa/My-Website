
let navbar = document.querySelector('.header.navbar')

document.querySelector('#menu').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

gsap.from('.logo' , {opacity: 0, duration: 1, delay: 2, y:10})

gsap.from('.nav_item' , {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2}) 

gsap.from('.title' , {opacity: 0, duration: 1, delay: 1.6, y:30});

gsap.from('.descrip' , {opacity: 0, duration: 1, delay: 1.8, y:30});

gsap.from('.btn-home' , {opacity: 0, duration: 1, delay: 2.1, y:30});

gsap.from('.aboutp' , {opacity: 0, duration: 1, delay: 1.8, y:30});

gsap.from('.btn-about' , {opacity: 0, duration: 1, delay: 2.1, y:30});


