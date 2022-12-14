package com.example.springboot.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.AuthorInput;
import com.example.springboot.model.Author;
import com.example.springboot.repository.AuthorRepository;

@RestController
@RequestMapping("/api")
public class AuthorRestApiController {
	
    private final AuthorRepository authorRepository;

    public AuthorRestApiController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @GetMapping("/authors")
    public List<Author> allAuthors() {
        return authorRepository.findAll();
    }
    
    @PostMapping("/authors")
    public Author addAuthor(@RequestBody AuthorInput author) {
    	Author authorEntity = new Author(author.getFirstName(), author.getLastName());
    	return authorRepository.save(authorEntity);
    }

    
}
