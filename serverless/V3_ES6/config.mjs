// import  'dotenv/config';
import dotenv from 'dotenv'
import path from 'path'

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

export const profile = process.env.PROFILE;
export const table = process.env.TABLE;
export const region = process.env.REGION;
export const ssoprofile = process.env.SSOPROFILE;
export const local = process.env.LOCAL;