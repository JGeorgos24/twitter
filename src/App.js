import React, {Component} from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Profile from './components/Profile';
import CreateTweet from './components/CreateTweet';


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

  submitTweet = (e, tweet) => {
    e.preventDefault();
    tweet.userId = this.state.user.id;
    tweet.id = Math.floor(Math.random() * 1000)
    tweet.timestamp = Date.now();

    const tweets= this.state.tweets;
    tweets.push(tweet);
    this.setState({
      tweets
    })
    // console.log(tweet);
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
      <Route path="/tweet/new" render={()=> <CreateTweet userId={this.state.user.id} submitTweet={this.submitTweet} /> } />
      {this.state.tweets && 
        <div>
          {this.state.tweets.map((tweet, id) => {
            return <div>
                <p>{tweet.timestamp}</p>
                <p>{tweet.content}</p>
              </div>
          })}
        </div>
          }
    </div>
  ); 
  }

}

export default App;
