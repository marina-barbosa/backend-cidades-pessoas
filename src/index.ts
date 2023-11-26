import { server } from './server/server';

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/teste`);
});