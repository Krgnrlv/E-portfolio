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
        };
    });
};