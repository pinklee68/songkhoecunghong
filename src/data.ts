export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  price?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
}

export const ZALO_LINK = "https://zalo.me/g/kqgtot529";
export const PHONE_NUMBER = "0396 989 814";
export const REPRESENTATIVE_NAME = "LÊ THỊ HỒNG";

export const BENEFITS: Benefit[] = [
  {
    id: "chinh-hang",
    title: "SẢN PHẨM CHÍNH HÃNG",
    description: "Sản phẩm chính hãng, chất lượng và có nguồn gốc pháp lý rõ ràng, an tâm sử dụng lâu dài.",
    iconName: "ShieldCheck",
  },
  {
    id: "uy-tin",
    title: "ĐỘI NGŨ UY TÍN",
    description: "Công ty có đội ngũ chuyên gia, bác sĩ, dược sĩ uy tín đồng hành, tư vấn và hỗ trợ trong suốt quá trình sử dụng.",
    iconName: "Users",
  },
  {
    id: "tan-tam",
    title: "TƯ VẤN TẬN TÂM",
    description: "Khi hỏi về bất kỳ sản phẩm nào, quý khách đều được tư vấn rõ ràng, tận tâm, chu đáo và nhanh chóng.",
    iconName: "MessageCircleHeart",
  },
  {
    id: "thien-nhien",
    title: "SỐNG KHỎE TỪ THIÊN NHIÊN",
    description: "Sản phẩm chiết xuất hoàn toàn từ thiên nhiên, lành tính, an toàn và mang lại hiệu quả vượt trội cho sức khỏe.",
    iconName: "Leaf",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "cnd-ginseng",
    title: "CND GINSENG - Nhân Sâm & Táo Đỏ Hòa Tan",
    subtitle: "Tăng Thể Trạng & Bồi Bổ Sinh Lực",
    description: "Thực phẩm bổ sung cao cấp từ CND Ginseng kết hợp hài hòa giữa Nhân Sâm quý hiếm và Táo Đỏ ngọt lành. Hỗ trợ cải thiện sự tập trung, bồi bổ khí huyết, giảm mệt mỏi, nâng cao thể lực và sức bền hiệu quả cho ngày dài năng động.",
    image: "/input_file_0.png",
    benefits: ["Bồi bổ khí huyết & sinh lực", "Giảm căng thẳng mệt mỏi", "Dạng gói hòa tan tiện lợi"],
    price: "900.000đ / Hộp",
    badge: "Sâm Cao Cấp",
  },
  {
    id: "to-yen-an-lien",
    title: "Tổ Yến Ăn Liền - Bánh Rau Củ",
    subtitle: "Công nghệ sấy thăng hoa giữ trọn dưỡng chất",
    description: "Tổ yến tươi nguyên chất Nha Trang kết hợp cùng bánh rau củ sấy thăng hoa đột phá. Giàu chất xơ, vitamin và khoáng chất, hoàn toàn lành tính, không chất bảo quản. Chỉ cần 5 phút chế biến có ngay món ăn bồi bổ thượng hạng.",
    image: "/input_file_1.png",
    benefits: ["100% tổ yến tươi Nha Trang", "Công nghệ sấy thăng hoa hiện đại", "Giàu vitamin & chất xơ lành tính"],
    price: "450.000đ / Hộp",
    badge: "Mới & Độc đáo",
  },
  {
    id: "nmi-nutrioxy",
    title: "NMI NutriOxy - Bột Dinh Dưỡng Tuần Hoàn",
    subtitle: "Tăng cường oxy máu & Sức bền tim mạch",
    description: "Thực phẩm bổ sung cao cấp nhập khẩu chính hãng từ Mỹ. Chứa Nhân sâm Hoa Kỳ, L-Citrulline, L-Arginine, tinh chất củ dền và Hawthorn. Hỗ trợ lưu thông khí huyết, tối ưu hóa lượng oxy trong máu và củng cố sức khỏe tim mạch vững vàng.",
    image: "/input_file_10.png",
    benefits: ["Nhập khẩu chính hãng từ Mỹ", "Tăng cường oxy máu & thể lực", "Tốt cho hệ tim mạch & huyết áp"],
    price: "1.250.000đ / Hộp",
    badge: "Nhập Khẩu Mỹ",
  },
  {
    id: "tra-giai-doc-thai-binh",
    title: "Trà túi lọc Giải Độc Thanh Nhiệt Thái Bình",
    subtitle: "Thanh lọc mát gan, mát da",
    description: "Trà túi lọc thảo mộc tự nhiên từ Phú Hưng Ap với sự kết hợp của Kim ngân hoa, Ké đầu ngựa, Cam thảo và các loại thảo dược bí truyền. Giúp giải độc, mát gan, tiêu độc, giảm mụn nhọt, nóng trong người, mang lại làn da khỏe khoắn.",
    image: "/input_file_2.png",
    benefits: ["Giải độc mát gan nhanh chóng", "Hỗ trợ giảm mụn nhọt nóng trong", "Trà túi lọc dễ sử dụng"],
    price: "75.000đ / Hộp",
    badge: "Thanh Nhiệt",
  },
  {
    id: "tra-xuyen-tam-lien",
    title: "Trà túi lọc Xuyên Tâm Liên",
    subtitle: "Hỗ trợ hô hấp, kháng khuẩn tự nhiên",
    description: "Trà thảo dược Xuyên Tâm Liên (Andrographis Tea) từ thương hiệu Phú Hưng Ap đạt tiêu chuẩn OCOP chất lượng cao. Hỗ trợ nâng cao sức đề kháng hệ hô hấp, giảm ho, bổ phổi, thanh phế và kháng khuẩn tự nhiên, vô cùng an toàn.",
    image: "/input_file_3.png",
    benefits: ["Bảo vệ đường hô hấp tối ưu", "Kháng khuẩn & chống viêm tự nhiên", "Sản phẩm đạt tiêu chuẩn OCOP"],
    price: "75.000đ / Hộp",
    badge: "Đạt chuẩn OCOP",
  },
  {
    id: "tra-day-thia-canh",
    title: "Trà Dây Thìa Canh Linh Chi",
    subtitle: "Hỗ trợ ổn định đường huyết chủ động",
    description: "Sản phẩm chuyên biệt dành cho người tiểu đường và có chỉ số đường huyết cao từ Phú Hưng Ap. Sự kết hợp quý giá giữa Dây Thìa Canh tự nhiên và Nấm Linh Chi giúp kiểm soát lượng đường hấp thụ, phòng ngừa biến chứng nguy hiểm.",
    image: "/input_file_4.png",
    benefits: ["Hỗ trợ hạ & ổn định đường huyết", "Giúp phòng ngừa biến chứng tiểu đường", "Bồi bổ sức khỏe toàn diện"],
    price: "80.000đ / Hộp",
    badge: "Dành Cho Tiểu Đường",
  },
  {
    id: "tra-tia-to",
    title: "Trà túi lọc Tía Tô (Perilla Tea)",
    subtitle: "Giảm Acid Uric, Tốt Cho Người Bệnh Gút",
    description: "Được làm từ 100% lá tía tô và thảo mộc tự nhiên chọn lọc từ Phú Hưng Ap, đạt chứng nhận quốc tế ISO 22000. Trà hỗ trợ kiểm soát chỉ số acid uric trong máu, hỗ trợ người bệnh Gút, đồng thời hỗ trợ giải cảm, ấm bụng và làm đẹp da.",
    image: "/input_file_5.png",
    benefits: ["Hỗ trợ hạ acid uric máu cho người bệnh Gút", "Đạt chứng nhận ISO 22000 quốc tế", "Giải cảm lạnh, làm ấm dạ dày"],
    price: "75.000đ / Hộp",
    badge: "Đạt chuẩn ISO 22000",
  },
  {
    id: "tra-ca-gai-leo",
    title: "Trà túi lọc Cà Gai Leo",
    subtitle: "Hỗ trợ giải độc gan, bảo vệ tế bào gan",
    description: "Sản phẩm từ vùng nguyên liệu sạch đạt tiêu chuẩn GACP-WHO của Phú Hưng Ap. Chuyên dùng cho người hay uống rượu bia, người bị men gan cao, viêm gan hoặc suy giảm chức năng gan. Giúp thanh lọc và phục hồi lá gan khỏe mạnh.",
    image: "/input_file_6.png",
    benefits: ["Giải độc gan do bia rượu hóa chất", "Đạt tiêu chuẩn sạch GACP-WHO", "Giúp hạ men gan, ngừa xơ gan"],
    price: "85.000đ / Hộp",
    badge: "Bảo Vệ Gan",
  },
  {
    id: "tra-dinh-lang",
    title: "Trà túi lọc Đinh Lăng",
    subtitle: "Hoạt huyết dưỡng não, ngủ ngon giấc",
    description: "Trà Đinh Lăng (Ming Aralia Tea) từ rễ và lá Đinh Lăng lâu năm chất lượng OCOP. Giúp hoạt huyết dưỡng não, tăng cường tuần hoàn máu não, hỗ trợ giảm nhanh các triệu chứng đau đầu, hoa mắt, chóng mặt và cải thiện trí nhớ.",
    image: "/input_file_7.png",
    benefits: ["Hoạt huyết dưỡng não, bồi bổ thần kinh", "Giảm đau đầu, chóng mặt, mất thăng bằng", "Ngủ sâu và ngon giấc tự nhiên"],
    price: "75.000đ / Hộp",
    badge: "Bồi Bổ Trí Não",
  },
  {
    id: "tra-dang-tay-thi",
    title: "Trà Dáng Tay Thi Cao Cấp",
    subtitle: "Đốt cháy mỡ thừa, giữ dáng thon gọn",
    description: "Sự kết hợp tinh túy của các thảo dược quý bổ sung sức khỏe từ Phú Hưng Ap. Giúp thanh lọc mỡ thừa tích tụ, hỗ trợ đắc lực trong quá trình kiểm soát cân nặng, mang lại vóc dáng thon thả, thon gọn tự nhiên cùng làn da sáng khỏe.",
    image: "/input_file_8.png",
    benefits: ["Thanh lọc cơ thể, đốt cháy mỡ thừa", "Hỗ trợ giảm cân tự nhiên an toàn", "Dưỡng da sáng hồng, ngăn lão hóa"],
    price: "95.000đ / Hộp",
    badge: "Giữ Dáng Đẹp Da",
  },
  {
    id: "tra-giac-tien",
    title: "Trà túi lọc Giác Tiên",
    subtitle: "Dưỡng tâm an thần, mang lại giấc ngủ tiên cảnh",
    description: "Trà Giác Tiên chiết xuất từ Lạc tiên, Vông nem, Lá dâu và các thảo mộc an thần tự nhiên chất lượng cao. Giúp làm dịu hệ thần kinh, giải tỏa căng thẳng lo âu, trị chứng mất ngủ kinh niên, mang đến giấc ngủ sâu trọn vẹn.",
    image: "/input_file_9.png",
    benefits: ["Khắc phục mất ngủ kinh niên, khó ngủ", "Dưỡng tâm an thần, giải tỏa stress", "Thảo dược lành tính không tác dụng phụ"],
    price: "75.000đ / Hộp",
    badge: "Ngủ Ngon Sâu Giấc",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Nguyễn Thị Mai",
    age: 48,
    location: "Quận 1, TP. HCM",
    comment: "Trước đây tôi hay bị mất ngủ, trằn trọc cả đêm. Từ khi được chị Hồng tư vấn dùng Trà Linh Chi Thảo Mộc, tôi ngủ ngon và sâu giấc hơn hẳn. Tinh thần sảng khoái, không còn đau đầu mệt mỏi.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t-2",
    name: "Trần Văn Hùng",
    age: 52,
    location: "Đống Đa, Hà Nội",
    comment: "Sản phẩm Đông Trùng Hạ Thảo của bên chị Hồng rất chất lượng. Tôi mua cho cả gia đình dùng để tăng sức đề kháng, thấy cơ thể khỏe khoắn và ít ốm vặt hẳn. Đội ngũ bác sĩ tư vấn rất tận tình.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "t-3",
    name: "Lê Minh Thư",
    age: 35,
    location: "Hải Châu, Đà Nẵng",
    comment: "Chị Hồng tư vấn siêu có tâm luôn ạ! Em dùng tinh dầu bưởi thảo dược trị rụng tóc và xông phòng ngủ, mùi thơm dễ chịu vô cùng, tóc con mọc nhiều hẳn. Group Zalo chia sẻ nhiều mẹo sức khỏe rất hữu ích.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
];
