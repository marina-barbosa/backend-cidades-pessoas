import { Router } from 'express';
import { Response } from 'express';

const router = Router();

router.get('/teste', (_, response: Response) => {
  return response.send('Hello World!');
});

export { router };