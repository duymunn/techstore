"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Check, AlertCircle } from 'lucide-react';
// Import CartItem type
import { useCart, CartItem } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, subtotal, discount, clearCart } = useCart();
  
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [shippingFee, setShippingFee] = useState(0);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    province: '',
    district: '',
    ward: '',
    address: '',
    note: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Xử lý thay đổi input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Xóa lỗi khi người dùng nhập
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Xử lý thay đổi phương thức vận chuyển
  const handleShippingMethodChange = (method: string) => {
    setShippingMethod(method);
    if (method === 'express') {
      setShippingFee(30000);
    } else {
      setShippingFee(0);
    }
  };

  // Xác thực form bước 1
  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) errors.fullName = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) errors.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^0\d{9}$/.test(formData.phone)) errors.phone = 'Số điện thoại không hợp lệ';
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email không hợp lệ';
    }
    
    if (!formData.province) errors.province = 'Vui lòng chọn tỉnh/thành phố';
    if (!formData.district) errors.district = 'Vui lòng chọn quận/huyện';
    if (!formData.ward) errors.ward = 'Vui lòng chọn phường/xã';
    if (!formData.address.trim()) errors.address = 'Vui lòng nhập địa chỉ chi tiết';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Xử lý tiến đến bước tiếp theo
  const handleNextStep = () => {
    if (step === 1 && !validateStep1()) return;
    
    setStep(step + 1);
  };

  // Xử lý quay lại bước trước
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  // Xử lý đặt hàng
  const handlePlaceOrder = () => {
    // Giả lập đặt hàng thành công
    alert('Đặt hàng thành công! Cảm ơn bạn đã mua hàng.');
    clearCart();
    router.push('/');
  };

  // Định dạng tiền tệ
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + '₫';
  };

  // Tính tổng tiền
  const total = subtotal - discount + shippingFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/cart" className="flex items-center text-blue-600 hover:underline">
            <ChevronLeft size={18} />
            <span>Quay lại giỏ hàng</span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-8 text-gray-900">Thanh toán</h1>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="relative flex-1">
              <div 
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > 1 ? <Check size={20} /> : 1}
              </div>
              <div className="text-center mt-2 text-sm font-medium">Thông tin</div>
            </div>
            <div className={`h-1 flex-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className="relative flex-1">
              <div 
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step > 2 ? <Check size={20} /> : 2}
              </div>
              <div className="text-center mt-2 text-sm font-medium">Vận chuyển</div>
            </div>
            <div className={`h-1 flex-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className="relative flex-1">
              <div 
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                3
              </div>
              <div className="text-center mt-2 text-sm font-medium">Thanh toán</div>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">Giỏ hàng của bạn đang trống</h2>
            <p className="text-gray-600 mb-6">Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.</p>
            <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block">
              Mua sắm ngay
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Checkout Form */}
            <div className="lg:w-2/3">
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Thông tin giao hàng</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        name="fullName"
                        className={`w-full border ${formErrors.fullName ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        className={`w-full border ${formErrors.phone ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        placeholder="0912345678"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email
                      </label>
                      <input 
                        type="email"
                        name="email"
                        className={`w-full border ${formErrors.email ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Tỉnh/Thành phố <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="province"
                        className={`w-full border ${formErrors.province ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        value={formData.province}
                        onChange={handleInputChange}
                      >
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        <option value="hanoi">Hà Nội</option>
                        <option value="hcm">TP. Hồ Chí Minh</option>
                        <option value="danang">Đà Nẵng</option>
                        <option value="haiphong">Hải Phòng</option>
                      </select>
                      {formErrors.province && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.province}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Quận/Huyện <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="district"
                        className={`w-full border ${formErrors.district ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        value={formData.district}
                        onChange={handleInputChange}
                      >
                        <option value="">Chọn Quận/Huyện</option>
                        <option value="dongda">Đống Đa</option>
                        <option value="hoankiem">Hoàn Kiếm</option>
                        <option value="caugiay">Cầu Giấy</option>
                        <option value="haibatrung">Hai Bà Trưng</option>
                      </select>
                      {formErrors.district && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.district}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Phường/Xã <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="ward"
                        className={`w-full border ${formErrors.ward ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        value={formData.ward}
                        onChange={handleInputChange}
                      >
                        <option value="">Chọn Phường/Xã</option>
                        <option value="langha">Láng Hạ</option>
                        <option value="kimma">Kim Mã</option>
                        <option value="vanphuc">Văn Phúc</option>
                        <option value="thanhcong">Thành Công</option>
                      </select>
                      {formErrors.ward && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.ward}</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">
                        Địa chỉ chi tiết <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        name="address"
                        className={`w-full border ${formErrors.address ? 'border-red-300' : 'border-gray-300'} rounded px-4 py-2 focus:outline-none focus:border-blue-500`}
                        placeholder="Số nhà, tên đường"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                      {formErrors.address && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">
                        Ghi chú
                      </label>
                      <textarea 
                        name="note"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 h-24"
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian giao hàng hoặc địa điểm giao hàng chi tiết hơn."
                        value={formData.note}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button 
                      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                      onClick={handleNextStep}
                    >
                      Tiếp tục
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Method */}
              {step === 2 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6">Phương thức vận chuyển</h2>
                  
                  <div className="space-y-4 mb-6">
                    <label className="block border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="shipping" 
                          value="standard" 
                          checked={shippingMethod === 'standard'}
                          onChange={() => handleShippingMethodChange('standard')}
                          className="mr-3 text-blue-600"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">Giao hàng tiêu chuẩn</h3>
                              <p className="text-sm text-gray-500">Nhận hàng trong 3-5 ngày</p>
                            </div>
                            <div className="font-medium">Miễn phí</div>
                          </div>
                        </div>
                      </div>
                    </label>
                    
                    <label className="block border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="shipping" 
                          value="express" 
                          checked={shippingMethod === 'express'}
                          onChange={() => handleShippingMethodChange('express')}
                          className="mr-3 text-blue-600"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">Giao hàng nhanh</h3>
                              <p className="text-sm text-gray-500">Nhận hàng trong 1-2 ngày</p>
                            </div>
                            <div className="font-medium">30.000₫</div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button 
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
                      onClick={handlePrevStep}
                    >
                      Quay lại
                    </button>
                    <button 
                      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                      onClick={handleNextStep}
                    >
                      Tiếp tục
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {step === 3 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-6">Phương thức thanh toán</h2>
                  
                  <div className="space-y-4 mb-6">
                    <label className="block border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="cod" 
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="mr-3 text-blue-600"
                        />
                        <div>
                          <h3 className="font-medium">Thanh toán khi nhận hàng (COD)</h3>
                          <p className="text-sm text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</p>
                        </div>
                      </div>
                    </label>
                    
                    <label className="block border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="bank_transfer" 
                          checked={paymentMethod === 'bank_transfer'}
                          onChange={() => setPaymentMethod('bank_transfer')}
                          className="mr-3 text-blue-600"
                        />
                        <div>
                          <h3 className="font-medium">Chuyển khoản ngân hàng</h3>
                          <p className="text-sm text-gray-500">Chuyển khoản đến tài khoản ngân hàng của chúng tôi</p>
                        </div>
                      </div>
                    </label>
                    
                    {paymentMethod === 'bank_transfer' && (
                      <div className="border border-gray-200 rounded-md p-4 ml-7">
                        <p className="mb-2">Vui lòng chuyển khoản đến tài khoản sau:</p>
                        <ul className="space-y-1 text-sm">
                          <li><span className="font-medium">Ngân hàng:</span> Vietcombank</li>
                          <li><span className="font-medium">Số tài khoản:</span> 1234567890</li>
                          <li><span className="font-medium">Chủ tài khoản:</span> CÔNG TY TNHH TECHSTORE</li>
                          <li><span className="font-medium">Nội dung:</span> [Họ tên] thanh toán đơn hàng #{Math.floor(Math.random() * 10000)}</li>
                        </ul>
                        <p className="mt-2 text-sm text-red-600">Lưu ý: Đơn hàng sẽ được xử lý sau khi chúng tôi xác nhận đã nhận được tiền.</p>
                      </div>
                    )}

                    <label className="block border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="credit_card" 
                          checked={paymentMethod === 'credit_card'}
                          onChange={() => setPaymentMethod('credit_card')}
                          className="mr-3 text-blue-600"
                        />
                        <div>
                          <h3 className="font-medium">Thanh toán bằng thẻ tín dụng/ghi nợ</h3>
                          <p className="text-sm text-gray-500">Thanh toán an toàn với Visa, Mastercard, JCB</p>
                        </div>
                      </div>
                    </label>
                    
                    {paymentMethod === 'credit_card' && (
                      <div className="border border-gray-200 rounded-md p-4 ml-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-gray-700 mb-2">Số thẻ</label>
                            <input 
                              type="text"
                              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">Tên chủ thẻ</label>
                            <input 
                              type="text"
                              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                              placeholder="NGUYEN VAN A"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">Ngày hết hạn</label>
                            <input 
                              type="text"
                              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-2">CVV</label>
                            <input 
                              type="text"
                              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <label className="block border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="momo" 
                          checked={paymentMethod === 'momo'}
                          onChange={() => setPaymentMethod('momo')}
                          className="mr-3 text-blue-600"
                        />
                        <div>
                          <h3 className="font-medium">Thanh toán qua MoMo</h3>
                          <p className="text-sm text-gray-500">Quét mã QR để thanh toán</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button 
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
                      onClick={handlePrevStep}
                    >
                      Quay lại
                    </button>
                    <button 
                      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                      onClick={handlePlaceOrder}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h2 className="text-lg font-bold mb-4">Tóm tắt đơn hàng</h2>
                
                <div className="mb-4">
                  {cartItems.map((item: CartItem, index: number) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-500 ml-1">x{item.quantity}</span>
                      </div>
                      <div className="font-medium">{formatCurrency(item.price * item.quantity)}</div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
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
                    <span>{shippingFee === 0 ? 'Miễn phí' : formatCurrency(shippingFee)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-lg">
                  <span>Tổng cộng</span>
                  <span className="text-blue-600">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}