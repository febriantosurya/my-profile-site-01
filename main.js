import './public/css/styles.css';
//
document.querySelector('#app').innerHTML = `
  <div class="profile-container">
    <div class="profile-photo">
      <img src="/images/profile-photo.jpeg" alt="Profile Photo">
    </div>
    <h1 class="name">Febrianto Surya</h1>
    <p class="bio">
      A Computer Engineering graduate from Politeknik Elektronika Negeri Surabaya (PENS) with a strong passion for IT systems and infrastructure.
    </p>
    <div class="social-links">
      <a href="https://linkedin.com/in/febriantosurya" class="btn icon-btn" target="_blank" aria-label="LinkedIn">
        <img src="/icons/linkedin.svg" alt="LinkedIn">
      </a>
      <a href="https://github.com/febriantosurya" class="btn icon-btn" target="_blank" aria-label="GitHub">
        <img src="/icons/github.svg" alt="GitHub">
      </a>
    </div>
  </div>
`;