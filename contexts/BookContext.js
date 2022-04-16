// Reducer
import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

// let's create a context which'll be used in other components
export const BookContext = createContext();

/* [
  {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
  {title: 'the final empire', author: 'brandon sanderson', id: 2},
] */

const BookContextProvider = (props) => {
  // useReducer er 1st param imported BookReducer function, 2nd param is initial value
  // inital render a, booklist 1ta empty ARRAY save hbe, [see on inspect->Application]
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    // data update hoile ja dekhabe ta ei Arrow Function a likhbo
    const localData = localStorage.getItem('books');
    // initial a emptyArray, update hoile amdr localData thakbe, data jodi thake, THEN
    return localData ? JSON.parse(localData) : [];
  });
  // save data to localStorage
  useEffect(() => {
    // direct object save kora jay na, string save korte hy!
    localStorage.setItem('books', JSON.stringify(books))
  }, [books] );   // means, whenever [books] data changes, run this hook
  
  return(
    <>
      <BookContext.Provider value={ {books, dispatch} }>
        { props.children }
      </BookContext.Provider>
    </>
  )
}
 
export default BookContextProvider;