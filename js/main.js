const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    rewind:true,
    lazy: true,
    simulateTouch:false,
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const pagination = document.querySelectorAll('.swiper-pagination-bullet');
const windowWidthFirst = window.innerWidth;
if (windowWidthFirst>1091){
    pagination[0].classList.add('logo');
    pagination[0].innerHTML = `О компании`;
    pagination[1].innerHTML = `Производство`;
    pagination[2].innerHTML = `Продукция`;
    pagination[3].innerHTML = `Для дилеров`;
    pagination[4].innerHTML = `Документация`;
    pagination[5].innerHTML = `Статьи`;
    pagination[6].innerHTML = `Контакты`;
}
window.addEventListener('resize',function (){
    const windowWidth = window.innerWidth;
    if (windowWidth>1091){
        pagination[0].classList.add('logo');
        pagination[0].innerHTML = `О компании`;
        pagination[1].innerHTML = `Производство`;
        pagination[2].innerHTML = `Продукция`;
        pagination[3].innerHTML = `Для дилеров`;
        pagination[4].innerHTML = `Документация`;
        pagination[5].innerHTML = `Статьи`;
        pagination[6].innerHTML = `Контакты`;
    }
    if (windowWidth<1091){
        pagination.forEach(item=>{
            item.innerHTML = '';
        })
    }
})

