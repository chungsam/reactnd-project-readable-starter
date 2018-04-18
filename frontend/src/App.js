import React, { Component } from 'react';
import PostList from './components/post/PostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Nav here!
        </header>
        <PostList />
      </div>
    );
  }
}

export default App;
