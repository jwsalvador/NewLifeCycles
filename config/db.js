import { isProduction } from './env';

export const URL = isProduction ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/newlifecycles'