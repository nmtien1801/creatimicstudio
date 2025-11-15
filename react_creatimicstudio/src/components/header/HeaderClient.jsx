import React, { useState } from 'react';
import { Menu, Search, Phone, ChevronDown } from 'lucide-react';

const MegaMenu = ({ categories }) => {
    const [openCategory, setOpenCategory] = useState(null);
console.log('sssss ', categories);

    const renderSubMenu = (subs) => {
        if (!subs || subs.length === 0) return null;

        return (
            <div className="relative group/menu w-full max-w-xs xl:max-w-full z-30">
                <button className="flex items-center justify-between w-full h-full px-5 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold rounded-l-xl hover:from-orange-700 hover:to-pink-700 transition-all shadow-lg">
                    <span className="truncate">DANH MỤC</span>
                    <ChevronDown className="w-5 h-5 ml-2 group-hover/menu:rotate-180 transition-transform" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-40 hidden group-hover/menu:block">
                    <ul className="p-2 space-y-1">
                        {/* {categories && categories.map((cat) => (
                            <li
                                key={cat.name}
                                className="relative group rounded-lg hover:bg-gray-50"
                                onMouseEnter={() => setOpenCategory(cat.name)}
                                onMouseLeave={() => setOpenCategory(null)}
                            >
                                <a href="#" className="flex items-center justify-between p-3 text-gray-800 hover:text-orange-600 transition-all duration-200 font-medium text-sm">
                                    <span>{cat.name}</span>
                                    {cat.subs && cat.subs.length > 0 && (
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    )}
                                </a>
                                {renderSubMenu(cat.subs)}
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="relative group/menu w-full max-w-xs xl:max-w-full z-30">
            <button className="flex items-center justify-between w-full h-full px-5 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold rounded-l-xl hover:from-orange-700 hover:to-pink-700 transition-all shadow-lg">
                <span className="truncate">DANH MỤC</span>
                <ChevronDown className="w-5 h-5 ml-2 group-hover/menu:rotate-180 transition-transform" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-40 hidden group-hover/menu:block">
                <ul className="p-2 space-y-1">
                    {/* {categories.map((cat) => (
                        <li
                            key={cat.name}
                            className="relative group rounded-lg hover:bg-gray-50"
                            onMouseEnter={() => setOpenCategory(cat.name)}
                            onMouseLeave={() => setOpenCategory(null)}
                        >
                            <a href="#" className="flex items-center justify-between p-3 text-gray-800 hover:text-orange-600 transition-all duration-200 font-medium text-sm">
                                <span>{cat.name}</span>
                                {cat.subs.length > 0 && (
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                )}
                            </a>
                            {renderSubMenu(cat.subs)}
                        </li>
                    ))} */}
                </ul>
            </div>
        </div>
    );
};


export default function Header({ categories, isMobileMenuOpen, setIsMobileMenuOpen }) {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-xl">CS</span>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                            CREATIVE STUDIO
                        </h1>
                        <p className="text-xs text-gray-500 font-medium">Thiết bị thu âm chuyên nghiệp</p>
                    </div>
                </div>

                {/* Search Bar - Desktop */}
                <div className="flex-1 max-w-2xl mx-4 hidden md:flex rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100">
                    <input
                        type="text"
                        placeholder="Nhập sản phẩm tìm kiếm nhanh hơn..."
                        className="flex-1 px-6 py-3 text-gray-700 focus:outline-none bg-white"
                    />
                    <MegaMenu categories={categories} />
                    <button className="px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all flex items-center justify-center">
                        <Search className="w-5 h-5" />
                    </button>
                </div>

                {/* Contact Links */}
                <div className="hidden lg:flex space-x-8 text-sm text-gray-600 items-center">
                    <a href="tel:0372672396" className="flex items-center gap-2 hover:text-orange-600 transition-colors font-medium">
                        <Phone className="w-4 h-4 text-orange-600" />
                        037.2672.396 - Hotline đặt hàng
                    </a>
                    <a href="tel:0347577034" className="flex items-center gap-2 hover:text-orange-600 transition-colors font-medium">
                        <Phone className="w-4 h-4 text-orange-600" />
                        034.7577.034 - Hợp tác truyền thông
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative p-3 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-xl hover:scale-110 transition-all md:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>

            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-4">
                <div className="flex rounded-xl overflow-hidden border-2 border-gray-100 shadow-lg">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
                    />
                    <button className="px-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Overlay/Drawer) */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-2xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <h3 className="text-2xl font-black text-orange-600 mb-6 border-b pb-3">Menu</h3>
                        <nav>
                            <ul className="space-y-2">
                                {['TRANG CHỦ', 'GIỚI THIỆU', 'SẢN PHẨM', 'TIN TỨC', 'TUYỂN DỤNG', 'LIÊN HỆ'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="block p-3 text-gray-800 font-bold hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="mt-8 pt-4 border-t">
                            <h4 className="font-bold text-gray-800 mb-2">Danh mục sản phẩm</h4>
                            <ul>
                                {/* {categories.map((cat, index) => (
                                    <li key={index}>
                                        <a href="#" className="block py-2 text-sm text-gray-600 hover:text-orange-600">{cat.name}</a>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </div>
                </div>
            )}


            {/* Navigation Menu */}
            <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 hidden md:block">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex space-x-2">
                        {['TRANG CHỦ', 'GIỚI THIỆU', 'SẢN PHẨM', 'TIN TỨC', 'TUYỂN DỤNG', 'LIÊN HỆ'].map((item, i) => (
                            <a
                                key={item}
                                href="#"
                                className={`relative px-6 py-4 text-sm font-bold transition-all ${i === 0 ? 'text-white' : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item}
                                {i === 0 && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}