import { BrowserRouter } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { Suspense } from 'react';
import GetRoute from './router';
dayjs.locale('zh-cn');

import { SimpleHome } from '@/pages/simpleHome';

function App() {
  if (import.meta.env.DEV && import.meta.env.VITE_SIMPLE_APP === 'TRUE') {
    return <SimpleHome />;
  }

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <GetRoute />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
