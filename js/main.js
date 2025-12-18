// Countdown Timer
function initCountdown() {
  const hours = document.getElementById('countdown-hours');
  const minutes = document.getElementById('countdown-minutes');
  const seconds = document.getElementById('countdown-seconds');
  const spotsElement = document.getElementById('spots-left');

  let totalSeconds = 3 * 3600 + 59 * 60 + 59;
  let spots = 18;

  function updateCountdown() {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if (hours) hours.textContent = String(hrs).padStart(2, '0');
    if (minutes) minutes.textContent = String(mins).padStart(2, '0');
    if (seconds) seconds.textContent = String(secs).padStart(2, '0');

    totalSeconds--;
    if (totalSeconds < 0) totalSeconds = 0;
  }

  function updateSpots() {
    spots--;
    if (spots < 1) spots = 1;
    if (spotsElement) spotsElement.textContent = spots;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
  setInterval(updateSpots, 30000);
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.faq-chevron');

    question.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-answer').forEach((a) => {
        a.classList.remove('open');
      });
      document.querySelectorAll('.faq-chevron').forEach((c) => {
        c.classList.remove('open');
      });

      // Open clicked
      if (!isOpen) {
        answer.classList.add('open');
        chevron.classList.add('open');
      }
    });
  });
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle CTA clicks
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initFAQ();

  // CTA buttons
  const ctaButtons = document.querySelectorAll('[data-action="cta"]');
  ctaButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      scrollToSection('pricing');
    });
  });

  // Pricing buttons
  const pricingButtons = document.querySelectorAll('[data-action="buy"]');
  pricingButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      alert(`Você escolheu o Plano ${plan}! Redirecionando para pagamento...`);
      // Aqui você coloca o link real de pagamento
      // window.open('https://pay.kiwify.com.br/...', '_blank');
    });
  });

  // Sticky CTA visibility
  const pricingSection = document.getElementById('pricing');
  const stickyCtaBtn = document.querySelector('.sticky-cta button');

  if (stickyCtaBtn) {
    stickyCtaBtn.addEventListener('click', () => {
      scrollToSection('pricing');
    });
  }
});
