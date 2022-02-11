import React from "react";

const Inputs = () => {
    return(
    <div></div>
    )
}

export const Text = (props) => {
    return(
        <div className="text-input" style={{width:'100%',}}>
            <p style={{
                fontSize:"2em",
                fontWeight:"bold"
            }}>{props.title}</p>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export const Textarea = (props) => {
    return(
        <div>
            <p>{props.title}</p>
            <textarea placeholder={props.placeholder}/>
        </div>
    )
}

export default Inputs;