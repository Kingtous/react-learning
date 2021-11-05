import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import './App.css';
import { Board } from './chess';


const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

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
      <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
      <span style={{color: 'white',marginLeft: '6px'}}>React Demo Page By Kingtous</span>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          下棋小游戏
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial', textAlign: 'center' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center',width:'100%' }}>
            <Board style={{margin: 'auto auto',display: 'inline-block'}}/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Kingtous的学习小站（子站）
      </Footer>
    </Layout>
  </Layout>
    );
  }
}


export default App;
