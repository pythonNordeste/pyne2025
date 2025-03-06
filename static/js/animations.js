
// Observe elements on the visible screen

const Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.block');
    elements.forEach(element => Observer.observe(element));
});

// Add shadow to navbar on scroll

addEventListener('scroll', (event) => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('shadow');
  }
  else {
    navbar.classList.remove('shadow');
  }
});

// Change tickets image on hover

for (element of document.getElementsByClassName('pyne-button')) {
  element.onmouseover = (event) => {
    event.target.src = event.target.src.replace('deactivated', 'activated');
  }
  element.ontouchstart = (event) => {
    event.target.src = event.target.src.replace('deactivated', 'activated');
  }
  element.onmouseout = (event) => {
    event.target.src = event.target.src.replace('activated', 'deactivated');
  }
  element.ontouchend = (event) => {
    event.target.src = event.target.src.replace('activated', 'deactivated');
  }
}
