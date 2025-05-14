"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartNotification from '@/components/ui/CartNotification';
import { Product } from '@/data/products';

// Định nghĩa kiểu dữ liệu cho sản phẩm
type ProductProps = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating?: number;
  inStock?: boolean;
};

export default function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  category, 
  image,
  rating = 5,
  inStock = true
}: ProductProps) {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  
  // Tính phần trăm giảm giá
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;
    
  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!inStock) return;
    
    const product: Product = {
      id, 
      name, 
      price, 
      originalPrice, 
      category, 
      image, 
      inStock,
      brand: category, // Giả sử category là brand
      featured: false  // Giá trị mặc định
    };
    
    addToCart(product, 1);
    setShowNotification(true);
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full relative">
      {/* Badge giảm giá */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded z-10">
          -{discountPercentage}%
        </div>
      )}
      
      {/* Badge hết hàng nếu không còn hàng */}
      {!inStock && (
        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded z-10">
          Hết hàng
        </div>
      )}
      
      {/* Overlay khi hover */}
      <div className="relative overflow-hidden">
        <Link href={`/products/${id}`}>
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 w-full">
            {/* Khi có hình ảnh, thay thế div này bằng component Image */}
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
              {image === '/placeholder.png' ? `${category}` : ''}
            </div>
          </div>
        </Link>
        
        {/* Các nút action khi hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex justify-center space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" title="Thêm vào yêu thích">
            <Heart size={16} />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" title="Xem nhanh">
            <Eye size={16} />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" title="Thêm vào giỏ hàng">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
      
      {/* Thông tin sản phẩm */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-sm text-blue-600 font-medium mb-1">{category}</div>
        <h3 className="text-base font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 flex-grow">
          <Link href={`/products/${id}`}>
            {name}
          </Link>
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={14} 
                fill={star <= rating ? "#FACC15" : "none"}
                className="mr-0.5"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">(24)</span>
        </div>
        
        {/* Giá */}
        <div className="flex items-center mt-auto">
          <div className="text-lg font-bold text-blue-600">{price.toLocaleString()}₫</div>
          {originalPrice && (
            <div className="text-sm text-gray-500 line-through ml-2">{originalPrice.toLocaleString()}₫</div>
          )}
        </div>
        
        {/* Button mua ngay */}
        <button 
          className={`mt-3 w-full ${inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white py-2 rounded transition-colors flex items-center justify-center`}
          disabled={!inStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" />
          {inStock ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
        </button>
      </div>
      
      {/* Thông báo đã thêm vào giỏ hàng */}
      <CartNotification 
        productName={name}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}