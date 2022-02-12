import React, { useRef, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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
    // useEffect(async() => {
    //     console.log("db",db)

    //     // 읽기
    //     const query = await getDocs(collection(db, "dict"));
    //     console.log("query",query)
    //     query.forEach((doc) => {
    //         console.log(doc.id, doc.data());
    //     });

    //     // 쓰기
    //     // addDoc(collection(db, "dict"), {
    //     //     word: "테스트",
    //     //     explain: "설명",
    //     //     example: "예시"
    //     // })

    //     //수정
    //     // const docRef = doc(db, "dict", "5NGf55Tfhxf9jCWCC2n6");
    //     // updateDoc(docRef, {word : "수정"});

    //     //삭제
    //     // const docRef = doc(db, "dict", "5NGf55Tfhxf9jCWCC2n6");
    //     // deleteDoc(docRef);
    // },[])
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

    const my_wrap = useRef(null);
    // console.log(my_wrap)
    return(
        <div className="dict-card" ref={my_wrap}>
            {dicts.map(dict => (
                <Card dict = {dict} key = {dict.id}/>
            ))}
        </div>
    )
}

export default DictCard;