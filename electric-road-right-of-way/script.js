// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    // Toggle current
    answer.style.display = isVisible ? 'none' : 'block';
  });
});
