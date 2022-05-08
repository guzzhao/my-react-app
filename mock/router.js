import { rest } from 'msw';
export const router = [
  rest.post('/getRoute', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json([
        {
          path: 'page2',
          element: 'pages/page2',
        },
      ]),
    );
  }),
];
