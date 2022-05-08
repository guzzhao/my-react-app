import { useAtom } from 'jotai';
import { useNavigate, Link } from 'react-router-dom';

import { userInfo } from '@/store/store_user';

const Login = () => {
  const [, setUser] = useAtom(userInfo);

  let handleSubmit = () => {
    setUser('admin111').then((e) => {
      console.log('login :', e);
      nav('/');
    });
  };

  let nav = useNavigate();
  return (
    <>
      {/* <label>账号</label>
      <input value={uname} />
      <label>密码</label>
      <input value={password} /> */}
      <button onClick={handleSubmit}>登录</button>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </>
  );
};

export default Login;
