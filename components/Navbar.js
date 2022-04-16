import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  // let's use imported ThemeContext here
  // useContext(ThemeContext);
  // eita ThemeContext.js file er, ThemeContext.Consumer TAG er vitorer props i.e. values consume kre
  // let's destructure
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
          { isAuthenticated ? 'Logged in' : 'Logged Out' }
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>    
    </>
  );
}
 
export default Navbar;