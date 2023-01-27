const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, {
    servicesess,
    validator,
  }) => {
    const notesHandler = new NotesHandler(servicesess, validator);
    server.route(routes(notesHandler));
  },
};
