import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
  mutation CreateBook($bookInput: BookInput) {
    createBook(bookInput: $bookInput) {
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
`
export const CREATE_AUTHOR = gql`
  mutation CreateAuthor($authorInput: AuthorInput) {
    createAuthor(authorInput: $authorInput) {
      id
      firstName
      lastName
    }
  }
`
export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
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
`
