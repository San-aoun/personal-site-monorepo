// apps/web/src/pages/Blog.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  date?: string;
  image?: string;
  views?: number;
  link?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  const mediumPosts: Post[] = [
    {
      id: 9999,
      title: 'Getting Started with UI Automation Testing Using WebdriverIO 8 and Mocha',
      content: 'In the realm of automated testing, combining WebdriverIO (WDIO) with the Mocha test framework offers a robust solution...',
      date: 'Apr 16, 2024',
      views: 6,
      image: '/images/placeholder.jpg',
      link: 'https://piyathida-sanaoun01.medium.com/getting-started-with-ui-automation-testing-using-webdriverio-8-and-mocha-45fd190bc90e'
    }
  ];

  const allPosts = [...mediumPosts, ...posts];

  return (
    <div style={{ padding: '3rem 1rem', fontFamily: 'sans-serif', backgroundColor: '#fffef8', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {allPosts.map(post => (
          <a
            key={post.id}
            href={post.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '1.5rem 0', gap: '1.5rem' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{post.title}</h2>
                <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6 }}>{post.content.slice(0, 120)}...</p>
                <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>
                  {post.date || ''} &nbsp; 🖐 {post.views || 0}
                </div>
              </div>
              <div style={{ width: '120px', height: '80px', flexShrink: 0 }}>
                <img
                  src={post.image || '/images/placeholder.jpg'}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}