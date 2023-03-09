import './App.css';
import { Component } from 'react';
import Kompa from './components/Kompa';
import KlasnaKompa from './components/KlasnaKompa';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Marko",
      age: 33,
      count: 0,
      color: "black"
    }
  };

  handleClick = () => {
    this.setState({count: this.state.count + 1})
    if (this.state.count === 5) {
      this.setState({color: "green"})
    }
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ color: this.state.color }}>React Aplikacija</h1>
        <Kompa greet="hello" num={7} nick="Matt"/>
        <Kompa greet="pozdrav" num={10} nick="Nesto drugo"/>
        <Kompa greet={this.state.name} num={this.state.age} nick="Nesto trece"/>
        <KlasnaKompa />
       <h2>Brojac: {this.state.count}</h2>
       <button onClick={this.handleClick}>Up</button>
      </div>
  )};
}

export default App;
