import { Divider,Typography } from "antd";
import { Component } from "react";
import styled from "styled-components";
import CodeEditor from "../../component/editor/CodeEditor";
import { Board } from "./chess";
import reactElementToJSXString from 'react-element-to-jsx-string';

const {Title} = Typography;

class ChessGameDemo extends Component {


    constructor(props) {
        super(props);
        this.Column = styled.div`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        `;
        this.Container = styled.div`
            width:100%;
            display: flex;
            justify-content: start;
            flex-direction: column;
        `;
    }

    render() {
        const item = <this.Column className="chess-game">
                        <Board className='chess-game-board'/>
                        <Divider />
                        <this.Container>
                            <CodeEditor mode="javascript"/>
                        </this.Container>
                    </this.Column>;
        return (
            <this.Column className="chess-game">
                <Board className='chess-game-board'/>
                <Divider />
                <this.Container>
                    <Title level={2}>调用示例</Title>
                    <CodeEditor mode="javascript" value={reactElementToJSXString(item)}/>
                </this.Container>
            </this.Column>
        )
    }
}

export default ChessGameDemo;