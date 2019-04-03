var scroll = new SmoothScroll('a[href*="#"]');
let sliderImg = document.querySelectorAll('.slide');
let arrowLeft = document.getElementById('left');
let arrowRight = document.getElementById('right');
let current = 0;
let auto = true;
let time = 3000;
let slideTime;
let gfShow = document.getElementById('gfshow');
let dcShow = document.getElementById('dcshow');
let twShow = document.getElementById('twshow');
let gfriendSort = document.getElementsByClassName('gfriend');
let twiceSort = document.getElementsByClassName('twice');
let dreamcatcherSort = document.getElementsByClassName('dreamcatcher');
let sAlbums = document.getElementsByClassName('sale-albums');
let lAlbums = document.getElementsByClassName('latest-albums');
let toCart = document.getElementById('addtocart');
// Reset Slide
function reset(){
    for(let i = 0; i < sliderImg.length; i++){
        sliderImg[i].style.display ="none";
    }
}
// Start slide
function startSlide(){
    reset();
    sliderImg[0].style.display ='block';
}
// Left arrow
function slideLeft(){
    reset();
    sliderImg[current - 1].style.display = 'block';
    current--;
}
// If left 0 
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImg.length;
    }
    slideLeft()
})
// right arrow
function slideRight(){
    reset();
    sliderImg[current + 1].style.display = 'block';
    current++;
}
// if right max
arrowRight.addEventListener('click', function(){
    if(current === sliderImg.length - 1){
        current = -1;
    }
    slideRight()
})
startSlide();
// Auto slide
showSlides();
function showSlides() {
    for (let i = 0; i < sliderImg.length; i++) {
        sliderImg[i].style.display = "none"; 
    }
    current++;
    if (current > sliderImg.length) {
        current = 1;
    } 
    sliderImg[current-1].style.display = "block"; 
    setTimeout(showSlides, 2000);
}
// Artist Album Sort
gfShow.addEventListener('click', gfOpen);
dcShow.addEventListener('click', dcOpen);
twShow.addEventListener('click', twOpen);
function gfOpen(){
    let albumHeading = document.getElementById('album-heading');
    albumHeading.innerText="gfriend albums";
    for(var i=0; i< dreamcatcherSort.length; i++){
        dreamcatcherSort[i].style.display="none";
    }
    for(var i=0; i< twiceSort.length; i++){
        twiceSort[i].style.display="none";
    }
    for(var i=0; i< gfriendSort.length; i++){
        gfriendSort[i].style.display="flex";
        gfriendSort[i].style.flexDirection = "column";
    }
}
function twOpen(){
    let albumHeading = document.getElementById('album-heading');
    albumHeading.innerText="twice albums";
    for(var i=0; i< dreamcatcherSort.length; i++){
        dreamcatcherSort[i].style.display="none";
    }
    for(var i=0; i< gfriendSort.length; i++){
        gfriendSort[i].style.display="none";
    }
    for(var i=0; i< twiceSort.length; i++){
        twiceSort[i].style.display="flex";
        twiceSort[i].style.flexDirection = "column";
    }
}
function dcOpen(){
    let albumHeading = document.getElementById('album-heading');
    albumHeading.innerText="dreamcatcher albums";
    for(var i=0; i< gfriendSort.length; i++){
        gfriendSort[i].style.display="none";
    }
    for(var i=0; i< twiceSort.length; i++){
        twiceSort[i].style.display="none";
    }
    for(var i=0; i< dreamcatcherSort.length; i++){
        dreamcatcherSort[i].style.display="flex";
        dreamcatcherSort[i].style.flexDirection = "column";
    }
}
// View More 
var salebtn = document.getElementById('sale-btn');
var latestbtn = document.getElementById('latest-btn');
salebtn.addEventListener('click', viewSale);
latestbtn.addEventListener('click', viewLatest);
function viewLatest(){
    for(var i = 4; i <= lAlbums.length; i++) {
        lAlbums[i].style.display = "flex";
        lAlbums[i].style.flexDirection = "column";
        latestbtn.style.display ="none";
    }
    
}
function viewSale(){
    for(var i = 4; i <= sAlbums.length; i++) {
        sAlbums[i].style.display = "flex";
        sAlbums[i].style.flexDirection = "column";
        salebtn.style.display ="none";
    }
}
