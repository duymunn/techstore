"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2, ChevronLeft } from 'lucide-react';
// Import CartItem type
import { useCart, CartItem } from '@/context/CartContext';

export default function CartPage() {
  const { 
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    applyCoupon,
    discount,
    couponCode,
    removeCoupon
  } = useCart();
  
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [isRedeeming, setIsRedeeming] = useState(false);

  // Xử lý áp dụng mã giảm giá
  const handleApplyCoupon = () => {
    if (!couponInput.trim()) {
      setCouponError('Vui lòng nhập mã giảm giá');
      return;
    }

    setIsRedeeming(true);
    setCouponError('');

    // Giả lập thời gian kiểm tra mã
    setTimeout(() => {
      const success = applyCoupon(couponInput);
      if (!success) {
        setCouponError('Mã giảm giá không hợp lệ hoặc đã hết hạn');
      }
      setIsRedeeming(false);
    }, 800);
  };

  // Định dạng tiền tệ
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + '₫';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-gray-900">Giỏ hàng của bạn</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
                <div className="hidden md:grid md:grid-cols-12 bg-gray-50 p-4 border-b border-gray-200">
                  <div className="col-span-6 font-medium text-gray-800">Sản phẩm</div>
                  <div className="col-span-2 font-medium text-center text-gray-800">Đơn giá</div>
                  <div className="col-span-2 font-medium text-center text-gray-800">Số lượng</div>
                  <div className="col-span-2 font-medium text-right text-gray-800">Thành tiền</div>
                </div>

                {cartItems.map((item: CartItem) => (
                  <div key={item.id} className="p-4 border-b border-gray-200 last:border-b-0">
                    <div className="md:grid md:grid-cols-12 flex flex-col gap-4">
                      <div className="col-span-6 flex">
                        <div className="w-20 h-20 bg-gray-200 rounded flex-shrink-0 mr-4">
                          {/* Khi có hình ảnh, thay thế div này bằng component Image */}
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                            {item.image === '/placeholder.png' ? `${item.category}` : ''}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium hover:text-blue-600 transition-colors text-gray-800">
                            <Link href={`/products/${item.id}`}>{item.name}</Link>
                          </h3>
                          <button 
                            className="text-red-500 text-sm flex items-center mt-2"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={14} className="mr-1" />
                            Xóa
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center justify-center md:block">
                        <div className="md:hidden font-medium mr-2">Đơn giá:</div>
                        <div>
                          <div className="text-blue-600 font-medium">{formatCurrency(item.price)}</div>
                          {item.originalPrice && (
                            <div className="text-gray-500 text-sm line-through">{formatCurrency(item.originalPrice)}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center md:justify-center">
                        <div className="md:hidden font-medium mr-2">Số lượng:</div>
                        <div className="flex">
                          <button 
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-l hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            className="w-12 h-8 border-t border-b border-gray-300 text-center" 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            min="1"
                          />
                          <button 
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-r hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center justify-between md:justify-end">
                        <div className="md:hidden font-medium">Thành tiền:</div>
                        <div className="text-blue-600 font-medium">
                          {formatCurrency(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link href="/products" className="flex items-center text-blue-600 hover:underline">
                  <ChevronLeft size={18} />
                  <span>Tiếp tục mua hàng</span>
                </Link>
                <button 
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  onClick={clearCart}
                >
                  Xóa giỏ hàng
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Tóm tắt đơn hàng</h2>
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tạm tính</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Giảm giá</span>
                    <span>- {formatCurrency(discount)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Phí vận chuyển</span>
                    <span>Miễn phí</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="font-bold">Tổng tiền</span>
                  <span className="font-bold text-blue-600 text-xl">{formatCurrency(subtotal - discount)}</span>
                </div>
                <Link href="/checkout" className="block w-full bg-blue-600 text-white text-center py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Tiến hành thanh toán
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Mã giảm giá</h2>
                {couponCode ? (
                  <div className="mb-4">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-md flex justify-between items-center">
                      <div>
                        <div className="font-medium text-blue-700">{couponCode}</div>
                        <div className="text-sm text-blue-600">
                          {couponCode === 'FREESHIP' 
                            ? 'Miễn phí vận chuyển' 
                            : couponCode === 'DISCOUNT10' 
                              ? 'Giảm 10% tổng đơn hàng' 
                              : 'Giảm 20% tổng đơn hàng'
                          }
                        </div>
                      </div>
                      <button 
                        className="text-red-500 text-sm hover:text-red-700"
                        onClick={removeCoupon}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <div className="flex">
                      <input 
                        type="text" 
                        className={`flex-1 border ${couponError ? 'border-red-300' : 'border-gray-300'} rounded-l px-4 py-2 focus:outline-none focus:border-blue-500`}
                        placeholder="Nhập mã giảm giá"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                      />
                      <button 
                        className={`bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors ${isRedeeming ? 'opacity-70 cursor-not-allowed' : ''}`}
                        onClick={handleApplyCoupon}
                        disabled={isRedeeming}
                      >
                        {isRedeeming ? 'Đang áp dụng...' : 'Áp dụng'}
                      </button>
                    </div>
                    {couponError && (
                      <div className="text-red-500 text-sm">
                        {couponError}
                      </div>
                    )}
                    <div className="text-sm text-gray-500 mt-2">
                      Nhập mã DISCOUNT10, DISCOUNT20, hoặc FREESHIP để nhận ưu đãi
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">Giỏ hàng của bạn đang trống</h2>
            <p className="text-gray-600 mb-6">Khám phá các sản phẩm và thêm vào giỏ hàng của bạn.</p>
            <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block">
              Tiếp tục mua sắm
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}