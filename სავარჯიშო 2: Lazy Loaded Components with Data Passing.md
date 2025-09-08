
## **სავარჯიშო 2: Lazy Loaded Components with Data Passing**

### **ნაბიჯი 1: ახალი Vite React პროექტის შექმნა**

```bash
npm create vite@latest react-lazy-data-demo
cd react-lazy-data-demo
npm install
```

* Framework: React
* Variant: JavaScript ან TypeScript

---

### **ნაბიჯი 2: საჭირო პაკეტების დაყენება**

```bash
npm install react-router-dom
```

---

### **ნაბიჯი 3: ფაილების სტრუქტურა**

შექმენით დირექტორია `src/pages` და დაამატეთ ორი Lazy Page:

* **Dashboard.jsx**

```jsx
export default function Dashboard({ user }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}
```

* **Profile.jsx**

```jsx
export default function Profile({ user }) {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

---

### **ნაბიჯი 4: React Router + Lazy Loading + Props Passing**

`src/App.jsx`:

```jsx
import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Lazy-loaded components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  const [user] = useState({ name: "John Doe", email: "john@example.com" });

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
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

* გახსენით ბრაუზერში.
* Dashboard-ს მოაგზავნეთ Props `user` და Profile-ზე გადასვლისას იგივე Props წავა.
* DevTools Network ტაბში შეგიძლიათ შეამოწმოთ **Lazy Loading + code splitting**.

---

### **ნაბიჯი 6: სავარჯიშოს გაფართოება**

1. დაამატეთ **wait() ფუნქცია**, რათა simulate-დოს ნელი დატვირთვა:

```js
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Profile = lazy(() => wait(1500).then(() => import("./pages/Profile")));
```

2. დაამატეთ **loading spinner** Suspense fallback-ში.
3. სცადეთ **props დინამიური გადაცემა**: Dashboard-ში ღილაკი, რომელიც შეიცვლება Profile-ში გადასვლის დროს.

---

* Lazy Loading-ის გამოყენება
* Props Passing Lazy Components-ში
* Code Splitting-ის დაკვირვება Network ტაბში
* დინამიური Props-ის გამოყენება გვერდიდან გვერდზე

---

