import {Menu} from 'antd';
import {
    UserOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
import {Link} from 'umi';
import SubMenu from 'antd/lib/menu/SubMenu';
import {withRouter,Location,useLocation} from 'umi';


function genMenuItem(key : string,to:string,icon:React.ReactElement | null,txt:string){
    return (
        <Menu.Item key={key} icon={icon}>
            <Link to={to} > {txt}</Link>
        </Menu.Item>
    );
}

function MenuList(props: any) {
    return (
        <Menu theme="dark" mode="inline" selectedKeys={[props.location.pathname]} defaultOpenKeys={['demo-react']}>
            {genMenuItem('/','/',<UserOutlined />,'欢迎')}
            <SubMenu key="demo-react" icon={<UserOutlined />} title="React Demos" >
            {genMenuItem('/react-demo/chess','react-demo/chess',null,'下棋小游戏')}
            </SubMenu>
        </Menu>
    );
};

export default withRouter(MenuList);


