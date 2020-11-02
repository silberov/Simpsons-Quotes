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
    
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=5")
    .then((resp) => resp.json())
    .then((qoutes) => this.setState({data: qoutes}))
  }
  render() {
    //console.log(this.state.data);
  return ( 
    <div className="App">
      <Navbar />
      <QuoteList quotes={this.state.data} />
    </div>
  );
}
}

export default App;
