let images = ["images/tata1.jpg","images/tata2.jpg","images/tata3.jpg","images/tata4.jpg","images/tata5.jpg"];
let carouselimg = document.querySelector(".carouselimg");
previousBtn = document.querySelector('.previous');
nextBtn = document.querySelector('.next');
carouselimg.src = images[0];
let currIndex = 0;
nextBtn.addEventListener('click',()=>{
    currIndex++;
    if(currIndex >4)
    {
        currIndex = 0;
    }
    carouselimg.src=images[currIndex];
    console.log(currIndex);
});
previousBtn.addEventListener('click',()=>{
    currIndex--;
    if(currIndex < 0){
        currIndex = 4;
    }
    carouselimg.src=images[currIndex];
    console.log(images[currIndex])
});
setInterval(()=>{
    currIndex++;
    if(currIndex >4)
    {
        currIndex = 0;
    }
    carouselimg.src=images[currIndex];
    console.log(currIndex);
},3000);
var x = window.matchMedia("(max-width: 480px)");
if(x.matches){
    html.style.zoom = "28%";
}