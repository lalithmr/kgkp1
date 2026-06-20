import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KGKP Consultancy',
    short_name: 'KGKP',
    description: 'Chartered Accountants & Business Advisors',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#1B1C46',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/logo-light.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
