export const ENV = process.env.NODE_ENV || 'development';

export const isProduction = ENV === 'production';

export const PORT = process.env.PORT || '3000';