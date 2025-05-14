"use client";

import React, { useEffect, useState } from 'react';
import { ShoppingCart, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface CartNotificationProps {
  productName?: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function CartNotification({
  productName,
  isVisible,
  onClose
}: CartNotificationProps) {
  const { totalItems } = useCart();
  const [animationClass, setAnimationClass] = useState('translate-y-full opacity-0');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isVisible) {
      // Hiển thị animation
      setAnimationClass('translate-y-0 opacity-100');
      
      // Tự động đóng sau 5 giây
      timer = setTimeout(() => {
        setAnimationClass('translate-y-full opacity-0');
        setTimeout(onClose, 300); // Đợi animation hoàn thành trước khi đóng hoàn toàn
      }, 5000);
    } else {
      setAnimationClass('translate-y-full opacity-0');
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
      <div 
        className={`bg-white rounded-lg shadow-lg p-4 border border-green-100 transform transition-all duration-300 ${animationClass}`}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <ShoppingCart size={20} className="text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">Đã thêm vào giỏ hàng</h3>
          </div>
          <button 
            className="text-gray-400 hover:text-gray-600"
            onClick={() => {
              setAnimationClass('translate-y-full opacity-0');
              setTimeout(onClose, 300);
            }}
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="mb-3">
          {productName && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">{productName}</span> đã được thêm vào giỏ hàng.
            </p>
          )}
          <p className="text-sm text-gray-600">
            Giỏ hàng của bạn hiện có {totalItems} sản phẩm.
          </p>
        </div>
        
        <div className="flex justify-between">
          <button 
            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            onClick={() => {
              setAnimationClass('translate-y-full opacity-0');
              setTimeout(onClose, 300);
            }}
          >
            Tiếp tục mua hàng
          </button>
          <Link 
            href="/cart" 
            className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Xem giỏ hàng
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}