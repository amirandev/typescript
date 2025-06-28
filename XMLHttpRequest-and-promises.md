
### 1. XMLHttpRequest

```js
// პატარა ფუნქცია, რომელიც JSONPlaceholder-იდან პოსტს გამოთხოვს
function getPost(id, callback) {
  const xhr = new XMLHttpRequest();

  // აბონენტი – როდის რა ვქნა?
  xhr.onreadystatechange = function () {
    // 4 ⇒ გამზადებულია, 200 ⇒ „მეტობით“ დამთავრდა
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);          // წარმატება
    } else if (xhr.readyState === 4) {
      callback(new Error('შეცდომა!')); // ჩავარდა
    }
  };

  xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);
  xhr.send();
}

// გამოძახება
getPost(1, (err, post) => {
  if (err) return console.error(err);
  console.log('პოსტი მოვიდა:', post);
});
```

* **რაშია მინუსი?**

  * Callbacks-ის “თოფიანი ქორწილი”: nested-nested დეპოს რთული მართვა.
  * Error-ები უნდა დავიჭიროთ ყველა დონეზე.
  * კოდი ადვილად ერთ დიდ “სპაგეტის” გადაიქცევა.

---

### 2. Promise – “ინჟექტორი”

**Promise** არის ობიექტი, რომელიც ჰპირდება: „ახლა ვერ გეტყვი, მაგრამ მერე ან წარმატებას მოგიტან, ან ჩავარდნას, და შენ ორივე შემთხვევისთვის მზად იქნები“.

#### 2.1 მდგომარეობები (states)

| State       | როდისაა?                      | რა ხდება მერე?                |
| ----------- | ----------------------------- | ----------------------------- |
| `pending`   | დაპირება ჯერ შესრულდება       | წყლის ქვეშ ზის, ელოდება       |
| `fulfilled` | წარმატებით შესრულდა (`value`) | `.then()` ქუდებს გამოვიძახებთ |
| `rejected`  | ჩავარდა (`reason`)            | `.catch()` დავაიმაგრებთ       |

*State სხვა რამედ აღარ იცვლება – როგორც ძრავში once compression→ignition მოხდა, უკან აღარ ბრუნდება.*

#### 2.2 ხელით Promise-ის შექმნა

```js
function getPostPromise(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));  // fulfilled
      } else if (xhr.readyState === 4) {
        reject(new Error('შეცდომა'));          // rejected
      }
    };

    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);
    xhr.send();
  });
}

// თანამედროვე სტილი
getPostPromise(1)
  .then(post => console.log('პოსტი:', post))
  .catch(err => console.error(err));
```

---

### 3. fetch() – “ელექტრო ტურბო”

`fetch()` უკვე *Promise-ს აბრუნებს* – თვითონვე „ინჟექტორია“. ძრავის კაპოტი აღარ გვიხდია; პირდაპირ ასინქრონულ ციკლში ვრთავთ.

```js
async function getPostFetch(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {                    // status 200-299 თუ არაა
    throw new Error(`HTTP შეცდომა: ${response.status}`);
  }

  const data = await response.json();    // კიდევ ერთი Promise
  return data;
}

getPostFetch(1)
  .then(post => console.log('პოსტი via fetch:', post))
  .catch(console.error);
```

**რატომ არის fetch უფრო კომფორტული?**

1. **Promise built-in** – არ გვჭირდება ხელის დაპირებების შეფუთვა.
2. **Streams & bodies** – დიდ ფაილებსაც „ხრაშუნით“ ჩამოვწოვთ.
3. **await/async** – სინტაქსი პრაქტიკულად სქემასავით იკითხება.
4. **Aborts, Headers, Request/Response** – სრული ინსტრუმენტარიუმი ერთი API-დან.


