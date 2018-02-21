import * as express from 'express';
import {Application} from 'express';
import {startApi} from './api/api';
import { apiError } from './api/apiError';

const app: Application = express(),
  porta = 8080;

startApi(app);

app.use(apiError);

app.listen(porta, () => {
  console.log(`Server in ascolto sulla porta ${porta}`);
});  