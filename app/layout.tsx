import type { Metadata } from 'next';
import { Manrope, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MIZUHA | Hydrating Barrier Serum',
  description:
    'うるおいを抱え込み、みずみずしい肌印象へ導く架空のスキンケアブランド「MIZUHA」のポートフォリオLP。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${manrope.variable} ${notoSansJp.variable}`}>
        {children}
      </body>
    </html>
  );
}
