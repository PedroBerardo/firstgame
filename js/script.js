const walker = document.querySelector('.walker')
const pipe = document.querySelector('.pipe')

const jump = () => {
    walker.classList.add('jump')


setTimeout(() => {
    
    walker.classList.remove('jump')
 }, 900);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const walkerPosition = +window.getComputedStyle(walker).bottom.replace('px', '');

    console.log(walkerPosition)

    if(pipePosition <= 120 && pipePosition > 0 && walkerPosition <70) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        walker.style.animation = 'none';
        walker.style.bottom = `${walkerPosition}px`;

        walker.src  = './images/gameover.png'
        walker.style.width = '500px'
        walker.style.botoom = '7000'
        walker.style.left = '300px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)



