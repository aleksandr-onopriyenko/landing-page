(function($) {
  var headerNav = document.querySelector('#header-navbar') 
  var header = document.querySelector('.header')
  let fixedNav = () => {
    let scroll = window.scrollY;
    if(scroll >= 200 ){
       headerNav.classList.add('p-my-0')  
       header.classList.add('header-navbar--scroled')
    } else {
    headerNav.classList.remove('p-my-0') 
     header.classList.remove('header-navbar--scroled');
    }
  }
    window.addEventListener('scroll', fixedNav)

    $(".header-navbar--scroled").hover(
      function(){
        $(this).parent().addClass("green")
      },
      function(){
        $(this).parent().removeClass("green")
      }
    );
  /* подключение и настрока плагина анимации */
  $(document).ready(function() {
    $('.header-menu').onePageNav({
      currentClass: 'active'
    });
  });
  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine'
  });
  /* подключение и настрока плагина анимации */
})(jQuery);
