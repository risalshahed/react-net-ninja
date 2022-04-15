import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  // "const ThemeContext = createContext();" this const from ThemeContext.js
  static contextType = ThemeContext;
  // provider vs consumer, provider a 2ta component newa jay na! karon ...
  // static contextType = AuthContext;
  // eivabe nite parbo na! cz 2ta static ekdm same name (contextType) newa jabe naa! that's why ekta provider er beshi newa jayna, baki shob components er jonno consumer nite hy...
  render() { 
    // destructuring
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <>
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
          <ul>
            <li style={{ background: theme.ui, color: theme.syntax }}>the way of kings</li>
            <li style={{ background: theme.ui, color: theme.syntax }}>the name of the wind</li>
            <li style={{ background: theme.ui, color: theme.syntax }}>the final empire</li>
          </ul>
        </div>
      </>
    );
  }
}
 
export default BookList;