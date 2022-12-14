package com.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import com.example.springboot.dto.BookInput;
import com.example.springboot.model.Book;
import com.example.springboot.model.Rating;
import com.example.springboot.repository.BookRepository;

@Controller
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @SchemaMapping(typeName = "Query",value = "allBooks")
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @QueryMapping
    public Book findOne(@Argument String id) {
    	Optional<Book> book = bookRepository.findById(id);
        return book.isPresent() ? book.get() : null;
    }
    
	@MutationMapping("createBook")
	public Book createBook(@Argument BookInput bookInput) {
		Book authorEntity = new Book(bookInput.getTitle(), bookInput.getPages(), Rating.valueOf(bookInput.getRating()),
				bookInput.getAuthorId());
		return bookRepository.insert(authorEntity);
	}
        
}