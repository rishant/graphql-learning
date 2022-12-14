package com.example.springboot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.springboot.model.Author;

public interface AuthorRepository extends MongoRepository<Author, String> {

}
