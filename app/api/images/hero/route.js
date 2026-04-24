import { promises as fs } from 'fs'
import path from 'path'

const EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

const FALLBACK = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80',
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1800&q=80',
  'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1800&q=80',
]

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'hero')
    const files = await fs.readdir(dir)
    const images = files.filter(f => EXTS.includes(path.extname(f).toLowerCase())).map(f => `/hero/${f}`)
    return Response.json({ images: images.length ? images : FALLBACK })
  } catch {
    return Response.json({ images: FALLBACK })
  }
}
