import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  }
  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated })
  }
  render() { 
    return (
      // ei value er data e different components er mddhe share hbe
      // toggleAuth function ta eikhane value er mddhe pass korlm
      <AuthContext.Provider value={ {...this.state, toggleAuth: this.toggleAuth} }>
        {this.props.children}
        {/* App.js er <Navbar /> r <BookList /> output hbe cz they are children, they are props as well! */}
      </AuthContext.Provider>
    );
  }
}
 
export default AuthContextProvider;