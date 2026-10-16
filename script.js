const menuToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const itemName = button.closest('.menu-card')?.querySelector('h3')?.textContent || 'your item';
    const originalText = button.textContent;

    button.textContent = 'Thank you!';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      alert(`Thank you for ordering ${itemName}! We will prepare it for you.`);
    }, 1200);
  });
});

const replyButtons = document.querySelectorAll('.reply-btn');

replyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const response = button.closest('.message-card')?.querySelector('.owner-response');

    if (response) {
      response.classList.toggle('visible');
      button.textContent = response.classList.contains('visible') ? 'Hide reply' : "Owner's reply";
    }
  });
});

const reserveForm = document.querySelector('#contactForm');

if (reserveForm) {
  reserveForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = reserveForm.querySelector('input[name="name"]')?.value.trim() || 'Guest';
    const formMessage = reserveForm.querySelector('.form-message');
    const button = reserveForm.querySelector('button[type="submit"]');

    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Reserved!';
      button.disabled = true;

      if (formMessage) {
        formMessage.textContent = `Thank you, ${name}! Your table request has been received.`;
      }

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        reserveForm.reset();
        if (formMessage) {
          formMessage.textContent = 'Thank you for contacting Brew Bliss Cafe. We will reach out shortly.';
        }
      }, 2000);
    }
  });
}
