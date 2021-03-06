import { collection, getDocs, orderBy, query} from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase"; 
import { useSelector, useDispatch  } from "react-redux";
import { getDict } from "../redux/ListReducer";
import Card from "./Card";


const DictCard = () => {
    const dictList = useSelector((state) => state.dictList.dicts);
    const dispatch = useDispatch();


    useEffect(() => {
        const getPost = async () => {
            const arr = []
            const dictRef = collection(db, "dict");
            const q = query(dictRef, orderBy("date", "desc"));
            const dict = await getDocs(q);
            dict.forEach(doc => {
                arr.push({id: doc.id, text: doc.data()})
            });
            dispatch(getDict(arr))
            // console.log(arr)
        };
        getPost();
    },[dispatch])


    return(
        <div className="dict-card" >
            {dictList.map((dict) => (
                <Card dict = {dict.text} key = {dict.id} id = {dict.id}/>
            ))}
        </div>
    )
}

export default DictCard;
