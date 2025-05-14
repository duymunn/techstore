"use client";

import React from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck, RotateCw, Award, Users, Map } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Về TechStore</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Chúng tôi cung cấp sản phẩm công nghệ chính hãng với giá tốt nhất cùng dịch vụ chăm sóc khách hàng chuyên nghiệp.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Câu chuyện của chúng tôi</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  TechStore được thành lập vào năm 2018 với sứ mệnh mang đến những sản phẩm công nghệ chất lượng cao với giá cả hợp lý cho người tiêu dùng Việt Nam.
                </p>
                <p className="text-gray-600 mb-4">
                  Với đội ngũ nhân viên nhiệt tình, có kinh nghiệm và chuyên môn cao, chúng tôi luôn nỗ lực để mang đến dịch vụ tốt nhất cho khách hàng.
                </p>
                <p className="text-gray-600">
                  Sau hơn 5 năm hoạt động, TechStore đã trở thành đối tác tin cậy của hàng nghìn khách hàng và các thương hiệu công nghệ hàng đầu thế giới.
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Giá trị cốt lõi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chất lượng</h3>
              <p className="text-gray-600">
                Chúng tôi cam kết chỉ cung cấp những sản phẩm chính hãng, chất lượng cao từ các thương hiệu uy tín.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Khách hàng</h3>
              <p className="text-gray-600">
                Khách hàng là trọng tâm trong mọi hoạt động của chúng tôi. Sự hài lòng của khách hàng là thước đo thành công.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Uy tín</h3>
              <p className="text-gray-600">
                Sự trung thực và minh bạch là nền tảng cho mọi giao dịch và mối quan hệ của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Tại sao chọn TechStore?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="mr-4 text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">Sản phẩm chính hãng</h3>
                <p className="text-gray-600">
                  100% sản phẩm được nhập khẩu chính hãng, có đầy đủ giấy tờ, hóa đơn và tem nhãn.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-blue-600">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">Giao hàng nhanh chóng</h3>
                <p className="text-gray-600">
                  Giao hàng toàn quốc trong vòng 24-48 giờ kể từ khi đặt hàng.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-blue-600">
                <RotateCw size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">Đổi trả dễ dàng</h3>
                <p className="text-gray-600">
                  Chính sách đổi trả linh hoạt trong vòng 7 ngày kể từ khi nhận hàng.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">Bảo hành chuyên nghiệp</h3>
                <p className="text-gray-600">
                  Dịch vụ bảo hành tận tâm với đội ngũ kỹ thuật viên lành nghề.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-blue-600">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">Tư vấn chuyên sâu</h3>
                <p className="text-gray-600">
                  Đội ngũ tư vấn viên nhiệt tình, am hiểu sâu sắc về sản phẩm.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-blue-600">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">Giá cả cạnh tranh</h3>
                <p className="text-gray-600">
                  Cam kết mang đến giá tốt nhất thị trường cho sản phẩm chính hãng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stores */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Hệ thống cửa hàng</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <Map size={24} />
              </div>
              <h3 className="font-bold mb-2">TechStore Đống Đa</h3>
              <p className="text-gray-600 mb-2">123 Đường Láng, Đống Đa, Hà Nội</p>
              <p className="text-gray-600 mb-2">Điện thoại: 024.3123.4567</p>
              <p className="text-gray-600">Giờ mở cửa: 8:00 - 21:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <Map size={24} />
              </div>
              <h3 className="font-bold mb-2">TechStore Cầu Giấy</h3>
              <p className="text-gray-600 mb-2">45 Xuân Thủy, Cầu Giấy, Hà Nội</p>
              <p className="text-gray-600 mb-2">Điện thoại: 024.3987.6543</p>
              <p className="text-gray-600">Giờ mở cửa: 8:00 - 21:00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-3">
                <Map size={24} />
              </div>
              <h3 className="font-bold mb-2">TechStore Thanh Xuân</h3>
              <p className="text-gray-600 mb-2">88 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
              <p className="text-gray-600 mb-2">Điện thoại: 024.3456.7890</p>
              <p className="text-gray-600">Giờ mở cửa: 8:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hãy trải nghiệm dịch vụ của chúng tôi ngay hôm nay</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ghé thăm cửa hàng của chúng tôi hoặc mua sắm trực tuyến để được tư vấn và hỗ trợ tốt nhất.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/products" className="bg-white text-blue-700 px-8 py-3 font-medium rounded hover:bg-blue-50 transition-colors">
              Mua sắm ngay
            </Link>
            <Link href="/contact" className="bg-transparent border border-white text-white px-8 py-3 font-medium rounded hover:bg-blue-600 transition-colors">
              Liên hệ với chúng tôi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}