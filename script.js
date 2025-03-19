document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    let width = bar.style.width;
    bar.style.width = "0"; // Reset width for animation
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});



    // Button ko show/hide karne ke liye
    window.onscroll = function () {
        let btn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btn.style.display = "flex"; // Show button when scrolled down
        } else {
            btn.style.display = "none"; // Hide button at top
        }
    };

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

