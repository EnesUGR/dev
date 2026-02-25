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
- 📦 **Doğrudan İndirme** - Yazılımları tek tıkla indirme imkanı
- 🏷️ **Versiyon Takibi** - Her yazılım için versiyon bilgisi

---

## 🛠️ Teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| **Vite** | Build tool ve dev server |
| **Vanilla JS** | Ana uygulama mantığı |
| **CSS3** | Glassmorphism, animasyonlar |
| **Inter Font** | Modern tipografi |

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18+)
- npm

### Yerel Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

### Production Build

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
│   ├── data.js          # Yazılım listesi verileri (Dosya adları yeterlidir)
│   └── style.css        # Merkezi tasarım ve stil dosyası
├── index.html           # Ana HTML şablonu
├── vite.config.js       # Vite yapılandırması
└── package.json         # Proje bağımlılıkları
```

---

## 🔧 Yeni Yazılım Ekleme

`src/data.js` dosyasına yeni bir yazılım eklemek için aşağıdaki yapıyı kullanın. Dosyaları `/public/apps/{id}/` klasörüne yükledikten sonra sadece dosya isimlerini yazmanız yeterlidir:

```javascript
{
    id: 5,                       // Benzersiz ID (Klasör adı olmalı)
    title: "Yazılım Adı",
    description: "Yazılım açıklaması...",
    version: "1.0.0",            // Boş bırakılırsa gizlenir
    updatedAt: "18.01.2026",     // Son güncelleme tarihi
    downloadUrl: "Setup.exe",    // apps/{id}/ klasöründeki dosya adı
    icon: "icon.ico",            // apps/{id}/ klasöründeki ikon adı
    videoUrl: "https://youtube.com/watch?v=...", // Video butonu (opsiyonel)
    screenshots: [               // apps/{id}/ klasöründeki görseller
        "screen1.png",
        "preview.gif"            // GIF uzantılılara otomatik "GIF" etiketi eklenir
    ],
    tags: ["Utility", "Tool"]    // Kategoriler
}
```

---

## 👤 Geliştirici

**Enes Uğur**

- 🌐 Website: [enesugr.github.io](https://enesugr.github.io/)
- 💼 LinkedIn: [enesugur](https://www.linkedin.com/in/enesugur/)
- 🐙 GitHub: [enesugr](https://github.com/enesugr)

---

## 📄 Lisans

© 2026 Enes. Tüm hakları saklıdır.
