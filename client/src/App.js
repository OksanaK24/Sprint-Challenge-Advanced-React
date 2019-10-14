import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayersList from './Components/PlayersList';

class App extends Component {

  constructor() {
    super()

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.getPlayers()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.players.country !== this.state.players.country) {
  //     this.setState({ players: [] })
  //     this.getPlayers()
  //   }
  // }

  getPlayers = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(result => {
        console.log (result.data)
        this.setState({
          players: result.data
        })
      })
      .catch(error => {
        console.log("Error:", error)
      })
  }

  render(){
    return (
      <div className="App">
        <h1>Let's code!</h1>
        <PlayersList data={this.state.players} />
      </div>
    );
  }
}

export default App;
