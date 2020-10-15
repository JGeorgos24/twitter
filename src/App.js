import React, {Component} from 'react';
import './App.css';
import Profile from './components/Profile';
import {Link, Route} from 'react-router-dom';




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
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="tweet/new">Compose a Tweet</Link>
        </nav>       
      </header>
      <h1> Twitter &copy; CRHarding </h1>
      <Route path="/profile" render={()=> <Profile userData={this.state.user}/>}/>
    </div>
  ); 
  }

}

export default App;
