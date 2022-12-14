# graphql-learning

# POC Project Screenshot:
<img src="./final_01.JPG" alt="Final Result" style="width: 300px; height: 200px;"/>&nbsp; <img src="./Example_Query_Springboot.JPG" alt="Final Result" style="width: 300px; height: 200px">&nbsp; <img src="./Example_Mutation_CreateBook2.JPG" alt="Final Result" style="width: 300px; height: 200px"/>&nbsp; <img src="./Example_Query_FindByIdBook.JPG" alt="Final Result" style="width: 300px; height: 200px"/>&nbsp; <img src="./Example_RestAPI_CreateBook.JPG" alt="Final Result" style="width: 300px; height: 200px"/>&nbsp; <img src="./Example_RestAPI_FindByIdBook.JPG" alt="Final Result" style="width: 300px; height: 200px"/>

# Backend

1. SpringBoot GraphQL Project (Java)
   
|||
| - | - |
| [![SC2 Video](https://img.youtube.com/vi/K_MGBQ_1Nic/0.jpg)](https://www.youtube.com/watch?v=K_MGBQ_1Nic) | [![SC2 Video](https://img.youtube.com/vi/H_U2Bu75Ohc/0.jpg)](https://www.youtube.com/watch?v=H_U2Bu75Ohc) |


# Backend + Frontend

2. Express With Apollo-Graph-Server Project (NodeJS)
3. React With Apollo-Graph-Client Project (NodeJS)

| Reference | Source-code |
| - 	| - 		  |
| [![SC2 Video](https://img.youtube.com/vi/yqWzCV0kU_c/0.jpg)](https://www.youtube.com/watch?v=yqWzCV0kU_c&list=PLpPqplz6dKxXICtNgHY1tiCPau_AwWAJU&index=9) | https://github.com/machadop1407/graphql-full-course/tree/lab9 |
| [![SC2 Video](https://img.youtube.com/vi/NNNcoWZ6Ih0/0.jpg)](https://www.youtube.com/watch?v=NNNcoWZ6Ih0&list=PLB97yPrFwo5i9zDrWfvkohPec3Q6EEC9J&index=1&t=4s) | https://github.com/mukeshphulwani66/GraphQl-tutorial/tree/deploy |
| https://www.honeybadger.io/blog/graphql-server-in-nodejs/ | https://github.com/doingandlearning/creating-a-fastify-graphql-server |

# GraphQL Schema [ Example ]:

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
