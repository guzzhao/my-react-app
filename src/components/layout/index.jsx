import { Layout } from 'antd';
import MyFooter from './footer';
import Head from './head';
import Main from './main';

const MyLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {' '}
      <Head />
      <Main />
      <MyFooter />
    </Layout>
  );
};
export default MyLayout;
