import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
// const axios = require('axios').default;
  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  componentDidMount() {
    this.getQoute();

  }

  getQoute = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=1")
    .then((resp) => resp.json())
    .then((qoutes) => this.setState({data: qoutes}))
  }

  render() {
  return ( 
    <div className="App">
      <Navbar />
      <button onClick={this.getQoute}>New Qoute</button>
      <QuoteList quotes={this.state.data} />
    </div>
  );
}
}

export default App;
