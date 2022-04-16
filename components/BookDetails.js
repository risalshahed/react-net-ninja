import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  // alada function use korle
  const { removeBook } = useContext(BookContext);
  // Reducer use korle
  const { dispatch } = useContext(BookContext);
  return (
    <>
      {/* alada function use korle */}
      {/* <li onClick={ () => removeBook(book.id) }> */}
      {/* Reducer use korle */}
      <li onClick={ () => dispatch( {type: 'REMOVE_BOOK' ,id: book.id} ) }>
        <div className='title'>{ book.title }</div>
        <div className='author'>{ book.author }</div>
      </li>
    </>
  );
}
 
export default BookDetails;