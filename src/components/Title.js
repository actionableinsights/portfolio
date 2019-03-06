import React, {Component} from 'react';

const TITLES = [
'a German to English translator',
'a software developer',
'a trainee accountant',
'a yoga enthusiast'
];

class Title extends Component {

    state = { titleIndex:0, fadeIn: true };
    

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({fadeIn:false }), 2000);

        this.animateTitles();
    }

    //tasks to clear the previous setInerval using clearInterval which takes am
    //interval ID returend by setInterval() and stored in \
    //this.titleInterval

    componentWillUnmount() {
  
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(()=> {
            const titleIndex = (this.state.titleIndex +1) % TITLES.length;

            this.setState( {titleIndex, fadeIn: true});
            this.timeout = setTimeout(() => this.setState({fadeIn:false }), 2000);
        }, 4000);
        
    }

    render() {
        const {fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
        
        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>

        )

    }

}

export default Title; 