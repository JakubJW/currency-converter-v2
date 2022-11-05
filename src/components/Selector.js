import React from 'react'

class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currencies: [],
            isLoaded: false,
        }
    }

    handleValue = (event) => {
        this.props.handleValue(event.target.value)
    }
    
    componentDidMount = (data) => {
        fetch('http://api.nbp.pl/api/exchangerates/tables/A/', {
            method: 'GET',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {
            this.setState({currencies: response[0].rates});
            this.setState({isLoaded: true});
        })
    }

    render() { 

        return (
            <select className="select select-primary rounded font-sans font-medium p-2  h-12" onChange={this.handleValue}> 
                {
                    this.state.isLoaded && this.state.currencies.map((currency, index) => (
                        <option key={index} value={currency.mid}>{currency.code} {currency.currency}</option>))
                }
            </select> 
        )
    }
}

export default Selector;