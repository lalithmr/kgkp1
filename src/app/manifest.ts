import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KGKP Consultancy',
    short_name: 'KGKP',
    description: 'Chartered Accountants & Business Advisors',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#1F235F',
    icons: [
      {
        src: '/kgkp-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
