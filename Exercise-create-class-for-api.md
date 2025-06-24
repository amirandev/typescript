---

## 📘 TypeScript დავალება: JSONPlaceholder API (დამწყებთათვის სტილი)

### 🧪 ნიმუში (უკვე მოცემულია):

```tsx
'use client';

import React from 'react';

function getData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      console.log('GET response:', json);
    })
    .catch(error => {
      console.error('GET error:', error);
    });
}

function postData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'TSU',
      body: 'We learn typescript',
      userId: 1,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      console.log('POST response:', json);
    })
    .catch(error => {
      console.error('POST error:', error);
    });
}

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <button type="button" onClick={getData}>GET Data</button>
      <button type="button" onClick={postData}>POST Data</button>
    </main>
  );
}
```

---

## 🎯 დავალება

### 🔨 შექმენით TypeScript კლასი `JsonPlaceholderService`, რომელიც მოიცავს შემდეგი მეთოდებს ზუსტად ისეთ სტილში, როგორიც ზემოთ მოცემულია:

```ts
getPosts()
getComments()
getAlbums()
getPhotos()
getTodos()
getUsers()
```

**ყოველი მეთოდი უნდა აკეთებდეს `fetch().then().catch()`-ს და დაბეჭდოს შედეგი `console.log()`-ში.**

---

### 🧾 API მისამართები

| მეთოდი      | URL                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------- |
| getPosts    | [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)       |
| getComments | [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments) |
| getAlbums   | [https://jsonplaceholder.typicode.com/albums](https://jsonplaceholder.typicode.com/albums)     |
| getPhotos   | [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos)     |
| getTodos    | [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)       |
| getUsers    | [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)       |


### 🎁 სურვილის შემთხვევაში:

თუ გინდა, მზად ვარ შეგიქმნა `.ts` ფაილის საწყისი შაბლონი ამ სტილში, ასე გამოიყურება:

```ts
export class JsonPlaceholderService {
  getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log('Posts:', data);
      })
      .catch(error => {
        console.error('Error loading posts:', error);
      });
  }

  // დანარჩენები ანალოგიურად...
}
```

გითხრა, ამ ფაილს პირდაპირ ჩავამატო და გაგიწიო ZIP-ფაილად გადმოსაწერად?
