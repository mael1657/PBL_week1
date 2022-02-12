import React, { useState } from "react";
import {Text, Textarea} from "../components/Inputs";

//firebase
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Write = () => {
    let navigate = useNavigate()

    const handleClicked = e => {
        e.preventDefault();
        if (text.word === "" || text.explain === "" || text.example === "" ){
            window.alert("모든 문항을 입력해주세요!")
        }else{
            addDoc(collection(db, "dict"),{
                word:text.word,
                explain:text.explain,
                example:text.example
            })
            const {value, name} = e.target
            setText({
                ...text,
                [name]:value
            })
            setText({
                word:"",
                explain:"",
                example:"",
            })
            window.alert("단어 저장 완료!")
            navigate("/")
        }
    }

    const [text, setText] = useState({
        word:"",
        explain:"",
        example:""
    });

    const onChange = e => {
        const {value, name} = e.target;
        setText({
            ...text,
            [name] : value
        });
    };

    return(
        <div className="App">
            <div className="wrap">
                <div className="write">
                    <h1 className="title">단어 추가하기</h1>
                    <div className="inbox">
                        <form>
                            <Text 
                                title="단어"
                                placeholder="단어를 입력해주세요."
                                name = "word"
                                value = {text.word}
                                onChange = {onChange}
                            />
                            <Textarea 
                                title="설명"
                                placeholder="설명을 입력해주세요."
                                name = "explain"
                                value = {text.explain}
                                onChange = {onChange}
                            />
                            <Textarea 
                                title="예시"
                                placeholder="예시를 입력해주세요."
                                name = "example"
                                value = {text.example}
                                onChange = {onChange}
                            />
                            {console.log(text)}
                            <button className="add-btn" onClick={handleClicked}>단어 추가하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;