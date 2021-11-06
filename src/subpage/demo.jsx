import { Component } from "react";
import { Route, Routes, useRoutes } from "react-router";
import { Board } from "./chess/chess";
import { Typography } from 'antd';
import ChessGameDemo from "./chess";

const { Title } = Typography;

class Demo extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route path="chess" element={<ChessGameDemo />} />
                </Routes>
            </div>
        )
    }
}

export default Demo;