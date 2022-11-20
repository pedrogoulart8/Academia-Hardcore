
var header = document.querySelector('.header');
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(header);

window.addEventListener('scroll', function(){

    //variavel para contador de pixels:
    var pxScroll = this.window.scrollY;
   

    //Se o usuario rolar mais do que 150px a partir do topo...
    if(pxScroll > 150){
    
      header.classList.add ('header-fixed');


    }else{

        header.classList.remove ('header-fixed');

    }



})


btnMenu.addEventListener('click', function(){

  menu.classList.toggle('menu-open');

})


