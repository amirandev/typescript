
# 🧪 JavaScript HTTP Requests: GET, POST, Promises, and `fetch()`

This project demonstrates how to perform **GET** and **POST** requests using:

* `XMLHttpRequest` (callback-style)
* `XMLHttpRequest` wrapped in a `Promise`
* `fetch()` with built-in Promises
* Console logs to show Promise states (`pending`, `fulfilled`)

---


```js
// A simple logger to track execution steps in the console
let step = 1;
function log(...msg) {
  console.log(`${step++}.`, ...msg);
}

/* ===============================
   1) XMLHttpRequest (Callback) - GET
   =============================== */
log('--- XMLHttpRequest (callback) GET /posts/1 ---');

function getPostXHR(id, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) { // DONE
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        callback(null, data);
      } else {
        callback(new Error('XHR GET failed'));
      }
    }
  };

  xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);
  xhr.send();
}

getPostXHR(1, (err, post) => {
  if (err) return log(err);
  log('XHR result:', post);
});

/* ===============================
   2) XMLHttpRequest with Promise - GET
   =============================== */
log('--- Promise-wrapped XHR GET /posts/2 ---');

function getPostPromise(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('XHR Promise GET failed'));
        }
      }
    };

    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}`);
    xhr.send();
  });
}

const xhrPromise = getPostPromise(2);
log('xhrPromise immediately →', xhrPromise); // Should log: Promise { <pending> }

xhrPromise
  .then(data => {
    log('xhrPromise after resolve →', xhrPromise); // Now fulfilled
    log('Promise-wrapped XHR result:', data);
  })
  .catch(log);

/* ===============================
   3) fetch() - GET (default method)
   =============================== */
log('--- fetch() GET /posts/3 ---');

const fetchGet = fetch('https://jsonplaceholder.typicode.com/posts/3');
log('fetchGet immediately →', fetchGet); // Promise { <pending> }

fetchGet
  .then(response => {
    log('fetchGet after response →', fetchGet); // Now fulfilled
    return response.json();
  })
  .then(data => {
    log('fetch GET result:', data);
  })
  .catch(log);

/* ===============================
   4) fetch() - POST
   =============================== */
log('--- fetch() POST /posts ---');

const fetchPost = fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Test from GitHub demo',
    body: 'This is a sample POST request',
    userId: 101,
  }),
});

log('fetchPost immediately →', fetchPost); // Promise { <pending> }

fetchPost
  .then(response => {
    log('fetchPost after response →', fetchPost); // Promise fulfilled
    return response.json();
  })
  .then(data => {
    log('fetch POST result:', data); // Echoed JSON object
  })
  .catch(log);
```

---

## 📊 Expected Console Output

```
1. --- XMLHttpRequest (callback) GET /posts/1 ---
2. XHR result: { userId: 1, id: 1, title: '...', body: '...' }

3. --- Promise-wrapped XHR GET /posts/2 ---
4. xhrPromise immediately → Promise { <pending> }
5. xhrPromise after resolve → Promise { <fulfilled>: {…} }
6. Promise-wrapped XHR result: { userId: 1, id: 2, title: '...', body: '...' }

7. --- fetch() GET /posts/3 ---
8. fetchGet immediately → Promise { <pending> }
9. fetchGet after response → Promise { <fulfilled>: Response }
10. fetch GET result: { userId: 1, id: 3, title: '...', body: '...' }

11. --- fetch() POST /posts ---
12. fetchPost immediately → Promise { <pending> }
13. fetchPost after response → Promise { <fulfilled>: Response }
14. fetch POST result: { title: 'Test from GitHub demo', body: 'This is a sample POST request', userId: 101, id: 101 }
```

---

## ✅ Summary

| Method           | Description               | Async Style    |
| ---------------- | ------------------------- | -------------- |
| `XMLHttpRequest` | Old style, callback-based | Manual         |
| `Promise + XHR`  | Modernized version of XHR | `.then/.catch` |
| `fetch()` - GET  | Modern standard for GET   | Built-in       |
| `fetch()` - POST | Sends JSON data easily    | Built-in       |

---
