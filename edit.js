let toggleMenu = document.querySelector(".menu-toggle");
let menuWrap = document.querySelector(".navbar");

// Eksekusi Toggle

toggleMenu.addEventListener('click', function(){
    if(menuWrap.classList.contains('active')){
        menuWrap.classList.remove('active');
    }else{
        menuWrap.classList.add('active');
    }
});