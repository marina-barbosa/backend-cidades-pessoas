import { server } from './server/server';

const port = process.env.PORT || 3333;

const httpServer = server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGINT', () => {
  httpServer.close();
  console.log('Server closed by the user');
});