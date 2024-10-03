let styleTheme = localStorage.getItem('styleTheme');
const theme_btn = document.querySelector('.Theme_changer');

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
