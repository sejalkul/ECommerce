window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById("scrollBtn");
    if (document.documentElement.scrollTop > 400) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  function topFunction() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }