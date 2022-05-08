import { Layout, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const Right = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        Bill is a cat.!!
        <div id="main">ceshi</div>
        <div>
          <p> 😫 </p>
          <Outlet />
        </div>
      </div>
    </Content>
  );
};
export default Right;
