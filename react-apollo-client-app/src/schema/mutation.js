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
