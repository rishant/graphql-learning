package com.example.springboot.dto;

//import com.example.springboot.model.Rating;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class BookInput {
	private String title;
	private Integer pages;
	private String rating;
//	private Rating rating;
	private String authorId;
}
