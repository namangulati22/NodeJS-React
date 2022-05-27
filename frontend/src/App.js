import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: null };
  }
  componentDidMount() {
    const data = new FormData();
    fetch('http://localhost:3000/', {
  method: 'POST',
  body: data
})
.then(response => response.json())
.then(response => {
  console.log(response)
  this.setState({ results: response});
})
.catch(err => {
  console.log(err)
  alert('OOPS....something went wrong.Please try again.')
})
    
  }
  render() {
    return (
      <div className='App-header' style={{textAlign:'center'}}>
      <h1>NodeJS + React</h1>
      <div>{this.state.results} from NodeJS backend at port http://localhost:3001/</div>
    </div>
  );
  }
}

export default App;