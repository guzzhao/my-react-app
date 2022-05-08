import { Layout, Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Left = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/page1">Page1</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/page2">Page2</Link>
        </Menu.Item>
      </Menu>
      <div className="logo" onClick={onCollapse}>
        收起
      </div>
    </Sider>
  );
};

export default Left;
