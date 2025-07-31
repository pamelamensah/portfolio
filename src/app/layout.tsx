import './globals.css';
import type { Metadata } from 'next';
import '@/styles/animations.css';


export const metadata: Metadata = {
  title: "Pamela's Portfolio",
  description: "Built with love, code, and a sprinkle of magic ✨",
  icons: {
    icon: '/avatar.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
