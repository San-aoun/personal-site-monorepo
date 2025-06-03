import { Router, Request, Response } from 'express';
const router = Router();

let posts: { id: number; title: string; content: string; link?: string }[] = [];

router.get('/', (req: Request, res: Response) => {
  res.json(posts);
});

router.post('/', (req: Request, res: Response) => {
  const { title, content, link } = req.body;
  const post = { id: Date.now(), title, content, link };
  posts.push(post);
  res.status(201).json(post);
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, content, link } = req.body;
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], title, content, link };
    res.json(posts[index]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== id);
  res.status(204).send();
});

export default router;