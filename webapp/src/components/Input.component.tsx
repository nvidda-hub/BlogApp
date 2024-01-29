import { useState } from "react"

interface InputPropsInterface {
    classname : string,
    type : string,
    placeholder : string,
    id : string,
    inputState : Function
}

const InputComponent = (props : InputPropsInterface) => {
    const [value, setValue] = useState("")
  return (
        <input 
            id={props.id}
            className={props.classname}
            type={props.type}
            placeholder={props.placeholder}
            onChange={(e) => setValue(e.target.value)}
        />
  )
}

export default InputComponent