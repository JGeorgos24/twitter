import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Twitter Clone
// Components --> App--> Profile, News Feed, Individual tweet
// state -> user, tweets, likes
// user: {username, password, bio}
// tweets: [{id,userid,context}]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:{
        id:1,
        username:"CRHarding",
        password: "casey123",
        bio: "To be detemined"
      },
      tweets: []
    }
  }

  render(){
     return (
    <div className="App">
      <h1> Twitter &copy; CRHarding </h1>
    </div>
  ); 
  }

}

export default App;
