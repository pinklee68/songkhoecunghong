import { Leaf, ShieldCheck, Users, Heart, Phone, Mail, MapPin, MessageCircle, ChevronUp } from "lucide-react";
import { PHONE_NUMBER, REPRESENTATIVE_NAME, ZALO_LINK } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-brand-700 text-white relative pt-16 pb-12 overflow-hidden">
      {/* Decorative faint circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -z-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl -z-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Poster Badges Row - GREEN BAR STYLE FROM THE POSTER */}
        <div className="bg-brand-600 rounded-3xl p-6 sm:p-8 border border-brand-500 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-500">
            
            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center mb-3">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="block font-bold text-sm sm:text-base tracking-wide text-white">THIÊN NHIÊN</span>
              <span className="text-xs text-emerald-200">LÀNH TÍNH</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="block font-bold text-sm sm:text-base tracking-wide text-white">AN TOÀN</span>
              <span className="text-xs text-emerald-200">HIỆU QUẢ</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <span className="block font-bold text-sm sm:text-base tracking-wide text-white">CHUYÊN GIA</span>
              <span className="text-xs text-emerald-200">UY TÍN</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <span className="block font-bold text-sm sm:text-base tracking-wide text-white">TẬN TÂM</span>
              <span className="text-xs text-emerald-200">ĐỒNG HÀNH</span>
            </div>

          </div>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-brand-600">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white text-brand-700 flex items-center justify-center font-serif font-bold text-xl shadow-md">
                H
              </div>
              <div>
                <span className="text-xl font-bold font-serif text-white tracking-tight block">SỐNG KHỎE</span>
                <span className="text-xs font-semibold text-emerald-300 tracking-wider block -mt-1 uppercase">CÙNG HỒNG</span>
              </div>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed max-w-md font-sans">
              Chúng tôi cung cấp các giải pháp chăm sóc sức khỏe chủ động chất lượng cao chiết xuất hoàn toàn từ dược liệu quý thiên nhiên. Mang đến cuộc sống khỏe mạnh, hạnh phúc trọn vẹn từng ngày.
            </p>
          </div>

          {/* Col 2: Useful Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-emerald-300 uppercase">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-sm text-emerald-100 font-sans">
              <li><a href="#loi-ich" className="hover:text-white transition-colors">Giá Trị Cốt Lõi</a></li>
              <li><a href="#san-pham" className="hover:text-white transition-colors">Danh Mục Sản Phẩm</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Đánh Giá Sức Khỏe</a></li>
              <li><a href="#ve-chung-toi" className="hover:text-white transition-colors">Chị Lê Thị Hồng</a></li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-emerald-300 uppercase">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3 text-sm text-emerald-100 font-sans">
              <li className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Người liên hệ: <strong>{REPRESENTATIVE_NAME}</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-mono font-bold">
                  Zalo: {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="pt-8 mt-8 border-t border-brand-600/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} Sống Khỏe Cùng Hồng. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href={ZALO_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white text-xs font-bold bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 rounded-full border border-emerald-500 flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Zalo Community Group</span>
            </a>
            <button
              onClick={scrollToTop}
              className="bg-brand-600 hover:bg-brand-500 border border-brand-500 text-emerald-200 hover:text-white p-2 rounded-full transition-colors focus:outline-none"
              title="Về đầu trang"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
