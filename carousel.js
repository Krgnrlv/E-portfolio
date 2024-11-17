const images = document.querySelectorAll('.slider_img');
        prev = document.querySelector('.prev');
        next = document.querySelector('.next');
let photoIndex = 0;

function show (i){
    images[photoIndex].classList.remove('active');
    images[i].classList.add('active');
    photoIndex = i;
}
prev.addEventListener('click', () => {
    let i = photoIndex - 1;
    if (i < 0){
        i=images.length - 1;
    }
    show(i)
})
next.addEventListener('click', () => {
    let i = photoIndex + 1;
    if (i >= images.length){
        i = 0;
    }
    show(i);
});
show(photoIndex);

