import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  // Lấy danh sách sản phẩm nổi bật từ dữ liệu mẫu
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Vị trí cho hình ảnh Hero */}
          <div className="w-full h-full bg-cover bg-center">
            {/* Khi có hình ảnh, thay thế div này bằng component Image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="w-full md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Công nghệ hiện đại, giá cả hợp lý
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Mua sắm laptop, PC, và phụ kiện với ưu đãi độc quyền và bảo hành chính hãng
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="/products" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Mua ngay
                <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link href="/products?category=sale" className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors">
                Khuyến mãi
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 w-2/5 h-[500px]">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-700/60 z-10"></div>
            {/* Vị trí cho hình ảnh sản phẩm nổi bật */}
            <div className="relative h-full w-full">
              {/* Khi có hình ảnh, thay thế div này bằng component Image */}
              <div className="absolute inset-0 bg-blue-800/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Banners (New section) */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Giao hàng miễn phí</h3>
                <p className="text-sm text-gray-500">Cho đơn hàng từ 2 triệu</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Bảo hành chính hãng</h3>
                <p className="text-sm text-gray-500">24 tháng tại trung tâm bảo hành</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Đổi trả dễ dàng</h3>
                <p className="text-sm text-gray-500">7 ngày đầu tiên</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-md mr-3"></span>
              Sản phẩm nổi bật
            </h2>
            <Link href="/products" className="text-blue-600 hover:text-blue-700 hover:underline font-medium flex items-center">
              Xem tất cả
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sale Banner */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="md:w-1/2 p-8 md:p-12 text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Khuyến mãi mùa hè</h2>
              <p className="text-blue-100 mb-6">Giảm đến 30% cho tất cả laptop và PC gaming. Chỉ áp dụng đến hết tháng 6.</p>
              <Link href="/products?category=sale" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Mua ngay
              </Link>
            </div>
            <div className="hidden md:block absolute right-0 bottom-0 w-2/5 h-full">
              {/* Vị trí cho hình ảnh khuyến mãi */}
              <div className="w-full h-full bg-blue-500/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-md mr-3"></span>
              Danh mục sản phẩm
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Laptop', icon: '💻', link: '/products?category=laptop', description: 'Laptop gaming, văn phòng' },
              { title: 'PC Gaming', icon: '🖥️', link: '/products?category=pc', description: 'Máy tính đồ họa, gaming' },
              { title: 'Linh kiện', icon: '🔧', link: '/products?category=components', description: 'CPU, RAM, VGA, Mainboard' },
              { title: 'Phụ kiện', icon: '🎮', link: '/products?category=accessories', description: 'Chuột, bàn phím, tai nghe' },
              { title: 'Màn hình', icon: '🖥️', link: '/products?category=monitors', description: 'Màn hình gaming, đồ họa' },
              { title: 'Laptop văn phòng', icon: '💼', link: '/products?category=office-laptop', description: 'Mỏng nhẹ, thời lượng pin cao' },
              { title: 'Bàn ghế gaming', icon: '🪑', link: '/products?category=furniture', description: 'Bàn, ghế chuyên dụng' },
              { title: 'Thiết bị mạng', icon: '📡', link: '/products?category=networking', description: 'Router, Switch, Card mạng' }
            ].map((category) => (
              <Link href={category.link} key={category.title} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center group hover:border-blue-300">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-md mr-3"></span>
              Sản phẩm mới về
            </h2>
            <Link href="/products?sort=newest" className="text-blue-600 hover:text-blue-700 hover:underline font-medium flex items-center">
              Xem tất cả
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...featuredProducts].reverse().slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <span className="w-8 h-8 bg-blue-600 rounded-md mr-3"></span>
            Thương hiệu nổi bật
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {['Asus', 'MSI', 'Dell', 'HP', 'Acer', 'Lenovo'].map((brand) => (
              <div key={brand} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                <span className="text-xl font-bold text-gray-400">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Đăng ký nhận tin</h2>
              <p className="text-gray-300">Nhận thông tin khuyến mãi và sản phẩm mới nhất</p>
            </div>
            <div className="md:w-1/2">
              <div className="flex">
                <input 
                  type="email" 
                  className="flex-1 px-4 py-3 rounded-l-md focus:outline-none text-gray-900" 
                  placeholder="Email của bạn"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md font-medium hover:bg-blue-700 transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}