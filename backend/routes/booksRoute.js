import express from 'express';
import { Book } from '../models/bookModel.js';


const router = express.Router();


// save a fbook

router.post('/', async (req, res)=>{
    try{
        if (!req.body.title||
            !req.body.author||
            !req.body.publishYear){

               return res.status(500)
               .send({error: 'Send all required fields: "title", "author", "publishYear"'})
            }
        const newBook = {title: req.body.title, 
                           author: req.body.author,
                           publishYear: req.body.publishYear
                        };


        const book =  await Book.create(newBook);
        res.status(201).send(book);

    } catch(error){
        console.log(error.message)
        res.status(500).send({error: error.message})
    }

})

// get all books
router.get('/', async (req, res)=>{
    try{
        const books = await Book.find({});
        return res.status(200).json({
        count: books.length,
        data : books

       })

    } catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// get a book by id
router.get('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById({id});
        return res.status(200).json({book})

    } catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})


// update a book
router.put('/:id', async (req,res)=>{
    try{
        if (!req.body.title||
            !req.body.author||
            !req.body.publishYear){

               return res.status(400)
               .send({error: 'Send all required fields: "title", "author", "publishYear"'})
            }
            const {id} = req.params;
            const result = await Book.findByIdAndUpdate(id, req.body);
            if (!result){
                return res.status(400).json({message: "Book not found!"});
            }

            return res.status(200).send('Susccess!');

    } catch (error){
        console.log(error.message);
        res.status(500).send({message: message.error});

    }
})

// delete a book
router.delete('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const book = await  Book.getByIdAndDelete(id);

        if (!book){
            res.status(400).send({error: "Book Not found"});
        }

        return res.status(200).send({message: "Deleted!"})

    } catch (error) {
        console.log(error.message);
        res.status(400).send({message: error.message});
    }
})


export  default router;