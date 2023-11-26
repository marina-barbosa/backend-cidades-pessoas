import { Request, Response } from 'express';

interface CidadeInterface {
  nome: string;
}

export const create = (request: Request<{},{},CidadeInterface>, response: Response) => {  
  return response.send(request.body.nome);
};