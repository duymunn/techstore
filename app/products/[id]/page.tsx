import { Product } from '@/data/products';"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Star, ShoppingCart, Heart, Share2, Eye, Check } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import QuickView from '@/components/ui/QuickView';

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const productId = parseInt(params.id);
  const product = getProductById(productId);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  // Tính phần trăm giảm giá
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    addToCart(product, quantity);
    
    // Hiển thị thông báo đã thêm vào giỏ hàng
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  // Xử lý mua ngay
  const handleBuyNow = () => {
    addToCart(product, quantity);
    window.location.href = '/checkout';
  };

  // Định dạng tiền tệ
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN') + '₫';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-blue-600">Sản phẩm</Link>
          <span className="mx-2">/</span>
          <Link href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-blue-600">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden relative">
                <div className="bg-gray-100 h-96 flex items-center justify-center">
                  {/* Placeholder for product image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-xl">
                    {product.image === '/placeholder.png' ? `${product.category}` : ''}
                  </div>
                  
                  {/* Discount badge */}
                  {discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      -{discountPercentage}%
                    </div>
                  )}
                </div>
              </div>
              
              {/* Additional Images (can be replaced with actual thumbnails) */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-md cursor-pointer overflow-hidden bg-gray-100"
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#FACC15" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">5.0 (24 đánh giá)</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-500">Đã bán: 120</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">{formatCurrency(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{formatCurrency(product.originalPrice)}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    -{discountPercentage}%
                  </span>
                )}
              </div>

              {/* Quick Overview */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-2 text-gray-900">Thông tin chung:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Thương hiệu: <span className="font-medium">{product.brand}</span></li>
                  <li>• Bảo hành: <span className="font-medium">24 tháng</span></li>
                  <li>• Tình trạng: <span className="font-medium">{product.inStock ? 'Còn hàng' : 'Hết hàng'}</span></li>
                </ul>
              </div>

              {/* Specs Preview */}
              {product.specs && (
                <div className="border-t border-b border-gray-200 py-4 my-4">
                  {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex items-start mb-4 last:mb-0">
                      <div className="w-32 text-sm text-gray-700">{key.toUpperCase()}</div>
                      <div className="flex-1">{value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-6">
                <div className="font-medium mb-2">Số lượng</div>
                <div className="flex items-center">
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
                  />
                  <button 
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md hover:bg-gray-100"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <button 
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center relative"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} className="mr-2" />
                      Đã thêm vào giỏ
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} className="mr-2" />
                      Thêm vào giỏ hàng
                    </>
                  )}
                </button>
                <button 
                  className={`flex-1 ${product.inStock ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'} text-white py-3 px-6 rounded-md font-medium transition-colors`}
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                >
                  Mua ngay
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <Heart size={20} className="mr-1" />
                  <span className="text-sm">Yêu thích</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <Share2 size={20} className="mr-1" />
                  <span className="text-sm">Chia sẻ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button 
                className={`pb-4 text-lg font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('description')}
              >
                Mô tả sản phẩm
              </button>
              <button 
                className={`pb-4 text-lg font-medium ${activeTab === 'specification' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('specification')}
              >
                Thông số kỹ thuật
              </button>
              <button 
                className={`pb-4 text-lg font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Đánh giá
              </button>
            </div>
          </div>

          {/* Description Tab */}
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <h3>Giới thiệu về {product.name}</h3>
              <p>{product.description || `${product.name} là sản phẩm công nghệ hiện đại với hiệu năng vượt trội, thiết kế tinh tế và độ bền cao. Đây là lựa chọn lý tưởng cho người dùng đòi hỏi sự ổn định và mạnh mẽ trong công việc cũng như giải trí.`}</p>
              
              <p>Sản phẩm được thiết kế với chất lượng cao cấp, mang đến trải nghiệm người dùng tuyệt vời. Với các tính năng hiện đại, thiết bị đáp ứng mọi nhu cầu từ công việc văn phòng đến các tác vụ đồ họa hay chơi game.</p>
              
              <h3>Tính năng nổi bật</h3>
              <ul>
                <li>Hiệu năng cao với cấu hình mạnh mẽ</li>
                <li>Thiết kế sang trọng, chắc chắn</li>
                <li>Màn hình hiển thị sắc nét</li>
                <li>Thời lượng pin dài (đối với laptop)</li>
                <li>Tản nhiệt hiệu quả</li>
                <li>Khả năng nâng cấp linh hoạt</li>
              </ul>
              
              <h3>Đối tượng phù hợp</h3>
              <p>Sản phẩm phù hợp với nhiều đối tượng người dùng, từ doanh nhân, nhà thiết kế đồ họa đến game thủ. Với khả năng xử lý đa nhiệm mạnh mẽ, thiết bị đáp ứng tốt các nhu cầu sử dụng hàng ngày và các tác vụ nặng.</p>
            </div>
          )}

          {/* Specification Tab */}
          {activeTab === 'specification' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {product.specs ? (
                    Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="border-b border-gray-200">
                        <td className="py-3 text-gray-500 w-1/3">{key.toUpperCase()}</td>
                        <td className="py-3">{value}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="py-3 text-center text-gray-500">Chưa có thông số kỹ thuật chi tiết</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-6">
                  <div className="text-4xl font-bold text-blue-600">5.0</div>
                  <div className="flex text-yellow-400 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="#FACC15" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">24 đánh giá</div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold mb-4">Đánh giá từ người dùng</h3>
                
                {/* Sample Reviews */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Nguyễn Văn A</div>
                    <div className="text-sm text-gray-500">12/05/2025</div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="#FACC15" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Sản phẩm chất lượng cao, đóng gói cẩn thận, giao hàng nhanh.
                    Hiệu năng vượt trội so với mức giá, rất hài lòng với sản phẩm!
                  </p>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Trần Thị B</div>
                    <div className="text-sm text-gray-500">10/05/2025</div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill={star <= 5 ? "#FACC15" : "none"} />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Thiết kế đẹp, chạy mượt mà, pin trâu. Rất đáng tiền!
                  </p>
                </div>
                
                {/* Write Review Button */}
                <div className="text-center">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors">
                    Viết đánh giá
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto py-6 px-4 mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="w-8 h-8 bg-blue-600 rounded-md mr-3"></span>
          Sản phẩm tương tự
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* This would be filled with actual similar products using the ProductCard component */}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickView
          product={quickViewProduct}
          isOpen={showQuickView}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </div>
  );
}