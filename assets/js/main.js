$(document).ready(function (e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  console.log($win);
  console.log($navbar);

  //   resize event
  $win.resize(function () {
    toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({ left: `-${width}px` });
  } else {
    $navbar.css({ left: `0px` });
  }
}

var typed = new Typed("#typed", {
  strings: ["Full Stack Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
var typed = new Typed("#typed-2", {
  strings: ["Full Stack Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
