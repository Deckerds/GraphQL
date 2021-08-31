import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './BookList.css';
import { getBooksQuery } from '../queries/Queries';
import BookDetails from '../bookDetails/BookDetails';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  const [selectedBook, setselectedBook] = useState('');

  return (
    <div id='bookList'>
      {loading && <h3>Loading Books...</h3>}
      {!loading && !error && data.books && (
        <div className='booksContainer'>
          {data.books.map((book, index) => (
            <div key={index}>
              <li
                className='book-para'
                onClick={() => setselectedBook(book.id)}
              >
                {book.name}
              </li>
            </div>
          ))}
        </div>
      )}
      <BookDetails selectedBook={selectedBook} />
    </div>
  );
};

export default BookList;
