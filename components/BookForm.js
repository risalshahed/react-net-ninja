import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  // what this curly brace actually do? curly brace na dle function hy na kn? must research on google
  // separate function use korle
  // const { addBook } = useContext(BookContext);
  // Reducer use korle
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // separate function use korle
    // addBook(title, author);
    // Reducer use korle
    dispatch({type: 'ADD_BOOK', book: {
      // title: title, author: author,
      // shorthand of this line
      title, author
    }});
    setTitle('');
    setAuthor('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='book title' value={title}
        onChange={ (e)=> setTitle(e.target.value) } required />
        <input type='text' placeholder='book author' value={author}
        onChange={ (e)=> setAuthor(e.target.value) } required />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
}
 
export default NewBookForm;