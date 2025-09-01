import dotenv from 'dotenv';

dotenv.config({
  quiet: true,
});

export const BACKEND_URL = process.env.BACKEND_URL;
