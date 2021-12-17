const html = document.documentElement;
const canvas = document.querySelector('.Myphone');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `./MPJPG/${index.toString().padStart(4, '0')}.jpg`
  )

const framecount = 326;

canvas.height = 1080;
canvas.width = 1920;
const img = new Image();
img.src = currentFrame(1);
img.onload = function(){

    context.drawImage(img,0,0);
}

const updateImage = index => {

    img.src = currentFrame(index)
    context.drawImage(img,0,0);
}

window.addEventListener('scroll', () =>{

    const scrollTop = html.scrollTop; 
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop/maxScrollTop;
    console.log(scrollFraction);
    const frameIndex = Math.min(framecount - 1,Math.floor(scrollFraction * framecount));
    
    
    requestAnimationFrame(() => updateImage(frameIndex + 1))
})


const preloadImages = () =>{

    for(let i =1;i<framecount; i++){

        const img = new Image();
        img.src = currentFrame(i);
    }
};

preloadImages();