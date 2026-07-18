import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Sparkles, ChevronRight, ArrowRight, MessageCircle, RefreshCw, CheckCircle, Heart } from "lucide-react";
import { ZALO_LINK, PRODUCTS } from "../data";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: string; // "sleep" | "energy" | "stress" | "all"
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Chất lượng giấc ngủ gần đây của bạn như thế nào?",
    options: [
      { text: "Rất khó ngủ, hay trằn trọc và tỉnh giấc giữa đêm", score: "sleep" },
      { text: "Ngủ được nhưng sáng dậy hay mệt mỏi, uể oải", score: "energy" },
      { text: "Thường xuyên căng thẳng đầu óc, ngủ chập chờn", score: "stress" },
      { text: "Ngủ tốt, sâu giấc và thức dậy tràn đầy năng lượng", score: "all" },
    ],
  },
  {
    id: 2,
    text: "Bạn thường xuyên gặp vấn đề thể trạng nào dưới đây?",
    options: [
      { text: "Hay bị hụt hơi, mệt mỏi, dễ ốm vặt khi thay đổi thời tiết", score: "energy" },
      { text: "Đau đầu, mỏi vai gáy do ngồi làm việc máy tính liên tục", score: "stress" },
      { text: "Nóng trong người, nổi mụn, tiêu hóa kém ổn định", score: "sleep" },
      { text: "Thể trạng bình thường, muốn bảo vệ sức khỏe chủ động", score: "all" },
    ],
  },
  {
    id: 3,
    text: "Mục tiêu chăm sóc sức khỏe ưu tiên nhất hiện nay của bạn là gì?",
    options: [
      { text: "Thanh lọc cơ thể, giải độc gan và cải thiện chất lượng giấc ngủ", score: "sleep" },
      { text: "Bồi bổ cơ thể, bổ phổi, tăng đề kháng toàn diện", score: "energy" },
      { text: "Thư giãn tinh thần, chăm sóc cơ thể khỏi stress mệt mỏi", score: "stress" },
      { text: "Duy trì vóc dáng, làm đẹp da và ngăn ngừa lão hóa", score: "all" },
    ],
  },
];

