// page.tsx
import Link from 'next/link';

const routes = [
  { name: 'Alerts', path: '/alerts' },
  { name: 'Blocking Popup', path: '/blocking-popup' },
  { name: 'Color Randomizer', path: '/color-randomizer' },
  { name: 'Dark Mode', path: '/dark-mode' },
  { name: 'Hidden Search', path: '/hidden-search' },
  { name: 'Like Photo App', path: '/like-photo-app' },
  { name: 'Note App', path: '/note-app' },
  { name: 'Progress Bars', path: '/progress-bars' },
  { name: 'Signature App', path: '/sign-app' },
  { name: 'Subscribtion Dialog', path: '/subscribe-dialog' },
  { name: 'Testimonials App', path: '/testimonials-app' },
];

export default function HomePage() {
  return (
    <main className='p-4' style={{ padding: 'px' }}>
      <h1 className='text-center p-2'>Mini-Projects</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Route Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Path</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.path}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{route.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <Link href={route.path}>
                  {route.path}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
