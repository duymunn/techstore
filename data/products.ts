// Định nghĩa kiểu dữ liệu cho sản phẩm
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  image: string;
  description?: string;
  specs?: {
    cpu?: string;
    ram?: string;
    storage?: string;
    gpu?: string;
    screen?: string;
    [key: string]: string | undefined;
  };
  inStock: boolean;
  featured: boolean;
}

// Dữ liệu sản phẩm mẫu
export const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Asus ROG Strix G15 (2025)',
    price: 25990000,
    originalPrice: 28990000,
    category: 'Laptop',
    brand: 'Asus',
    image: '/placeholder.png',
    description: 'Laptop gaming cao cấp với hiệu năng mạnh mẽ và tản nhiệt hiệu quả.',
    specs: {
      cpu: 'AMD Ryzen 9 8900HX',
      ram: '32GB DDR5',
      storage: '1TB SSD',
      gpu: 'NVIDIA RTX 4080 16GB',
      screen: '15.6" QHD 240Hz'
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'PC Gaming RTX 4070',
    price: 32990000,
    originalPrice: 35990000,
    category: 'PC',
    brand: 'Custom',
    image: '/placeholder.png',
    description: 'Máy tính để bàn gaming hiệu năng cao với thiết kế tuyệt đẹp.',
    specs: {
      cpu: 'Intel Core i7-14700K',
      ram: '32GB DDR5',
      storage: '2TB SSD',
      gpu: 'NVIDIA RTX 4070 12GB',
      psu: '850W Gold'
    },
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Màn hình Samsung Odyssey G7',
    price: 12990000,
    originalPrice: 14990000,
    category: 'Màn hình',
    brand: 'Samsung',
    image: '/placeholder.png',
    description: 'Màn hình gaming cong với tốc độ làm mới cao và độ phản hồi cực nhanh.',
    specs: {
      size: '32 inch',
      resolution: '2560 x 1440',
      refreshRate: '240Hz',
      panel: 'VA',
      response: '1ms'
    },
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: 'Bàn phím cơ Logitech G Pro',
    price: 2990000,
    originalPrice: 3490000,
    category: 'Phụ kiện',
    brand: 'Logitech',
    image: '/placeholder.png',
    description: 'Bàn phím cơ chuyên game với thiết kế nhỏ gọn và switch GX Blue.',
    specs: {
      type: 'Mechanical',
      switch: 'GX Blue',
      layout: 'TKL',
      rgb: 'Có',
      connection: 'USB-C'
    },
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: 'Laptop MSI Katana GF66',
    price: 21990000,
    originalPrice: 23990000,
    category: 'Laptop',
    brand: 'MSI',
    image: '/placeholder.png',
    description: 'Laptop gaming hiệu năng cao với thiết kế đẹp mắt.',
    specs: {
      cpu: 'Intel Core i7-13700H',
      ram: '16GB DDR5',
      storage: '512GB SSD',
      gpu: 'NVIDIA RTX 4060 8GB',
      screen: '15.6" FHD 144Hz'
    },
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: 'Chuột Gaming Logitech G Pro X Superlight',
    price: 2590000,
    originalPrice: 2990000,
    category: 'Phụ kiện',
    brand: 'Logitech',
    image: '/placeholder.png',
    description: 'Chuột gaming không dây siêu nhẹ với cảm biến HERO 25K.',
    specs: {
      sensor: 'HERO 25K',
      connection: 'Wireless',
      weight: '63g',
      battery: '70 giờ',
      rgb: 'Không'
    },
    inStock: true,
    featured: false
  }
];

// Hàm lấy sản phẩm theo ID
export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

// Hàm lấy danh sách sản phẩm theo danh mục
export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

// Hàm lấy sản phẩm nổi bật
export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}