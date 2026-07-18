import Header from "./components/Header";
import Hero from "./components/Hero";
import CorePillars from "./components/CorePillars";
import ProductShowcase from "./components/ProductShowcase";
import InteractiveQuiz from "./components/InteractiveQuiz";
import AboutConsultant from "./components/AboutConsultant";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-brand-50 via-emerald-50/60 via-white via-brand-50 to-emerald-100/30 text-gray-800 font-sans antialiased selection:bg-brand-100 selection:text-brand-700 scroll-smooth relative overflow-hidden">
      {/* Shimmering & glowing nature background elements */}
      <div className="absolute top-[5%] left-[-20%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[25%] right-[-10%] w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[55%] left-[-15%] w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[75%] right-[-15%] w-[550px] h-[550px] bg-brand-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top sticky Header with CTA */}
      <Header />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Hero Banner with portrait and main slogans */}
        <Hero />

        {/* 4 Core Pillars of Wellness */}
        <CorePillars />

        {/* Premium Products & Showcase with information modals */}
        <ProductShowcase />

        {/* 60-Second Interactive Health Risk & Product Matcher Quiz */}
        <InteractiveQuiz />

        {/* Meet Lê Thị Hồng & Testimonials Grid */}
        <AboutConsultant />
      </main>

      {/* Footer containing bottom badges and contact info */}
      <Footer />
    </div>
  );
}
