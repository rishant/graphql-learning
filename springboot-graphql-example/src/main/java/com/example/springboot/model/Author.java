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
@Document(collection = "authors")
public class Author {

	@Id
	private String id;
	private String firstName;
	private String lastName;
	
	public Author(String id) {
		super();
		this.id = id;
	}
	
	public Author(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
