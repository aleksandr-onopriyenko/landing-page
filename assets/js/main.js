(function ($) {
  var headerNav = document.querySelector("#header-navbar");
  var header = document.querySelector(".header");
  /* навикационное меню */
  let fixedNav = () => {
    let scroll = window.scrollY;
    if (scroll >= 200) {
      headerNav.classList.add("p-my-0");
      header.classList.add("header-navbar--scroled");
    } else {
      headerNav.classList.remove("p-my-0");
      header.classList.remove("header-navbar--scroled");
    }
  };
  window.addEventListener("scroll", fixedNav);

  $(".header-navbar--scroled").hover(
    function () {
      $(this).parent().addClass("green");
    },
    function () {
      $(this).parent().removeClass("green");
    }
  );
  fixedNav();
/* навикационное меню */
/* кнопка наверх */
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $("#backToTop").fadeIn();
      } else {
        $("#backToTop").fadeOut();
      }
    });

    $("#backToTop").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 800);
    });
  });
/* кнопка наверх */
/* закрытие меню при клике */
let windowWidth = $(window).width();

$(window).on('resize', () => (windowWidth = $(window).width()));

let $navbarLink = $('#navbar-collapse a');
let $navbarToggler = $('.navbar-toggler');
let $headerNavbarCollapse = $('#navbar-collapse');

$navbarLink.on('click', () => {
  if (windowWidth < 992) {
    $navbarToggler.addClass('collapsed');
    $headerNavbarCollapse.removeClass('show');
  }
});
/* закрытие меню при клике */
  /* подключение и настрока плагина анимации */
  $(document).ready(function () {
    $(".header-menu").onePageNav({
      currentClass: "active",
    });
  });
  AOS.init({
    disable: "mobile",
    duration: 600,
    easing: "ease-in-sine",
  });
  /* подключение и настрока плагина анимации */
})(jQuery);
