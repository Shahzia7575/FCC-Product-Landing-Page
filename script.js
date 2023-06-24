// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the animated element
    var header = document.getElementById("header");
  
    // Apply animation when the element is visible in the viewport
    var animateHeader = function() {
      var headerPosition = header.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (headerPosition < windowHeight) {
        header.classList.add("fade-in");
        window.removeEventListener("scroll", animateHeader);
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", animateHeader);
    
  });
  // Get the element to animate
  var header = document.getElementById("header");
  
  // Apply animation to the element
  header.classList.add("animated");
  
  