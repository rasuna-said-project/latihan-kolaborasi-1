export default function ContactPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Halaman Kontak</h1>
      <p>
        Ini adalah halaman kontak sederhana untuk latihan kolaborasi Git dan GitHub.
      </p>

      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          maxWidth: '400px',
        }}
      >
        <h2>Hubungi Tim</h2>
        <p><strong>Email:</strong> kolaborasi@bootcamp.com</p>
        <p><strong>Status:</strong> Fitur Kontak (Branch: feature/contact)</p>
      </div>
    </main>
  );
}