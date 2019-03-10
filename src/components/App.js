import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/mebig.jpg';
import Title from './Title';

class App extends Component {
    //use this convention for constructor-less code
    //class property syntax
    state = { displayBio: false, user_language: 'en'};

    toggleDisplayBio= () => {
        this.setState({displayBio: !this.state.displayBio})
    }
    // constructor(){
    //     super();//isrequired 
    //     this.state = { displayBio: false};

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    // toggleDisplayBio(){
    //     this.setState({displayBio: !this.state.displayBio})
    // }
    
    // equivalent to render = ()=> 
    render() {

            //null means not rendered, skipped

        return (
            <div>
                <img src={profile} alt='me' className='profile' />
                <h1> Hello </h1>
                <p> This is Simon</p>
                 <Title />
                
                <p> I'm always looking forward to working on meaningful projects. Take a look at what I have done recently</p>
                {this.state.displayBio ? (
            <div>
            <p> I live in XXX </p>
            <p> I code in JS only  </p>
            <p> <a href="https://docdro.id/JsWSDv9">CV. Punch in 1234 </a> </p>
    <button onClick={this.toggleDisplayBio}>Show less </button>
        </div> 
        ) : (<div>
            <button onClick={this.toggleDisplayBio}>Read more...</button>
        </div>)}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />        
        </div>
        )

    }

}

export default App;