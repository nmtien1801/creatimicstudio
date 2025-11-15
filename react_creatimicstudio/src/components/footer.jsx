import React, { useState } from "react";
import { Phone, Truck, RefreshCw, MessageSquare, Tag } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
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

    return (
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
    );
}
