import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Truck, RefreshCw, MessageSquare, Tag, Star, Heart, Menu } from 'lucide-react';

const productsData = [
    { id: 1, name: "Micro thu âm BM-800", price: "990.000₫", oldPrice: "1.290.000₫", rating: 4.8, img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop' },
    { id: 2, name: "Soundcard XOX K10", price: "1.250.000₫", oldPrice: "1.590.000₫", rating: 4.9, img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop' },
    { id: 3, name: "Tai nghe kiểm âm OneOdio", price: "750.000₫", oldPrice: "950.000₫", rating: 4.8, img: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop' },
    { id: 4, name: "Combo Livestream Cao Cấp", price: "3.500.000₫", oldPrice: "4.200.000₫", rating: 5.0, img: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=400&fit=crop' },
    { id: 5, name: "Loa kiểm âm Edifier R1280DB", price: "2.800.000₫", oldPrice: "3.200.000₫", rating: 4.8, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop' },
    { id: 6, name: "Phụ kiện chân đế Micro", price: "150.000₫", oldPrice: "190.000₫", rating: 4.9, img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop' },
    { id: 7, name: "Micro cài áo không dây", price: "690.000₫", oldPrice: "890.000₫", rating: 4.9, img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop' },
    { id: 8, name: "Mixer Yamaha MG10XU", price: "5.500.000₫", oldPrice: "6.200.000₫", rating: 4.9, img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop' },
    { id: 9, name: "Hộp Livestream Mini", price: "450.000₫", oldPrice: "590.000₫", rating: 4.8, img: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=400&fit=crop' },
    { id: 10, name: "Sản phẩm khác", price: "Liên hệ", oldPrice: "", rating: 5.0, img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop' },
];

const articlesData = [
    { title: "Hướng dẫn chọn Micro phù hợp cho giọng hát", img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop' },
    { title: "5 mẹo để Livestream chuyên nghiệp hơn", img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop' },
    { title: "Soundcard là gì? Chọn loại nào tốt?", img: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=400&fit=crop' },
];

const ProductCard = ({ product, isTopSeller = false }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className={`group bg-white rounded-2xl overflow-hidden transition-all duration-500 ${isTopSeller
            ? 'shadow-2xl hover:shadow-[0_20px_60px_rgba(249,115,22,0.3)] border-2 border-orange-400 hover:scale-[1.02]'
            : 'shadow-lg hover:shadow-2xl hover:-translate-y-2'
            }`}>
            <div className={`relative overflow-hidden ${isTopSeller ? 'h-64 sm:h-80' : 'h-48 sm:h-56'}`}>
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge */}
                {isTopSeller && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        TOP SELLER
                    </div>
                )}

                {product.oldPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        -25%
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-3 left-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
            </div>

            <div className="p-4 sm:p-5">
                <h3 className="text-gray-800 font-bold mb-2 line-clamp-2 text-base sm:text-lg min-h-[48px] group-hover:text-orange-600 transition-colors">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                    <span className={`font-black text-xl sm:text-2xl ${isTopSeller ? 'bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent' : 'text-orange-600'
                        }`}>
                        {product.price}
                    </span>
                    {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                    )}
                </div>

                <button className={`w-full py-2.5 sm:py-3 font-bold rounded-xl transition-all duration-300 ${isTopSeller
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'
                    }`}>
                    Mua ngay
                </button>
            </div>
        </div>
    );
};

const CategorySection = ({ title, products, bannerText, buttonLink, count, countText, isLoudspeaker = false }) => {
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                            {title}
                        </h2>
                        <p className="text-sm text-gray-600">{count} sản phẩm thuộc danh mục {countText}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Banner Dọc */}
                    <div className="md:col-span-3">
                        <div className="h-[400px] md:h-full min-h-[500px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center p-6 shadow-2xl relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
                            </div>
                            <div className="relative text-center text-white">
                                <div className="text-2xl font-black mb-4 leading-tight">{bannerText}</div>
                                <div className="text-sm opacity-90 mb-6">Khuyến mãi đặc biệt</div>
                                <div className="inline-flex items-center gap-2 text-sm font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-white/30 transition-all">
                                    Xem ngay →
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lưới Sản phẩm */}
                    <div className="md:col-span-9">
                        <div className={`grid grid-cols-2 ${isLoudspeaker ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-4 sm:gap-6`}>
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Nút Xem thêm */}
                <div className="mt-12 text-center">
                    <a href={buttonLink} className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Xem thêm sản phẩm
                    </a>
                </div>
            </div>
        </section>
    );
};

const ArticleCard = ({ article }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer hover:-translate-y-2">
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[56px] group-hover:text-orange-600 transition-colors">
                    {article.title}
                </h3>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm group/link">
                    Đọc thêm
                    <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

const ServiceCommitment = ({ icon: Icon, title, description }) => {
    return (
        <div className="group text-center p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default function TrangChu() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { text: 'Flash Sale 50%', gradient: 'from-purple-600 to-blue-600' },
        { text: 'Freeship toàn quốc', gradient: 'from-orange-600 to-pink-600' },
        { text: 'Mua 1 tặng 1', gradient: 'from-green-600 to-emerald-600' },
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const comboProducts = productsData.slice(0, 8);
    const accessoryProducts = productsData.slice(0, 8).sort(() => 0.5 - Math.random());
    const loaProducts = productsData.slice(4, 10).sort(() => 0.5 - Math.random());

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* MAIN CONTENT */}
            <main className="pb-20 md:pb-8">
                {/* Banner Slider */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
                    <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                        <div
                            className="flex h-full transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className={`flex-shrink-0 w-full h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                                    </div>
                                    <div className="relative text-center text-white px-6">
                                        <div className="text-5xl md:text-7xl font-black mb-4">{slide.text}</div>
                                        <div className="text-xl md:text-2xl opacity-90">Khuyến mãi đặc biệt trong tháng</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOP SELLER */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                TOP SELLER
                            </h2>
                            <p className="text-gray-600">Sản phẩm bán chạy nhất trong tháng</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {productsData.slice(0, 3).map(product => (
                                <ProductCard key={product.id} product={product} isTopSeller={true} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMBO LIVESTREAM */}
                <CategorySection
                    title="COMBO LIVESTREAM"
                    products={comboProducts}
                    bannerText="Combo Livestream Chất Lượng Cao"
                    buttonLink="#"
                    count={10}
                    countText="Bộ livestream, thu âm"
                />

                {/* PHỤ KIỆN THU ÂM */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                    PHỤ KIỆN THU ÂM
                                </h2>
                                <p className="text-sm text-gray-600">8 sản phẩm thuộc danh mục Phụ kiện thu âm</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {accessoryProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4 Banner Ngang */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { text: 'Miễn phí vận chuyển', gradient: 'from-blue-500 to-cyan-500', icon: '🚚' },
                            { text: 'Bảo hành 12 tháng', gradient: 'from-purple-500 to-pink-500', icon: '🛡️' },
                            { text: 'Hỗ trợ 24/7', gradient: 'from-orange-500 to-red-500', icon: '💬' },
                            { text: 'Thanh toán linh hoạt', gradient: 'from-green-500 to-emerald-500', icon: '💳' }
                        ].map((banner, i) => (
                            <div key={i} className={`group h-32 sm:h-40 bg-gradient-to-br ${banner.gradient} rounded-2xl flex flex-col items-center justify-center p-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                                <div className="relative text-center text-white">
                                    <div className="text-4xl mb-2">{banner.icon}</div>
                                    <span className="text-sm sm:text-base font-bold">{banner.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* LOA */}
                <CategorySection
                    title="LOA"
                    products={loaProducts}
                    bannerText="Loa Kiểm Âm Studio"
                    buttonLink="#"
                    count={6}
                    countText="Loa"
                    isLoudspeaker={true}
                />

                {/* BÀI VIẾT HỮU ÍCH */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                BÀI VIẾT HỮU ÍCH
                            </h2>
                            <p className="text-gray-600">Kiến thức và hướng dẫn về thiết bị thu âm</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {articlesData.map((article, index) => (
                                <ArticleCard key={index} article={article} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <ServiceCommitment
                            icon={Truck}
                            title="GIAO HÀNG TOÀN QUỐC"
                            description="Phục vụ giao hàng trên toàn quốc, đảm bảo nhanh chóng và đúng hẹn."
                        />
                        <ServiceCommitment
                            icon={Tag}
                            title="THANH TOÁN COD"
                            description="An tâm khi nhận hàng - chỉ thanh toán khi đã kiểm tra sản phẩm."
                        />
                        <ServiceCommitment
                            icon={MessageSquare}
                            title="HỖ TRỢ 24/7"
                            description="Luôn sẵn sàng tư vấn mọi thắc mắc về sản phẩm và dịch vụ."
                        />
                        <ServiceCommitment
                            icon={RefreshCw}
                            title="ĐỔI TRẢ TRONG 7 NGÀY"
                            description="Hỗ trợ đổi trả miễn phí trong 7 ngày nếu sản phẩm lỗi."
                        />
                    </div>

                    {/* Footer Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-xl">CS</span>
                                    <span className="text-white font-black text-xl">CS</span>
                                </div>
                                <span className="text-xl font-black">CREATIVE STUDIO</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Địa chỉ uy tín cung cấp thiết bị thu âm, livestream chuyên nghiệp tại Việt Nam.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Liên Hệ</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-orange-500" />
                                    <span>037.267.2396</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-orange-500" />
                                    <span>034.757.7034</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Chính Sách</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Chính sách bảo hành</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Chính sách đổi trả</a></li>
                                <li><a href="#" className="hover:text-orange-500 transition-colors">Điều khoản sử dụng</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="bg-gray-950 text-center py-4 text-sm text-gray-500">
                    © 2025 Creative Studio. All rights reserved. Designed with ❤️
                </div>
            </footer>
        </div>
    );
}