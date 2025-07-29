# Handling Forms in React — Best Practices & Examples

When working with forms in React, **the recommended approach is to use controlled components**. This means the form inputs’ values are managed by React state, keeping your UI consistent and your code predictable.

---

## Why Avoid Direct DOM Manipulation (`querySelector`)?

* React uses a **virtual DOM** to manage UI updates efficiently.
* Using `document.querySelector` or other direct DOM methods can **cause inconsistencies** between React’s virtual DOM and the real DOM.
* It makes the code **harder to maintain and debug**.
* React provides better tools to manage form data safely and declaratively.

---

## Controlled Components: The React Way to Handle Forms

* **Input values live in React state.**
* Input changes update state via `onChange` handlers.
* Form submission uses the latest state values.
* Allows easy validation, conditional UI, and synchronization.

### Example: Simple Controlled Form

```jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formData.username}\nEmail: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
```

---

## When to Use Refs?

Refs are great for **imperative actions**, like:

* Focusing an input
* Selecting text inside an input
* Triggering a file input click

**But don’t use refs to read or write input values for form data.** That should be done through state.

### Example: Using `ref` to Focus Input

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={focus}>Focus Input</button>
    </>
  );
}

export default FocusInput;
```
