import { isProduction } from './env';

export const URL = isProduction ? '' : 'mongodb://localhost:27017/newlifecycles'