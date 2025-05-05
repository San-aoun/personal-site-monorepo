import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFFBEB', color: '#333', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#fff', padding: '1.5rem 2rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Piyathida San-aoun</h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: '500' }}>Home</Link>
          <Link to="/blog" style={{ textDecoration: 'none', color: '#666' }}>Blog</Link>
          <Link to="/cv" style={{ textDecoration: 'none', color: '#666' }}>CV</Link>
          <Link to="/admin" style={{ textDecoration: 'none', color: '#666' }}>Admin</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#FACC15' }}>Software Development Engineer in Test</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
              I am a highly skilled Software Engineer with over 10 years of experience, including 7 years specializing in automation QA
              and over 2 years as a C# developer. I have expertise in designing and implementing robust test automation frameworks
              for Mobile, UI, and API testing, ensuring high-quality software delivery and optimal performance.
            </p>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginTop: '1rem' }}>
              I have a proven track record of successfully contributing to Agile teams and CI/CD environments, utilizing my expertise
              in various automation tools and cloud technologies. Currently, I lead automation initiatives at the London Stock
              Exchange Group, driving quality improvements and fostering innovation to optimize development processes.
            </p>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginTop: '1rem' }}>
              Having lived in Berlin for the past 7 months, I am actively seeking a software engineer position.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/profile.jpg"
              alt="Piyathida San-aoun"
              style={{ width: '250px', borderRadius: '1rem', objectFit: 'cover' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
