import React from 'react'
import { fetchCurrencies } from '../api/fetchCurrencies';

class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currencies: [],
            defaultValue: null
        }
    }

    handleValue = (event) => {
        this.props.handleValue(event.target.value)
    }
    
    componentDidMount = () => {
        fetchCurrencies()
        .then((response) => {
            this.setState({currencies: response});
            this.props.defaultValue(1);
        })
    }

    render() { 

        return (
            <select className="select select-primary rounded font-sans w-full font-medium p-2 h-12" onChange={this.handleValue}> 
                {
                    this.state.currencies && this.state.currencies.map((currency, index) => (
                        <option key={index} value={currency.mid}>{currency.code} {currency.currency}</option>))
                }
                <option value="1">PLN złoty</option>
            </select> 
        )
    }
}

export default Selector;