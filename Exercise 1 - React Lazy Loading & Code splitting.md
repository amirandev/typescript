

## **სავარჯიშო: React პროექტის ოპტიმიზაცია Lazy Loading & Code Splitting-ით**

### **ნაბიჯი 1: პროექტის შექმნა Vite-ით**

1. გახსენით ტერმინალი (CMD/Terminal).
2. შექმენით ახალი Vite React პროექტი:

```bash
npm create vite@latest react-lazy-demo
```

3. აირჩიეთ:

* Project name: `react-lazy-demo`
* Framework: `React`
* Variant: `JavaScript` (ან `TypeScript`, სურვილის მიხედვით)

4. გადადით პროექტში:

```bash
cd react-lazy-demo
```

5. დააინსტალირეთ დამოკიდებულებები:

```bash
npm install
```

---

### **ნაბიჯი 2: საჭირო პაკეტების დაყენება**

1. დაყენება **React Router DOM**-ისათვის:

```bash
npm install react-router-dom
```

---

### **ნაბიჯი 3: ძირითადი ფაილების სტრუქტურა**

პროექტში შექმენით დირექტორია `src/pages` და იქ დაამატეთ სამი კომპონენტი:

* **Home.jsx**

```jsx
export default function Home() {
  return <h2>Home Page</h2>;
}
```

* **About.jsx**

```jsx
export default function About({ message }) {
  return <h2>About Page: {message}</h2>;
}
```

* **Contact.jsx**

```jsx
export default function Contact() {
  return <h2>Contact Page</h2>;
}
```

---

### **ნაბიჯი 4: React Router + Lazy Loading + Code Splitting**

შეასწორეთ `src/main.jsx` ან `src/App.jsx`:

```jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About message="Hello from App!" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
```

---

### **ნაბიჯი 5: პროექტის გაშვება**

```bash
npm run dev
```

* გახსენით ბრაუზერში, ჩვეულებრივად Vite-ის ლოკალურ URL-ზე.
* დაკლიკეთ სხვადასხვა გვერდებზე → შეამჩნევთ, რომ თითოეული გვერდი **ცალკე bundle-ით იტვირთება**.

---

### **ნაბიჯი 6: დამატებითი სავარჯიშო**

1. დაამატეთ **loading animation** Suspense fallback-ში.
2. დაამატეთ **wait() ფუნქცია**, რომ simulate-დე ლოდინი Lazy Loading-ის დროს.

```js
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const About = lazy(() => wait(2000).then(() => import("./pages/About")));
```

3. შემოწმეთ DevTools Network ტაბში, რომ დაინახოთ **code splitting რეალურად**.

---



* Vite-ის გამოყენებას React-ისთვის
* React Router-ის ინტეგრაციას
* React.lazy + Suspense გამოყენებას
* Props გადაცემას Lazy Component-ებში
* Code Splitting-ის დაკვირვებას Network ტაბში

---
