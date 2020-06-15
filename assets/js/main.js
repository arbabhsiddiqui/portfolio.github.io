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
