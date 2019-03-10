import React, {Component} from 'react';


//stateless functional component 

// or destructure right away as ({joke}) =>{}

//ex this is where you would style the individual TU TUV
const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20, color:'#DC143C' }}>{setup} <em>{punchline}</em></p>
  )

class Jokes extends Component {
    state = {joke: {}, jokes: []};


    //click a button to get next ten random jokes


    //fetches one joke
    componentDidMount() {
        fetch('http://official-joke-api.appspot.com/random_joke')
        .then((response) => { return response.json() })
        .then(json => this.setState({joke: json}))
        .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('http://official-joke-api.appspot.com/random_ten')
        .then((response) => { return response.json() })
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message));
    }


    render() {
        return (
        <div>
            <h2>Joke of the Day</h2>
            <Joke joke={this.state.joke} />
            <hr/>
            <h3>Get 10 more jokes? </h3>
            <button onClick={this.fetchJokes}> Click me!</button>
            {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}

        </div>
        )
    }

}

export default Jokes;