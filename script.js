const gutsrun = document.querySelector('.gutsrun')
const skeleton = document.querySelector('.skeleton')
const clouds = document.querySelector('.clouds')
const gameboard = document.querySelector('.gameboard')



const jump = () => {
    gutsrun.classList.add('jump');

    setTimeout(() => {
        gutsrun.classList.remove('jump');   
    }, 500);
    
}

const loop = setInterval(()=>{

    const skeletonPosition = skeleton.offsetLeft;
    const gutsPosition = +window.getComputedStyle(gutsrun).bottom.replace('px',' ');
   
    if (skeletonPosition <= 100 && skeletonPosition > 0 && gutsPosition< 70) {
        skeleton.style.animation = 'none'
        skeleton.style.left= '70px'

        gutsrun.style.animation = 'none'
        gutsrun.style.bottom = '0px'

        gutsrun.src = 'sprites/gutslose.gif'
        gutsrun.style.marginLeft = '-30px'

        clearInterval(loop)
    }

},110)

document.querySelector('.restartbutton').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);

