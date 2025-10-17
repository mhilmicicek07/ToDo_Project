# 📝 ToDo List Uygulaması

Bu proje, kullanıcıların görev ekleyip yönetebileceği basit ama işlevsel bir **ToDo List** uygulamasıdır.  
Uygulama modern JavaScript teknikleriyle geliştirilmiş olup, görevler **LocalStorage** üzerinde saklanır.  
Sayfa yenilense bile görevler kaybolmaz, kalıcı olarak saklanır.

---

## 🚀 Özellikler

- ✅ Yeni görev ekleme  
- 🗑️ Tek bir görevi silme  
- 💥 Tüm görevleri bir seferde silme  
- 💾 Görevleri tarayıcı **LocalStorage**'ında saklama  
- 🔁 Sayfa yenilendiğinde görevlerin geri yüklenmesi  
- ⚡ Son görev silindiğinde LocalStorage'ın otomatik temizlenmesi  

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|-----------|
| **HTML5** | Uygulamanın yapısal iskeleti |
| **CSS3 (Bootstrap 5)** | Modern ve responsive arayüz tasarımı |
| **JavaScript (ES6+)** | Dinamik işlemler, event handling ve LocalStorage yönetimi |
| **Font Awesome** | Simge ikonlar (ekle, sil vb.) |
| **jQuery (isteğe bağlı)** | Yüklü ama kullanılmıyor, ileride gerekirse kolayca entegre edilebilir |

---

## 📂 Proje Dosya Yapısı

```
📁 ToDo-List-Project
├── 📄 index.html
├── 📄 todo.js
├── 📄 todo.css
└── 📄 README.md
```

---

## ⚙️ Kurulum ve Çalıştırma

1. Bu projeyi yerel ortamına klonla:
   ```bash
   git clone https://github.com/kullanici-adi/todo-list.git
   ```

2. Proje klasörüne gir:
   ```bash
   cd todo-list
   ```

3. `index.html` dosyasını tarayıcıda aç.

Hepsi bu kadar! 🎉  
Artık görev ekleyebilir, silebilir ve LocalStorage üzerinde kaydedilen verileri görebilirsin.

---

## 🧠 Teknik Açıklama

- `todo.js` dosyasında uygulamanın tüm mantığı yer alır.  
- Görev ekleme işlemi, form submit olayıyla tetiklenir ve yeni görev hem DOM’a hem de LocalStorage’a eklenir.  
- Silme işlemi iki şekilde yapılabilir:
  - **Tek görev silme:** Seçilen görev DOM’dan kaldırılır ve LocalStorage güncellenir.
  - **Tüm görevleri silme:** Liste tamamen temizlenir ve `localStorage.removeItem("todos")` çağrılır.  
- Eğer kullanıcı son görevi silerse, LocalStorage da tamamen temizlenir (boş dizi tutmaz).

---

## 🧾 Örnek Kod Parçaları

### Tek Görev Silme
```js
if (confirm("Görevi silmek istediğinize emin misiniz?")) {
  li.remove();
  let list = getItemsFromLS().filter(t => t.trim() !== text);
  list.length === 0 ? localStorage.removeItem("todos") : setItemsToLS(list);
}
```

### Tüm Görevleri Silme
```js
if (confirm("Tüm görevleri silmek istediğinize emin misiniz?")) {
  while (taskList.firstChild) taskList.removeChild(taskList.firstChild);
  localStorage.removeItem("todos");
}
```

---

## 🎨 Görsel

Uygulama Bootstrap kart yapısı içinde çalışır:

```
+----------------------------+
|       📝 ToDo List         |
+----------------------------+
| [Yeni görev ekle ...] [+]  |
+----------------------------+
| ▢ Görev 1 [x]             |
| ▢ Görev 2 [x]             |
| ▢ Görev 3 [x]             |
+----------------------------+
| [Tümünü Sil]               |
+----------------------------+
```

---

## 👨‍💻 Geliştirici

**Mehmet Hilmi Çiçek**  
💼 Full Stack Web Developer  
📍 Geislingen an der Steige  
💬 “Basit ama tutarlı kod, karmaşık olandan her zaman üstündür.”

---

## 🪪 Lisans

Bu proje açık kaynaklıdır.  
İsteyen herkes kodu inceleyebilir, geliştirebilir veya kişisel projelerinde kullanabilir.

---