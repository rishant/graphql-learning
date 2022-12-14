import { Book } from "../models/book.model";
import {Author} from "../models/author.model";
import {RatingEnum} from "../models/rating.enum"

const resolvers = {
    Query: {
        allBooks: async () => {
            let response = [];
            await Book.find().then(books => {
                books.forEach(book => {
                    let respBook = {
                        id : book.get("_id"),
                        title : book.get("title"),
                        pages : book.get("pages"),
                        rating : book.get("rating") != null? RatingEnum.valueOf(book.get("rating")).toString() : null,
                        authorId : book.get("authorId"),
                    };
                    response.push(respBook);
                })
            });
            return response
        },
        findOne: async (id) => {
            const book = await Book.findById({"id" : id}).then(doc => {
                let respBook = {
                    id : doc.get("_id"),
                    title : doc.get("title"),
                    pages : doc.get("pages"),
                    rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toString() : null,
                    authorId : doc.get("authorId"),
                };
                return respBook;
            })
            return book
        },
        allAuthors: async () => {
            const authors = await Author.find()
            return authors
        }
    },

    Mutation: {
        createAuthor: async (_, {authorInput}) => {
            let author = new Author({...authorInput});
            author = await Author.create(author);
            console.log("Author added successfully");
            return author;
        },
        createBook: async (_, {bookInput}) => {
            let book = new Book({...bookInput});
            let doc = await Book.create(book);
            let respBook = {
                id : doc.get("_id"),
                title : doc.get("title"),
                pages : doc.get("pages"),
                rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toString() : null,
                authorId : doc.get("authorId"),
            };
            console.log("Book added successfully");
            return respBook;
        }
    }
};

export { 
    resolvers 
};