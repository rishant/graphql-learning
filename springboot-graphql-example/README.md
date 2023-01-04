# Learning References:

[![SC2 Video](https://img.youtube.com/vi/atA2OovQBic/0.jpg)](https://www.youtube.com/watch?v=atA2OovQBic)	
[![SC2 Video](https://img.youtube.com/vi/K_MGBQ_1Nic/0.jpg)](https://www.youtube.com/watch?v=K_MGBQ_1Nic)
[![SC2 Video](https://img.youtube.com/vi/8JTjCIaU7-k/0.jpg)](https://www.youtube.com/watch?v=8JTjCIaU7-k)
https://github.com/danvega/graphql-store

[![SC2 Video](https://img.youtube.com/vi/H_U2Bu75Ohc/0.jpg)](https://www.youtube.com/watch?v=H_U2Bu75Ohc)
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

# GraphQL Schema:

```
	type Book {
	    id: ID!
	    title: String!
	    pages: Int!
	    rating: Rating
	    authorId: String!
	}
	
	type Rating {
		rating: String
		star: String
	}
	
	type Author {
	    id: ID!
	    firstName: String!
	    lastName: String!
	}

```

# Graph API Queries [ POSTMAN Client ]

```
GraphQL Request URI:
	POST 'http://localhost:7070/graphql'
	
GraphQL Request: 
	query {
	    allAuthors{
	        id
	        firstName
	        lastName
	    }
	}
	
GraphQL Response:
	{
	    "data": {
	        "allAuthors": [
	            {
	                "id": "6398bcd967719d021399427a",
	                "firstName": "Rishant",
	                "lastName": "Gupta"
	            }
	        ]
	    }
	}
```

```
GraphQL Request URI:
	POST 'http://localhost:7070/graphql'
	
GraphQL Request: 
	query {
	    allBooks{
	        id
	        title
	        pages
	        rating {
	            star
	        }
	        authorId
	    }
	}
	
GraphQL Response:
	{
	    "data": {
	        "allBooks": [
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
	    }
	}
```

```
GraphQL Request URI:
	POST 'http://localhost:7070/graphql'
	
GraphQL Request: 
	query {
	    findOne(id: "6398bd7d67719d02139942c1"){
	        id
	        title
	        pages
	        rating {
	            star
	        }
	        authorId        
	    }
	}
	
GraphQL Response:
	{
	    "data": {
	        "findOne": {
	            "id": "6398bd7d67719d02139942c1",
	            "title": "Java Hacks",
	            "pages": 200,
	            "rating": {
	                "star": "⭐️⭐️⭐️⭐️⭐️"
	            },
	            "authorId": "6398bcd967719d021399427a"
	        }
	    }
	}
```

```
GraphQL Request URI:
	POST 'http://localhost:7070/graphql'
	
GraphQL Request: 
	query {
	    allAuthors{
	        id
	        firstName
	        lastName
	    }
	    findOne(id: "6398bd7d67719d02139942c1"){
	        id
	        title
	        pages
	        rating {
	            star
	        }
	        authorId        
	    }
	    allBooks{
	        id
	        title
	        pages
	        rating {
	            star
	        }
	        authorId
	    }
	}
	
GraphQL Response:
	{
	    "data": {
	        "allAuthors": [
	            {
	                "id": "6398bcd967719d021399427a",
	                "firstName": "Rishant",
	                "lastName": "Gupta"
	            }
	        ],
	        "findOne": {
	            "id": "6398bd7d67719d02139942c1",
	            "title": "Java Hacks",
	            "pages": 200,
	            "rating": {
	                "star": "⭐️⭐️⭐️⭐️⭐️"
	            },
	            "authorId": "6398bcd967719d021399427a"
	        },
	        "allBooks": [
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
	    }
	}
```

# Graph API Queries Client [ CURL ]
```
curl --location --request POST 'http://localhost:7070/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query {\r\n    allAuthors{\r\n        id\r\n        firstName\r\n        lastName\r\n    }\r\n    findOne(id: \"6398bd7d67719d02139942c1\"){\r\n        id\r\n        title\r\n        pages\r\n        rating {\r\n            star\r\n        }\r\n        authorId        \r\n    }\r\n    allBooks{\r\n        id\r\n        title\r\n        pages\r\n        rating {\r\n            star\r\n        }\r\n        authorId\r\n    }\r\n}","variables":{}}'
```

# Graph API Mutation [ POSTMAN Client ]

```
GraphQL Request URI:
	POST 'http://localhost:7070/graphql'
	
GraphQL Request: 
	mutation{
	    createAuthor(author: {
	        firstName: "Akshya",
	        lastName: "Kumar"
	    }){
	        id
	    }
	}

GraphQL Response:
	{
	    "data": {
	        "createAuthor": {
	            "id": "6398d78ea21af6427c23d400"
	        }
	    }
	}
```

```
GraphQL Request URI:
	POST 'http://localhost:7070/graphql'
	
GraphQL Request: 
	mutation{
	    createBook(bookInput: {
	        title: "Javascript Practices",
	        pages: 450,
	        rating: "FOUR_STARS",
	        authorId: "6398d78ea21af6427c23d400"
	    }){
	        id
	        title
	        pages
	        rating {
	            star
	        }
	        authorId
	    }
	}

GraphQL Response:
	{
	    "data": {
	        "createBook": {
	            "id": "6398fd90eed5442229eb3337",
	            "title": "Javascript Practices",
	            "pages": 450,
	            "rating": {
	                "star": "⭐️⭐️⭐️⭐️"
	            },
	            "authorId": "6398d78ea21af6427c23d400"
	        }
	    }
	}
```