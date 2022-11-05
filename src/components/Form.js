import React from 'react'
import Selector from './Selector.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            nominatorValue: 0,
            denominatorValue: 0,
            isLoaded: false,
            output: 0
        }
    }

    calculate = (event) => {
        event.preventDefault()
        this.setState({output: this.state.nominatorValue*this.state.amount/this.state.denominatorValue})
      }

    handleAmountChange = (event) => {
        this.setState({amount: event.target.value})
    }

    handleNominator = (data) => {
        this.setState({nominatorValue: data})
      }
    
    handleDenominator = (data) => {
        this.setState({denominatorValue: data})
    }

    render() {
        return (
                <form className='form-control flex flex-col justify-between gap-5'>
                    <div className='flex flex-col gap-5'>
                        <Selector handleValue = {this.handleNominator}/>
                        <Selector handleValue = {this.handleDenominator}/>    
                    </div>
                    
                    <div className='flex justify-between gap-5'>
                        <input className='input input-bordered input-primary flex p-2 h-12 rounded font-sans font-medium text-right' type="number" defaultValue="0" placeholder='0' min="0" onChange={this.handleAmountChange}/>
                        
                        <button className='btn btn-outline p-2 h-12 rounded font-sans font-medium text-center btn-primary' onClick={(this.calculate)}>
                            Convert
                        </button>
                    </div>
                    <div className='font-sans font-medium text-custom-green text-center'>{this.state.output.toFixed(2)}</div>
                </form>
        )
    }
}

export default Form