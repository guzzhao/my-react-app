## mock msw

```js
rest.get();
rest.post();
rest.put();
rest.patch();
rest.delete();
rest.options();

rest.post('/login', (req, res, ctx) => {
  // request response context

  sessionStorage.setItem('is-authenticated', 'true');
  return res(
    ctx.status(200),
    ctx.json({
      a: 1,
      msw: true,
      msw2: false
    })
  );
}),
  rest.get('/users/*', responseResolver); //带*
  rest.post('/author/:authorId/:postId', responseResolver),

  //request 请求参数  req.params 路径参数   req.body  req.cookies
  req.url.searchParams.get('id')
  req.body['username']
  //response
  res.once(ctx.json({ id: 'abc-123' })) //只响应一次
  res.networkError('Failed to connect') //mock 网络错误
  //context

  return res(
    ctx.status(404) //响应状态
    ctx.set('Content-Type', 'application/hal+json') //响应头 多值用json
    ctx.json({})
    ctx.delay(2000),  //空为随机
    ctx.fetch(req) //执行请求


    )

```
