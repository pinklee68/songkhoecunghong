import { motion } from "motion/react";
import { ShieldCheck, Users, MessageCircleHeart, Leaf, LucideIcon, Sparkles } from "lucide-react";
import { BENEFITS, Benefit } from "../data";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck: ShieldCheck,
  Users: Users,
  MessageCircleHeart: MessageCircleHeart,
  Leaf: Leaf,
};

export default function CorePillars() {
  return (
    <section id="loi-ich" className="py-16 md:py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-600 tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100 flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" /> Giá trị cốt lõi <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-brand-700 tracking-tight">
            Tại Sao Bạn Nên Chọn Đồng Hành Cùng Chúng Tôi?
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Chúng tôi cam kết cung cấp những sản phẩm chăm sóc sức khỏe có nguồn gốc hoàn toàn tự nhiên, đồng hành sát cánh bên bạn mỗi ngày.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit: Benefit, idx: number) => {
            const IconComponent = iconMap[benefit.iconName] || Leaf;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-brand-50/50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-brand-100/50 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-100/20 rounded-bl-3xl pointer-events-none group-hover:bg-brand-200/30 transition-colors" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 flex items-center justify-center mb-6 text-white shadow-md shadow-brand-200 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-brand-700 mb-3 font-sans tracking-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  {benefit.description}
                </p>

                <div className="mt-5 pt-4 border-t border-brand-100/30 flex items-center gap-1.5 text-xs text-brand-500 font-bold select-none">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Cam kết chất lượng</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Quote Matching Poster Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-radial from-brand-50/70 to-emerald-50/30 border border-brand-100 rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Decorative floating leaves/sparkles */}
          <div className="absolute top-2 left-4 text-emerald-300 opacity-20 text-3xl animate-pulse">🍃</div>
          <div className="absolute bottom-2 right-4 text-emerald-300 opacity-20 text-3xl animate-pulse">✨</div>
          
          <p className="font-serif italic text-lg md:text-xl text-brand-600 font-medium relative z-10 flex items-center justify-center gap-1">
            "Đồng hành cùng bạn trên hành trình SỐNG KHỎE – SỐNG HẠNH PHÚC!"
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-brand-500">
            <span className="w-8 h-px bg-brand-200"></span>
            <span className="flex items-center gap-1"><Leaf className="w-3 h-3 text-emerald-500" /> CHĂM SÓC CHỦ ĐỘNG</span>
            <span className="w-8 h-px bg-brand-200"></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
