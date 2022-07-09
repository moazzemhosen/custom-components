
import { useState } from 'react';
import './App.css';

 import Pin from './components/pin/Pin';

function App() {
  const [otp,setOtp]=useState("")
  return (
    <div className="App">
       <Pin length={4}
        otpHandle={(value) => {
          setOtp(value)
        }} /> 

      <h3>Otp is {otp}</h3>
    </div>
  );
}

export default App;
