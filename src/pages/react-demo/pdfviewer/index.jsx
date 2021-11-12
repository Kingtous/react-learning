import React from 'react';
import PDFWindow from './components/pdfviewer';
import { connect } from 'dva';
import { Button, Divider } from 'antd';

@connect(({ pdfviewer }) => ({ pdfviewer }))
export default class PDFViewer extends React.Component {
  componentDidMount() {
    // this.props.dispatch({
    //     type: 'pdfviewer/getUrl',
    //     payload: 'mock'
    // })
  }

  render() {
    return (
      <div>
        <Button style={{ marginTop: '10px' }} onClick={() => this.fetchPDF()}>
          获取PDF
        </Button>
        <Divider />
        <PDFWindow pdf={this.props.pdfviewer}></PDFWindow>
      </div>
    );
  }

  fetchPDF() {
    this.props.dispatch({
      type: 'pdfviewer/getUrl',
      payload: 'mock',
    });
  }
}
