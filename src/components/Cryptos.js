import React, {Component} from 'react';


//stateless functional component 

// or destructure right away as ({joke}) =>{}

//ex this is where you would style the individual TU TUV
const Crypto = ({ crypto: { id, symbol, circulating_supply, quote  } }) => (
    <p style={{ margin: 20, color:'#DC143C' }}>{symbol}</p>
  )

class Cryptos extends Component {
    state = {cryptos: []};


    //click a button to get next ten random jokes
    //API KEY ceff9cfb-a645-4f76-8f7a-b1ef468a122a

    //fetches one joke
    componentDidMount() {
        //issue is how to incorporate header data!
        fetchCryptos('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=ceff9cfb-a645-4f76-8f7a-b1ef468a122a')
        .then((response) => { return response.json() })
        .then(json => this.setState({cryptos: data}))
        .catch(error => alert(error.message));
    }


    render() {
        return (
        <div>
            <hr/>
            <h3>Cryptos? </h3>
            <button onClick={this.fetchCryptos}> Click me!</button>
            {this.state.data.map(crypto => (<Crypto key={crypto.id} crypto={crypto} />))}

        </div>
        )
    }

}

// export default Crypto;