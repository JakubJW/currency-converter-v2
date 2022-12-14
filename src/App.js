import React from 'react';
import Form from './components/Form';
import logo from './assets/logo.svg'

class App extends React.Component {

  render(){
    return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-center h-screen">
      <div className='p-12 flex flex-col justify-center items-center md:w-3/6 h-3/6 gap-10 text-center'>
        <img src={logo} alt='' className='md:w-3/6 md:h-3/6'/>
        <h1 className='text-custom-blue font-sans md:w-3/6 font-medium md-text-2xl'>Welcome to Currency Converter. Please, choose base and expected currency, choose amount and click the button to see the output</h1>
      </div>
      
      <div className="md:p-12 w-full md:w-3/6 md:h-screen h-3/6 justify-center items-center bg-custom-blue flex flex-col gap-y-10">
          <Form />
      </div>
    </div>
  )}
};

export default App