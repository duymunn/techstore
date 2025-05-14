import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 footer">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About & Contact */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-2">T</div>
              TechStore
            </h2>
            <p className="text-gray-400 mb-4">Cung cấp sản phẩm công nghệ chính hãng với giá tốt nhất thị trường. Đa dạng mẫu mã từ các thương hiệu hàng đầu.</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400">123 Đường Láng, Đống Đa, Hà Nội</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <a href="tel:1900xxxx" className="text-gray-400 hover:text-white">Hotline: 1900 xxxx</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <a href="mailto:info@techstore.vn" className="text-gray-400 hover:text-white">Email: info@techstore.vn</a>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 after:bg-blue-600">Thông tin</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Giới thiệu</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Tin tức</Link></li>
              <li><Link href="/stores" className="text-gray-400 hover:text-white transition-colors">Hệ thống cửa hàng</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Tuyển dụng</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 after:bg-blue-600">Chính sách</h3>
            <ul className="space-y-2">
              <li><Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo hành</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">Chính sách vận chuyển</Link></li>
              <li><Link href="/return" className="text-gray-400 hover:text-white transition-colors">Chính sách đổi trả</Link></li>
              <li><Link href="/payment" className="text-gray-400 hover:text-white transition-colors">Chính sách thanh toán</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 after:bg-blue-600">Danh mục sản phẩm</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=laptop" className="text-gray-400 hover:text-white transition-colors">Laptop</Link></li>
              <li><Link href="/products?category=pc" className="text-gray-400 hover:text-white transition-colors">PC - Máy tính bàn</Link></li>
              <li><Link href="/products?category=components" className="text-gray-400 hover:text-white transition-colors">Linh kiện máy tính</Link></li>
              <li><Link href="/products?category=accessories" className="text-gray-400 hover:text-white transition-colors">Phụ kiện</Link></li>
              <li><Link href="/products?category=monitors" className="text-gray-400 hover:text-white transition-colors">Màn hình</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-3">Phương thức thanh toán</h3>
              <div className="flex space-x-3">
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">VISA</span>
                </div>
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">MC</span>
                </div>
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">JCB</span>
                </div>
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">ATM</span>
                </div>
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">COD</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Đối tác vận chuyển</h3>
              <div className="flex space-x-3">
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">GHN</span>
                </div>
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">GHTK</span>
                </div>
                <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
                  <span className="text-xs text-gray-800 font-bold">NINJA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 TechStore. Tất cả các quyền được bảo lưu.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sơ đồ trang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}