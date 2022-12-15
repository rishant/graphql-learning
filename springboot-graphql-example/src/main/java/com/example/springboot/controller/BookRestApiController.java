package com.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.BookInput;
import com.example.springboot.model.Book;
import com.example.springboot.model.Rating;
import com.example.springboot.repository.BookRepository;

@RestController
@RequestMapping("/api")
public class BookRestApiController {

    private final BookRepository bookRepository;

    public BookRestApiController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // C U R D
    
    @PutMapping("/books")
    public Book addBook(@RequestBody BookInput book) {
    	Book bookEntity = new Book(book.getTitle(), book.getPages(), Rating.valueOf(book.getRating()),
    			book.getAuthorId());
    	return bookRepository.insert(bookEntity);
    }

    @PostMapping("/books/{id}")
    public Book updateBook(@PathVariable("id") String id, @RequestBody BookInput book) {
    	Optional<Book> optionalBook = bookRepository.findById(id);
    	if(!optionalBook.isPresent()) {
    		throw new RuntimeException("Requested resource not found for requested ID.");
    	}
    	
    	Book bookEntity = optionalBook.get();
    	bookEntity.setTitle(book.getTitle());
    	bookEntity.setPages(book.getPages());
    	bookEntity.setRating(Rating.valueOf(book.getRating()));
    	bookEntity.setAuthorId(book.getAuthorId());
    	bookRepository.save(bookEntity);
    	return bookEntity;
    }
    
    @GetMapping("/books")
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @GetMapping("/books/{id}")
    public Book findOne(@PathVariable("id") String id) {
    	Optional<Book> book = bookRepository.findById(id);
        return book.isPresent() ? book.get() : null;
    }
    
    @DeleteMapping("/books/{id}")
    public String deleteOne(@PathVariable("id") String id) {
    	bookRepository.deleteById(id);
    	Optional<Book> book = bookRepository.findById(id); 
        return book.isPresent() ? "Given id is deleted." : "Given id is not deleted.";
    }

}