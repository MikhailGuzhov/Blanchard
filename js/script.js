const searchButton = document.querySelector('.header__search');
const searchInput = document.querySelector('.search-input');
const closeButton = document.querySelector('.close-button');

searchButton.addEventListener('click', function() {
  searchInput.style.visibility = 'visible';
  searchInput.style.opacity = 1;
  closeButton.style.visibility = 'visible';
  closeButton.style.opacity = 1;
});

closeButton.addEventListener('click', function() {
  closeSearchForm();
});

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    closeSearchForm();
  }
});

function closeSearchForm() {
  searchInput.style.visibility = 'hidden';
  searchInput.style.opacity = 0;
  closeButton.style.visibility = 'hidden';
  closeButton.style.opacity = 0;
}

// Scroll

const navHidden = document.querySelector('.header__nav-hidden');

navHidden.addEventListener('scroll', function() {
  if (this.scrollLeft === 0) {
    this.classList.remove('scroll-left');
  } else {
    this.classList.add('scroll-left');
  }

  if (this.scrollLeft + this.offsetWidth >= this.scrollWidth) {
    this.classList.remove('scroll-right');
  } else {
    this.classList.add('scroll-right');
  }
});

var scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 5000) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.getElementById("connection__form");

  form.addEventListener("input", (event) => {
    const input = event.target;
    if (input.checkValidity()) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Пожалуйста, заполните все поля формы.");
    }
  });