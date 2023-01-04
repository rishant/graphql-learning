package com.example.springboot.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.springboot.model.Book;

public interface BookRepository extends MongoRepository<Book, String> {

	List<Book> findByTitle(String title);
}
