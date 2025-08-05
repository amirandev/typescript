## 📁 Project Structure

```
src/
├── components/
│   └── MemberCard.tsx
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── MembersList.tsx
│   └── MemberProfile.tsx
├── App.tsx
└── main.tsx
```

---

## 🌐 Routing Setup (`react-router-dom`)

Installed with:

```bash
npm install react-router-dom
```

Routing is handled in `App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MembersList from "./pages/MembersList"
import MemberProfile from "./pages/MemberProfile"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/member/:id" element={<MemberProfile />} />
      </Routes>
    </BrowserRouter>
  )
}
```

---

## 🧱 Layout Component (like `<x-layout>` in Livewire)

Created a reusable layout with `children` slot:

```tsx
// layouts/MainLayout.tsx
import { ReactNode } from "react"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-dark text-white p-3">My App</header>
      <main className="container py-4">{children}</main>
    </>
  )
}
```

Usage in a page:

```tsx
export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
    </MainLayout>
  )
}
```

---

## 👤 Dynamic Routing Example: `/member/:id`

Inside `MemberProfile.tsx`:

```tsx
import { useParams } from "react-router-dom"

const { id } = useParams()

useEffect(() => {
  fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
    .then(res => res.json())
    .then(set)
}, [id])
```

This dynamically fetches and displays the member info by ID.

---

## 📸 MemberCard Component

```tsx
export default function MemberCard({ member }) {
  return (
    <div className="card">
      <img src={member.avatar} alt={member.name} className="card-img-top" />
      <div className="card-body">
        <h5>{member.name}</h5>
        <p>{member.email}</p>
      </div>
    </div>
  )
}
```

---

## 🧠 Dynamic Meta Tags with `react-helmet-async`

Installed with:

```bash
npm install react-helmet-async --legacy-peer-deps
```

Wrap your app in `HelmetProvider` (in `main.tsx`):

```tsx
import { HelmetProvider } from "react-helmet-async"

<HelmetProvider>
  <App />
</HelmetProvider>
```

Used in pages like:

```tsx
import { Helmet } from "react-helmet-async"

{member && (
  <Helmet>
    <title>{member.name}'s Profile</title>
    <meta name="description" content={`Profile of ${member.name}`} />
  </Helmet>
)}
```

