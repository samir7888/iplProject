import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";

function App(){
    return(
        <div className="max-w-screen min-h-screen bg-black text-white overflow-hidden ">

        <Routes>
            <Route path="/" element={<Navbar/>}>

            <Route path="/" element={<Home />} />
            <Route path="/pointsTable" element={<PointsTable/>} />
            <Route path="/news" element={<h1>Comming soon...</h1>} />

            </Route>
            <Route path="/matchDetail/:id" element={<MatchDetail />} />
        </Routes>
        </div>
    )
}

export default App