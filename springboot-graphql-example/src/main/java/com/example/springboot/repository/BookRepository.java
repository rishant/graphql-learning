package com.example.springboot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.springboot.model.Book;

public interface BookRepository extends MongoRepository<Book, String> {

}
