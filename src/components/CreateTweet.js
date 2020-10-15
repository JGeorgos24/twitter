import React, {Component} from 'react';
// tweets: [{id,userid,context}]
class CreateTweet extends Component {
    constructor(props) {
        super(props);

        this.state= {
            id: null,
            userId: null,
            content: "",
            timestamp: null
        }
    }

    tweetChange = (e) => {
        
        this.setState({
          [e.target.name]: e.target.value          
        })
    }

    render(){
        return(
            <form onSubmit={(e) => this.props.submitTweet(e, this.state)}>
                <input 
                    type="textarea" 
                    value={this.state.content} 
                    name="content" 
                    placeholder="Tweet" 
                    onChange={this.tweetChange}
                />
                <input type="submit" value="Compose a Tweet" /> 
            </form>
        )
    }
}

export default CreateTweet; 