package com.example.springboot.model;

import java.util.LinkedHashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Rating {
    FIVE_STARS("FIVE_STARS", "⭐️⭐️⭐️⭐️⭐️"),
    FOUR_STARS("FOUR_STARS", "⭐️⭐️⭐️⭐️"),
    THREE_STARS("THREE_STARS", "⭐️⭐️⭐️"),
    TWO_STARS("TWO_STARS", "⭐️⭐️"),
    ONE_STAR("ONE_STAR", "⭐️");

	private String name;
    private String star;

    Rating(String name, String star) {
    	this.name = name;
        this.star = star;
    }

    public String getName() {
    	return name;
    }
    
    public String getStar() {
        return star;
    }
   
    @JsonValue
    public Map<String, String> toJson() {
    	Map<String, String> map = new LinkedHashMap<>();
    	map.put("name", getName());
    	map.put("star", getStar());
    	return map;
    }
}