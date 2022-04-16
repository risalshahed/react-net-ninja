// alada function use korle...
import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

// let's create a context which'll be used in other components
export const BookContext = createContext();

const BookContextProvider = (props) => {
  alada function use korle
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2},
  ]);
  // add a new book to data
  const addBook = (title, author) => {
    setBooks([ ...books, { title: title, author: author, id: v4() } ]);
  }
  // remove a book from data
  const removeBook = (id) => {
  // filter, ekta condition er sathe match korbe, mille rakho, naile remove!
  setBooks(books.filter(book => book.id !== id)); // id match na krle rakho, or remove!
  }
  return(
    <>
      <BookContext.Provider value={ {books, addBook, removeBook} }>
        { props.children }
      </BookContext.Provider>
    </>
  )
}
 
export default BookContextProvider;