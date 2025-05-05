import express from 'express';
import postsRouter from './routes/posts';
import cvRouter from './routes/cv';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);
app.use('/api/cv', cvRouter);

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});