import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'umi';
import SubMenu from 'antd/lib/menu/SubMenu';

function genMenuItem(
  key: string,
  to: string,
  icon: React.ReactElement | null,
  txt: string,
) {
  return (
    <Menu.Item key={key} icon={icon}>
      <Link to={to}> {txt}</Link>
    </Menu.Item>
  );
}

function MenuList(props: any) {
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[props.location.pathname]}
      defaultOpenKeys={['demo-react']}
    >
      {genMenuItem('/', '/', <UserOutlined />, '欢迎')}
      <SubMenu key="demo-react" icon={<UserOutlined />} title="React Demos">
        {genMenuItem(
          '/react-demo/chess',
          '/react-demo/chess',
          null,
          '下棋小游戏',
        )}
        {genMenuItem(
          '/react-demo/pdfviewer',
          '/react-demo/pdfviewer',
          null,
          'PDF',
        )}
        {genMenuItem(
          '/react-demo/lamache',
          '/react-demo/lamache',
          null,
          'WASM 拉马车算法',
        )}
      </SubMenu>
    </Menu>
  );
}

export default withRouter(MenuList);
