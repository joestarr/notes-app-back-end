const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/NotesService');
const NoteValidator = require('./validator/notes');
require('dotenv').config();

const init = async () => {
  const notesService = new NotesService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      servicesess: notesService,
      validator: NoteValidator,
    },
  });

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
