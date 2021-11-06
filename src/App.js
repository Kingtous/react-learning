import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import './App.css';
import ContentRoute from './router';
import AppMenu from './subpage/menu';
import SubPageRouter from './subpage/subpageRouter';
import AppRouter from './router';
import { Switch, BrowserRouter as Router, Route,Routes } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <span style={{ color: 'white', marginLeft: '6px' }}>Kintous的Demo小站</span>
            <AppMenu />
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, width: '100%' }}>
                <SubPageRouter />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Kingtous的学习小站（子站）
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}


export default App;
