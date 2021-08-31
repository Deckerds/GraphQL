import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import './AddBook.css';
import {
  addBookMutation,
  getAuthorQuery,
  getBooksQuery,
} from '../queries/Queries';

const AddBook = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const { loading, error, data } = useQuery(getAuthorQuery);
  const [addBook] = useMutation(addBookMutation);

  //   console.log(mutationData);

  const onSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <div>
      <form id='add-book' onSubmit={onSubmit}>
        <div className='field'>
          <label>Book Name:</label>
          <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='field'>
          <label>Genre:</label>
          <input type='text' onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className='field'>
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select Author</option>
            {loading && !error ? (
              <option disabled>Loading Authors</option>
            ) : (
              data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))
            )}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddBook;
