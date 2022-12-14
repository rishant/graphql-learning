package com.example.springboot.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class AuthorInput {
	private String firstName;
	private String lastName;

}
