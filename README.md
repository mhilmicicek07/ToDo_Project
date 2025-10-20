# 📝 ToDo List Uygulaması

Bu proje, kullanıcıların görev ekleyip yönetebileceği basit ama işlevsel bir **ToDo List** uygulamasıdır.  
Uygulama, standart web teknolojileri (HTML, CSS, JavaScript) ile geliştirilmiş olup, görevler tarayıcının **LocalStorage**'ı üzerinde kalıcı olarak saklanır.  
Bu sayede sayfa yenilense veya tarayıcı kapatılsa bile görevler kaybolmaz.

---

## 🚀 Özellikler

- ✅ Yeni görev ekleme ve listeye dinamik olarak yansıtma. 
- 🗑️ Tek bir görevi kolayca silme.  
- 💥 Tüm görevleri tek bir düğme ile temizleme.  
- 💾 Görevleri tarayıcı **LocalStorage**'ında kalıcı olarak saklama.  
- 🔁 Sayfa ilk yüklendiğinde görevlerin LocalStorage'dan otomatik olarak geri yüklenmesi.  
- 💻 **Modern ve Temiz Arayüz:** Bootstrap yardımıyla düzenlenmiş kullanıcı dostu tasarım.

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Rolü |
|------------|-----------|
| **HTML5** | Uygulamanın temel yapısal iskeleti. |
| **CSS3 & Bootstrap 5** | Modern, responsive ve düzenli arayüz tasarımı. |
| **JavaScript (ES6+)** | Uygulamanın tüm dinamik mantığı, görev ekleme, silme ve event handling. |
| **LocalStorage API** | Görev verilerinin istemci tarafında kalıcı olarak saklanması. |

---

## 📂 Proje Dosya Yapısı

📁 ToDo_Project 
├── 📄 todo.html 
├── 📄 todo.js 
├── 📄 todo.css 
└── 📄 README.md


---

## ⚙️ Kurulum ve Çalıştırma

Bu projeyi hızlıca çalıştırmak için çok basit adımlar izlemeniz yeterlidir:

1. Bu projeyi yerel ortamınıza klonlayın:
   ```bash
   git clone [https://github.com/mhilmicicek07/ToDo_Project.git](https://github.com/mhilmicicek07/ToDo_Project.git)
Proje klasörüne geçiş yapın:

Bash

cd ToDo_Project
index.html dosyasını tercih ettiğiniz web tarayıcısında açın.

Hepsi bu kadar! 🎉

Artık görev ekleyebilir, silebilir ve verilerin kalıcılığını test edebilirsiniz.

🧠 Teknik Açıklama
todo.js dosyası, uygulamanın temel mantığını içerir. Görevler, hem tarayıcının görünür bölümüne (DOM) eklenir hem de eş zamanlı olarak LocalStorage'a yazılır.

Herhangi bir görev silindiğinde, bu silme işlemi hem DOM'dan hem de LocalStorage'daki diziden gerçekleşir.

Tarayıcı ilk açıldığında todo.js içindeki başlangıç fonksiyonu, LocalStorage'da kayıtlı görev olup olmadığını kontrol eder ve varsa bunları sayfaya yükler.

👨‍💻 Geliştirici
Mehmet Hilmi Çiçek 💼 Full Stack Web Developer

📍 Geislingen an der Steige

💬 “Basit ama tutarlı kod, karmaşık olandan her zaman üstündür.”

🪪 Lisans
Bu proje açık kaynaklıdır.

İsteyen herkes kodu inceleyebilir, geliştirebilir veya kişisel projelerinde kullanabilir.