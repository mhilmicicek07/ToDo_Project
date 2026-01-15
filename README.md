# 📝 ToDo_Project

Bu README dosyası proje hakkında bilgi, kurulum ve kullanım talimatlarını üç dilde içerir: Türkçe (TR), English (EN) ve Deutsch (DE).

Repository dil dağılımı (GitHub analizine göre):
- HTML: 53.9%
- JavaScript: 44.6%
- CSS: 1.5%

---

## Türkçe (TR)

### Hakkında
ToDo_Project, tarayıcı üzerinde çalışan basit ama işlevsel bir To-Do (yapılacaklar) listesi uygulamasıdır. HTML, CSS (Bootstrap) ve JavaScript (ES6+) ile geliştirilmiştir. Görevler tarayıcıya ait LocalStorage üzerinde kalıcı olarak saklanır.

### Özellikler
- Yeni görev ekleme
- Görevleri silme
- Tüm görevleri temizleme
- Görevleri tamamlandı/aktif olarak işaretleme
- LocalStorage ile verilerin kalıcılığı
- Modern ve responsive arayüz (Bootstrap)

### Kullanılan Teknolojiler
| Teknoloji | Rol |
|---|---|
| HTML5 | Yapısal iskelet |
| CSS3 & Bootstrap 5 | Stil ve responsive düzen |
| JavaScript (ES6+) | Uygulama mantığı, DOM manipülasyonu |
| LocalStorage API | İstemci tarafı veri depolama |

### Proje Dosya Yapısı
```
ToDo_Project
├── todo.html
├── todo.js
├── todo.css
└── README.md
```

### Kurulum ve Çalıştırma
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/mhilmicicek07/ToDo_Project.git
   ```
2. Proje dizinine girin:
   ```bash
   cd ToDo_Project
   ```
3. Uygulamayı açın:
   - Doğrudan: `todo.html` dosyasını tarayıcıda açın.
   - Veya basit bir yerel sunucu çalıştırın:
     - Python 3:
       ```bash
       python -m http.server 8000
       # Tarayıcıda http://localhost:8000/todo.html adresini açın
       ```
     - Veya npm ile:
       ```bash
       npx serve .
       ```

### Geliştirici Notları
- Uygulama mantığı `todo.js` içerisinde yer alır: görev ekleme/silme işlemleri hem DOM'a yansıtılır hem de LocalStorage'a kaydedilir.
- Eğer farklı bir dosya adıyla açılıyorsa veya build adımı varsa (mevcut repo statik görünüyor) README'yi buna göre güncelleyin.

### Katkıda Bulunma
Katkılar memnuniyetle kabul edilir:
1. Fork yapın.
2. Yeni bir branch oluşturun: `git checkout -b feature/my-feature`
3. Değişiklikleri commit edin: `git commit -m "Add my feature"`
4. Branch'i push edin: `git push origin feature/my-feature`
5. Pull request (PR) açın.

Büyük değişiklikler için önce bir issue açıp tartışmanızı öneririz.

### Lisans
Bu repoda açıkça belirtilmiş bir lisans yok. Kullanım ve dağıtım koşullarını netleştirmek için örn. MIT lisansı eklemeniz önerilir.

---

## English (EN)

### About
ToDo_Project is a simple browser-based to-do list application built with HTML, CSS (Bootstrap) and JavaScript (ES6+). Tasks are persisted locally using the browser's LocalStorage.

### Features
- Add tasks
- Delete individual tasks
- Clear all tasks
- Mark tasks as completed/active
- Data persistence with LocalStorage
- Responsive UI using Bootstrap

### Technologies Used
| Technology | Purpose |
|---|---|
| HTML5 | Structural layout |
| CSS3 & Bootstrap 5 | Styling and responsive layout |
| JavaScript (ES6+) | Application logic and DOM manipulation |
| LocalStorage API | Client-side data persistence |

### Project Structure
```
ToDo_Project
├── todo.html
├── todo.js
├── todo.css
└── README.md
```

### Installation & Running
1. Clone the repository:
   ```bash
   git clone https://github.com/mhilmicicek07/ToDo_Project.git
   ```
2. Enter project folder:
   ```bash
   cd ToDo_Project
   ```
3. Open the app:
   - Directly: open `todo.html` in your browser.
   - Or run a simple local server:
     - Python 3:
       ```bash
       python -m http.server 8000
       # Open http://localhost:8000/todo.html
       ```
     - Or with npm (e.g. serve):
       ```bash
       npx serve .
       ```

### Developer Notes
- The main logic lives in `todo.js`: tasks are rendered to the DOM and simultaneously saved to LocalStorage.
- If the repo uses a different entry file or build steps, update this README accordingly.

### Contributing
Contributions are welcome:
1. Fork the repo.
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add my feature"`
4. Push branch: `git push origin feature/my-feature`
5. Open a pull request.

For major changes, please open an issue first to discuss.

### License
No explicit license file is present. Consider adding a license such as MIT to clarify usage rights.

---

## Deutsch (DE)

### Über das Projekt
ToDo_Project ist eine einfache To-Do-Listen-Webanwendung, die im Browser läuft und mit HTML, CSS (Bootstrap) und JavaScript (ES6+) entwickelt wurde. Aufgaben werden lokal im Browser-LocalStorage gespeichert.

### Funktionen
- Aufgaben hinzufügen
- Einzelne Aufgaben löschen
- Alle Aufgaben löschen
- Aufgaben als erledigt/aktiv markieren
- Persistenz mittels LocalStorage
- Responsives UI mit Bootstrap

### Verwendete Technologien
| Technologie | Zweck |
|---|---|
| HTML5 | Strukturelles Layout |
| CSS3 & Bootstrap 5 | Styling und responsive Layout |
| JavaScript (ES6+) | Anwendungslogik und DOM-Manipulation |
| LocalStorage API | Client-seitige Persistenz |

### Projektstruktur
```
ToDo_Project
├── todo.html
├── todo.js
├── todo.css
└── README.md
```

### Installation & Ausführung
1. Repository klonen:
   ```bash
   git clone https://github.com/mhilmicicek07/ToDo_Project.git
   ```
2. In das Projektverzeichnis wechseln:
   ```bash
   cd ToDo_Project
   ```
3. Anwendung öffnen:
   - Direkt: `todo.html` im Browser öffnen.
   - Oder lokalen Server starten:
     - Python 3:
       ```bash
       python -m http.server 8000
       # Öffne http://localhost:8000/todo.html
       ```
     - Oder mit npm (z. B. serve):
       ```bash
       npx serve .
       ```

### Hinweise für Entwickler
- Hauptlogik in `todo.js`: Aufgaben werden ins DOM geschrieben und in LocalStorage gespeichert.
- Falls Build-Schritte oder andere giriş noktaları varsa README buna göre güncellenmelidir.

### Mitwirkung
Beiträge sind willkommen:
1. Forken.
2. Branch erstellen: `git checkout -b feature/my-feature`
3. Änderungen committen: `git commit -m "Add my feature"`
4. Branch pushen: `git push origin feature/my-feature`
5. Pull Request öffnen.

Bei größeren Änderungen bitte zuerst ein Issue eröffnen.

### Lizenz
Es ist keine explizite Lizenzdatei vorhanden. Es wird empfohlen, eine Lizenz (z. B. MIT) hinzuzufügen, um die Nutzungsrechte zu klären.

---

Teşekkürler / Thanks / Danke
