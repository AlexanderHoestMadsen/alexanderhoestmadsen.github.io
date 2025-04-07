document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.content-section');
  
    // Function to check if a section is in view
    function checkVisibility() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
  
        if (sectionTop < viewportHeight && sectionBottom > 0) {
          section.classList.add('visible'); // Section is in view, add the visible class
        } else {
          section.classList.remove('visible'); // Section is out of view, remove the class
        }
      });
    }
  
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Also check visibility on initial page load
    checkVisibility();
  });

  function copyToClipboard(text) {
    // Create a temporary input element to copy the text
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  
    // Optional: Show a notification that the text has been copied
    alert('Copied to clipboard: ' + text);
  }