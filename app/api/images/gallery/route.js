import { promises as fs } from 'fs';
import path from 'path';

const EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

const FALLBACK = [
    '/gallery/1.webp',
    '/gallery/2.webp',
    '/gallery/3.webp',
    '/gallery/4.webp',
    '/gallery/5.webp',
    '/gallery/6.webp',
    '/gallery/7.webp',
    '/gallery/8.webp',
    '/gallery/9.webp',
    '/gallery/10.webp',
    '/gallery/11.webp',
    '/gallery/12.webp',
    '/gallery/13.webp',
    '/gallery/14.webp',
];

export async function GET() {
    try {
        const dir = path.join(process.cwd(), 'public', 'gallery');
        const files = await fs.readdir(dir);
        const images = files
            .filter((f) => EXTS.includes(path.extname(f).toLowerCase()))
            .map((f) => `/gallery/${f}`);
        return Response.json({ images: images.length ? images : FALLBACK });
    } catch {
        return Response.json({ images: FALLBACK });
    }
}
