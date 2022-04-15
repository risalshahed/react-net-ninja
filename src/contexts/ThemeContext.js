import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();
// eikhane, createContext() function jei variable a declare krbo, shei variable er sathe provider concat kore, (i.e. "ThemeContext.Provider") RETURN krbo as TAG, r shei TAG er data share hbe between components

class ThemeContextProvider extends Component {
  // ei state er vitorer data e different components er mddhe share hbe
  state = {
    isLightTheme: true,
    light: { syntax: '#222', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#eee', ui: '#333', bg: '#222' },
  }
  // toggleTheme er function ei ThemeContextProvider class a define thakte hbe, jno different components a ei function pass korle ta theme change er sathe interact krte pare!
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() { 
    return (
      // ei value er data e different components er mddhe share hbe
      // toggleTheme function ta eikhane value er mddhe pass korlm
      <ThemeContext.Provider value={ {...this.state, toggleTheme: this.toggleTheme} }>
        {this.props.children}
        {/* App.js er <Navbar /> r <BookList /> output hbe cz they are children, they are props as well! */}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;