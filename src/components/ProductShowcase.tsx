import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, MessageCircle, Info, Sparkles, X, Heart, Star, Leaf } from "lucide-react";
import { PRODUCTS, Product, ZALO_LINK } from "../data";
import naturalHealthProducts from "../assets/images/natural_health_products_1784302152821.jpg";

function ProductImageWithFallback({ src, alt, title, id, className = "object-contain p-4" }: { src: string; alt: string; title: string; id: string; className?: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    let gradient = "from-emerald-500/10 to-teal-500/10 text-emerald-700";
    let icon = <Leaf className="w-12 h-12 stroke-[1.5] text-emerald-600" />;
    let badgeText = "Thảo mộc";

    if (id === "cnd-ginseng") {
      gradient = "from-amber-500/10 to-orange-500/10 text-amber-700";
      icon = <Sparkles className="w-12 h-12 stroke-[1.5] text-amber-600" />;
      badgeText = "Nhân sâm";
    } else if (id === "to-yen-an-lien") {
      gradient = "from-emerald-500/10 to-cyan-500/10 text-emerald-800";
      icon = <Star className="w-12 h-12 stroke-[1.5] text-emerald-600" />;
      badgeText = "Tổ yến";
    } else if (id === "nmi-nutrioxy") {
      gradient = "from-red-500/10 to-rose-500/10 text-rose-700";
      icon = <Heart className="w-12 h-12 stroke-[1.5] text-rose-600 animate-pulse" />;
      badgeText = "Dinh dưỡng";
    } else if (id === "tra-tia-to") {
      gradient = "from-purple-500/10 to-fuchsia-500/10 text-purple-700";
      icon = <Leaf className="w-12 h-12 stroke-[1.5] text-purple-600" />;
      badgeText = "Tía tô";
    } else if (id === "tra-dinh-lang") {
      gradient = "from-cyan-500/10 to-blue-500/10 text-cyan-700";
      icon = <Sparkles className="w-12 h-12 stroke-[1.5] text-cyan-600" />;
      badgeText = "Đinh lăng";
    } else if (id === "tra-ca-gai-leo") {
      gradient = "from-emerald-500/10 to-green-500/10 text-emerald-700";
      icon = <Leaf className="w-12 h-12 stroke-[1.5] text-emerald-600" />;
      badgeText = "Cà gai leo";
    } else if (id === "tra-dang-tay-thi") {
      gradient = "from-pink-500/10 to-rose-500/10 text-pink-700";
      icon = <Sparkles className="w-12 h-12 stroke-[1.5] text-pink-600" />;
      badgeText = "Dáng tay thi";
    } else if (id === "tra-giac-tien") {
      gradient = "from-indigo-500/10 to-violet-500/10 text-indigo-700";
      icon = <Sparkles className="w-12 h-12 stroke-[1.5] text-indigo-600" />;
      badgeText = "Giấc tiên";
    }

    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-6 relative select-none`}>
        {icon}
        <div className="mt-3 text-center">
          <p className="font-serif font-bold text-sm tracking-wide line-clamp-1 opacity-90">{title}</p>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-white/60 px-2 py-0.5 rounded-full mt-1.5 inline-block border border-black/5">
            {badgeText}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-3 text-center">
          <p className="text-[10px] text-gray-400 font-medium">Chưa tải ảnh lên</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      className={`w-full h-full ${className} transition-all duration-500`}
    />
  );
}

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<"ingredients" | "usage" | "origin">("ingredients");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Tất cả sản phẩm (11)" },
    { id: "tra-tui-loc", name: "Trà Túi Lọc Thảo Mộc (8)" },
    { id: "sam-yen", name: "Sâm & Tổ Yến Sấy (2)" },
    { id: "nhap-khau", name: "Nhập Khẩu Mỹ (1)" },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "tra-tui-loc") return product.id.startsWith("tra-");
    if (selectedCategory === "sam-yen") return product.id === "cnd-ginseng" || product.id === "to-yen-an-lien";
    if (selectedCategory === "nhap-khau") return product.id === "nmi-nutrioxy";
    return true;
  });

  // Detailed authentic data for products
  const productDetails: Record<string, { ingredients: string; usage: string; origin: string }> = {
    "cnd-ginseng": {
      ingredients: "Nhân Sâm nguyên chất từ Canada sấy khô (70%), chiết xuất Táo Đỏ tự nhiên hòa tan (30%). Không chứa chất tạo màu, đường hóa học hay chất bảo quản, tuyệt đối an toàn và lành tính cho sức khỏe.",
      usage: "Hòa tan 1 gói trà sâm với 150ml - 200ml nước ấm (70-80°C), khuấy đều cho tan hết và thưởng thức. Nên uống vào ban ngày (buổi sáng hoặc trưa sau ăn) để duy trì sự bền bỉ. Tránh dùng sát giờ đi ngủ.",
      origin: "Được sản xuất từ nguồn nhân sâm Canada cao cấp đạt chuẩn xuất khẩu chất lượng cao, đóng gói khép kín tại nhà máy đạt tiêu chuẩn GMP hiện đại hàng đầu.",
    },
    "to-yen-an-lien": {
      ingredients: "Tổ yến tươi nguyên chất Khánh Hòa / Nha Trang (212.5 mg tổ yến tươi), hỗn hợp bánh rau củ sạch (bông cải xanh, bí đỏ, cà rốt, khoai tây) sấy thăng hoa lưu hương vị tự nhiên.",
      usage: "Cho bánh tổ yến và rau củ sấy vào chén, đổ khoảng 100ml - 120ml nước sôi (100°C), đậy nắp kín trong vòng 5 phút. Khuấy đều nhẹ nhàng là có thể thưởng thức ngay món súp yến dồi dào dinh dưỡng.",
      origin: "Thương hiệu Yến Sào Nha Trang uy tín. Áp dụng công nghệ sấy thăng hoa tiên tiến từ Mỹ giúp giữ nguyên vẹn 100% vitamin, chất xơ và các axit amin quý báu có trong tổ yến tươi.",
    },
    "nmi-nutrioxy": {
      ingredients: "Nhân sâm Hoa Kỳ hảo hạng, L-Citrulline, L-Arginine, chiết xuất củ dền nguyên chất, quả Hawthorn (Sơn tra). Bột dinh dưỡng giàu dưỡng chất tự nhiên giúp tối ưu hóa lượng lưu thông oxy máu.",
      usage: "Hòa tan 1 muỗng hoặc 1 gói bột với 200ml nước mát hoặc ấm, khuấy đều. Uống hằng ngày trước khi tập luyện thể thao 30 phút hoặc uống vào buổi sáng để cơ thể dồi dào năng lượng oxy hoạt hóa.",
      origin: "Nhập khẩu chính hãng nguyên hộp từ Mỹ (NutriBest International LLC), đạt chứng nhận kiểm định FDA nghiêm ngặt và phân phối chính thức tại Việt Nam.",
    },
    "tra-giai-doc-thai-binh": {
      ingredients: "Kim ngân hoa, Ké đầu ngựa, Cam thảo, Cỏ ngọt, Nhân trần, Lá dâu tằm tự nhiên. Công thức y học cổ truyền Thái Bình giúp thanh mát giải độc cơ thể tối đa.",
      usage: "Nhúng túi lọc trà vào 150-200ml nước sôi 100°C, hãm trà trong 3-5 phút cho dưỡng chất tan đều. Có thể dùng uống ấm thay nước lọc hằng ngày rất tốt cho gan và cơ địa nóng trong.",
      origin: "Thương hiệu Phú Hưng AP. Vùng trồng dược liệu sạch chuẩn hữu cơ tại Thái Bình, đạt đầy đủ chứng nhận vệ sinh an toàn thực phẩm.",
    },
    "tra-xuyen-tam-lien": {
      ingredients: "100% lá và thân cây Xuyên Tâm Liên nguyên chất sấy lạnh. Chứa hoạt chất Andrographolide có tác dụng kháng khuẩn tự nhiên, tiêu viêm mạnh mẽ.",
      usage: "Hãm 1 túi lọc trà với 200ml nước sôi, đợi 5 phút cho trà ngấm. Nên uống khi còn ấm, ngày dùng từ 2-3 túi lọc để củng cố hệ hô hấp, giảm ho, bổ phổi và thanh phế.",
      origin: "Sản phẩm đạt tiêu chuẩn chất lượng OCOP cấp tỉnh của Phú Hưng AP. Sản xuất trên dây chuyền công nghệ khép kín đạt tiêu chuẩn quốc tế ISO 22000.",
    },
    "tra-day-thia-canh": {
      ingredients: "Dây thìa canh sạch hữu cơ (80%), Nấm Linh Chi đỏ băm nhỏ (20%). Hoàn toàn nguyên chất không chứa chất độn hay hương liệu nhân tạo.",
      usage: "Hãm 1-2 túi lọc với 200ml nước sôi trong 5-10 phút. Uống sau bữa ăn chính từ 15-30 phút để giúp kiểm soát lượng đường huyết và ngăn ngừa hấp thụ đường vào cơ thể.",
      origin: "Sản xuất bởi Phú Hưng AP. Vùng nguyên liệu dây thìa canh chuẩn GACP-WHO, cam kết quy trình trồng sạch không dư lượng thuốc bảo vệ thực vật.",
    },
    "tra-tia-to": {
      ingredients: "Lá tía tô hữu cơ sấy khô lạnh (85%), gừng gió sấy, cỏ ngọt tự nhiên. Đạt chứng nhận quốc tế ISO 22000 về an toàn chất lượng thực phẩm.",
      usage: "Đặt túi trà vào cốc, đổ 200ml nước sôi, đậy nắp 5 phút. Thích hợp dùng hằng ngày cho người bị bệnh Gút để hỗ trợ thải trừ acid uric, giải cảm lạnh, giữ ấm cơ thể và làm đẹp da.",
      origin: "Thương hiệu Phú Hưng AP. Quy trình sản xuất sấy lạnh Vinacab hiện đại giúp giữ nguyên màu sắc tươi và tinh dầu quý trong tía tô.",
    },
    "tra-ca-gai-leo": {
      ingredients: "100% thân và rễ Cà Gai Leo nguyên chất đạt chuẩn dược liệu sạch GACP-WHO, không pha tạp chất hay chất bảo quản.",
      usage: "Hãm 1 túi trà với 200ml nước sôi. Ngày uống từ 2-4 gói để hỗ trợ giải độc gan, hạ men gan nhanh chóng cho người uống rượu bia, người bị men gan cao, xơ gan.",
      origin: "Sản xuất bởi Phú Hưng AP. Vùng trồng cà gai leo sạch chuẩn quốc tế của tổ chức Y Tế Thế Giới GACP-WHO.",
    },
    "tra-dinh-lang": {
      ingredients: "Củ và lá Đinh Lăng lâu năm (75%), kết hợp Lạc tiên, Cam thảo, Cỏ ngọt bổ trợ an thần. Không sử dụng hương liệu hóa học.",
      usage: "Hãm túi lọc trà trong 200ml nước sôi 100°C trong 5 phút. Ngày uống 2-3 tách trà ấm giúp hoạt huyết dưỡng não, ngủ sâu giấc, phục hồi trí nhớ và giảm đau vai gáy.",
      origin: "Phú Hưng AP. Dược liệu đạt tiêu chuẩn OCOP chất lượng cao, lưu giữ trọn vẹn hoạt chất saponin quý giá như nhân sâm.",
    },
    "tra-dang-tay-thi": {
      ingredients: "Sự kết hợp của các thảo mộc hỗ trợ giảm mỡ tự nhiên: Lá sen non, Giảo cổ lam, Sơn tra, Trà xanh hữu cơ và Cỏ ngọt.",
      usage: "Hãm 1 túi trà với 150ml - 200ml nước sôi, uống trước hoặc sau bữa ăn 30 phút. Nên dùng đều đặn hằng ngày kết hợp cùng chế độ dinh dưỡng lành mạnh.",
      origin: "Sản xuất bởi Phú Hưng AP. Quy trình chiết xuất sấy lạnh bảo toàn flavonoid có lợi cho việc thanh thải lipid thừa.",
    },
    "tra-giac-tien": {
      ingredients: "Thành phần gồm Lạc tiên hữu cơ (60%), Vông nem (20%), Tâm sen (10%), Lá dâu tằm (10%). Thảo dược hỗ trợ giấc ngủ truyền thống lành tính.",
      usage: "Nhúng 1 túi lọc vào 150ml - 200ml nước sôi, hãm trà trong 5-7 phút. Nên uống ấm vào buổi tối trước khi đi ngủ 30 - 60 phút để đem lại giấc ngủ ngon sâu như tiên cảnh.",
      origin: "Thương hiệu Phú Hưng AP uy tín. Được nghiên cứu từ các bài thuốc an thần cổ truyền nổi tiếng, an toàn tuyệt đối và không gây phụ thuộc trà hằng ngày.",
    },
  };

  return (
    <section id="san-pham" className="py-16 md:py-24 bg-brand-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Generated luxury collage */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-brand-100 bg-white shadow-xl relative grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase bg-emerald-100/50 w-fit px-3 py-1.5 rounded-full">
              <Leaf className="w-3.5 h-3.5 text-emerald-500" />
              Sưu tầm từ thiên nhiên
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-700 leading-tight">
              Sản Phẩm Được Nghiên Cứu Chuẩn Tự Nhiên
            </h3>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Mỗi sản phẩm đều trải qua quy trình kiểm tra gắt gao từ khâu gieo trồng, thu hoạch thủ công cho tới khâu chế biến, đóng gói khép kín. Bảo toàn nguyên vẹn năng lượng sống lành mạnh của thiên nhiên mang đến cho gia đình bạn.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-brand-100 text-brand-700 px-3 py-1.5 rounded-xl font-medium">🛡️ Kiểm định CO/CQ</span>
              <span className="text-xs bg-brand-100 text-brand-700 px-3 py-1.5 rounded-xl font-medium">🔬 Đạt chuẩn ATVSTP</span>
              <span className="text-xs bg-brand-100 text-brand-700 px-3 py-1.5 rounded-xl font-medium">🌱 Đóng gói Eco-friendly</span>
            </div>
          </div>
          <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto min-h-[300px]">
            <img 
              src={naturalHealthProducts} 
              alt="Natural luxury organic products" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-100 shadow-md text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-brand-700 font-bold">100% Organic & Vegan</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-brand-600 tracking-widest uppercase bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100">
            Danh mục sản phẩm
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-brand-700 tracking-tight">
            Giải Pháp Sức Khỏe Vàng Cho Gia Đình Bạn
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Khám phá 11 sản phẩm dược liệu tự nhiên thượng hạng được tinh chọn thủ công và tư vấn bởi Lê Thị Hồng.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border shadow-xs ${
                selectedCategory === category.id
                  ? "bg-brand-600 border-brand-600 text-white shadow-md scale-102"
                  : "bg-white border-brand-100 text-brand-700 hover:bg-brand-50/50 hover:border-brand-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: Product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden group bg-gray-50">
                <ProductImageWithFallback
                  src={product.image}
                  alt={product.title}
                  title={product.title}
                  id={product.id}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-600 text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-xl shadow-md">
                    {product.badge}
                  </span>
                )}

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-brand-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-500 tracking-wide uppercase block">
                      {product.subtitle}
                    </span>
                    {/* Glowing Stars */}
                    <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-1 rounded-full border border-amber-100/50">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-[10px] font-extrabold text-amber-700 ml-1">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-700 font-serif leading-snug flex items-center gap-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="pt-3 space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-6 mt-6 border-t border-brand-50 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>Xem thành phần & HDSD</span>
                  </button>

                  <a
                    href={ZALO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Tư Vấn Zalo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promo Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-600 font-semibold bg-emerald-50 border border-emerald-100 rounded-full px-6 py-2.5 inline-block">
            🎁 Mẹo nhỏ: Nhắn tin vào nhóm Zalo để nhận ngay mã giảm giá 10% cho đơn hàng đầu tiên!
          </p>
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl border border-brand-100 w-full max-w-2xl overflow-hidden relative"
            >
              {/* Header with image & title */}
              <div className="relative h-48 sm:h-56 bg-gray-50 border-b border-brand-100">
                <ProductImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  title={selectedProduct.title}
                  id={selectedProduct.id}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-xs transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1 z-10">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block">{selectedProduct.subtitle}</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold tracking-tight drop-shadow-md">{selectedProduct.title}</h3>
                </div>
              </div>

              {/* Tabs navigation */}
              <div className="flex border-b border-brand-100">
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold border-b-2 transition-all ${
                    activeTab === "ingredients"
                      ? "border-brand-600 text-brand-700 bg-brand-50/40"
                      : "border-transparent text-gray-500 hover:text-brand-600"
                  }`}
                >
                  Thành Phần
                </button>
                <button
                  onClick={() => setActiveTab("usage")}
                  className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold border-b-2 transition-all ${
                    activeTab === "usage"
                      ? "border-brand-600 text-brand-700 bg-brand-50/40"
                      : "border-transparent text-gray-500 hover:text-brand-600"
                  }`}
                >
                  Cách Dùng
                </button>
                <button
                  onClick={() => setActiveTab("origin")}
                  className={`flex-1 py-3 text-center text-xs sm:text-sm font-bold border-b-2 transition-all ${
                    activeTab === "origin"
                      ? "border-brand-600 text-brand-700 bg-brand-50/40"
                      : "border-transparent text-gray-500 hover:text-brand-600"
                  }`}
                >
                  Nguồn Gốc
                </button>
              </div>

              {/* Tab content */}
              <div className="p-6 sm:p-8 space-y-4 max-h-[300px] overflow-y-auto">
                <div className="bg-brand-50/30 rounded-2xl p-4 sm:p-5 border border-brand-100/50">
                  <p className="text-gray-700 text-sm leading-relaxed font-sans">
                    {productDetails[selectedProduct.id]?.[activeTab] || ""}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-brand-600 font-semibold bg-emerald-50 px-3 py-2 rounded-xl">
                  <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
                  <span>Cần tư vấn sâu hơn theo cơ địa riêng của bạn? Gặp Lê Thị Hồng để nhận hỗ trợ miễn phí.</span>
                </div>
              </div>

              {/* Modal footer with action buttons */}
              <div className="p-4 sm:p-6 bg-brand-50/50 border-t border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-xs text-gray-400 block font-medium">Giá sản phẩm chính hãng:</span>
                  <span className="text-lg font-extrabold text-brand-600">{selectedProduct.price}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-brand-200 text-sm font-semibold text-gray-600 hover:bg-white transition-colors"
                  >
                    Đóng lại
                  </button>
                  <a
                    href={ZALO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Mua Qua Zalo 🎁</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
