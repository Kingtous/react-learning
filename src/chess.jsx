import { Button, notification } from "antd";
import { Component } from "react"
import styled from "styled-components";
import './chess.css';

export class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            chessStatus: ['_', '_', '_', '_','_', '_', '_','_','_'],
            statusMsg: "请开始游戏"
        }
        this.sz = 3;
        this.animateTime = 1000; //1s动画
        // 棋子下了几个
        this.filled = 0;
        this.ch = ['X','O'];
        this.currentCh = 0;
        this.gameStarted = false;

        this.Item = styled.div`
        display: flex;
        flex-direction: column;
        width: 310px;
        height: 380px;
        `;
        this.Row = styled.span`
        &:after{
            clear: both;
            content: "";
            display: table-row;
            margin: auto auto;
        }
        `;
        this.Panel = styled.span`
        display: table-row;
        margin-top: 16px;
        `;
    }

    onChessClick(i){
        if (!this.gameStarted){
            notification.warning({
                message: "游戏还未开始呢",
                description:"请点击下方按钮开始游戏"
            });
            return;
        }
        console.log('onChessClick', i);
        const cs = this.state.chessStatus.slice()
        if (cs[i] === '_'){
            cs[i] = this.ch[this.currentCh % 2];
            this.filled++;
            console.log('filled',this.filled);
            this.setState({
                chessStatus: cs,
            })
            if (this.validate(cs,i)){
                this.gameStarted = false;
                this.setState({
                    statusMsg: this.ch[this.currentCh % 2] + "获胜！！！"
                });
            } else {
                // 判断是否下满了，平局
                if (this.filled == this.sz * this.sz){
                    this.gameStarted = false;
                    this.setState({
                        statusMsg: "平局！！！"
                    })
                } else {
                    this.setState({
                        statusMsg: "请" + this.ch[(++this.currentCh)%2]+"玩家下棋"
                    })
                }
            }
        } else {
            alert('这个地方已经下过了');
        }
    }

    reset(){
        this.filled = 0;
        this.currentCh = 0;
    }

    /// 看是否有人胜利了
    validate(chessStatus,i){
        console.log(chessStatus,i);
        const st_r = Math.floor(i / this.sz);
        const st_c = i % this.sz;
        const ch = chessStatus[i];
        // 横向扫描
        var cnt = 0;
        for (let c = 0; c < this.sz; c++) {
            const element = chessStatus[this.calIndex(st_r,c)];
            if (element === ch){
                cnt++;
            }
        }
        if (cnt === this.sz){
            return true;
        }
        // 纵向扫描
        cnt = 0;
        for (let r = 0; r < this.sz; r++) {
            const element = chessStatus[this.calIndex(r,st_c)];
            if (element === ch){
                cnt++;
            }
        }
        if (cnt === this.sz){
            return true;
        }
        cnt = 0;
        // 左下到右上
        if (st_r + st_c == this.sz - 1){
            for (let i = 0; i < this.sz; i++) {
                const element = chessStatus[this.calIndex(this.sz - i - 1,i)];
                if (element === ch){
                    cnt++;
                }
            }
            if (cnt === this.sz){
                return true;
            }
        }
        // 左上到右下
        cnt = 0;
        if (st_r - st_c === 0){
            for (let i = 0; i < this.sz; i++) {
                const element = chessStatus[this.calIndex(i,i)];
                if (element === ch){
                    cnt++;
                }
            }
            if (cnt === this.sz){
                return true;
            }
        }
        
        return false;
    }

    calIndex(r,c){
        return r*this.sz+c;
    }

    renderChess(i){
        return <Chess onClick={()=>this.onChessClick(i)} value={this.state.chessStatus[i]} />
    }

    startAnimate(){
        const timePerFrame = this.animateTime / (this.sz * this.sz);
        for (let i = 0; i < this.sz * this.sz; i++) {
            const arr = ['_', '_', '_', '_','_', '_', '_','_','_'];
            const author ="kingtous";
            for (let index = 0; index <= i; index++) {
                arr[index] = author[index % author.length] ;
            }
            setTimeout(() => {
                this.setState({
                    chessStatus: arr
                });
            },timePerFrame * i);
        }
        setTimeout(() => {
            this.setState({
                chessStatus: ['_', '_', '_', '_','_', '_', '_','_','_']
            });
        },this.animateTime);
    }

    startGame(){
        const chessStatus = ['_', '_', '_', '_','_', '_', '_','_','_']
        this.reset();
        this.setState({
            statusMsg: "准备开始！"
        })
        this.startAnimate();
        setTimeout(() => {
            this.setState({
                chessStatus: chessStatus,
                statusMsg: "请" + this.ch[this.currentCh]+"玩家下棋"
            })
            this.gameStarted = true;
        },this.animateTime);
        
    }

    render(){
        return (
            <this.Item>
                <div className="status">{this.state.statusMsg}</div>
                <this.Row>
                    {this.renderChess(0)}
                    {this.renderChess(1)}
                    {this.renderChess(2)}
                </this.Row>
                <this.Row>
                    {this.renderChess(3)}
                    {this.renderChess(4)}
                    {this.renderChess(5)}
                </this.Row>
                <this.Row>
                    {this.renderChess(6)}
                    {this.renderChess(7)}
                    {this.renderChess(8)}
                </this.Row>
                <this.Panel>
                <Button type="primary" onClick={()=>this.startGame()}>开始游戏</Button>
                </this.Panel>
                
            </this.Item>
        );
    }
}



class Chess  extends Component{

    constructor(props){
        super(props);
        // setTimeout(() => {
        //     this.setState({
        //         value: null
        //     })
        // }, 2000);
        this.Item = styled.div`
  border: 1px solid #999;
  float: left;
  font-size: 50px;
  font-weight: bold;
  line-height: 100px;
  height: 100px;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
    `;
    }

    render(){
      return(
        <this.Item  onClick={()=>this.props.onClick()}>
            {this.props.value}
        </this.Item>
      );
    }
  
  }