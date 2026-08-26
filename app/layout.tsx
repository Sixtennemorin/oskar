import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oskar Bilvård | Bilvård och rekond i Kristinehamn',
  description: 'Oskar Bilvård i Kristinehamn erbjuder handtvätt, biltvätt och bilrekonditionering. Besök oss på Vegagatan 3 eller kontakta oss för en förfrågan.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Oskar Bilvård | Kristinehamn', description: 'Handtvätt, biltvätt och bilrekonditionering i Kristinehamn.', type: 'website', locale: 'sv_SE' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sv"><body>{children}</body></html>;
}
