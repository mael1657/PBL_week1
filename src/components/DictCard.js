import { collection, getDocs} from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase"; 
import { useSelector, useDispatch  } from "react-redux";
import { getDict } from "../redux/ListReducer";

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
    const dictList = useSelector((state) => state.dictList.dicts);
    const dispatch = useDispatch();

    const getPost = async () => {
        const query = await getDocs(collection(db, "dict"));
        // console.log(query)
        query.forEach(doc => {
            console.log([doc.id, doc.data()])
        });
    }

    useEffect( async () => {
        const query = await getDocs(collection(db, "dict"));
        query.forEach(doc => {
            console.log([doc.id, doc.data()])
            dispatch(getDict([{id: doc.id, text: doc.data()}]))
        });
    },[]);

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

    return(
        <div className="dict-card" >
            {dictList.map((dict) => (
                <Card dict = {dict.text} key = {dict.id}/>
            ))}
        </div>
    )
}

export default DictCard;
