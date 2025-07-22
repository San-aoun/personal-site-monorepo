export default function CV() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
      <a
        href="/personal-site-monorepo/Piyathida San-aoun 05252025.pdf"
        download
        style={{
          marginBottom: '2rem',
          textDecoration: 'none',
        }}
      >
        <button
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          Download PDF
        </button>
      </a>
      <img
        src="/personal-site-monorepo/images/cv1.png"
        alt="CV Page 1"
        style={{
          width: '794px', // A4 width at 96dpi
          maxWidth: '100%',
          boxShadow: '0 0 10px rgba(0,0,0,0.15)',
          background: '#fff',
          marginBottom: '2rem',
        }}
      />
      <img
        src="/personal-site-monorepo/images/cv2.png"
        alt="CV Page 2"
        style={{
          width: '794px',
          maxWidth: '100%',
          boxShadow: '0 0 10px rgba(0,0,0,0.15)',
          background: '#fff',
        }}
      />
    </div>
  );
}