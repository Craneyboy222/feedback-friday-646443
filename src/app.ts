import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  // Middlewares
  app.use(helmet());
  app.use(cors());
  app.use(morgan('common'));
  app.use(express.json());

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  // Error handling middleware
  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
