const movingdiv = document.getElementById('MD')
const home = document.getElementById('home')
window.addEventListener('pointermove', (e)=>{
    movingdiv.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
home.onmousemove = (e) => {
    const rect = home.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 1) * 30;
    const rotateY = ((x / rect.width) - 1) * -30;
    home.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
};
home.onmouseleave = () => {
    home.style.transform = 'rotateY(0deg) rotateX(0deg)';
};