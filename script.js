function toggleBackgroundColor() {
    // Get the body element
    var body = document.body;

    // Toggle between two CSS classes
    if (body.classList.contains('background-color-1')) {
        body.classList.remove('background-color-1');
        body.classList.add('background-color-2');
    } else {
        body.classList.remove('background-color-2');
        body.classList.add('background-color-1');
    }
}

  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var navbar = document.querySelector(".navbar-scroll");

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });