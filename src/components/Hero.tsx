import { motion } from "motion/react";
import { Users, ShieldCheck, Heart, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { ZALO_LINK, PHONE_NUMBER } from "../data";
import leThiHongWellness from "../assets/images/le_thi_hong_wellness_1784302135786.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-transparent pt-10 pb-16 md:py-20 lg:py-24">
      {/* Decorative leafy elements or blurred backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-brand-600 text-xs font-semibold tracking-wide uppercase shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-spin" />
              <span>Khỏe từ bên trong – Đẹp từ thiên nhiên</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-brand-700 leading-tight">
                SỐNG KHỎE <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-brand-500 to-brand-600 relative">
                  CÙNG HỒNG
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Đồng hành cùng bạn trên hành trình kiến tạo sức khỏe vàng từ nguồn dược liệu thiên nhiên lành tính, an toàn, chuẩn y khoa. Tham gia ngay cộng đồng để nhận tư vấn miễn phí 24/7 từ đội ngũ chuyên gia uy tín.
              </p>
            </motion.div>

            {/* CTA Group with main Zalo action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                id="hero-zalo-cta"
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white font-bold text-lg bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-y-0 left-0 w-2 bg-white/20 -skew-x-12 translate-x-[-20px] group-hover:translate-x-[300px] transition-transform duration-1000 ease-out"></span>
                <MessageCircle className="w-6 h-6 mr-2 fill-current" />
                <span>VÀO NHÓM ZALO TƯ VẤN 💬</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#san-pham"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-brand-700 hover:text-brand-800 font-semibold text-base bg-white border border-brand-200 hover:border-brand-300 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <span>Xem Sản Phẩm Sức Khỏe</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-100/80 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-brand-100/50 flex flex-col justify-center items-center lg:items-start">
                <div className="flex items-center gap-1.5 mb-1">
                  <Users className="w-4 h-4 text-emerald-500" />
                  <span className="text-2xl font-extrabold text-brand-600">500+</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold text-center lg:text-left">Thành viên Zalo</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-brand-100/50 flex flex-col justify-center items-center lg:items-start">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-2xl font-extrabold text-brand-600">100%</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold text-center lg:text-left">Chính hãng thảo dược</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-brand-100/50 flex flex-col justify-center items-center lg:items-start">
                <div className="flex items-center gap-1.5 mb-1">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500/10" />
                  <span className="text-2xl font-extrabold text-brand-600">24/7</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold text-center lg:text-left">Tận tâm đồng hành</span>
              </div>
            </motion.div>

            {/* Floating Live Badge inside community support */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-brand-600 bg-brand-100/50 py-2 px-4 rounded-xl border border-brand-200/50 w-fit mx-auto lg:mx-0 shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span><strong>Mới nhất:</strong> 12 thành viên vừa gia nhập Group Zalo hôm nay</span>
            </motion.div>
          </div>

          {/* Hero Right: Beautiful image presentation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden group border-4 border-white bg-white"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              
              <img
                src={leThiHongWellness}
                alt="Lê Thị Hồng - Chăm Sóc Sức Khỏe"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Float Overlays matching image content */}
              <div className="absolute bottom-5 left-5 right-5 z-20 text-white font-sans text-center bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <span className="block text-xs uppercase tracking-widest font-semibold text-emerald-300">Đại diện tư vấn</span>
                <span className="block text-lg font-serif font-bold text-white tracking-wide">LÊ THỊ HỒNG</span>
                <span className="block text-[11px] text-white/90">Zalo tư vấn: {PHONE_NUMBER}</span>
              </div>

              {/* Top right mini badge */}
              <div className="absolute top-4 right-4 z-20 bg-brand-600 text-white px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md border border-brand-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>CHUYÊN GIA UY TÍN</span>
              </div>

              {/* Bottom left health heart badge */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-brand-700 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>100% TẬN TÂM</span>
              </div>
            </motion.div>

            {/* Decorative leaf shapes floating around */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-2xl -z-5 animate-float opacity-80 select-none">🍃</div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xl -z-5 animate-float opacity-80 select-none" style={{ animationDelay: "2s" }}>🌿</div>
          </div>

        </div>
      </div>
    </section>
  );
}
