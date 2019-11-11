import { WebApp } from 'meteor/webapp';

import polka from 'polka';

const app = polka();

app.get('/hello', (req, res) => {
  console.log('Polka received a request 🎉')
  res.end();
});

WebApp.connectHandlers.use(app.handler);
