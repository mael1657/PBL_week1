import React from "react";
import { db } from "../firebase";
import { doc, deleteDoc} from "firebase/firestore"

const Card = ({dict, id}) => {

    const deletePost = async () => {
        const docRef = doc(db, "dict", `${id}`);
        await deleteDoc(docRef);
    }
    const removeCheck = async () => {
        if (window.confirm(`${dict.word}(은)는 당신에 의해 생명이 꺼질 위기에 처했어요. 강행하시겠나요?`)) {
            alert(`${dict.word}(은)는 이 세상에서 지워졌습니다. 아무도 기억하지 못하겠죠...`);
            deletePost();
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } else {
            alert(`착한 마음씨를 가졌군요! ${dict.word}는 당신에게 고마워 할꺼에요!`);
        }
    }
    return(
        <div className="inbox">
            <button className="del-btn" onClick={() => {removeCheck()}}>Delete</button>
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