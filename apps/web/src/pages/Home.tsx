// apps/web/src/pages/Home.tsx

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #fffbe6, #fdf6cc)', color: '#333', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ backgroundColor: '#fff', padding: '1.5rem 2rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Piyathida San-aoun</h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: '500' }}>Home</Link>
          <Link to="/blog" style={{ textDecoration: 'none', color: '#666' }}>Blog</Link>
          <Link to="/cv" style={{ textDecoration: 'none', color: '#666' }}>CV</Link>
          <Link to="/automation" style={{ textDecoration: 'none', color: '#666' }}>Automation</Link>
          <Link to="/admin" style={{ textDecoration: 'none', color: '#666' }}>Admin</Link>
        </nav>
      </header>

      <main style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#fffef8', borderRadius: '1rem', padding: '2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 60%' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#e6ac00' }}>Software Development Engineer in Test</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
              I am a highly skilled Software Engineer with over 10 years of experience, including 7 years specializing in automation QA
              and over 2 years as a C# developer. I have expertise in designing and implementing robust test automation frameworks
              for Mobile, UI, and API testing, ensuring high-quality software delivery and optimal performance.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.05rem', marginTop: '1rem' }}>
              I have a proven track record of successfully contributing to Agile teams and CI/CD environments, utilizing my expertise
              in various automation tools and cloud technologies. Currently, I lead automation initiatives at the London Stock
              Exchange Group, driving quality improvements and fostering innovation to optimize development processes.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.05rem', marginTop: '1rem' }}>
              Having lived in Berlin for the past 7 months, I am actively seeking a software engineer position.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/San-aoun" target="_blank" rel="noopener noreferrer">
                <img src="/personal-site-monorepo/icons/github.png" alt="GitHub" style={{ width: '60px', height: '60px' }} />
              </a>
              <a href="https://www.linkedin.com/in/piyathida-san-aoun-369994173/" target="_blank" rel="noopener noreferrer">
                <img src="/personal-site-monorepo/icons/linkedin.png" alt="LinkedIn" style={{ width: '60px', height: '60px' }} />
              </a>
              <a href="https://piyathida-sanaoun01.medium.com/" target="_blank" rel="noopener noreferrer">
                <img src="/personal-site-monorepo/icons/medium.png" alt="Medium" style={{ width: '60px', height: '60px' }} />
              </a>
            </div>
          </div>
          <div style={{ flex: '1 1 35%', textAlign: 'center' }}>
            <img
              src="/personal-site-monorepo/images/profile.jpg"
              alt="Piyathida San-aoun"
              style={{ width: '250px', borderRadius: '1rem', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}