import React, { Component } from 'react';
import { render } from 'react-dom';
import Engine from './Engine';
import Car from './Car';
import './style.css';
import display from './display';
import Hello from './Hello'
//import Snake from './Snake';
//import SnakeTests from './SnakeTests';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// Add display statements below
display("Let's get started with React TypeScript!");


let redCar = new Car("red");
let blueCar = new Car("blue");
redCar.drive(4);
blueCar.drive(10);
      