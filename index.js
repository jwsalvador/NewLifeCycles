import express from 'express';

import { PORT, ENV } from './config/env';
import server from './server';

const app = server(express());

app.listen(PORT, () => {
  console.log(`LISTENING TO PORT ${PORT} ON ${ENV} ENVIRONMENT`);
});