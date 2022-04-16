import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  // let's use imported ThemeContext here
  // useContext(ThemeContext);
  // eita ThemeContext.js file er, ThemeContext.Provider TAG er vitorer props i.e. values provide kre
  // let's destructure
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);
  return (
    <>
      <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
          {books.map(book => {
            return(
              <li key={book.id} style={{ background: theme.ui, color: theme.syntax }}>{book.title}</li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
 
export default BookList;