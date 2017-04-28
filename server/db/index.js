import mongoose from 'mongoose';
import { URL } from '../../config/db';
import controllers from './controllers';

const connect = () => {
  console.log(URL);
  mongoose.connect(URL);
  console.log(controllers);
};

export {
  connect,
  controllers,
};
