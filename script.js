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


function fillter(){
    filltration.addEventListener('click', (event) =>{
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('filltration_item')){
            Filltartion_items.forEach(Filltartion_items => Filltartion_items.classList.remove('filltration_active'))
            target.classList.add('filltration_active')
        }

        switch(targetId){
            case 'All':
                getItems('Element')
                break
            case 'Homework':
                getItems(targetId)
                break
            case 'Folk_project':
                getItems(targetId)
                break
        }
    });
};
fillter()

function getItems(className){
    Elements.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    });
}