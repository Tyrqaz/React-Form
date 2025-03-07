import "./formInput.css"
import { useState, useRef } from "react"

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
        <label>{label}</label>
        <input 
          {...inputProps} 
          onChange={onChange} 
          onBlur={handleFocus} 
          onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)}
          focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput