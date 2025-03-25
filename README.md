# Mini Kütüphane Uygulaması

📚 **Mini Kütüphane Uygulaması** basit bir kütüphane yönetim sistemidir. Kullanıcılar kitap ekleyebilir, silebilir ve kitap listesini görebilir. Kitaplar, sayfa yenilendiğinde bile kaybolmaz, çünkü **localStorage** kullanılarak tarayıcıda saklanır.

## 🚀 Proje Kurgusu

### **🛠 Genel Yapı**  
- Kullanıcı, kitap adını ve yazarını girip **"Kitap Ekle"** butonuna basarak listeye yeni kitap ekleyebilir.  
- Kitaplar, ekledikçe listede dinamik olarak görünecektir.  
- Her kitap öğesinin yanında bir **"Sil"** butonu olacak ve kullanıcı bu butona basarak kitabı silebilecek.  
- Veriler, tarayıcıda **localStorage** kullanılarak saklanacak, böylece sayfa yenilendiğinde bilgiler kaybolmaz.

---

### **🎯 Kullanılacak JavaScript Konuları**  
✔ **Değişkenler (let, const)** → Kitap bilgilerini tutmak için  
✔ **Diziler ve Nesneler** → Kitapları bir dizi içinde nesne olarak saklamak için  
✔ **Dizi Metotları (`push()`, `splice()`, `forEach()` vs.)** → Listeyi yönetmek için  
✔ **DOM Manipülasyonu (`querySelector()`, `createElement()`, `appendChild()`)** → Listeyi dinamik olarak oluşturmak için  
✔ **Olay Dinleme (`addEventListener()`)** → Kitap ekleme ve silme işlemleri için  
✔ **localStorage** → Kitapları tarayıcıda saklamak için  

---

### **📝 Kullanıcı Senaryosu**  
1. **Sayfa Açıldığında**:  
   - Kullanıcı **boş bir giriş formu** ve kitap listesi alanını görür.  
   - Eğer daha önce eklenmiş kitaplar varsa, bunlar **localStorage**'dan yüklenir ve gösterilir.  

2. **Kitap Ekleme**:  
   - Kullanıcı "Kitap Adı" ve "Yazar" alanlarını doldurur.  
   - "Kitap Ekle" butonuna basınca:  
     - Girilen bilgiler bir **kitap nesnesine** dönüştürülür.  
     - Kitap nesnesi bir diziye eklenir.  
     - Kitap, **listeye görsel olarak eklenir**.  
     - Kitaplar **localStorage**'a kaydedilir.  

3. **Kitap Silme**:  
   - Kullanıcı bir kitabın yanındaki **"Sil"** butonuna basınca:  
     - Kitap **diziden kaldırılır**.  
     - **localStorage** güncellenir.  
     - Kitap **görsel olarak da listeden silinir**.  

---

### **📌 Ekstra Geliştirme Fikirleri**  
💡 **Kitapları Filtreleme:** Kullanıcı, arama çubuğuna yazar veya kitap adı girerek kitapları filtreleyebilir.  
💡 **Okundu/Okunmadı İşareti:** Kitapların yanına bir **checkbox** ekleyerek okundu olarak işaretleme özelliği eklenebilir.  
💡 **Kategoriler:** Kitaplara kategori (Roman, Bilim, Tarih vs.) ekleme seçeneği konulabilir.  

---

## 🚀 Başlangıç

Projeyi yerel bilgisayarınızda çalıştırmak için:
1. GitHub reposunu indirin veya klonlayın.
2. `index.html` dosyasını bir tarayıcıda açın.
3. JavaScript kısmını ekleyerek işlevselliği tamamlayın.

---

**Hazır mısınız?** Kitap eklemeye başlayın ve mini kütüphanenizi yönetin! 🚀
