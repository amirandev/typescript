
---

### **Slide 1: Lazy Loading & Code Splitting**

<img width="1081" height="555" alt="Screenshot 2025-09-08 at 15-58-20 (300) Code Splitting and Lazy Loading React JS Advanced Concepts - YouTube" src="https://github.com/user-attachments/assets/2a967972-89fa-4552-a2f2-103c0b9a148b" />

https://legacy.reactjs.org/docs/code-splitting.html

---

### **Slide 2: პრობლემის აღწერა**

**სათაური:** რატომ ნელდება დიდი React აპლიკაციები?
**ტექსტი:**

* დიდი პროექტები შეიცავს უამრავ კომპონენტს, ბიბლიოთეკას და სხვა კოდს.
* build-ის დროს ყველა კოდი ერთ დიდ JavaScript ფაილში ერთიანდება (bundle).
* აპლიკაციის დატვირთვისას, ბრაუზერმა უნდა ჩამოტვირთოს მთელი bundle, მაშინაც კი, თუ მომხმარებელი მხოლოდ ერთ გვერდს ხედავს.
* ეს ანელებს საწყის დატვირთვას და აუარესებს მომხმარებლის გამოცდილებას.
  **ვიზუალი:** “bundle.js”–ის გადმოწერის ილუსტრაცია

---

### **Slide 3: Lazy Loading და Code Splitting**

**სათაური:** რა არის Lazy Loading და Code Splitting?
**ტექსტი:**

* **Code Splitting:** დიდ JavaScript ფაილს ვყოფთ პატარა, მართვად ნაწილებად.
* **Lazy Loading:** კოდის დაყოფილი ნაწილები იტვირთება მოთხოვნის მიხედვით (მაგალითად, კონკრეტულ გვერდზე გადასვლისას).
  **ვიზუალი:** კოდის ბლოკების დაყოფის სქემა

---

### **Slide 4: დატვირთვა Lazy Loading-ის გარეშე**

**სათაური:** ერთი დიდი bundle (Lazy Loading-ის გარეშე)
**ტექსტი:**

* ბრაუზერი იტვირთავს მთელ bundle-ს, რომელიც შეიცავს ყველა კომპონენტს.
  **დიაგრამა:**
  მომხმარებელი → ბრაუზერი → სერვერი
  სერვერი აბრუნებს: bundle.js (Home + About + Contact + …)

---

### **Slide 5: დატვირთვა Lazy Loading-ით**

**სათაური:** პატარა ბანდლები (Lazy Loading-ით)
**ტექსტი:**

* ბრაუზერი თავდაპირველად ითხოვს მხოლოდ მთავარი გვერდისთვის საჭირო ფაილს.
* სხვა გვერდებზე გადასვლისას, ჩამოტვირთვის მხოლოდ საჭირო კოდი.
  **დიაგრამა:**
  მომხმარებელი → ბრაუზერი → სერვერი
  სერვერი აბრუნებს: home.js

მომხმარებელი გადადის About გვერდზე → ბრაუზერი → სერვერი
სერვერი აბრუნებს: about.js

---

### **Slide 6: React.lazy და Suspense**

**სათაური:** როგორ გამოვიყენოთ Lazy Loading React-ში?
**ტექსტი:**

* `React.lazy()` — კომპონენტის დინამიკური დატვირთვა
* `Suspense` — fallback UI, სანამ კომპონენტი იტვირთება
  **კოდის მაგალითი:**

```javascript
import React, { lazy, Suspense } from 'react';
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>გვერდი იტვირთება...</div>}>
        <AboutPage />
      </Suspense>
    </div>
  );
}
```

---

### **Slide 7: Lazy Loading React Router-ის გამოყენებით**

**სათაური:** Lazy Loading React Router-ის გამოყენებით
**კოდის მაგალითი:**

```javascript
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>გვერდი იტვირთება...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

---

### **Slide 8: დამატებითი ოპტიმიზაციის ტექნიკები**

**სათაური:** სხვა მნიშვნელოვანი ტექნიკები
**ტექსტი:**

* **Dynamic Imports (import())** — მოდულების დინამიკური ჩატვირთვა
* **Tree Shaking** — გამოუყენებელი კოდის წაშლა
* **Minification** — კოდის შეკუმშვა, ფაილის ზომის შემცირება
  **ვიზუალი:** Before/After bundle ზომის სქემა

---

### **Slide 9: დასკვნა**

**სათაური:** შეჯამება
**ტექსტი:**

* Lazy Loading და Code Splitting აუცილებელია სწრაფი და ეფექტური React აპლიკაციების შესაქმნელად
* ისინი ამცირებენ საწყის დატვირთვის დროს და აუმჯობესებენ მომხმარებლის გამოცდილებას
* მომხმარებელს მიეწოდება მხოლოდ ის კოდი, რაც კონკრეტულ მომენტში სჭირდება
---

