import { useRoutes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

// 登录验证
import RequireAuth from '../components/requireAuth';
import NoMatch from '../components/nomatch';
import Home from '../pages/home';
import Login from '../pages/login';
import Page1 from '../pages/page1';
import MyApi from '@/api';

let GetRoute = () => {
  let initRoute = [
    {
      path: '/',
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
      children: [
        {
          path: 'page1',
          index: true,
          element: <Page1 />,
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ];

  let [routerList, updateRouterList] = useState(initRoute);

  useEffect(() => {
    MyApi({ method: 'post', url: '/getRoute' }).then((req) => {
      let tempRouter = [...initRoute];

      tempRouter[0].children = [
        ...tempRouter[0].children,
        // eslint-disable-next-line max-nested-callbacks
        ...req.map((e) => {
          return {
            path: e.path,
            element: wrapSuspense(`../` + e.element),
          };
        }),
      ];

      updateRouterList(tempRouter);
    });
  }, []);

  return useRoutes(routerList);
};

function wrapSuspense(importer) {
  if (!importer) return undefined;

  const Component = lazy(() => import(/* @vite-ignore */ importer));
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

export default GetRoute;
