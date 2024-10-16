let styleTheme = localStorage.getItem('styleTheme');
const theme_btn = document.querySelector('.Theme_changer');

const filltration = document.querySelector('.filltration')
        Elements = document.querySelectorAll('.Element');
        Filltartion_items = document.querySelectorAll('.filltration_item')

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
let menu_el = document.querySelector(".header_mobile");
let menu_btn = document.querySelector(".menu_button");
menu_btn.onclick = function(){
    menu_el.classList.toggle("header_active")
};
