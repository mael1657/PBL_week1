import React from "react";

const Card = ({dict}) => {
    return(
        <div className="inbox">
            <p className="text1">단어</p>
            <p className="text2">{dict.word}</p>
            <p className="text1">설명</p>
            <p className="text2">{dict.explain}</p>
            <p className="text1">예시</p>
            <p className="text2" style={{color:"lightskyblue",paddingBottom:"0"}}>{dict.example}</p>
        </div>
    )
}

export default Card;