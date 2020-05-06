import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecommendedFriends from './components/RecommendedFriends';

class App extends Component {
  constructor() {
    super();
    this.users = [
      {
        name: 'duy21',
        avatar: 'https://picsum.photos/32/32'
      },
      {
        name: 'duy22',
        avatar: 'https://picsum.photos/32/32'
      },
      {
        name: 'duy23',
        avatar: 'https://picsum.photos/32/32'
      },
      {
        name: 'duy24',
        avatar: 'https://picsum.photos/32/32'
      },
    ];
  }
  render() {
    return (
      <div className="App">
        <RecommendedFriends friends={this.users}/>
      </div>
    );
  }
}

export default App;
