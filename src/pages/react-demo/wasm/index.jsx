import React from 'react';
import { Divider, Input } from 'antd';
import Wasm from 'react-wasm';

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'aabbaa',
    };
  }

  onTextChange = (e) => {
    const text = e.target.value;
    this.setState({
      text: text,
    });
  };

  render() {
    return (
      <div>
        <Input
          placeholder="回文串"
          defaultValue={this.state.text}
          onChange={this.onTextChange}
        />
        <Divider />
        <Wasm url="/static/lamache.wasm">
          {({ loading, error, data }) => {
            if (loading) return '加载中';
            if (error) return '出错了';

            const { module, instance } = data;
            return (
              <div>
                {this.state.text} 的最大回文串长度为：
                {instance.exports.lamache(this.state.text)}
              </div>
            );
          }}
        </Wasm>
        <Divider />
      </div>
    );
  }
}
