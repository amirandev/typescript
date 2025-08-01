## 📘 Dynamic SEO Meta Tags in Next.js App Router

Next.js App Router (v13+) makes it easy to manage SEO metadata such as `<title>`, `<meta name="description">`, and Open Graph tags (`og:title`, `og:image`, etc.) using the built-in `generateMetadata()` function — no external libraries needed.

This guide explains **why meta tags matter**, and how to use them effectively in a modern Next.js site.

---

## 🤔 What Are Meta Tags and Why Are They Important?

**Meta tags** are special HTML elements in the `<head>` of a page that tell search engines, browsers, and social platforms what your page is about.

They are **not visible to users**, but they’re essential for:

| Tag Type                        | Used For                                            |
| ------------------------------- | --------------------------------------------------- |
| `<title>`                       | Browser tab title and Google search result headline |
| `<meta name="description">`     | Google search snippet                               |
| `og:title`, `og:image`, etc.    | Facebook/LinkedIn/Telegram preview content          |
| `twitter:card`, `twitter:title` | How your page appears when shared on Twitter/X      |

---

### 🧪 Without Meta Tags:

* Google may display an irrelevant title or no description.
* Social media previews will be broken or missing.
* Your site will look unprofessional and may lose traffic.

---

## ✅ What You'll Learn

* How to define global metadata
* How to create page-specific SEO tags using `generateMetadata()`
* How to add dynamic meta from external data (like an API)
* How to properly test your tags

---

## 📁 Project Structure (App Router Only)

```
/app
 ├── layout.tsx            ← Global layout and metadata
 ├── about/
 │    └── page.tsx         ← Page with dynamic metadata
 └── ...
```

---

## 1. 🧱 Setup Global Layout with `<head />`

In `app/layout.tsx`, you must include `<head />` for metadata to render properly:

```tsx
// app/layout.tsx
export const metadata = {
  title: 'My Website',
  description: 'Default description of the site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />  {/* ✅ Required */}
      <body>{children}</body>
    </html>
  );
}
```

❗ Without `<head />`, dynamic meta tags **will not render**, even if the title works.

---

## 2. 🧠 Per-Page Metadata with `generateMetadata()`

In `app/about/page.tsx`:

```tsx
import { Metadata } from 'next';

type Props = {
  params: {};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'About the website',
    description: 'Cvenn varT saxelmwifo saswavlebeli',
    openGraph: {
      title: 'ეს სათაური ფეისბუქზე გამოჩნდება',
      description: 'ფეისბუქზე აღწერაც გამოჩნდება',
      images: [
        'https://www.tsu.ge/assets/media/files/84/2025%20...%20.png',
      ],
    },
  };
}

export default function AboutPage() {
  return <h1>About page</h1>;
}
```

✅ This will generate the correct `<title>`, `<meta>`, and `og:` tags in the page `<head>`.

---

## 3. 📦 (Optional) Dynamic Metadata from an API

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`https://example.com/api/posts/${params.slug}`);
  const data = await res.json();

  return {
    title: data.title,
    description: data.summary,
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      images: [data.image],
    },
  };
}
```

You can also pass dynamic params from route like `[slug]` to build custom meta tags.

---

## 4. 🧪 How to Test Meta Tags

Don't rely only on browser dev tools. Use one of these:

| Method                                                            | Use Case                                |
| ----------------------------------------------------------------- | --------------------------------------- |
| `View Page Source`                                                | See actual server-rendered tags         |
| `curl -L yoursite.com/about`                                      | CLI test for SEO/meta content           |
| [OpenGraph.xyz](https://www.opengraph.xyz/)                       | Preview Facebook/LinkedIn/Twitter cards |
| [Twitter Card Validator](https://cards-dev.twitter.com/validator) | Test Twitter previews                   |
| [Facebook Debugger](https://developers.facebook.com/tools/debug/) | See how Facebook parses your page       |

---


Would you like a ZIP download of this as a starter project? Or should I generate a public GitHub Gist with this content ready to share?
```
