(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const t=[{id:1,title:"Work Timer",description:"Work Timer, çalışma zamanınızı düzenleyip takip edebileceğiniz ve ne kadar çalıştığınızı istatiksel takip edebileceğiniz bir Windows platformu yazılımıdır. Aşağıdaki bağlantı ile kurulum dosyasını indirebilirsiniz.",version:"1.0.4.230",updatedAt:"14.03.2023",downloadUrl:"WorkTimeSetup.exe",icon:"icon.ico",videoUrl:"",screenshots:["screen1.png","screen2.png"],tags:["Utility","Productivity"]},{id:2,title:"PasswordGen",description:"Password Generator, güçlü şifreler oluşturabileceğiniz ve bunları detaylı bir şekilde kontrol edip daha da güçlendirebileceğiniz ve bir çok özellik daha barındıran bir Windows yazılımıdır.",version:"1.1.1",updatedAt:"23.08.2023",downloadUrl:"PasswordGen.exe",icon:"icon.ico",videoUrl:"",screenshots:["screen1.png","screen2.png","screen3.png","screen4.png","screen5.png","screen6.png"],tags:["Security","Tool"]},{id:3,title:"RoboMesh",description:"RoboMesh, endüstriyel robot kolun analizlerini ve 3B simülasyonunu görselleştiren bir Windows yazılımıdır. Aşağıdaki bağlantı ile direkt indirebilirsiniz.",version:"1.0.0",updatedAt:"05.01.2026",downloadUrl:"",icon:"icon.ico",videoUrl:"https://youtu.be/dXGuwFJMnCo",screenshots:["s1.gif","s2.gif","s3.png","s4.png","s5.gif","s6.png","s7.gif","s8.png","s9.png"],tags:["Robotics","Analysis","Simulation"]},{id:4,title:"Staj Günlüğü",description:"Staj Günlüğü, staj sırasında yapacağınız notları ve görüntüleri tutabileceğiniz ve bunları detaylı bir şekilde kontrol edip daha da güçlendirebileceğiniz ve bir çok özellik daha barındıran bir Android uygulamasıdır. Aşağıdaki bağlantı ile direkt indirebilirsiniz.",version:"2.0.0",updatedAt:"20.01.2026",downloadUrl:"Staj Günlüğü.apk",icon:"icon.png",videoUrl:"",screenshots:["s1.jpeg","s2.jpeg","s3.jpeg","s4.jpeg","s5.jpeg"],tags:["Android"]}],d=document.querySelector("#app");function c(){d.innerHTML=`
    <header class="header">
      <nav class="nav container">
        <div class="logo">enesugr<span>/dev</span></div>
        <div class="nav-links">
          <a href="#home">Ana Sayfa</a>
          <a href="#software">Programlar</a>
          <a href="#contact">İletişim</a>
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
          <p>Kurulum gerektirmeyen, kullanımı kolay programlar.</p>
        </div>
        
        <div class="software-grid">
          ${t.map(e=>{const i=`/apps/${e.id}`;return`
            <div class="software-card glass ${e.downloadUrl?"":"disabled-card"}">
              <div class="card-icon">
                <img src=".${i}/${e.icon}" alt="${e.title}" onerror="this.src='https://api.iconify.design/lucide:package.svg?color=%23888888'">
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3 class="card-title">${e.title}</h3>
                  ${e.version?`
                    <div class="version-info">
                      <span class="version-badge">v${e.version}</span>
                      <span class="update-date">${e.updatedAt}</span>
                    </div>
                  `:""}
                </div>
                <p class="card-desc">${e.description}</p>
                <div class="card-footer">
                  <div class="tags">
                    ${e.tags.map(s=>`<span class="tag">${s}</span>`).join("")}
                  </div>
                  <div class="action-btns">
                    <div class="secondary-btns">
                    ${e.videoUrl?`
                      <a href="${e.videoUrl}" target="_blank" class="btn-video" title="Video Rehber">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                      </a>
                    `:""}
                    ${e.screenshots&&e.screenshots.length>0?`
                      <button class="btn-screenshots" onclick="window.openScreenshots(${e.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        Görseller
                      </button>
                    `:""}
                    </div>
                    ${e.downloadUrl?`<a href=".${i}/${e.downloadUrl}" class="download-btn" download="${e.downloadUrl}">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          İndir
                        </a>`:`<div class="download-btn disabled">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          Yakında
                        </div>`}
                  </div>
                </div>
              </div>
            </div>
          `}).join("")}
        </div>
      <section id="contact" class="contact-section container">
        <div class="section-header">
          <h2 class="section-title">İletişim</h2>
          <p>Her türlü soru, görüş veya iş birliği için bana mesaj gönderebilirsiniz.</p>
        </div>
        
        <div class="contact-container glass">
          <form id="contact-form" action="https://formspree.io/f/mlggjabo" method="POST" class="contact-form">
            <div class="form-group">
              <label for="name">Adınız</label>
              <input type="text" id="name" name="name" placeholder="Enes Uğur" required>
            </div>
            <div class="form-group">
              <label for="email">E-posta Adresiniz</label>
              <input type="email" id="email" name="_replyto" placeholder="ornek@mail.com" required>
            </div>
            <div class="form-group">
              <label for="subject">Konu</label>
              <input type="text" id="subject" name="subject" placeholder="Neden yazıyorsunuz?" required>
            </div>
            <div class="form-group">
              <label for="message">Mesajınız</label>
              <textarea id="message" name="message" rows="5" placeholder="Mesajınızı buraya yazın..." required></textarea>
            </div>
            <input type="text" name="_gotcha" style="display:none" />
            <button type="submit" class="btn btn-primary submit-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Mesaj Gönder
            </button>
          </form>
        </div>
      </section>
    </main>

    <div id="screenshot-modal" class="modal">
      <div class="modal-content glass">
        <span class="close-modal">&times;</span>
        <div id="modal-images" class="modal-images"></div>
      </div>
    </div>

    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; ${new Date().getFullYear()} Enes. Tüm hakları saklıdır.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/enesugur/" target="_blank">LinkedIn</a>            
          <a href="https://github.com/enesugr" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  `;const n=document.getElementById("screenshot-modal"),r=document.querySelector(".close-modal"),o=document.getElementById("modal-images");window.openScreenshots=e=>{const i=t.find(a=>a.id===e);if(!i||!i.screenshots)return;const s=`/apps/${i.id}`;o.innerHTML=i.screenshots.map(a=>{const l=a.toLowerCase().endsWith(".gif");return`
        <div class="screenshot-item">
          <img src=".${s}/${a}" alt="Screenshot" class="modal-screenshot" onerror="this.src='https://placehold.co/600x400?text=Görsel+Bulunamadı'">
          ${l?'<span class="gif-badge">GIF</span>':""}
        </div>
      `}).join(""),n.style.display="flex",document.body.style.overflow="hidden"},r.onclick=()=>{n.style.display="none",document.body.style.overflow="auto"},window.onclick=e=>{e.target===n&&(n.style.display="none",document.body.style.overflow="auto")}}c();window.addEventListener("scroll",()=>{const n=document.querySelector(".header");window.scrollY>50?n.classList.add("scrolled"):n.classList.remove("scrolled")});
