import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OUGRO — Desire, Reserved.',
  description: '희소한 향과 시간을 위한 OUGRO 프라이빗 아틀리에.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
