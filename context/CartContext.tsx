"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

// Định nghĩa kiểu dữ liệu cho mỗi mục trong giỏ hàng
export type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  category: string;
};

// Định nghĩa kiểu dữ liệu cho context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discount: number;
  couponCode: string | null;
}

// Tạo context với giá trị mặc định
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props cho CartProvider
interface CartProviderProps {
  children: ReactNode;
}

// Hàm Provider
export function CartProvider({ children }: CartProviderProps) {
  // State cho giỏ hàng
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  // Tải giỏ hàng từ localStorage khi component được mount
  useEffect(() => {
    // Xóa localStorage để bắt đầu với giỏ hàng trống (chỉ dùng khi phát triển)
    // localStorage.removeItem('cart');
    
    const savedCart = localStorage.getItem('cart');
    const savedCoupon = localStorage.getItem('coupon');
    const savedDiscount = localStorage.getItem('discount');

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error parsing cart from localStorage:', e);
      }
    }

    if (savedCoupon) {
      setCouponCode(savedCoupon);
    }

    if (savedDiscount) {
      try {
        setDiscount(JSON.parse(savedDiscount));
      } catch (e) {
        console.error('Error parsing discount from localStorage:', e);
      }
    }
  }, []);

  // Lưu giỏ hàng vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Lưu mã giảm giá và giá trị giảm vào localStorage
  useEffect(() => {
    if (couponCode) {
      localStorage.setItem('coupon', couponCode);
      localStorage.setItem('discount', JSON.stringify(discount));
    } else {
      localStorage.removeItem('coupon');
      localStorage.removeItem('discount');
    }
  }, [couponCode, discount]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        // Nếu có rồi, cập nhật số lượng
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Nếu chưa có, thêm mới
        return [...prev, {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity,
          image: product.image,
          category: product.category
        }];
      }
    });
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
    setCouponCode(null);
    setDiscount(0);
  };

  // Tính tổng số sản phẩm trong giỏ hàng
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Tính tổng tiền
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Áp dụng mã giảm giá
  const applyCoupon = (code: string): boolean => {
    // Kiểm tra mã giảm giá (ở đây là mã giảm giá cứng)
    if (code === "DISCOUNT10") {
      setCouponCode(code);
      setDiscount(subtotal * 0.1); // Giảm 10%
      return true;
    } else if (code === "DISCOUNT20") {
      setCouponCode(code);
      setDiscount(subtotal * 0.2); // Giảm 20%
      return true;
    } else if (code === "FREESHIP") {
      setCouponCode(code);
      setDiscount(30000); // Giảm phí ship 30k
      return true;
    }
    
    return false;
  };

  // Xóa mã giảm giá
  const removeCoupon = () => {
    setCouponCode(null);
    setDiscount(0);
  };

  // Giá trị trả về cho context
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    applyCoupon,
    removeCoupon,
    discount,
    couponCode
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Hook để sử dụng CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}