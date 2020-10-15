import React, {Component} from 'react';
import './App.css';
import Profile from './components/Profile';


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
      <Profile />
    </div>
  ); 
  }

}

export default App;
