// interviewtips.js
document.addEventListener('DOMContentLoaded', () => {
  // Open preview modal
  const openBtn = document.getElementById('openPreview');
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('previewFrame');
  const closeBtn = document.getElementById('closePreview');

  // YouTube preview URL (replace with your preferred preview video id)
  const previewYouTubeId = 'qh3TgZKZzH8'; // example; replace

  openBtn?.addEventListener('click', () => {
    frame.src = `https://www.youtube.com/embed/${previewYouTubeId}?autoplay=1&rel=0`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener('click', () => {
    frame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  // Chapters accordion (toggle body)
  document.querySelectorAll('.chapter .ch-head').forEach(head => {
    head.addEventListener('click', () => {
      const body = head.parentElement.querySelector('.ch-body');
      const isOpen = body && body.style.display === 'block';
      // close all
      document.querySelectorAll('.chapter .ch-body').forEach(b => b.style.display = 'none');
      if (!isOpen && body) body.style.display = 'block';
    });
  });

  // FAQ toggles
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = a.style.display === 'block';
      // close all
      document.querySelectorAll('.faq-a').forEach(x => x.style.display = 'none');
      if (!isOpen) a.style.display = 'block';
    });
  });

  // Enroll button scrolls to curriculum
  const enrollBtn = document.getElementById('enrollBtn');
  enrollBtn?.addEventListener('click', () => {
    // show a simple prompt / simulate checkout
    const confirmEnroll = confirm('Enroll for ₹499 — proceed to checkout simulation?');
    if (confirmEnroll) {
      alert('Enrollment simulated. You have access to the course now. (Replace this with real checkout)');
      // scroll to curriculum
      const el = document.querySelector('.curriculum');
      if (el) el.scrollIntoView({behavior:'smooth'});
    }
  });

  // wishlist toggler
  const wishlist = document.getElementById('wishlistBtn');
  wishlist?.addEventListener('click', () => {
    wishlist.innerText = wishlist.innerText === 'Save' ? 'Saved' : 'Save';
    wishlist.style.background = wishlist.innerText === 'Saved' ? 'linear-gradient(90deg,#ffe6f0,#fff)' : 'white';
  });

  // make right sidebar visible on narrow screens if necessary
  // (the page already has a right sidebar in the hero; we added empty aside for layout)
});
