import express from 'express';
import { Response } from 'express';

const server = express();

server.get('/teste', (_, response: Response) => {
  return response.send('Hello World!');
});

export { server };