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

const DictCard = () => {
    const dicts = [
        {
            id:1,
            word : "안녕안녕",
            explain : "안녕하세용",
            example : "예시예시",
        },
        {
            id:2,
            word : "뿌에엥",
            explain : "뿌에에에엥",
            example : "뿌에에에에에에ㅔㅇ",
        },
    ]
    return(
        <div className="dict-card">
            {dicts.reverse().map(dict => (
                <Card dict = {dict} key = {dict.id}/>
            ))}
        </div>
    )
}

export default DictCard;