export default function InteractiveQuiz() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0: Start, 1-3: Questions, 4: Result
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleAnswerSelect = (score: string) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Trigger temporary loading effect
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setCurrentStep(QUESTIONS.length + 1);
      }, 1500);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsAnalyzing(false);
  };

  // Determine health profile based on answers
  const getProfileResult = () => {
    const counts = answers.reduce<Record<string, number>>((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    let primaryConcern = "all";
    let maxCount = 0;

    Object.keys(counts).forEach((key) => {
      const count = counts[key];
      if (count > maxCount && key !== "all") {
        maxCount = count;
        primaryConcern = key;
      }
    });

    if (primaryConcern === "sleep") {
      return {
        title: "Cơ địa nhạy cảm - Cần thanh lọc & Chăm sóc giấc ngủ",
        description: "Thể trạng của bạn đang có dấu hiệu tích tụ độc tố do căng thẳng hoặc sinh hoạt thiếu điều độ, dẫn đến gan làm việc quá tải và mất ngủ dai dẳng. Việc này tích tụ lâu ngày làm suy yếu hệ miễn dịch tự nhiên.",
        recommendation: "Trà túi lọc Giác Tiên giúp dưỡng tâm an thần, hỗ trợ khắc phục mất ngủ, khó ngủ kinh niên rất hiệu quả và lành tính.",
        productIndex: 10,
        tip: "Hãy uống 1 tách Trà Giác Tiên ấm khoảng 30 phút trước khi đi ngủ và kết hợp ngâm chân với nước ấm pha muối gừng 15 phút.",
      };
    } else if (primaryConcern === "energy") {
      return {
        title: "Hệ miễn dịch suy yếu - Cần bồi bổ & Phục hồi sinh lực",
        description: "Cơ thể bạn đang ở trạng thái cạn kiệt năng lượng dự trữ, sức đề kháng sụt giảm nên rất dễ bị ảnh hưởng bởi thời tiết và môi trường xung quanh. Thận và khí lực cần được bồi bổ thêm.",
        recommendation: "CND GINSENG Nhân Sâm & Táo Đỏ Hòa Tan giúp bồi bổ khí huyết, cải thiện sức bền, thúc đẩy tuần hoàn và hỗ trợ phục hồi thể lực nhanh chóng.",
        productIndex: 0,
        tip: "Nên sử dụng 1 gói CND GINSENG hòa tan cùng nước ấm vào buổi sáng hoặc đầu giờ chiều để tinh thần tỉnh táo, tránh dùng sát giờ ngủ.",
      };
    } else if (primaryConcern === "stress") {
      return {
        title: "Thiếu máu não cục bộ & Căng thẳng hệ thần kinh",
        description: "Áp lực công việc kéo dài cùng tư thế ngồi làm việc liên tục khiến khí huyết lưu thông kém lên não, gây đau đầu, chóng mặt và đau mỏi vai gáy kinh niên.",
        recommendation: "Trà túi lọc Đinh Lăng giúp hoạt huyết dưỡng não, tăng tuần hoàn ngoại vi, cải thiện đau đầu, chóng mặt và xua tan mệt mỏi thần kinh.",
        productIndex: 8,
        tip: "Hãy đứng dậy thư giãn cơ thể mỗi 45 phút, xoa bóp nhẹ vùng vai gáy và nhâm nhi một tách Trà Đinh Lăng ấm để bổ sung năng lượng não bộ.",
      };
    } else {
      return {
        title: "Thể trạng Khỏe Mạnh - Cần bảo vệ chủ động",
        description: "Chúc mừng bạn! Chỉ số sức khỏe của bạn đang rất cân bằng và ổn định. Tuy nhiên, việc chăm sóc sức khỏe chủ động từ thiên nhiên là chìa khóa để duy trì sự dẻo dai và làm chậm lão hóa theo thời gian.",
        recommendation: "Tổ Yến Ăn Liền Bánh Rau Củ bồi bổ thượng hạng để duy trì sắc diện trẻ đẹp và củng cố hệ miễn dịch kiên cố.",
        productIndex: 1,
        tip: "Duy trì lối sống năng động, uống nước đầy đủ, và bổ sung Tổ Yến Ăn Liền 2-3 lần mỗi tuần để giữ vững nền tảng sức khỏe vàng.",
      };
    }
  };

  const result = currentStep > QUESTIONS.length ? getProfileResult() : null;
  const recommendedProduct = result ? PRODUCTS[result.productIndex] : null;

  return (
    <section id="quiz" className="py-16 md:py-24 bg-transparent relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Step Container Card */}
        <div className="bg-gradient-to-b from-brand-50 to-emerald-50/20 border-2 border-brand-100 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          {/* Decorative Corner Leaf */}
          <div className="absolute -top-3 -right-3 text-emerald-200 text-4xl select-none opacity-40">🍃</div>

          <AnimatePresence mode="wait">
            
            {/* STEP 0: START */}
            {currentStep === 0 && (
              <motion.div
                key="step-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-brand-200">
                  <Activity className="w-8 h-8 animate-pulse" />
                </div>
                
                <div className="space-y-3">
                  <span className="text-xs font-bold text-brand-600 tracking-wider uppercase block">Trắc nghiệm nhanh 60 giây</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-brand-700">
                    Kiểm Tra Chỉ Số Sức Khỏe & Nhận Tư Vấn Thảo Dược Phù Hợp
                  </h3>
                  <p className="text-gray-500 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Dành ra 3 câu hỏi trắc nghiệm khách quan để giúp Lê Thị Hồng hiểu rõ cơ địa của bạn, từ đó gợi ý giải pháp thiên nhiên tương thích nhất.
                  </p>
                </div>

                <div className="pt-4">
                  <motion.button
                    onClick={() => setCurrentStep(1)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-brand-600 text-white font-bold shadow-md hover:bg-brand-700 transition-colors gap-2 cursor-pointer"
                  >
                    <span>BẮT ĐẦU KIỂM TRA NGAY</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium pt-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Hoàn toàn miễn phí & bảo mật thông tin</span>
                </div>
              </motion.div>
            )}

            {/* STEP 1 to 3: QUESTIONS */}
            {currentStep >= 1 && currentStep <= QUESTIONS.length && (
              <motion.div
                key={`step-q-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Progress bar */}
                <div className="flex justify-between items-center text-xs font-bold text-brand-600">
                  <span>CÂU HỎI {currentStep} / {QUESTIONS.length}</span>
                  <span>{Math.round((currentStep / QUESTIONS.length) * 100)}% Hoàn thành</span>
                </div>
                <div className="w-full bg-brand-100 rounded-full h-2">
                  <div
                    className="bg-brand-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-brand-700 leading-snug">
                  {QUESTIONS[currentStep - 1].text}
                </h4>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {QUESTIONS[currentStep - 1].options.map((opt, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleAnswerSelect(opt.score)}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      className="text-left p-4 sm:p-5 rounded-2xl bg-white hover:bg-brand-50/80 border border-brand-100 hover:border-brand-300 text-gray-700 hover:text-brand-800 text-sm font-semibold shadow-2xs hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-brand-50 group-hover:bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span>{opt.text}</span>
                      </span>
                      <Sparkles className="w-4 h-4 text-brand-300 opacity-0 group-hover:opacity-100 group-hover:text-emerald-500 transition-all shrink-0 ml-2" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ANALYZING STATE */}
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 space-y-6"
              >
                <div className="relative w-16 h-16 mx-auto">
                  <RefreshCw className="w-16 h-16 text-brand-500 animate-spin" />
                  <Heart className="w-6 h-6 text-brand-600 absolute inset-0 m-auto animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-brand-700 font-sans">Hệ thống đang phân tích...</h4>
                  <p className="text-gray-400 text-xs">Đang đối chiếu câu hỏi của bạn với danh mục thảo dược...</p>
                </div>
              </motion.div>
            )}

            {/* STEP 4: RESULTS */}
            {currentStep > QUESTIONS.length && !isAnalyzing && result && (
              <motion.div
                key="step-result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="text-center pb-4 border-b border-brand-100">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-brand-700 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-2xs mb-2">
                    <Sparkles className="w-3 h-3 text-brand-500" /> Kết quả đánh giá của bạn
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-brand-700">
                    {result.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Result Details */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {result.description}
                    </p>
                    
                    <div className="bg-brand-50/80 rounded-2xl p-4 border border-brand-100 text-xs text-brand-700">
                      <strong className="block text-brand-800 text-sm mb-1">💡 Lời khuyên cho bạn:</strong>
                      {result.tip}
                    </div>

                    <div className="text-sm">
                      <span className="text-gray-400 block text-xs font-semibold">Sản phẩm tương thích khuyên dùng:</span>
                      <span className="text-brand-600 font-bold block text-base mt-0.5">⭐ {result.recommendation}</span>
                    </div>
                  </div>

                  {/* Recommended Product Box */}
                  {recommendedProduct && (
                    <div className="md:col-span-5 bg-white border border-brand-100 rounded-2xl p-4 shadow-sm text-center flex flex-col items-center">
                      <img
                        src={recommendedProduct.image}
                        alt={recommendedProduct.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-32 object-cover rounded-xl mb-3"
                      />
                      <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest">{recommendedProduct.subtitle}</span>
                      <h4 className="font-bold text-brand-700 text-xs sm:text-sm font-sans line-clamp-1 mt-1">{recommendedProduct.title}</h4>
                      <span className="text-brand-600 font-extrabold text-xs block mt-1">{recommendedProduct.price}</span>
                    </div>
                  )}

                </div>

                {/* Direct CTA back to Zalo Group */}
                <div className="pt-6 border-t border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-brand-600 font-semibold"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Làm lại trắc nghiệm</span>
                  </button>

                  <a
                    id="quiz-zalo-cta"
                    href={ZALO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-md transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>NHẬN QUÀ & TƯ VẤN TRONG ZALO 🎁</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
