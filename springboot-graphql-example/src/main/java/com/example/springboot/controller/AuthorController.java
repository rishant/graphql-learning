package com.example.springboot.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.example.springboot.dto.AuthorInput;
import com.example.springboot.model.Author;
import com.example.springboot.repository.AuthorRepository;

@Controller
public class AuthorController {
	
    private final AuthorRepository authorRepository;

    public AuthorController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @QueryMapping
    public List<Author> allAuthors() {
        return authorRepository.findAll();
    }
    
    @MutationMapping("createAuthor")
    public Author createAuthor(@Argument AuthorInput authorInput) {
    	Author authorEntity = new Author(authorInput.getFirstName(), authorInput.getLastName());
    	return authorRepository.save(authorEntity);
    }
}
