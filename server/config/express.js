import path from 'path';
import express from 'express';

export default (app) => {
  app.use('/dist', express.static(path.join(__dirname, 'public')));
}