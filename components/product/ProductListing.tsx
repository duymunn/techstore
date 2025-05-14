import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Filter, Grid, List, Sliders, ChevronRight, Star } from 'lucide-react';

export default function ProductListing() {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Laptop</span>
        </div>
      </div>

      {/* Category Banner */}
      <div className="container mx-auto px-4 mb-6">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-48">
          <div className="absolute inset-0 flex items-center px-8">
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">Laptop</h1>
              <p className="text-gray-300">Laptop gaming, laptop văn phòng và laptop cao cấp</p>
            </div>
          </div>
          {/* Banner background image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-1/4 bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Bộ lọc</h3>
                <button 
                  className="lg:hidden text-gray-500"
                  onClick={() => setShowFilters(false)}
                >
                  ✕
                </button>
              </div>

              {/* Price Range */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="font-medium mb-2">Khoảng giá</div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Dưới 10 triệu</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>10 - 15 triệu</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>15 - 20 triệu</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>20 - 25 triệu</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Trên 25 triệu</span>
                  </label>
                </div>
              </div>

              {/* Brands */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="font-medium mb-2">Thương hiệu</div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Asus</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>MSI</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Acer</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Dell</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>HP</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Lenovo</span>
                  </label>
                </div>
              </div>

              {/* CPU */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="font-medium mb-2">CPU</div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Intel Core i3</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Intel Core i5</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Intel Core i7</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Intel Core i9</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>AMD Ryzen 5</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>AMD Ryzen 7</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>AMD Ryzen 9</span>
                  </label>
                </div>
              </div>

              {/* RAM */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="font-medium mb-2">RAM</div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>4GB</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>8GB</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>16GB</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>32GB</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>64GB trở lên</span>
                  </label>
                </div>
              </div>

              {/* Graphics */}
              <div>
                <div className="font-medium mb-2">Card đồ họa</div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>NVIDIA GeForce RTX 4050</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>NVIDIA GeForce RTX 4060</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>NVIDIA GeForce RTX 4070</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>NVIDIA GeForce RTX 4080</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>AMD Radeon RX</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Intel Iris Xe</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Product Listing */}
          <div className="flex-1">
            {/* Sorting and View Controls */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex items-center mb-3 sm:mb-0">
                  {!showFilters && (
                    <button 
                      className="mr-3 text-gray-500 lg:hidden"
                      onClick={() => setShowFilters(true)}
                    >
                      <Filter size={20} />
                    </button>
                  )}
                  <span className="text-gray-700">Hiển thị 1-24 trong số 56 sản phẩm</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <select className="appearance-none bg-gray-100 px-4 py-2 pr-8 rounded-md focus:outline-none">
                      <option>Mới nhất</option>
                      <option>Giá: Thấp đến cao</option>
                      <option>Giá: Cao đến thấp</option>
                      <option>Bán chạy nhất</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
                  </div>
                  <div className="flex items-center border border-gray-200 rounded-md">
                    <button 
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid size={18} />
                    </button>
                    <button 
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(12).fill(0).map((_, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <div className="w-full h-48 bg-gray-300"></div>
                      </div>
                      {index % 3 === 0 && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                          -15%
                        </div>
                      )}
                      {index % 4 === 0 && (
                        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                          Mới
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-blue-600 font-medium mb-1">Laptop</div>
                      <h3 className="text-base font-semibold mb-2 hover:text-blue-600 transition-colors">
                        <Link href="/products/laptop-1">
                          {index % 2 === 0 
                            ? 'Laptop Asus ROG Strix G15 (2025)'
                            : 'Laptop MSI Katana GF66 (2025)'}
                        </Link>
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={14} fill="#FACC15" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(25)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-blue-600">
                          {(25.99 - (index % 5) * 2).toFixed(3)}.000đ
                        </div>
                        {index % 3 === 0 && (
                          <div className="text-sm text-gray-500 line-through">
                            {(28.99 - (index % 5) * 1.5).toFixed(3)}.000đ
                          </div>
                        )}
                      </div>
                      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {Array(8).fill(0).map((_, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 p-4">
                        <div className="relative">
                          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                            <div className="w-full h-48 md:h-full bg-gray-300"></div>
                          </div>
                          {index % 3 === 0 && (
                            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                              -15%
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-4 flex flex-col">
                        <div className="flex-1">
                          <div className="text-sm text-blue-600 font-medium mb-1">Laptop</div>
                          <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                            <Link href="/products/laptop-1">
                              {index % 2 === 0 
                                ? 'Laptop Asus ROG Strix G15 (2025) - AMD Ryzen 9, 32GB RAM, RTX 4080'
                                : 'Laptop MSI Katana GF66 (2025) - Intel Core i7, 16GB RAM, RTX 4060'}
                            </Link>
                          </h3>
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={16} fill="#FACC15" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 ml-1">(25)</span>
                          </div>
                          <ul className="text-sm text-gray-600 mb-4 space-y-1">
                            <li>• CPU: {index % 2 === 0 ? 'AMD Ryzen 9 8900HX' : 'Intel Core i7-13700H'}</li>
                            <li>• RAM: {index % 2 === 0 ? '32GB DDR5' : '16GB DDR5'}</li>
                            <li>• SSD: 1TB NVMe PCIe Gen4</li>
                            <li>• VGA: {index % 2 === 0 ? 'RTX 4080 16GB' : 'RTX 4060 8GB'}</li>
                            <li>• Màn hình: 15.6" QHD 240Hz</li>
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <div className="text-xl font-bold text-blue-600">
                              {(25.99 - (index % 5) * 2).toFixed(3)}.000đ
                            </div>
                            {index % 3 === 0 && (
                              <div className="text-sm text-gray-500 line-through">
                                {(28.99 - (index % 5) * 1.5).toFixed(3)}.000đ
                              </div>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded text-sm hover:bg-gray-200 transition-colors">
                              Chi tiết
                            </button>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 transition-colors">
                              Thêm vào giỏ hàng
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex">
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100">
                  &laquo;
                </button>
                <button className="w-10 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-blue-600 text-white">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center border-t border-b border-gray-300 hover:bg-gray-100">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center border-t border-b border-gray-300 hover:bg-gray-100">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100">
                  &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}