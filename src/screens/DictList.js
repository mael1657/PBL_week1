import React from "react";
import { Link } from "react-router-dom";
import DictCard from "../components/DictCard";

const DictList = () => {
    return(
        <div className="App">
            <div className="wrap">
                <div className="dict-list">
                    <h1 className="title">My Dictionary</h1>
                    <DictCard/>
                </div>
            </div>
            <div className="wrt-btn">
                <Link to="/Write">go to write</Link>
            </div>
        </div>
    )
}

export default DictList;