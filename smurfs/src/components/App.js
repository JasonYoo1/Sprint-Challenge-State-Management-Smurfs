import React, { Component } from "react";
import "./App.css";
import {Provider} from 'react-redux';


import store from '../store'
import Posts from './Post'
import PostForm from './PostForm'

class App extends Component {
  render() {
    return (
      //wrapped provider around to implement REDUX.
      //store holds the state
      <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <PostForm />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
