import { promises as fs } from 'fs'
import path from 'path'

const EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

const FALLBACK = [
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80',
  'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80',
  'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=900&q=80',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80',
  'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&q=80',
  'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
]

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery')
    const files = await fs.readdir(dir)
    const images = files.filter(f => EXTS.includes(path.extname(f).toLowerCase())).map(f => `/gallery/${f}`)
    return Response.json({ images: images.length ? images : FALLBACK })
  } catch {
    return Response.json({ images: FALLBACK })
  }
}
