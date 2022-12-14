package com.example.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping("/books")
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @GetMapping("/books/{id}")
    public Book findOne(@PathVariable("id") String id) {
    	Optional<Book> book = bookRepository.findById(id);
        return book.isPresent() ? book.get() : null;
    }
    
    @PostMapping("/books")
    public Book addBook(@RequestBody BookInput book) {
		Book authorEntity = new Book(book.getTitle(), book.getPages(), Rating.valueOf(book.getRating()),
				book.getAuthorId());
    	return bookRepository.insert(authorEntity);
    }

}