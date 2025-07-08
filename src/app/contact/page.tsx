"use client";

import { useState } from 'react';
import Header from "@/component/Header";   // Header
import Footer from "@/component/TempFooter";
import styles from './page.module.css';



export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <>
      <Header showLinks={true} noBackground={false} />

      <main className={styles.contactPage}>
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us. We’ll respond as soon as possible.</p>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send</button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
