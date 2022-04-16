import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  // destructuring
  const { books } = useContext(BookContext);
  return (
    <>
      <div className="navbar">
        <h1>Ninja Reading List</h1>
        <p>Current you've { books.length } books to get here...</p>
      </div>
    </>
  );
}
 
export default Navbar;