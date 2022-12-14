# Project Setup:

    \express-apollo-server-example> npm init -y
    \express-apollo-server-example> npm install express mongoose
    \express-apollo-server-example> npm install --save-dev nodemon
    \express-apollo-server-example> npm install graphql @apollo/server

# MongoDB Data:

```
Author_collection:

    /* 1 */
    {
        "_id" : ObjectId("6398bcd967719d021399427a"),
        "firstName" : "Rishant",
        "lastName" : "Gupta"
    }

    /* 2 */
    {
        "_id" : ObjectId("6398d78ea21af6427c23d400"),
        "firstName" : "Akshya",
        "lastName" : "Kumar",
        "_class" : "com.example.springboot.model.Author"
    }

-----

Book_collection:

    /* 1 */
    {
        "_id" : ObjectId("6398bd7d67719d02139942c1"),
        "title" : "Java Hacks",
        "pages" : 200,
        "rating" : "FIVE_STARS",
        "authorId" : "6398bcd967719d021399427a"
    }

    /* 2 */
    {
        "_id" : ObjectId("6398fd35eed5442229eb3336"),
        "title" : "Python Practices",
        "pages" : 40,
        "rating" : "THREE_STARS",
        "authorId" : "6398d78ea21af6427c23d400",
        "_class" : "com.example.springboot.model.Book"
    }

    /* 3 */
    {
        "_id" : ObjectId("6398fd90eed5442229eb3337"),
        "title" : "Javascript Practices",
        "pages" : 450,
        "rating" : "FOUR_STARS",
        "authorId" : "6398d78ea21af6427c23d400",
        "_class" : "com.example.springboot.model.Book"
    }

    /* 4 */
    {
        "_id" : ObjectId("6398ff941ec12620f091fcab"),
        "title" : "Javascript Practices 2",
        "pages" : 450,
        "rating" : "TWO_STARS",
        "authorId" : "6398d78ea21af6427c23d400",
        "_class" : "com.example.springboot.model.Book"
    }

    /* 5 */
    {
        "_id" : ObjectId("6399a5851b8686e0dfe2ec9c"),
        "title" : "Golang Boom",
        "pages" : 40,
        "rating" : "FIVE_STARS",
        "authorId" : "6398bcd967719d021399427a",
        "__v" : 0
    }

    /* 6 */
    {
        "_id" : ObjectId("6399bf3856cffa8053ca8592"),
        "title" : "Golang Boom 2",
        "pages" : 3,
        "rating" : "THREE_STARS",
        "authorId" : "6398bcd967719d021399427a",
        "__v" : 0
    }

    /* 7 */
    {
        "_id" : ObjectId("639a29398e71d9a792347ee2"),
        "title" : "Javascript Practices 3",
        "pages" : 5,
        "rating" : "THREE_STARS",
        "authorId" : "6398d78ea21af6427c23d400",
        "__v" : 0
    }
```
# Apollo GraphQL Query Endpoint:

  POST  http://localhost:4000/graphql

# Apollo GraphQL Query Request:
```
    query{
        allBooks{
            id
            title
            pages
            rating {
                name
                star
            }
            authorId
        }
    }
```

# Apollo GraphQL Query Response:

```
    {
        "data": {
            "allBooks": [
                {
                    "id": "6398bd7d67719d02139942c1",
                    "title": "Java Hacks",
                    "pages": 200,
                    "rating": {
                        "name": "FIVE_STARS",
                        "star": "⭐️⭐️⭐️⭐️⭐️"
                    },
                    "authorId": "6398bcd967719d021399427a"
                },
                {
                    "id": "6398fd35eed5442229eb3336",
                    "title": "Python Practices",
                    "pages": 40,
                    "rating": {
                        "name": "THREE_STARS",
                        "star": "⭐️⭐️⭐️"
                    },
                    "authorId": "6398d78ea21af6427c23d400"
                },
                {
                    "id": "6398fd90eed5442229eb3337",
                    "title": "Javascript Practices",
                    "pages": 450,
                    "rating": {
                        "name": "FOUR_STARS",
                        "star": "⭐️⭐️⭐️⭐️"
                    },
                    "authorId": "6398d78ea21af6427c23d400"
                },
                {
                    "id": "6398ff941ec12620f091fcab",
                    "title": "Javascript Practices 2",
                    "pages": 450,
                    "rating": {
                        "name": "TWO_STARS",
                        "star": "⭐️⭐️"
                    },
                    "authorId": "6398d78ea21af6427c23d400"
                },
                {
                    "id": "6399a5851b8686e0dfe2ec9c",
                    "title": "Golang Boom",
                    "pages": 40,
                    "rating": {
                        "name": "FIVE_STARS",
                        "star": "⭐️⭐️⭐️⭐️⭐️"
                    },
                    "authorId": "6398bcd967719d021399427a"
                },
                {
                    "id": "6399bf3856cffa8053ca8592",
                    "title": "Golang Boom 2",
                    "pages": 3,
                    "rating": {
                        "name": "THREE_STARS",
                        "star": "⭐️⭐️⭐️"
                    },
                    "authorId": "6398bcd967719d021399427a"
                },
                {
                    "id": "639a29398e71d9a792347ee2",
                    "title": "Javascript Practices 3",
                    "pages": 5,
                    "rating": {
                        "name": "THREE_STARS",
                        "star": "⭐️⭐️⭐️"
                    },
                    "authorId": "6398d78ea21af6427c23d400"
                }
            ]
        }
    }
```

# Apollo GraphQL Mutation Endpoint:
  
  POST  http://localhost:4000/graphql

# Mutation Request:

```
    mutation{
        createBook(bookInput: {
            title: "Javascript Practices 3",
            pages: 5,
            rating: "THREE_STARS",
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
```

# Mutation Response:

```
    {
        "data": {
            "createBook": {
                "id": "639a29398e71d9a792347ee2",
                "title": "Javascript Practices 3",
                "pages": 5,
                "rating": {
                    "star": "⭐️⭐️⭐️"
                },
                "authorId": "6398d78ea21af6427c23d400"
            }
        }
    }
```

```

curl --location --request POST 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation{\r\n    createBook(bookInput: {\r\n        title: \"Javascript Practices 3\",\r\n        pages: 5,\r\n        rating: \"THREE_STARS\",\r\n        authorId: \"6398d78ea21af6427c23d400\"\r\n    }){\r\n        id\r\n        title\r\n        pages\r\n        rating {\r\n            star\r\n        }\r\n        authorId\r\n    }\r\n}\r\n\r\nquery{\r\n    allBooks{\r\n        id\r\n        title\r\n        pages\r\n        rating {\r\n            name\r\n            star\r\n        }\r\n        authorId\r\n    }\r\n}","variables":{}}'

```