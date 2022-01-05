import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    msg: ''
  };

  componentDidMount() {
    const response = fetch('/home').then((res)=>this.setState({msg:res.text()}));
  }
  render() {
    const {msg1} = this.state.msg;
    console.log(msg1)
    return (
        <h1>{msg1}</h1>
    );
  }
}
export default App;