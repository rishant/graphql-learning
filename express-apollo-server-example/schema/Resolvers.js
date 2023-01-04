import { Book } from "../models/book.model";
import {Author} from "../models/author.model";
import {RatingEnum} from "../models/rating.enum"

const resolvers = {
    Query: {
        allBooks: async (parent, args, contextValue, info) => {
            let response = [];
            await Book.find().then(books => {
                books.forEach(book => {
                    let respBook = {
                        id : book.get("_id"),
                        title : book.get("title"),
                        pages : book.get("pages"),
                        rating : book.get("rating") != null? RatingEnum.valueOf(book.get("rating")).toJson() : null,
                        authorId : book.get("authorId"),
                    };
                    response.push(respBook);
                })
            });
            return response
        },

        findBookById: async (parent, { id }, contextValue, info) => {
            const book = await Book.findById({"_id" : id}).then(doc => {
                let respBook = {
                    id : doc.get("_id"),
                    title : doc.get("title"),
                    pages : doc.get("pages"),
                    rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toJson() : null,
                    authorId : doc.get("authorId"),
                };
                return respBook;
            })
            return book
        },

        findBookByTitle: async (parent, { title }, contextValue, info) => {
            const book = await Book.findOne({"title" : title}).then(doc => {
                let respBook = {
                    id : doc.get("_id"),
                    title : doc.get("title"),
                    pages : doc.get("pages"),
                    rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toJson() : null,
                    authorId : doc.get("authorId"),
                };
                return respBook;
            })
            return book
        },

        allAuthors: async (parent, args, contextValue, info) => {
            const authors = await Author.find()
            return authors
        }
    },

    Mutation: {
        createAuthor: async (parent, { authorInput }, contextValue, info) => {
            let author = new Author({...authorInput});
            author = await Author.create(author);
            console.log("Author added successfully");
            return author;
        },
        
        createBook: async (parent, { bookInput }, contextValue, info) => {
            let book = new Book({...bookInput});
            let doc = await Book.create(book);
            let respBook = {
                id : doc.get("_id"),
                title : doc.get("title"),
                pages : doc.get("pages"),
                rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toJson() : null,
                authorId : doc.get("authorId"),
            };
            console.log("Book added successfully");
            return respBook;
        },

        deleteBook: async (parent, { id }, contextValue, info) => {
            let doc = await Book.findByIdAndDelete({"_id": id});
            let respBook = {
                id : doc.get("_id"),
                title : doc.get("title"),
                pages : doc.get("pages"),
                rating : doc.get("rating") != null? RatingEnum.valueOf(doc.get("rating")).toJson() : null,
                authorId : doc.get("authorId"),
            };
            console.log("Book removed successfully");
            return respBook;
        }
    }
};

export { 
    resolvers 
};