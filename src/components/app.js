import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import PlayerList from '../containers/playerList'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PlayerList />
      </div>
    );
  }
}
