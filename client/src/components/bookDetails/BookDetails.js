import React from 'react';
import { useQuery } from '@apollo/client';
import { getSingleBookQuery } from '../queries/Queries';
import './BookDetails.css';

const BookDetails = ({ selectedBook }) => {
  const { loading, error, data } = useQuery(getSingleBookQuery, {
    variables: {
      id: selectedBook,
    },
  });

  return (
    <div className='book-details-container'>
      {!selectedBook ? (
        <h2>Select a book...</h2>
      ) : loading && !data && !error ? (
        <h2>Loading book...</h2>
      ) : (
        <div>
          <p className='para-styles'>
            Book Name: <b>{data.book.name}</b>
          </p>
          <p className='para-styles'>
            Book Genre: <b>{data.book.genre}</b>
          </p>
          <h2>Author Details:</h2>
          <div className='author-details'>
            <p className='para-styles'>
              Author Name: <b>{data.book.author.name}</b>
            </p>
            <p className='para-styles'>
              Author Age: <b>{data.book.author.age}</b>
            </p>
            <h3>Author's other books:</h3>
            {data.book.author.books.map((book, index) => (
              <p key={index}>{book.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
