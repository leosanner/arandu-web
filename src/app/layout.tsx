import type { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: {
    default: 'Arandu.IO',
    template: '%s | Arandu.IO',
  },
  description:
    'Aplicativo de planejamento com integração de IA. Rápido, fácil e eficaz.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-zinc-900 text-zinc-200'>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
