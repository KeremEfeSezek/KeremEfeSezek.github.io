# keremefesezek.github.io

Kişisel web sitem. Gömülü sistemler, projelerim ve özgeçmişim.

Site derleme adımı olmayan düz HTML, CSS ve JavaScript'ten oluşuyor; GitHub Pages `main` dalını doğrudan yayınlıyor.

## Yapı

| Dosya | İçerik |
| --- | --- |
| `index.html` | Sayfa iskeleti (Türkçe, `/`) |
| `en/index.html` | İngilizce sayfa (`/en/`), `tools/build.mjs` üretir, elle düzenlenmez |
| `tools/build.mjs` | İngilizce sayfayı, SEO etiketlerini, metinlerin HTML'deki kopyasını ve `sitemap.xml`'i üretir |
| `tools/og.html` | Bağlantı önizleme görselleri ve simgelerin kaynağı |
| `assets/js/content.js` | Bütün metinler (Türkçe ve İngilizce), deneyim, projeler, yetkinlikler |
| `assets/js/figures.js` | Deneyim pencerelerindeki ve proje kartlarındaki şemalar |
| `assets/js/main.js` | Logo animasyonu, menü, açılan pencereler, osiloskop |
| `assets/css/site.css` | Stiller |

Yeni bir deneyim ya da proje eklemek için `assets/js/content.js` dosyasını düzenle, sonra şunu çalıştır:

```
node tools/build.mjs
```

Bu komut `index.html`, `en/index.html` ve `sitemap.xml` dosyalarını günceller; üçünü de commit'le. Başlık, açıklama ve yapılandırılmış veri (SEO) `tools/build.mjs` içinde. Google Search Console doğrulama kodu da oradaki `GOOGLE_SITE_VERIFICATION` sabitine yazılır.

## Yerelde çalıştırma

```
python -m http.server 8765
```

Ardından `http://127.0.0.1:8765` adresini aç.
