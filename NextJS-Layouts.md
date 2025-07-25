## ✅ How Layouts Work in the App Router (`app/`)

Each route folder can have its **own layout** using a `layout.tsx` (or `.tsx`/`.jsx`) file. Layouts **wrap all pages and nested routes** inside that folder.

---

### 📁 Example Project Structure

```
app/
├── layout.tsx         // Root layout (applies to everything)
├── page.tsx           // Home page
├── about/
│   ├── layout.tsx     // About-specific layout (optional)
│   └── page.tsx       // About page
├── dashboard/
│   ├── layout.tsx     // Dashboard layout
│   ├── page.tsx       // Dashboard home
│   └── settings/
│       └── page.tsx   // /dashboard/settings
```

---

### 🔧 Root Layout – `app/layout.tsx`

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>🌐 My Site Header</header>
        <main>{children}</main>
        <footer>© 2025</footer>
      </body>
    </html>
  );
}
```

This wraps everything: `/`, `/about`, `/dashboard`, etc.

---

### 📝 About Page – `app/about/page.tsx`

```tsx
export default function AboutPage() {
  return <h1>About Us</h1>;
}
```

If you don't define `about/layout.tsx`, this will use the **root layout**.

---

### 📦 Optional Nested Layout – `app/dashboard/layout.tsx`

```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#eee' }}>Sidebar</aside>
      <section style={{ flex: 1 }}>{children}</section>
    </div>
  );
}
```

All pages under `/dashboard/*` will use this layout **nested inside the root layout**.

---

