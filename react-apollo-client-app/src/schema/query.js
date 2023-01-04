import { gql } from '@apollo/client';

export const GET_ALL_BOOKS = gql`
  query AllBooks {
    allBooks {
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
`;

export const GET_BOOK_BY_ID = gql`
  query FindBookById($id: ID!) {
    findBookById(id: $id) {
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
`;

export const GET_ONE_BOOK_BY_TITLE = gql`
  query FindBookByTitle($title: String!) {
    findBookByTitle(title: $title) {
      id
      title
      pages
      authorId
      rating {
        name
        star
      }
    }
  }
`;

export const GET_ALL_AUTHORS = gql`
  query AllAuthors {
    allAuthors {
      id
      firstName
      lastName
    }
  }
`;