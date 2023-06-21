const Book =  require('../models/book');


module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    edit,
    update
};

async function index (req, res){
    const allBooks = await Book.find();
    console.log(allBooks);
    res.render("books/",{
        books: allBooks

    });
}

async function show(req, res) {
      
    // Delete the document by its _id
    //await Book.findById({ _id: req.params.id });
    res.render('books/show',{
      book:await Book.findById({ _id: req.params.id }),
      title: 'Book Details'
    });
  }

function newBook(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('books/new.ejs', { errorMsg: '' });
  }

  async function create(req, res) {

    try {
      await Book.create(req.body);
      // Always redirect after CRUDing data

      res.redirect('/books');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('books/new', { errorMsg: err.message });
    }

  }  

  async function deleteBook (req, res) {
      
    // //Delete the document by its _id
    await Book.deleteOne({ _id: req.params.id });
    // console.log(req);
    res.redirect('/books');
  }

  async function update(req, res){
    id = req.params.id;
    console.log(req.body);
    await Book.findByIdAndUpdate( id, req.body, {new:true});
    res.redirect(`/books/${req.params.id}`);
  }
  
  async function edit(req, res){
    const book = await Book.findById({ _id: req.params.id });
    res.render('books/edit', {
      title: 'Edit Book', 
      book
    });
  }