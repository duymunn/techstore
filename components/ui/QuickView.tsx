"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft, ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '@/data/products';

type QuickViewProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export default function QuickView({ product, isOpen, onClose }: QuickViewProps) {
  const [quantity, setQuantity] = useState(1);

  // Tính phần trăm giảm giá
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-5xl w-full mx-auto overflow-hidden">
          {/* Close button */}
          <button 
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 z-10"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <div className="relative w-full h-80">
                {/* Placeholder - Replace with Image component when you have actual images */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-lg">
                  {product.image === '/placeholder.png' ? `${product.category}` : ''}
                </div>

                {/* Discount badge */}
                {discountPercentage > 0 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                    -{discountPercentage}%
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-8">
              <div className="mb-2">
                <Link href={`/products?category=${product.category.toLowerCase()}`} className="text-blue-600 text-sm hover:underline">
                  {product.category}
                </Link>
              </div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FACC15" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">24 đánh giá</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()}₫</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice.toLocaleString()}₫</span>
                )}
              </div>

              {/* Short description */}
              <p className="text-gray-600 mb-6">
                {product.description || `${product.name} - sản phẩm chính hãng, bảo hành 24 tháng.`}
              </p>

              {/* Specs preview */}
              {product.specs && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Thông số chính:</h3>
                  <ul className="text-sm space-y-1">
                    {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                      <li key={key} className="flex">
                        <span className="text-gray-600 w-20">{key.toUpperCase()}:</span>
                        <span className="font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Số lượng</label>
                <div className="flex">
                  <button 
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md hover:bg-gray-100"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="w-16 h-10 border-t border-b border-gray-300 text-center" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button 
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md hover:bg-gray-100"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Thêm vào giỏ hàng
                </button>
                <button className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>

              {/* View details link */}
              <div className="mt-6 text-center">
                <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline flex items-center justify-center">
                  Xem chi tiết sản phẩm
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}