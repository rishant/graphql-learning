# Learning References:

	https://www.youtube.com/watch?v=K_MGBQ_1Nic
	https://www.youtube.com/watch?v=8JTjCIaU7-k
	https://github.com/danvega/graphql-store
	
	https://www.youtube.com/watch?v=H_U2Bu75Ohc
	https://github.com/DevProblems/spring-for-graphql-springboot-r2dbc

# MongoDB Schema:
```
	Class Book {
	    id: String
	    title: String
	    pages: Integer
	    rating: Rating
	    authorId: String
	}
	
	Enum Rating {
		star: String
	}
	
	Class Author {
	    id: String
	    firstName: String
	    lastName: String
	}

```

# MongoDB Insert Test Data:
```
authors collection:
/* 1 */
{
    "_id" : ObjectId("6398bcd967719d021399427a"),
    "firstName" : "Rishant",
    "lastName" : "Gupta"
}

book collection:
/* 1 */
{
    "_id" : ObjectId("6398bd7d67719d02139942c1"),
    "title" : "Java Hacks",
    "pages" : 200,
    "rating" : "FIVE_STARS",
    "authorId" : "6398bcd967719d021399427a"
}
```
# REST API Testing:

```
REST Request URI:
	GET 'http://localhost:7070/api/authors'
	
Response:
	[
	    {
	        "id": "6398bcd967719d021399427a",
	        "firstName": "Rishant",
	        "lastName": "Gupta"
	    }
	]
```

```
REST Request URI:
	POST 'http://localhost:7070/api/authors'

Request Body:
	{
	    "firstName" : "Akshya",
	    "lastName" : "Kumar"
	}
	
Response:
	{
	    "_id" : "6398d78ea21af6427c23d400",
	    "firstName" : "Akshya",
	    "lastName" : "Kumar"
	}
```

```
REST Request URI:
	GET 'http://localhost:7070/api/books'

Response:
	[
	    {
	        "id": "6398bd7d67719d02139942c1",
	        "title": "Java Hacks",
	        "pages": 200,
	        "rating": {
	            "star": "⭐️⭐️⭐️⭐️⭐️"
	        },
	        "authorId": "6398bcd967719d021399427a"
	    }
	]
```

```
REST Request URI:
	GET 'http://localhost:7070/api/books/6398bd7d67719d02139942c1'
	
Response:
	{
	    "id": "6398bd7d67719d02139942c1",
	    "title": "Java Hacks",
	    "pages": 200,
	    "rating": {
	        "star": "⭐️⭐️⭐️⭐️⭐️"
	    },
	    "authorId": "6398bcd967719d021399427a"
	}
```

```
REST Request URI:
	POST 'http://localhost:7070/api/books'
	
Request Body:
	{
	    "title" : "Python Practices",
	    "pages" : 40,
	    "rating" : "THREE_STARS",
	    "authorId" : "6398d78ea21af6427c23d400"
	}

Response:
	{
	    "id": "6398df706c25212ea62137b1",
	    "title": "Python Practices",
	    "pages": 40,
	    "rating": "⭐️⭐️⭐️",
	    "authorId": "6398d78ea21af6427c23d400"
	}
```
