
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

document.getElementById('buy-ticket-button').onmouseover = (event) => {
  event.target.src = '/static/img/tickets/activated.svg';
}

document.getElementById('buy-ticket-button').onmouseout = (event) => {
  event.target.src = '/static/img/tickets/deactivated.svg';
}