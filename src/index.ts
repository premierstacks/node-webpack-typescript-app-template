import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ data: 'Premierstacks' });
});

const PORT = parseInt(process.env['PORT'] ?? '8000');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT.toFixed()}`);
});
