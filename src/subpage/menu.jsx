import {Menu} from 'antd';
import {
    UserOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
import {Link,useLocation} from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';


function genMenuItem(key,to,icon,txt){
    return (
        <Menu.Item key={key} icon={icon}>
            <Link to={to} > {txt}</Link>
        </Menu.Item>
    );
}

function MenuList(props) {
    const p = useLocation();
    console.log(p);
    return (
        <Menu theme="dark" mode="inline" selectedKeys={[p.pathname]} defaultOpenKeys={['demo-react']}>
            {genMenuItem('/','/',<UserOutlined />,'欢迎')}
            <SubMenu key="demo-react" icon={<UserOutlined />} title="React Demos" >
            {genMenuItem('/react-demo/chess','react-demo/chess',null,'下棋小游戏')}
            </SubMenu>
        </Menu>
    );
};

export default MenuList;


