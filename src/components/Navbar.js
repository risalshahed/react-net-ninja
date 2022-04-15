import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <>
        {/* Consumer approach er subidha hoilo eita functional component a use kra jay, esara we can consume multiple component in one context this way, we can't do that by using the provider approach */}
        {/* we get access to the context data in the following arrow function */}
        <AuthContext.Consumer>{(authContext) => (
          <ThemeContext.Consumer>{(themeContext) => {
            // destructuring
            const { isLightTheme, light, dark } = themeContext;
            // isLightTheme true hoile, theme=light, else dark
            const theme = isLightTheme ? light : dark;
            // destructuring
            const { isAuthenticated, toggleAuth } = authContext;
            return (
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
            );
          }}</ThemeContext.Consumer>
        )}</AuthContext.Consumer>
      </>
    );
  }
}
 
export default Navbar;