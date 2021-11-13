import { Button, Typography, Row, Progress } from 'antd';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import style from './pdfviewer.less';

const { Title, Paragraph, Text, Link } = Typography;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.bootcdn.net/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFWindow extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 1,
      pages: 1,
      pageWidth: 800,
    };
  }

  onDocumentComplete(pages: number) {
    console.log('onDocumentComplete');
    this.setState({
      page: 1,
      pages: pages,
    });
  }

  handlePrevious() {
    this.setState((state) => {
      state.page -= 1;
      return state;
    });
  }

  handleNext() {
    this.setState((state) => {
      state.page += 1;
      return state;
    });
  }

  renderPagination(page: number, pages: number) {
    let previousBtn = (
      <Button
        onClick={() => this.handlePrevious()}
        style={{ marginRight: '16px' }}
      >
        上一页
      </Button>
    );
    if (page == 1) {
      previousBtn = (
        <Button style={{ marginRight: '16px' }} disabled>
          上一页
        </Button>
      );
    }
    let nextBtn = <Button onClick={() => this.handleNext()}>下一页</Button>;
    if (page == pages) {
      nextBtn = <Button disabled>下一页</Button>;
    }
    return (
      <Row className={style.RowWrapper}>
        {previousBtn}
        {nextBtn}
        <div style={{ marginLeft: '16px' }}>
          {this.state.page}/ {this.state.pages}
        </div>
      </Row>
    );
  }

  render() {
    // page
    const pagination = this.renderPagination(this.state.page, this.state.pages);
    if (this.props.pdf.url !== '') {
      return (
        <div className={style.PdfFrame}>
          <div className={style.PdfDocumentWrapper}>
            <Document
              onLoadSuccess={({ numPages }) =>
                this.onDocumentComplete(numPages)
              }
              file={this.props.pdf.url}
              loading={<Progress type="circle" showInfo={false} />}
              options={{
                cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                cMapPacked: true,
                disableWorker: true,
              }}
              renderMode="canvas"
            >
              <Page pageNumber={this.state.page} width={this.state.pageWidth} />
            </Document>
          </div>

          {pagination}
        </div>
      );
    } else {
      return (
        <div className={style.PdfFrame}>
          <h5>未初始化</h5>
          {pagination}
        </div>
      );
    }
  }
}
