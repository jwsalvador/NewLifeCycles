import { isProduction } from './env';

export const URL = isProduction ? process.env.DB : 'mongodb://localhost:27017/newlifecycles'