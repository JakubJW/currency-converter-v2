import React from 'react'
import Selector from './Selector.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            nominatorValue: 0,
            denominatorValue: 0,
            output: 0
        }
    }

    calculate = (event) => {
        event.preventDefault()
        this.setState({output: this.state.nominatorValue*this.state.amount/this.state.denominatorValue})
    }

    setDefaultValue = (data) => {
        this.setState({nominatorValue: data, denominatorValue: data})
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
                <form className='form-control flex flex-col md:w-1/2 w-4/5 justify-between items-center gap-5'>
                    <Selector handleValue = {this.handleNominator} defaultValue = {this.setDefaultValue}/>
                    <Selector handleValue = {this.handleDenominator} defaultValue = {this.setDefaultValue}/>    
                    
                    <div className='flex justify-between gap-5'>
                        <input className='input input-bordered w-full input-primary flex p-2 h-12 rounded font-sans font-medium text-right' type="number" defaultValue="0" placeholder='0' min="0" onChange={this.handleAmountChange}/>
                        
                        <button className='btn btn-outline p-2 h-12 rounded font-sans font-medium text-center btn-primary' onClick={(this.calculate)}>Convert</button>
                    </div>
                    <div className='font-sans text-xl font-medium text-custom-blue text-center p-2 bg-custom-green rounded w-full'>{this.state.output.toFixed(2)}</div>
                </form>
        )
    }
}

export default Form