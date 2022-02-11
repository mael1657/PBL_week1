import React from "react";
import {Text, Textarea} from "../components/Inputs";

const Write = () => {
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
                            />
                            <Textarea 
                                title="설명"
                                placeholder="설명을 입력해주세요."
                            />
                            <Textarea 
                                title="예시"
                                placeholder="예시를 입력해주세요."
                            />
                            <button className="add-btn" type="submit">단어 추가하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write;