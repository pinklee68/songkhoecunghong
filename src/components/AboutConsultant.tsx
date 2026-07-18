import { motion } from "motion/react";
import { MessageCircle, Phone, Calendar, Heart, Award, ShieldAlert, Sparkles, Star, Leaf } from "lucide-react";
import { PHONE_NUMBER, REPRESENTATIVE_NAME, ZALO_LINK, TESTIMONIALS, Testimonial } from "../data";
import leThiHongWellness from "../assets/images/le_thi_hong_wellness_1784302135786.jpg";

export default function AboutConsultant() {
  return (
    <section id="ve-chung-toi" className="py-16 md:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid split: portrait & details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: About Details */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-600 tracking-wider uppercase bg-brand-100/60 px-3 py-1.5 rounded-full">
                🌿 Người đồng hành cùng bạn
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-700 leading-tight">
                Chị Lê Thị Hồng - Sứ Mệnh Chăm Sóc Sức Khỏe Gia Đình Việt
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                Chào bạn, mình là <strong>Lê Thị Hồng</strong>. Với nhiều năm hoạt động trong lĩnh vực phân phối dược liệu tự nhiên hữu cơ, Hồng luôn mang một niềm khao khát cháy bỏng: Giúp hàng ngàn gia đình cải thiện chất lượng sống một cách tự nhiên nhất. 
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                Hồng tin rằng, thiên nhiên ban tặng cho chúng ta những phương thuốc quý giá nhất. Chỉ cần bạn thấu hiểu và dùng đúng cách, sức khỏe của bạn sẽ được củng cố vững chắc từ bên trong mà không cần lạm dụng kháng sinh hay hóa chất độc hại.
              </p>
            </div>

            {/* Credential items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 bg-white p-4 rounded-2xl border border-brand-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-brand-700">Dược liệu tuyển chọn</span>
                  <span className="text-xs text-gray-500">100% thảo dược nguồn gốc minh bạch rõ ràng.</span>
                </div>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-2xl border border-brand-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-brand-700">Đồng hành trọn đời</span>
                  <span className="text-xs text-gray-500">Tư vấn hỗ trợ liều lượng phù hợp theo từng cơ địa.</span>
                </div>
              </div>
            </div>

            {/* Quick contact Card */}
            <div className="bg-emerald-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl shadow-brand-100/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block">LIÊN HỆ TRỰC TIẾP VỚI HỒNG</span>
                  <span className="text-2xl font-serif font-extrabold block">{REPRESENTATIVE_NAME}</span>
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
                    className="text-xl font-bold font-mono tracking-wide flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" /> Zalo: {PHONE_NUMBER}
                  </a>
                  <p className="text-xs text-emerald-100 font-medium font-sans">
                    "Hồng luôn sẵn sàng đồng hành cùng bạn!"
                  </p>
                </div>
                <a
                  id="consultant-zalo-direct"
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-brand-700 font-extrabold text-sm shadow-md transition-colors gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-brand-600 text-brand-600" />
                  <span>Vào Nhóm Zalo Trực Tiếp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Portrait decoration matching image content */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[3/4]">
              {/* Decorative floating sparkly bubbles */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-linear-to-tr from-amber-400 to-yellow-300 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce z-10">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-xs animate-pulse pointer-events-none">
                <Leaf className="w-4 h-4" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white relative"
              >
                <img
                  src={leThiHongWellness}
                  alt="Chị Lê Thị Hồng tư vấn"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-brand-100 rounded-2xl p-4 shadow-lg flex items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                </div>
                <div>
                  <span className="block font-bold text-xs text-brand-700">Tận tâm phục vụ</span>
                  <span className="text-[10px] text-gray-500 font-semibold">Chăm sóc 24h / 7 ngày</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials Showcase: GÓC NHÌN KHÁCH HÀNG */}
        <div id="goc-nhin" className="mt-24 pt-16 border-t border-brand-100">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-brand-500 tracking-wider uppercase flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-400" /> Ý kiến khách hàng <Sparkles className="w-4 h-4 text-amber-400" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-700">Khách Hàng Nói Gì Sau Khi Sử Dụng?</h3>
            <p className="text-gray-500 text-sm">Hàng ngàn phản hồi chân thực từ những người đã cải thiện giấc ngủ và nâng cao sức đề kháng thành công.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t: Testimonial) => (
              <div key={t.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                {/* Cute absolute quote mark inside the card */}
                <div className="absolute -top-2 -right-2 text-brand-50 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity pointer-events-none">
                  <MessageCircle className="w-24 h-24 stroke-[1.5]" />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed font-sans">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-50 flex items-center gap-3 relative z-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-100 shadow-2xs"
                  />
                  <div>
                    <span className="block font-bold text-sm text-brand-700 flex items-center gap-1">
                      {t.name}
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px] font-extrabold" title="Khách hàng thực tế">✓</span>
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">{t.age} tuổi • {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
