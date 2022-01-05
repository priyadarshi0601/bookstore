import React, {Component} from 'react';


class App extends Component {
  state = {
    msg: ''
  };

  componentDidMount() {
    const response = fetch('/home').then((res)=>res.text()).then((txt)=>this.setState({msg:txt}));
    
  }

  render() {
    const {msg} = this.state;
    console.log(msg)
    return (
      <div className="App">
      <h1>{msg}</h1>
    </div>
    );
  }
}
export default App;