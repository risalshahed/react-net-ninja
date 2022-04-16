import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'way of kings', id: 1 },
    { title: 'name of the wind', id: 2 },
    { title: 'final empire', id: 3 },
    { title: 'hero of ages', id: 4 },
  ]);
  return(
    <>
      <BookContext.Provider value={{books}}>
        {props.children}
      </BookContext.Provider>
    </>
  );
}

export default BookContextProvider;