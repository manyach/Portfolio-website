document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
  
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('expanded');
    });
  
    // Blur effect for timeline images
    const timelineCards = document.querySelectorAll('.timeline-card');
  
    timelineCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        timelineCards.forEach(c => {
          if (c !== card) {
            c.style.filter = 'blur(5px)';
          }
        });
      });
  
      card.addEventListener('mouseleave', () => {
        timelineCards.forEach(c => {
          if (c !== card) {
            c.style.filter = 'none';
          }
        });
      });
    });
  });

  // Generate a random captcha and display it
  const captchaImage = document.getElementById("captchaImage");
  const captchaValue = Math.floor(Math.random() * 10000);
  captchaImage.textContent = captchaValue;
  
  // Validate captcha on form submit
  const form = document.querySelector(".form-box");
  form.addEventListener("submit", function(event) {
      const enteredCaptcha = parseInt(document.getElementById("captcha").value);
      
      if (enteredCaptcha !== captchaValue) {
          alert("Incorrect captcha! Please try again.");
          event.preventDefault();
      }
  });

  