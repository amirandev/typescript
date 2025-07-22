
---

## 🔗 Next.js + TypeScript + MySQL (XAMPP) Full Setup

---

### 🧱 1. Install Dependencies

```bash
npm install mysql2
```

---

### 📁 2. Create a Typed DB Utility

> Create `lib/db.ts`

```ts
// lib/db.ts
import mysql from 'mysql2/promise';

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // default XAMPP MySQL password
    database: 'testdb',
  });

  return connection;
}
```

---

### 📂 3. Create an API Route (App Router Style)

> File: `app/api/users/route.ts`

```ts
import { connectToDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// Define a TypeScript type for a user
type User = {
  id: number;
  name: string;
  email: string;
};

export async function GET() {
  const db = await connectToDatabase();
  const [rows] = await db.query<User[]>('SELECT * FROM users');
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email } = body;

  const db = await connectToDatabase();
  const [result]: any = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);

  return NextResponse.json(
    { id: result.insertId, name, email },
    { status: 201 }
  );
}
```

---

### ⚛️ 4. Client Component to Fetch Users

> File: `app/users/UserList.tsx`

```tsx
'use client';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 🧪 Optional: Add Form to Add Users

```tsx
'use client';
import { useState } from 'react';

export default function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Add</button>
    </form>
  );
}
```

---

## 🛑 Common Errors

| Error                     | Fix                                       |
| ------------------------- | ----------------------------------------- |
| `ECONNREFUSED`            | XAMPP MySQL not running or wrong port     |
| `ER_ACCESS_DENIED_ERROR`  | Wrong user/password                       |
| `TypeError: fetch failed` | Use full URL in `fetch` during production |



