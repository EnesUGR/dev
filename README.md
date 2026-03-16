# 🚀 enesugr/dev - Kişisel Yazılım Arşivi

Kendi geliştirdiğim uygulamalarımı sergilediğim ve doğrudan indirme imkanı sunduğum kişisel yazılım portfolyosu web sitesi.

🔗 **Site:** [enesugr.github.io/dev](https://enesugr.github.io/dev/)

---

## 📋 Hakkında

Bu proje, geliştirdiğim yazılımlarımı tanıttığım ve kullanıcıların doğrudan indirebileceği modern bir web arayüzüdür.

---

## ✨ Özellikler

- 🎨 **Modern Tasarım** - Glassmorphism efektleri ve koyu tema
- 🌟 **Dinamik Animasyonlar** - Hover efektleri ve smooth geçişler
- 📱 **Responsive** - Tüm cihazlarda uyumlu görünüm
- ⚡ **Hızlı** - Vite ile optimize edilmiş performans
- 📦 **Esnek Erişim** - Doğrudan indirme veya web uygulamasına erişim seçenekleri
- 🕒 **Yakında Modu** - Geliştirilme aşamasındaki projeler için özel durum gösterimi
- 🏷️ **Versiyon Takibi** - Her yazılım için versiyon bilgisi ve değişim günlüğü (changelog)
- 🖼️ **Görsel Galeri** - GIF destekli ekran görüntüleri ve video rehberler

---

## 🛠️ Teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| **Vite** | Build tool ve dev server |
| **Vanilla JS** | Ana uygulama mantığı (Dinamik render sistemi) |
| **CSS3** | Glassmorphism, animasyonlar ve responsive tasarım |
| **Inter Font** | Modern tipografi |

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18+)
- npm

### Yerel Geliştirme ve Yönetim

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (Önizleme için)
npm run dev

# Yönetim Panelini başlat (Veri yönetimi için)
npm run admin
```

### Production Build ve Yayına Alma

```bash
# Production için derle
npm run build

# Derlenen siteyi önizle
npm run preview
```

---

## 📁 Proje Yapısı

```
dev/
├── public/
│   ├── apps/            # Her uygulama için özel klasör (1, 2, 3...)
│   │   └── {id}/        # İkon, setup ve görseller bu klasörde toplanır
│   └── favicon.ico      # Site ikonu
├── src/
│   ├── main.js          # Ana uygulama mantığı ve render sistemi
│   ├── data.js          # Yazılım listesi verileri 
│   └── style.css        # Merkezi tasarım ve stil dosyası
├── index.html           # Ana HTML şablonu
├── vite.config.js       # Vite yapılandırması
└── package.json         # Proje bağımlılıkları
```

---

## 🔧 Yazılım Yönetimi (Yönetim Paneli)

Artık yazılımları manuel olarak `src/data.js` içinde düzenlemenize gerek yok. Proje kök dizininde `npm run admin` komutunu çalıştırarak modern bir yönetim paneline erişebilirsiniz:

-   **Yeni Yazılım Ekleme:** Form üzerinden tüm parametreleri (ID, Başlık, Tags, Changelog vb.) kolayca girebilirsiniz.
*   **Düzenleme:** Mevcut uygulamaları anında güncelleyebilirsiniz.
*   **Otomatik Yayına Alma:** Panel üzerinden tek tuşla `NPM Build` yapabilir ve `Push & Deploy` ile GitHub'a gönderebilirsiniz.
*   **Klasör Erişimi:** Uygulama dosyalarını (`/public/apps`) doğrudan panelden açabilirsiniz.

---

## 👤 Geliştirici

**Enes Uğur**

- 🌐 Website: [enesugr.github.io](https://enesugr.github.io/)
- 💼 LinkedIn: [enesugur](https://www.linkedin.com/in/enesugur/)
- 🐙 GitHub: [enesugr](https://github.com/enesugr)

---

## 📄 Lisans

© 2026 Enes. Tüm hakları saklıdır.
