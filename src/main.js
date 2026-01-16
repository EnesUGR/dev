import { softwareList } from './data.js';

const app = document.querySelector('#app');

function renderApp() {
  app.innerHTML = `
    <header class="header">
      <nav class="nav container">
        <div class="logo">enesugr<span>/dev</span></div>
        <div class="nav-links">
          <a href="#home">Ana Sayfa</a>
          <a href="#software">Programlar</a>
          <a href="https://enesugr.github.io/" target="_blank">Kişisel Web Sitem</a>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" class="hero container">
        <div class="hero-content">
          <h1 class="hero-title">Kişisel <span><br>Yazılım Arşivim</span></h1>
          <p class="hero-subtitle">Geliştirdiğim bazı uygulamaları aşağıda bulabilirsiniz.</p>
          <div class="hero-btns">
            <a href="#software" class="btn btn-primary">Programları Gör</a>
            <a href="https://enesugr.github.io/" target="_blank" class="btn btn-outline">Kişisel Web Sitem</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="glass-sphere"></div>
        </div>
      </section>

      <section id="software" class="software-section container">
        <div class="section-header">
          <h2 class="section-title">Programlarım</h2>
          <p>Windows için optimize edilmiş, kurulum gerektirmeyen taşınabilir araçlar.</p>
        </div>
        
        <div class="software-grid">
          ${softwareList.map(soft => `
            <div class="software-card glass">
              <div class="card-icon">${soft.icon}</div>
              <div class="card-content">
                <div class="card-header">
                  <h3 class="card-title">${soft.title}</h3>
                  <span class="version-badge">v${soft.version}</span>
                </div>
                <p class="card-desc">${soft.description}</p>
                <div class="card-footer">
                  <div class="tags">
                    ${soft.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                  </div>
                  ${soft.downloadUrl
      ? `<a href=".${soft.downloadUrl}" class="download-btn" download="${soft.downloadUrl.split('/').pop()}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        İndir
                      </a>`
      : `<div class="download-btn disabled">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        Yakında
                      </div>`
    }
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; ${new Date().getFullYear()} Enes. Tüm hakları saklıdır.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/enesugur/" target="_blank">LinkedIn</a>            
          <a href="https://github.com/enesugr" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  `;
}

renderApp();

// Simple Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
