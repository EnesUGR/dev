(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(i){if(i.ep)return;i.ep=!0;const e=t(i);fetch(i.href,e)}})();const a=[{id:1,title:"Work Timer",description:"Work Timer, çalışma zamanınızı düzenleyip takip edebileceğiniz ve ne kadar çalıştığınızı istatiksel takip edebileceğiniz bir Windows platformu yazılımıdır. Aşağıdaki bağlantı ile direkt indirebilirsiniz.",version:"1.0.4",downloadUrl:"/downloads/WorkTimeSetup.exe",icon:"📊",tags:["Utility","Productivity "]},{id:2,title:"PasswordGen",description:"Password Generator, güçlü şifreler oluşturabileceğiniz ve bunları detaylı bir şekilde kontrol edip daha da güçlendirebileceğiniz ve bir çok özellik daha barındıran bir Windows platformu yazılımıdır.",version:"1.0.0",downloadUrl:"/downloads/PasswordGen.exe",icon:"🔐",tags:["Security","Tool"]},{id:3,title:"RoboMesh",description:"RoboMesh, endüstriyel robot kolun analizlerini ve 3B simülasyonunu görselleştiren bir Windows yazılımıdır. Aşağıdaki bağlantı ile direkt indirebilirsiniz.",version:"1.0.0",downloadUrl:"",icon:"🤖",tags:["Robotics","Analysis","Simulation"]}],l=document.querySelector("#app");function d(){l.innerHTML=`
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
          ${a.map(r=>`
            <div class="software-card glass">
              <div class="card-icon">${r.icon}</div>
              <div class="card-content">
                <div class="card-header">
                  <h3 class="card-title">${r.title}</h3>
                  <span class="version-badge">v${r.version}</span>
                </div>
                <p class="card-desc">${r.description}</p>
                <div class="card-footer">
                  <div class="tags">
                    ${r.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
                  </div>
                  ${r.downloadUrl?`<a href=".${r.downloadUrl}" class="download-btn" download="${r.downloadUrl.split("/").pop()}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        İndir
                      </a>`:`<div class="download-btn disabled">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        Yakında
                      </div>`}
                </div>
              </div>
            </div>
          `).join("")}
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
  `}d();window.addEventListener("scroll",()=>{const r=document.querySelector(".header");window.scrollY>50?r.classList.add("scrolled"):r.classList.remove("scrolled")});
