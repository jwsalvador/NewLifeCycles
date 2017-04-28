import { ENV } from './env';

export const URL = ENV === 'production' ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/newlifecycles'