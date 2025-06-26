'use client';
import { useEffect, useState } from "react";
import { ApiService } from "./services/ApiService";

const api = new ApiService();

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [records, setData] = useState([] as Post[]); // ✅ ცარიელი მასივი

  useEffect(() => {
    api.getPosts().then((data) => {
      setData(data); // ✅ დავაყენოთ მიღებული მონაცემები
    });
  }, []);

  return (
    <main>
      <h1>Posts</h1>
      <button type="button" onClick={() => api.getPosts().then(data => setData(data))}>Get Data</button>
      <button type="button" onClick={() => api.getComments().then(console.log)}>Get Comments</button>

      <ul>
        {records.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
