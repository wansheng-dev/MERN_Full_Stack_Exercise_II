const Author = require('../models/author.model');

module.exports = {
  getAll(_req, res){
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json({
      message: 'ERROR: Failed to retrieve all documents.',
      error: err
    }));
  },

  getOne(req, res){
    Author.findById(req.params.id)
    .then(author => res.json(author))
    .catch(err => res.status(404));
  },

  create(req, res){
    Author.create(req.body)
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err));
  },

  update(req, res){
    Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
      .then(author => res.json(author))
      .catch(err => res.status(400).json(err))
  },

  delete(req, res){
    Author.findByIdAndDelete(req.params.id)
    .then(result => {
        console.log(result);
        res.json({ status: 'success' })
      })
      .catch(err => res.json({
        message: 'ERROR: Failed to delete the document.',
        error: err
      }));
  },
}