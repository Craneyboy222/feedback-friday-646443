import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  rest.get('/api/health', (req, res, ctx) => {
    return res(ctx.json({ status: 'healthy' }));
  })
);