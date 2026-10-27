import {readFile} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projects = JSON.parse(await readFile('src/data/projects.json','utf8'));
const source = projects.find(project => project.image)?.image;
if (!source) throw new Error('A real project image is required for the social preview.');
const publicDir = path.resolve('public');
const file = path.resolve(publicDir, `.${source}`);
if (!file.startsWith(`${publicDir}${path.sep}`)) throw new Error('Social image must be inside public/.');
await sharp(file).rotate().resize(1200,630,{fit:'cover'}).jpeg({quality:85,mozjpeg:true}).toFile('public/social-preview.jpg');
console.log('Generated 1200x630 project sharing image.');
