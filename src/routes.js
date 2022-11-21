const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByHandler, deleteNoteBYIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteBYIdHandler,
    },
];

module.exports = routes;