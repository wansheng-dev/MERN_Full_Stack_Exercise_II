const AuthorController = require('../controllers/author.controller');

module.exports = app => {
  app.get('/api/authors', AuthorController.getAll);
  app.get('/api/authors/:id', AuthorController.getOne);
  app.post('/api/authors/create', AuthorController.create);
  app.put('/api/authors/update/:id', AuthorController.update);
  app.delete('/api/authors/delete/:id', AuthorController.delete);
}