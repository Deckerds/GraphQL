import { gql } from '@apollo/client';

export const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export const getSingleBookQuery = gql`
  query ($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
        books {
          name
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
