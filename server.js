const Hapi = require('@hapi/hapi');
const albums = require('./src/api/albums');
const routes = require('./src/api/albums/routes');
const AlbumsService = require('./src/services/inMemory/AlbumsService');

const init = async () => {
  const albumService = new AlbumsService();

  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.register({
    plugin: albums,
    options: {
      service: albumService,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
