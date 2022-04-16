import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? ( // jodi books array er length thake,
    <div className='book-list'>
      <ul>
        { books.map(book => {
          return (
            <BookDetails book={book} key={book.id} />
          );
        })}
      </ul>
    </div>
  ) : (   // jodi books array er length NAA thake
    <div className='empty'>Sorry, no book is available to read at this moment.</div>
  );
}
 
export default BookList;