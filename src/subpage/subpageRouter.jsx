import { Route, Routes } from "react-router";
import { Board } from "./chess/chess";
import Demo from "./demo";
import { WelcomePage } from "./welcome/welcome";

const subPageRouter = ()=>(
    <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="react-demo/*" element={<Demo/>}/>
    </Routes>
);

export default subPageRouter;