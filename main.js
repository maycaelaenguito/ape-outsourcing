function navigation() {
    var navbar = document.getElementById("navbar");
    var icon = document.getElementById("icon");
  
    if (navbar.style.left === "-100%") {
      navbar.style.left = "0";
      icon.classList.toggle("open-toggle_btn");
    } else {
      navbar.style.left = "-100%";
      icon.classList.toggle("open-toggle_btn");
    }
  }

  const sliderWrapper = document.querySelector('.slider-wrapper');
  const sliderCards = document.querySelectorAll('.slider-card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const cardWidth = sliderCards[0].offsetWidth + 30;
  let position = 0;
  
  prevBtn.addEventListener('click', () => {
    position += cardWidth;
    position = Math.min(position, 0);
    sliderWrapper.style.transform = `translateX(${position}px)`;
  });
  
  nextBtn.addEventListener('click', () => {
    position -= cardWidth;
    position = Math.max(position, -cardWidth * (sliderCards.length - 1));
    sliderWrapper.style.transform = `translateX(${position}px)`;
  });
  
  window.addEventListener('resize', () => {
    position = 0;
    cardWidth = sliderCards[0].offsetWidth + 30;
    sliderWrapper.style.transform = `translateX(${position}px)`;
  });