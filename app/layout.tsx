import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechStore - Cửa hàng máy tính và phụ kiện',
  description: 'Cung cấp sản phẩm công nghệ chính hãng với giá tốt nhất thị trường',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}