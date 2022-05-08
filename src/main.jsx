import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'virtual:windi.css';
import 'antd/dist/antd.variable.min.css';
import './main.css';
const prepare = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('../mock');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
};

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
