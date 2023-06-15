import express from 'express';

import 'reflect-metadata';
import ITest from './server/application/ITest';
import Container from './server/IoC';

const container = Container.get(ITest);

const app = express();
const port = 3000;

app.get('/', (req, res) => container.test(req, res));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
