რა თქმა უნდა! ქვემოთ არის სრული ინსტრუქცია **ნაბიჯ-ნაბიჯ**, რომელიც ასწავლის როგორ:

1. დავაყენოთ TypeScript
2. დავაკონფიგურიროთ პროექტი
3. გავუშვათ ბრაუზერში
4. ჩავრთოთ ავტომატური კომპილაცია (watch)

---

## ✅ 0. წინაპირობა

დარწმუნდით რომ გაქვს დაყენებული:

* **Node.js** ([https://nodejs.org](https://nodejs.org))
* **ტერმინალი** (CMD, PowerShell, Git Bash, VSCode Terminal)

---

## ✅ 1. პროექტის შექმნა და TypeScript-ის დაყენება

```bash
mkdir ts-project
cd ts-project
npm init -y                           # ქმნის package.json-ს
npm install typescript --save-dev    # აინსტალირებს TypeScript-ს
npx tsc --init                        # ქმნის tsconfig.json-ს
```

---

## ✅ 2. პროექტის სტრუქტურა

შექმენი ფოლდერი და TypeScript ფაილი:

```bash
mkdir src
echo "const msg: string = 'Hello TypeScript'; console.log(msg);" > src/index.ts
```

ან ხელით შექმენი `src/index.ts` ფაილი ამ შინაარსით:

```ts
const msg: string = "Hello TypeScript";
console.log(msg);
```

---

## ✅ 3. tsconfig.json-ის კონფიგურაცია

გახსენი `tsconfig.json` და დაარედაქტირე ასე:

```jsonc
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## ✅ 4. კომპილაცია და გაშვება

**ერთჯერადი კომპილაცია:**

```bash
npx tsc
```

**გამოისახება ფაილი:** `dist/index.js`

---

## ✅ 5. HTML ფაილი (ბრაუზერში გაშვებისთვის)

პროექტის ფესვში შექმენი `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TS Test</title>
  </head>
  <body>
    <h1>Check console</h1>
    <script type="module" src="./dist/index.js"></script>
  </body>
</html>
```

---

## ✅ 6. Watch რეჟიმი (ცვლილებების ავტომატური კომპილაცია)

**ტერმინალში გაუშვი:**

```bash
npx tsc -w
```

* ყოველ ჯერზე როცა `src/index.ts`-ს შეცვლი, `dist/index.js` ავტომატურად განახლდება.

---

## ✅ 7. HTML ფაილის გახსნა

გახსენი `index.html` ფაილი ბრაუზერში და:

* გახსენი DevTools > Console
* ნახავ `"Hello TypeScript"`

---

## ✅ 8. (სურვილისამებრ) `package.json` სკრიპტები

დამატე `scripts` ბლოკში:

```json
"scripts": {
  "dev": "tsc -w",
  "build": "tsc"
}
```

შემდეგ შეგიძლია უბრალოდ აწარმოო:

```bash
npm run dev
```

---

## 📁 საბოლოო ფოლდერის სტრუქტურა

```
ts-project/
├── dist/
│   └── index.js
├── src/
│   └── index.ts
├── index.html
├── package.json
├── tsconfig.json
```

---

## 🎉 მზად ხარ!

ახლა შეგიძლია ასწავლო:

* ტიპები (`string`, `number`, `boolean`)
* ფუნქციები (`function greet(name: string): void`)
* `onClick` და სხვა DOM მაგალითებიც

გითხარი და იმ ნაწილსაც დაგიწერ, ან ერთად შევადგინოთ სლაიდები/სავარჯიშოები.
