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
                fontSize:"2rem",
                fontWeight:"bold",
                marginBottom:"10px",
            }}>{props.title}</p>
            <input style={{
                width:"100%",
                padding:"20px 10px",
                fontSize:"1.5rem",
                boxSizing:"border-box",
                border:"none",
                borderRadius:"10px",
                marginBottom:"20px",
            }} 
            type = "text"
            placeholder={props.placeholder}
            id = {`input-${props.name}`}
            name = {props.name}
            value = {props.value}
            onChange = {props.onChange}
            />
        </div>
    )
}

export const Textarea = (props) => {
    return(
        <div>
            <p style={{
                fontSize:"2rem",
                fontWeight:"bold",
                marginBottom:"10px",
            }}>{props.title}</p>
            <textarea style={{
                width:"100%",
                height:"140px",
                resize:"none",
                border:"none",
                borderRadius:"10px",
                marginBottom:"20px",
                padding:"20px 10px",
                boxSizing:"border-box",
                fontSize:"1rem",
            }} 
            placeholder={props.placeholder}
            id = {`input-${props.name}`}
            name = {props.name}
            value= {props.value}
            onChange = {props.onChange}
            />
        </div>
    )
}


export default Inputs;