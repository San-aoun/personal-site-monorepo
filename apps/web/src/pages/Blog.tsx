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
  const [link, setLink] = useState<string>('');
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');

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

  const handleAddPost = () => {
    if (!link) return;

    const newPost: Post = {
      id: Date.now(),
      title: 'New Blog Post', // Placeholder title
      content: 'Content extracted from the link...', // Placeholder content
      date: new Date().toLocaleDateString(),
      views: 0,
      image: '/images/placeholder.jpg',
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
                    {post.title}
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
                    }}
                  >
                    Edit Title
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    style={{
                        marginTop: '1rem',
                        marginLeft: '1rem',
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
                
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                display: 'inline-block',
                marginTop: '1rem',
                fontSize: '0.9rem',
                color: '#007BFF',
                textDecoration: 'underline',
                cursor: 'pointer',
                }}
            >
                Click link to visit blog...
            </a>
            </div>
            <div style={{ width: '120px', height: '80px', flexShrink: 0 }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}