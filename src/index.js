import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import generateETag from 'etag';
import fresh from 'fresh';
import http from 'http';

setInterval(function() {
  http.get('http://pep-pizza.herokuapp.com');
}, 300000); // Keep the heroku app alive

import Home from './Home';
import WhoAreYou from './WhoAreYou';

import render from './render';

const app = express();

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

const renderPage = ({ req, page }) =>
  render({
    page,
    combination: req.query.combination,
    url: `${req.protocol}://${req.get('host')}${req.path}`,
    staticUrl: `${req.protocol}://${req.get('host')}/static`
  });

const sendPage = ({ page, req, res }) => {
  const etag = generateETag(page);

  if (fresh(req.headers, { etag })) {
    res.statusCode = 304;
    res.end();

    return;
  }

  res.setHeader('ETag', etag);

  return res.send(page);
};

app.get('/get-to-know-me', (req, res) => {
  const page = renderPage({ req, page: WhoAreYou });
  sendPage({ page, req, res });
});

app.get('/', (req, res) => {
  const page = renderPage({ req, page: Home });
  sendPage({ page, req, res });
});

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started.');
});
