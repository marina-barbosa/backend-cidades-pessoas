import { Router } from 'express';
import { Response } from 'express';
import { CidadesControllers } from './../controllers/cidades';

const router = Router();

router.get('/', (_, response: Response) => {
  return response.send('Hello World!');
});

router.post('/cidades', CidadesControllers.create);



export { router };