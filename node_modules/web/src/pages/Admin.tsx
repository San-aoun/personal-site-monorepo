import { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = () => {
    axios.get('http://localhost:3001/api/posts')
      .then(res => setPosts(res.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = () => {
    axios.post('http://localhost:3001/api/posts', { title, content })
      .then(() => {
        setTitle('');
        setContent('');
        fetchPosts();
      });
  };

  const deletePost = (id: number) => {
    axios.delete(`http://localhost:3001/api/posts/${id}`)
      .then(fetchPosts);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={createPost}>Create Post</button>

      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <button onClick={() => deletePost(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}