import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircleHeart, Menu, X, Phone, UsersRound, ArrowRight, Leaf, ShoppingBag, Activity, User, Heart } from "lucide-react";
import { ZALO_LINK, PHONE_NUMBER } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-md shadow-brand-200">
              <span className="text-white font-serif font-bold text-xl">H</span>
            </div>
            <div>
              <span className="text-xl font-bold font-serif text-brand-700 block tracking-tight flex items-center gap-1">SỐNG KHỎE <Leaf className="w-4 h-4 text-emerald-500 animate-pulse" /></span>
              <span className="text-xs font-semibold text-brand-500 tracking-wider block -mt-1">CÙNG HỒNG</span>
            </div>
          </div>

          {/* Navigation Links for Desktop with Beautiful Icons */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-600">
            <a href="#loi-ich" className="hover:text-brand-600 transition-colors py-2 flex items-center gap-1">
              <Leaf className="w-4 h-4 text-emerald-500" /> Cam Kết
            </a>
            <a href="#san-pham" className="hover:text-brand-600 transition-colors py-2 flex items-center gap-1">
              <ShoppingBag className="w-4 h-4 text-emerald-500" /> Sản Phẩm
            </a>
            <a href="#quiz" className="hover:text-brand-600 transition-colors py-2 flex items-center gap-1">
              <Activity className="w-4 h-4 text-emerald-500" /> Đánh Giá Sức Khỏe
            </a>
            <a href="#ve-chung-toi" className="hover:text-brand-600 transition-colors py-2 flex items-center gap-1">
              <User className="w-4 h-4 text-emerald-500" /> Chị Hồng
            </a>
            <a href="#goc-nhin" className="hover:text-brand-600 transition-colors py-2 flex items-center gap-1">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/10" /> Nhận Xét
            </a>
          </nav>

          {/* Highlighted CTA Button on Top */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
              className="text-brand-600 font-bold text-sm flex items-center gap-1.5 hover:text-brand-700 transition-colors bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100"
            >
              <Phone className="w-4 h-4 text-brand-500 animate-[bounce_2s_infinite]" /> {PHONE_NUMBER}
            </a>
            <motion.a
              id="top-cta-button"
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white font-semibold text-sm bg-linear-to-r from-emerald-500 via-brand-500 to-brand-600 hover:from-emerald-600 hover:to-brand-700 shadow-md shadow-emerald-200 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-none group-hover:translate-x-0 transition-transform duration-1000 ease-out animate-[pulse-slow_2s_infinite]"></span>
              <UsersRound className="w-4 h-4 mr-2" />
              <span>VÀO GROUP ZALO NHẬN QUÀ 🎁</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.a
              id="mobile-top-cta-button"
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 shadow-xs animate-pulse"
            >
              <MessageCircleHeart className="w-3.5 h-3.5 mr-1" />
              <span>ZALO GROUP</span>
            </motion.a>
            <button
              id="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-600 p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-brand-100 px-4 pt-4 pb-6 space-y-4 shadow-inner"
        >
          <div className="flex flex-col space-y-3">
            <a href="#loi-ich" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-600 text-sm font-semibold py-2 border-b border-gray-100 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-500" /> Cam Kết
            </a>
            <a href="#san-pham" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-600 text-sm font-semibold py-2 border-b border-gray-100 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-500" /> Sản Phẩm
            </a>
            <a href="#quiz" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-600 text-sm font-semibold py-2 border-b border-gray-100 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" /> Đánh Giá Sức Khỏe
            </a>
            <a href="#ve-chung-toi" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-600 text-sm font-semibold py-2 border-b border-gray-100 flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-500" /> Chị Hồng
            </a>
            <a href="#goc-nhin" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-brand-600 text-sm font-semibold py-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/10" /> Nhận Xét
            </a>
          </div>
          
          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Tư vấn trực tiếp:</span>
              <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-brand-600 font-bold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {PHONE_NUMBER}
              </a>
            </div>
            <a
              id="mobile-drawer-cta"
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold bg-brand-600 hover:bg-brand-700 shadow-md text-sm"
            >
              <UsersRound className="w-4 h-4 mr-2" />
              <span>THAM GIA GROUP ZALO NGAY</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
