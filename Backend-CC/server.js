const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const connectDB = require('./db');
 
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
    cors: {
      origin: ['*'],
    },
    }
  });

  // Koneksi ke MongoDB
  await connectDB();
 
  server.route(routes);
  // Jalankan server Hapi
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();