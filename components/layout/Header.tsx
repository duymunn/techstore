"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Optional */}
      <div className="bg-blue-700 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="hidden sm:block text-white">Miễn phí vận chuyển cho đơn hàng từ 2 triệu đồng</p>
            <div className="flex space-x-4">
              <a href="tel:1900xxxx" className="text-white hover:underline">Hotline: 1900 xxxx</a>
              <a href="/tracking" className="text-white hover:underline">Kiểm tra đơn hàng</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              className="mr-4 lg:hidden text-gray-500 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="flex items-center">
              {/* Khi có logo, thay thế div này bằng component Image */}
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-2">T</div>
              <span className="text-2xl font-bold text-blue-600">TechStore</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/products?category=laptop" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Laptop
            </Link>
            <Link href="/products?category=pc" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              PC
            </Link>
            <Link href="/products?category=components" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Linh kiện
            </Link>
            <Link href="/products?category=accessories" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Phụ kiện
            </Link>
            <Link href="/products?category=monitors" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              Màn hình
            </Link>
            <Link href="/sale" className="font-medium text-red-600 hover:text-red-700 transition-colors">
              Khuyến mãi
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <Link href="/account" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex">
              <User size={20} />
            </Link>
            <Link href="/cart" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="mt-4 relative">
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-blue-500"
              placeholder="Tìm kiếm sản phẩm..."
              autoFocus
            />
            <button className="absolute right-3 top-2 text-gray-400 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Category Bar - Optional */}
      <div className="border-t border-gray-200 py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link href="/products?brand=asus" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              Asus
            </Link>
            <Link href="/products?brand=msi" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              MSI
            </Link>
            <Link href="/products?brand=dell" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              Dell
            </Link>
            <Link href="/products?brand=hp" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              HP
            </Link>
            <Link href="/products?brand=acer" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              Acer
            </Link>
            <Link href="/products?brand=lenovo" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              Lenovo
            </Link>
            <Link href="/gaming" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
              Gaming
            </Link>
            <Link href="/office" className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
              Văn phòng
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="bg-white h-full w-80 max-w-full shadow-xl overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-xl">Menu</h2>
              <button 
                className="text-gray-500 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/products?category=laptop" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Laptop
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products?category=pc" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    PC
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products?category=components" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Linh kiện
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products?category=accessories" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Phụ kiện
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products?category=monitors" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Màn hình
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/sale" 
                    className="block p-2 hover:bg-gray-50 rounded text-red-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Khuyến mãi
                  </Link>
                </li>
                <li className="border-t pt-2 mt-2">
                  <Link 
                    href="/account" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tài khoản
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/cart" 
                    className="block p-2 hover:bg-gray-50 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Giỏ hàng
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}