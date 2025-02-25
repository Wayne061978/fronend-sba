// Add event listeners to each FAQ question to toggle the answer visibility
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
      const faqItem = item.parentElement;
      faqItem.classList.toggle('open'); // Toggle the 'open' class
    });
  });
  