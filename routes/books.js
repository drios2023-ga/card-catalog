var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books');


//GET /books
router.get('/', booksCtrl.index);

//GET /books/new <-- this will need to be moved
router.get('/new', booksCtrl.new);

//GET /todos/:id
router.get('/:id',booksCtrl.show);

//GET /todos/:id/edit
router.get('/:id/edit', booksCtrl.edit) 

//POST /books
router.post('/', booksCtrl.create);

//DELETE /books/:id
router.delete('/:id',booksCtrl.delete);

//POST /books
router.post('/', booksCtrl.create);

//PUT /books/:id
router.put('/:id', booksCtrl.update);

module.exports = router;
