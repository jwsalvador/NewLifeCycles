import mongoose from 'mongoose';
import { URL } from '../../config/db';
import controllers from './controllers';

const connect = () => {
  mongoose.connect(URL);
  console.log(controllers);
};

export {
  connect,
  controllers,
};
