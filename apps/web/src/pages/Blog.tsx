import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  date?: string;
  image?: string;
  views?: number;
  link?: string;
}

// Static Data แทน API
const initialPosts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React Automation Testing",
    content: "A comprehensive guide to setting up automation testing frameworks for React applications. Learn about Jest, Testing Library, and best practices for writing maintainable tests.",
    date: "2024-01-15",
    views: 120,
    link: "https://piyathida-sanaoun01.medium.com/react-automation-testing-guide"
  },
  {
    id: 2,
    title: "CI/CD Pipeline Best Practices",
    content: "Explore the essential strategies for building robust CI/CD pipelines. From automated testing to deployment strategies, this guide covers everything you need to know.",
    date: "2024-01-10",
    views: 89,
    link: "https://piyathida-sanaoun01.medium.com/cicd-best-practices"
  },
  {
    id: 3,
    title: "Quality Assurance in Agile Development",
    content: "Understanding the role of QA in modern Agile teams. Learn how to integrate quality practices throughout the development lifecycle.",
    date: "2024-01-05",
    views: 156,
    link: "https://piyathida-sanaoun01.medium.com/qa-agile-development"
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [link, setLink] = useState<string>('');
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');

  const allPosts = [...posts];

  const handleAddPost = () => {
    const newPost: Post = {
      id: Math.max(...posts.map(p => p.id), 0) + 1,
      title: 'New Blog Post',
      content: `Content extracted from the link: ${link}`,
      date: new Date().toLocaleDateString(),
      views: 0,
      link,
    };

    setPosts([newPost, ...posts]);
    setLink('');
  };

  const handleEditTitle = (id: number) => {
    const post = posts.find((p) => p.id === id);
    if (post) {
      setEditingPostId(id);
      setEditedTitle(post.title);
    }
  };

  const handleSaveTitle = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, title: editedTitle } : post
      )
    );
    setEditingPostId(null);
    setEditedTitle('');
  };

  const handleDeletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div style={{ padding: '3rem 1rem', fontFamily: 'sans-serif', backgroundColor: '#fffef8', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#333' }}>
          My Blog Posts
        </h1>
        
        {/* Form to add a new blog post */}
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter blog link"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
            }}
          />
          <button
            onClick={handleAddPost}
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
            Add Blog
          </button>
        </div>

        {/* Display all posts */}
        {allPosts.map((post) => (
          <div
            key={post.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #eee',
              padding: '1.5rem 0',
              gap: '1.5rem',
            }}
          >
            <div style={{ flex: 1 }}>
              {editingPostId === post.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      fontSize: '1rem',
                      border: '1px solid #ccc',
                      borderRadius: '0.5rem',
                      marginBottom: '0.5rem',
                    }}
                  />
                  <button
                    onClick={() => handleSaveTitle(post.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      marginRight: '0.5rem',
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingPostId(null)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h2
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <a
                      href={
                        post.link
                          ? /^https?:\/\//i.test(post.link)
                            ? post.link
                            : `https://${post.link}`
                          : '#'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#007BFF',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }}
                    >
                      {post.title}
                    </a>
                  </h2>
                  <button
                    onClick={() => handleEditTitle(post.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      marginRight: '0.5rem',
                    }}
                  >
                    Edit Title
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#444',
                  lineHeight: 1.6,
                  marginTop: '0.5rem',
                }}
              >
                {post.content.slice(0, 120)}...
              </p>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#888',
                  marginTop: '0.5rem',
                }}
              >
                📅 {post.date} • 👁️ {post.views} views
              </div>
            </div>
            <div style={{ width: '120px', height: '80px', flexShrink: 0 }}>
              <div 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f0f0f0', 
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '0.8rem'
                }}
              >
                📝 Blog
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}