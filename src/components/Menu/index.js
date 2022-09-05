import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
function TopMenu() {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['home']} >
            <Link to={"/"}>
                <Menu.Item key="home" icon={<HomeOutlined />} align="middle">
                </Menu.Item>
            </Link>
        </Menu>
    )
}
export default TopMenu