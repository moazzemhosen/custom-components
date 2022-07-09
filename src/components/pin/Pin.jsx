import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"
import { useRef } from 'react'
import PinInput from './PinInput'

const Pin = ({ length, otpHandle }) => {
  const inputRef = useRef([]);
  const [inputBox] = useState(new Array(length).fill(1));
  const [inputValue,setInputValue] = useState(new Array(length).fill(""));
  

  // console.log(inputRef.current);

  const handleChange = (e, index) => {
    inputValue[index] = e.target.value;
    setInputValue(inputValue);

    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
   otpHandle(inputValue.join("")); 
  };

  const handleBackSpace = (e,index) => {
    //we are moving the left side when sone one click on back space
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputValue[index] = e.target.value;
    setInputValue(inputValue);
     otpHandle(inputValue.join("")); 
  };



  const handlePaste = (e) => {
    e.preventDefault()
    const data = e.clipboardData.getData("text").split("").filter((item, index) => index < length)
    // console.log(data);
    data.forEach((value, index) => {
      inputValue[index] = value;
      inputRef.current[index].value = value
      //when paste some thing last input boxx will be heiliting
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    })
    
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }} onPaste={handlePaste}>
      {inputBox.map((item, index) => (
        <PinInput
          key={index}
          changeHandler={(e) => handleChange(e, index)}
          onBackSpaceHandler={(e) => handleBackSpace(e, index)}
          //pass as a forword ref
          ref={(element) => {
            inputRef.current[index] = element;
          }}
        />
      ))}
    </div>
  );
};


Pin.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
};
export default Pin