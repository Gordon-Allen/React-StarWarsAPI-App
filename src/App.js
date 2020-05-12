import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
      this.state = {loading:true, character: ""}
    
  }

  componentDidMount() { 
    fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json()) 
    .then(data => {this.setState( 
    {loading: false, character: data} 
    )}) 
    }

    // componentDidMount() { 
    //   fetch("https://ipinfo.io/json") 
    //   .then(response => response.json()) 
    //   .then(data => {this.setState( 
    //   {loading: false,character: data} 
    //   )}) 
    //   }

  render(){
    console.log(this.state.city)
    return (
      <div className="App">
        <h1>{this.state.loading ? "Loading" : this.state.character.name}</h1>
        {/* <h1>{this.state.loading ? "Loading" : this.state.character.city}</h1> */}

      </div>
    );
  
  }
}

export default App;
