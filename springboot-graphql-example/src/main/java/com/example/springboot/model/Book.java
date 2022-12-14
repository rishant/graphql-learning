package com.example.springboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@EqualsAndHashCode
@Document(collection = "books")
public class Book {

	@Id
	private String id;
	private String title;
	private Integer pages;
	private Rating rating;
	private String authorId;
	
	public Book(String id) {
		super();
		this.id = id;
	}
	
	public Book(String title, Integer pages, Rating rating, String authorId) {
		super();
		this.title = title;
		this.pages = pages;
		this.rating = rating;
		this.authorId = authorId;
	}
}
