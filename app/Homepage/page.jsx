'use client';
import { useEffect, useState } from 'react';
import Layout from '../layout.jsx';
import './page.css';

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserEmail(payload.email);
      } catch {
        setUserEmail(null);
      }
    }
  }, [token]);

  async function loadPosts() {
    const res = await fetch('https://fbclone-backend-production.up.railway.app/api/posts');
    setPosts(await res.json());
  }

  async function addPost() {
    const res = await fetch('https://fbclone-backend-production.up.railway.app/api/addpost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    });
    const json = await res.json();
    if (json.msg) {
      setContent('');
      loadPosts();
    } else {
      alert(json.error);
    }
  }

  async function deletePost(id) {
    const res = await fetch(`https://fbclone-backend-production.up.railway.app/api/deletepost/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (json.msg) loadPosts(); else alert(json.error);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Layout>
      <div className="feed-container">
        <div className="post-input">
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Say something"
          />
          <button onClick={addPost}>Post</button>
        </div>
        <div className="post-list">
          {posts.map(post => (
            <div key={post._id} className="post-card">
              <p>{post.content} — {post.email}</p>
              {post.email === userEmail && (
                <button onClick={() => deletePost(post._id)}>Delete</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
