'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './create.css'; // Assuming you have some styles defined

export default function SignupPage() {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signup = async () => {
    if (!email || !password) return alert('Email and password required');

    try {
      const res = await fetch('https://fbclone-backend-production.up.railway.app/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const raw = await res.text();  // get the raw response
      console.log('🧾 Raw response:', raw);

      let data;
      try {
        data = JSON.parse(raw);     // try to parse it
      } catch (parseErr) {
        console.error('❌ JSON parse failed:', parseErr);
        return alert('Server did not return valid JSON');
      }

      console.log('✅ Parsed:', data);

      if (data.msg) {
        alert('Account created');
        router.replace('/');
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      console.error('❌ Signup failed:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="card">
      <img src="4lCu2zih0ca.svg" alt="" />
      <h2>Create a new account</h2>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={signup} className="btn primary">
        Sign Up
      </button>
      <button onClick={() => router.replace('/')} className="btn secondary">
        Back to Login
      </button>
    </div>
  );
}
