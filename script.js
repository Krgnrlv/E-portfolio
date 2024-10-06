let styleTheme = localStorage.getItem('styleTheme');
const theme_btn = document.querySelector('.Theme_changer');
const images = document.querySelectorAll('.slider_img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let photoIndex = 0

const enableDarkTheme = () =>{
    document.body.classList.add('dark_theme');
    localStorage.setItem('styleTheme', 'dark');
}
const disableDarkTheme = () =>{
    document.body.classList.remove('dark_theme');
    localStorage.setItem('styleTheme', 'light');
}
theme_btn.addEventListener('click', () => {
    styleTheme = localStorage.getItem('styleTheme');
    if(styleTheme === 'light'){
        enableDarkTheme();
    }else{
        disableDarkTheme()
    }
});
if (styleTheme === 'dark'){
    enableDarkTheme();
}else{
    disableDarkTheme();
};

function show (i){
    images[photoIndex].classList.remove('active');
    images[i].classList.add('active');
    photoIndex = i
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
    show(i)
})
show(photoIndex)
