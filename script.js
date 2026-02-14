// Select the button with class 'btn' and add a click event listener
document.querySelector('.btn').addEventListener('click', function(e) {
  
  // Check if the button's href attribute starts with '#' (indicating an anchor link)
  if (this.getAttribute('href').startsWith('#')) {
    
    // Prevent the default anchor link behavior (jumping instantly)
    e.preventDefault();
    
    // Get the target element based on the href value (e.g., '#section1')
    const target = document.querySelector(this.getAttribute('href'));
    
    // Scroll smoothly to the target element
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
