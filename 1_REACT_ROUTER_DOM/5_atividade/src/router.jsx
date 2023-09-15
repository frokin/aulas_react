import { Routes, Route } from "react-router-dom"

import Capy from "./pages/Capy"
import Bara from "./pages/Bara"



function Router(){
    return(
        <Routes>
            <Route path="/" element={<Capy />}/>
            <Route path="/bara" element={<Bara />} /> 
        </Routes>
    )
}

export default Router