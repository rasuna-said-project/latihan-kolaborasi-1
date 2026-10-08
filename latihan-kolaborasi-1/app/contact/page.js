"use client";

import { useState } from "react";

export default function ContactPage() {
  const [pesanTerkirim, setPesanTerkirim] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman pesan berhasil
    setPesanTerkirim(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hubungi Kami</h1>
      <p style={styles.subtitle}>Ada pertanyaan? Silakan isi formulir di bawah ini.</p>

      {pesanTerkirim ? (
        <div style={styles.successBox}>
          <h3>✓ Terima Kasih!</h3>
          <p>Pesan Anda telah berhasil dikirim.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nama:</label>
            <input type="text" required style={styles.input} placeholder="Nama Anda" />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input type="email" required style={styles.input} placeholder="email@contoh.com" />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Pesan:</label>
            <textarea required style={styles.textarea} placeholder="Tulis pesan Anda di sini..."></textarea>
          </div>

          <button type="submit" style={styles.button}>Kirim Pesan</button>
        </form>
      )}
    </div>
  );
}

// Style sederhana menggunakan Inline Styles agar mudah dicoba langsung
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    color: "#333"
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  inputGroup: {
    marginBottom: "15px"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#444"
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    resize: "vertical"
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },
  successBox: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: "15px",
    borderRadius: "4px",
    textAlign: "center",
    border: "1px solid #c3e6cb"
  }
};
