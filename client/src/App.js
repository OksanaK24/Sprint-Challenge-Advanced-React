import React from 'react';
import './App.css';
import axios from "axios"
import Players from "./component/Players"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios("http://localhost:5000/api/players")
      .then(res => this.setState({players:res.data}))
      .catch(err => console.log('Errpr' , err))
  }

  render() {
    console.log(this.state.players) 
    return (
      <div>
       <Players players={this.state.players} />
      </div>);
  }
}
 
export default App;