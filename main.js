const movingdiv = document.getElementById('MD')
const Link = document.querySelectorAll('nav span')
const transition = document.getElementById('skills-transition')
const transitionHeading = document.querySelector('#skills-transition h1')
const home = document.getElementById('home')
window.addEventListener('pointermove', (e)=>{
    movingdiv.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
Link.forEach((el)=>{
    el.addEventListener('click',async()=>{
        transitionHeading.textContent = el.textContent
        transition.classList.toggle('t-active')  
    })
})
