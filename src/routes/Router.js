import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DictList from "../screens/DictList";
import Write from "../screens/Write";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<DictList/>}/>
                <Route path = "/write" element={<Write/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;