"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. مكون خلفية الماتريكس الرقمية المتساقطة باللون الكحلي الصافي
function MatrixRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 14; 
    const columns = Math.floor(canvas.width / fontSize);
    
    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = (Math.random() * -canvas.height) / fontSize;
    }

    const alphabet = "010101HTMLCSSJSJSXNEXTAI<>[]{}/\\*+=-_";

    const draw = () => {
      ctx.fillStyle = "rgba(15, 36, 77, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (Math.random() > 0.98) {
          ctx.fillStyle = "#ffffff"; 
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.75)"; 
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        
        rainDrops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 block pointer-events-none"
      style={{ background: "#0f244d", zIndex: 1 }} 
    />
  );
}

// 2. الصفحة الرئيسية الكاملة
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // بيانات سيكشن الخبرة المهنية
  const experienceCards = [
    { icon: "🌐", text: "العمل على العديد من أنواع المواقع الإلكترونية مثل مواقع الأخبار، والمواقع العقارية والزراعية وغيرها، والعمل مع العديد من شركات التسويق الإلكتروني مثل شركة رابح." },
    { icon: "🔑", text: "اختيار الكلمات المفتاحية المناسبة لتصنيف الموقع الإلكتروني وأهمها للموقع الإلكتروني لتأمين الصدارة." },
    { icon: "🔗", text: "عمل خطة باك لينك (Backlinks) متكاملة للموقع الإلكتروني تشمل الربط الداخلي والخارجي الذكي." },
    { icon: "📊", text: "تحليل المواقع المنافسة بدقة والتعرف على نقاط القوة ونقاط الضعف لديهم والاستفادة منها كاملاً." },
    { icon: "⚡", text: "تحسين سرعة تحميل الصفحات داخل الموقع الإلكتروني وتحسين تجربة التحرك والتنقل الداخلي." },
    { icon: "🛡️", text: "مراجعة إجراءات الحماية الصارمة للموقع من خلال متابعة جدران الحماية وصفحات تسجيل الدخول." },
    { icon: "🛠️", text: "تصحيح أخطاء الصفحات البرمجية بشكل دوري وإصلاح الروابط أو الصور المعطلة فورا." },
    { icon: "📈", text: "تحليل ومراجعة أداء الموقع الشامل ومتابعة الحركة وسلوك الزوار والتحويلات من وإلى الموقع." }
  ];

  // تصنيفات سيكشن المشاريع
  const categories = [
    { id: "all", label: "💡 الكل" },
    { id: "nextjs", label: "⚛️ Next.js & SEO" },
    { id: "wordpress", label: "📝 WordPress" },
    { id: "landing", label: "🚀 صفحات الهبوط" },
    { id: "social_script", label: "🎬 سوشيال ميديا وسكريبتات" }
  ];

  // داتا المشاريع كاملة
  const projectsData = [
    { title: "موقع وكالة يونيك الرقمية (Unique WS)", type: "nextjs", url: "https://www.uniquee-ws.com/", desc: "منصة برمجية متكاملة للوكالة مبنية باستخدام Next.js" },
    { title: "موقع gieotic الإلكتروني", type: "nextjs", url: "https://gieotic.vercel.app/", desc: "مشروع ريادي سريع الأداء ومحسن على Vercel" },
    { title: "موقع techmotivations للمحتوى والتكنولوجيا", type: "nextjs", url: "https://techmotivations.com/ar/", desc: "إستراتيجية وتهيئة سيو كاملة وتصدر نتائج البحث" },
    { title: "موقع slifehome للأثاث والديكور", type: "nextjs", url: "https://slifehome.com/", desc: "تحسين سيو شامل وزيادة أعداد الزيارات العضوية" },
    
    { title: "موقع hmunzilike العقاري والخدمي", type: "wordpress", url: "https://munzilike.com/", desc: "تطوير القالب وإدارة هيكلة وتنسيق البيانات بالكامل" },
    { title: "موقع cobra plast للصناعات البلاستيكية", type: "wordpress", url: "https://cobra-plast.com/", desc: "تصميم وإعداد الهوية الرقمية والصفحات على الووردبريس" },
    { title: "موقع travel friend للسياحة والسفر", type: "wordpress", url: "https://travelfriend-ag.com/", desc: "تصميم وتنسيق بنية الموقع المخصصة على ووردبريس (بدون رابط حي)" },

    { title: "صفحة هبوط منتج Eye Contour Cream", type: "landing", url: "https://artistic-touch1.myeasyorders.com/products/Eye-Contour-Cream", desc: "صفحة مبيعات لمنتج طبي مبنية على Easy Orders لرفع التحويل" },
    { title: "صفحة هبوط منتج Puvograbi Lip Serum", type: "landing", url: "https://artistic-touch1.myeasyorders.com/products/Puvograbi-Lip-Serum", desc: "تصميم واجهة تسويقية جذابة لمنتج تجميلي طبي معاصر" },
    { title: "صفحة هبوط شركة سيو في السعودية", type: "landing", url: "https://www.uniquee-ws.com/SEOCompanySaudiArabia", desc: "صفحة خدمات لرفع الكفاءة التصنيفية بالمملكة العربية السعودية" },
    { title: "صفحة هبوط أفضل شركة سيو بالرياض", type: "landing", url: "https://www.uniquee-ws.com/SEOcompanyinRiyadh", desc: "تصميم تفاعلي مستهدف للكلمات المفتاحية التجارية في الرياض" },
    { title: "صفحة هبوط شركة سيو بجدة", type: "landing", url: "https://www.uniquee-ws.com/seocompanyjeddah", desc: "صفحة هبوط مستهدفة ومبنية بالكامل بـ Next.js وسريعة للغاية" },
    { title: "صفحة هبوط شركة تصميم مواقع بالسعودية", type: "landing", url: "https://www.uniquee-ws.com/WebsiteDesignCompanySaudiArabia", desc: "واجهة تسويقية جذابة مبنية بخصائص ومؤثرات ذكية" },

    { title: "صفحة فيس بوك صيدليات براءة", type: "social_script", url: "https://www.facebook.com/Baraapharmacy", desc: "إستراتيجية كتابة وإدارة المحتوى الطبي التفاعلي للجمهور" },
    { title: "صفحة فيس بوك د/ حازم حافظ - عظام", type: "social_script", url: "https://www.facebook.com/Dr.HazemHafez", desc: "إدارة صناعة المحتوى المتخصص وجذب المراجعين والعملاء" },
    { title: "صفحة فيس بوك د/ إبراهيم فرج - جلدية", type: "social_script", url: "https://www.facebook.com/Dr.Ibrahim.Farag.dermatologist", desc: "تنسيق وصياغة المقالات التوعوية والتفاعلية على المنصة" },
    { title: "سكريبت يوتيوب مخصص (كتابة وإعداد)", type: "social_script", url: "https://www.youtube.com/watch?v=ZjW6mpw8NQk", desc: "إعداد وصياغة سكريبت يوتيوب تسويقي جذاب ومؤثر بصرياً" },
    { title: "سكريبت فيديو كأس العالم العالمي", type: "social_script", url: "https://www.facebook.com/share/v/1DHx7WWZc2/", desc: "صياغة وسرد روائي متكامل لإنتاج فيديو وثائقي رياضي ناجح" },
    { title: "سكريبت فيديو الزومبي المثير", type: "social_script", url: "https://www.facebook.com/share/v/14fUkVBuezv/", desc: "صياغة وسيناريو إبداعي شيق مخصص لإنتاج فيديوهات رعب ممتعة" },
    { title: "سكريبت فيديو الحرب العالمية الأولى", type: "social_script", url: "https://www.facebook.com/share/v/1bFpRGedd7/", desc: "سرد روائي وثائقي تاريخي للأحداث بأسلوب يجذب المشاهدين" },
    { title: "فيديو مصمم بالذكاء الاصطناعي الكامل", type: "social_script", url: "https://www.facebook.com/reel/2438362653272612", desc: "إنتاج وتصميم بصري كامل بالذكاء الاصطناعي بدون شخصيات بشرية" },
    { title: "فيديو وثائقي عن أسرار الدارك ويب", type: "social_script", url: "https://www.facebook.com/reel/874438095381112", desc: "إنتاج وصناعة محتوى غامض ومثير لرفع مستويات التفاعل والـ Reach" }
  ];

  // داتا سيكشن الأدوات والأنظمة والذكاء الاصطناعي
  const seoTools = [
    { name: "Google Search Console", icon: "📊", purpose: "مراقبة الأرشفة، وتحليل الكلمات وتتبع ظهور وجدارة صفحات الموقع الفورية." },
    { name: "Semrush", icon: "🚀", purpose: "تحليل الكلمات المفتاحية بدقة وتتبع المنافسين وبناء خطط الباك لينك الاحترافية." },
    { name: "Google Analytics", icon: "📈", purpose: "تتبع سلوك الزوار والتحليلات الجغرافية ومعرفة مصادر الترافيك والتحويل." },
    { name: "PageSpeed Insights", icon: "⚡", purpose: "قياس وتحليل سرعات التحميل وتحسين مؤشرات الأداء الأساسية للويب (Core Web Vitals)." },
    { name: "Screaming Frog", icon: "🐸", purpose: "الزحف الفني الشامل للموقع واستخراج أخطاء الأرشفة، الروابط المكسورة، ومشاكل الـ Redirects." },
    { name: "GuinRank", icon: "✍️", purpose: "تحليل الكلمات وفهم محركات البحث لكتابة محتوى متصدر ومتوافق مع خوارزميات الـ AI." },
    { name: "SimilarContent", icon: "🔍", purpose: "تحسين جودة الكود النصي وسياق الكلمات وتجنب حشو الكلمات المفتاحية العشوائي." },
    { name: "Rank Math SEO", icon: "🛠️", purpose: "ضبط الميتا تاجز، السكيمات، وهيكلة الخرائط البرمجية الداخلية لمواقع الووردبريس ونكست." },
    { name: "Rank Mass", icon: "📦", purpose: "أداة متقدمة للنشر والتحليل الشامل للمواقع وإدارة وضخ الكلمات والمقالات على نطاق واسع." },
    { name: "Yoast SEO", icon: "🟢", purpose: "التهيئة القياسية للمحتوى وقراءة ميكانيكية متوافقة مع قواعد السيو للمقالات والصفحات." },
    { name: "WP Rocket", icon: "🚀", purpose: "تسريع الكاشينج وميكانيزم معالجة الملفات لرفع كفاءة وسرعة استجابة المواقع الإلكترونية." },
    { name: "LiteSpeed Cache", icon: "⚡", purpose: "إضافة متكاملة على مستوى السيرفر لتحسين أداء تحميل صفحات الووردبريس وتقليل الـ TTFB." },
    { name: "ChatGPT", icon: "🤖", purpose: "توليد الأفكار، وصياغة وتدقيق المحتوى، وإعداد المخططات العريضة لخطط السيو الرقمية الفعالة." },
    { name: "Claude AI", icon: "🧠", purpose: "تحليل النصوص الطويلة وصياغة الإستراتيجيات التسويقية المعقدة بأعلى جودة لغوية معاصرة." },
    { name: "Gemini", icon: "♊", purpose: "الوصول اللحظي لبيانات ومحركات بحث جوجل للمساعدة في تطوير الإستراتيجيات اللحظية الذكية." },
    { name: "Grok", icon: "🎬", purpose: "توظيف تقنيات الذكاء الاصطناعي المتقدمة في إنتاج وتصميم مقاطع الفيديو المبتكرة والمحتوى البصري." }
  ];

  const filteredProjects = activeTab === "all" 
    ? projectsData 
    : projectsData.filter(p => p.type === activeTab);

  return (
    <main dir="rtl" className="relative min-h-screen text-white overflow-x-hidden font-sans bg-[#0f244d]">
      
      <MatrixRainBackground />

      {/* هالة إضاءة ذهبية علوية خلفية */}
      <div 
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(218, 165, 32, 0.16) 0%, transparent 70%)",
          zIndex: 10,
          pointerEvents: "none",
          filter: "blur(110px)",
        }}
      />

      {/* ==================== الـ SECTION الأول: الهيرو سيكشن ==================== */}
      <div style={{ zIndex: 20 }} className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12 text-center max-w-5xl mx-auto">
        
        <div className="relative w-40 h-40 mb-8 flex items-center justify-center group">
          <div 
            className="absolute w-36 h-36 rounded-full"
            style={{
              background: "linear-gradient(135deg, #fff3d1 0%, #d4a359 40%, #aa7c11 70%, #5a3e00 100%)",
              boxShadow: "0 0 35px rgba(212, 163, 89, 0.65), inset 0 0 15px rgba(255, 255, 255, 0.4)",
            }}
          />
          <div className="absolute w-[136px] h-[136px] rounded-full bg-gradient-to-b from-[#1a3875] to-[#0c1a3a] overflow-hidden border border-white/5" />
          <div className="absolute inset-0 w-full h-full overflow-visible flex items-end justify-center">
            <img 
              src="/amrr.webp" 
              alt="عمرو محمد السيد" 
              className="w-auto h-[115%] object-contain max-w-none mb-[2px] transition-transform duration-300 group-hover:scale-105"
              style={{
                maskImage: "linear-gradient(to top, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 85%, transparent 100%)"
              }}
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150/142d5e/ffffff?text=Amr"; }}
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">عمرو محمد السيد</h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-2">تطوير الويب المتكامل وإستراتيجيات الـ SEO</h2>
        <p className="text-md md:text-lg font-medium text-amber-400 mb-8">خبرة 11 سنة في بناء المواقع وتصدر النتائج</p>
        
        <div 
          className="w-full max-w-3xl p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-md text-center mb-10"
          style={{
            position: "relative",
            background: "linear-gradient(#142d5e, #142d5e) padding-box, linear-gradient(135deg, #ffd700, #aa7c11, transparent, #aa7c11, #ffd700) border-box",
            border: "2px solid transparent",
            boxShadow: "0 0 25px rgba(212, 163, 89, 0.25), inset 0 0 20px rgba(212, 163, 89, 0.1)",
          }}
        >
          <p className="text-base md:text-lg text-gray-100 leading-relaxed relative z-10">
            متخصص في تطوير وبناء المواقع الإلكترونية المتقدمة باستخدام Next.js فائقة السرعة ومنصة WordPress المرنة. تشمل خدماتي الرحلة كاملةً بدءاً من حجز الاستضافة وشراء الدومين، مروراً بتصميم وتركيب القوالب وتخصيص الهيكلية والصفحات الأساسية، وصولاً إلى إدارة وتنسيق المحتوى الرقمي وتطبيق إستراتيجيات السيو (SEO) الصارمة لتهيئة موقعك وتصدره النتائج الأولى في محركات البحث.
          </p>
          <div style={{
            position: "absolute",
            bottom: "-2px",
            left: "15%",
            right: "15%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #ffe57f, #ffd700, #ffe57f, transparent)",
            boxShadow: "0 0 15px #ffd700, 0 0 30px #ffd700",
            zIndex: 1
          }} />
        </div>

        <div className="flex flex-wrap gap-5 justify-center w-full max-w-xl mb-12">
          <a 
            href="https://wa.me/201020347946" target="_blank" rel="noopener noreferrer"
            className="flex-1 min-w-[200px] px-6 py-4 bg-transparent text-emerald-400 font-extrabold rounded-xl hover:bg-emerald-500/10 transition duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(#0f244d, #0f244d) padding-box, linear-gradient(135deg, #10b981, #047857) border-box",
              border: "2px solid transparent",
              boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)",
            }}
          >
            <span>💬</span> تواصل عبر واتساب فوراً
          </a>

          <button 
            onClick={() => setShowCV(true)}
            className="flex-1 min-w-[200px] px-6 py-4 bg-white text-black font-extrabold rounded-xl transition duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            style={{ boxShadow: "0 0 20px rgba(212, 163, 89, 0.4), 0 4px 15px rgba(255,255,255,0.3)" }}
          >
            📄 عرض السيرة الذاتية (CV)
          </button>
        </div>
      </div>

      {/* ==================== الـ SECTION الثاني: الخبرة المهنية ==================== */}
      <section style={{ zIndex: 30 }} className="relative max-w-7xl mx-auto px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">الخبرة المهنية</h2>
          <div className="w-24 h-[3px] mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-xl" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg font-medium">
            خبرة 11 سنة في العمل على كتابة المحتوى المتوافق مع السيو وتطوير المواقع الإلكترونية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceCards.map((card, index) => (
            <div 
              key={index} className="group p-5 rounded-xl transition-all duration-300 backdrop-blur-md flex flex-col items-start text-right hover:-translate-y-2"
              style={{
                background: "linear-gradient(#142d5e, #142d5e) padding-box, linear-gradient(135deg, #d4a359, rgba(212, 163, 89, 0.2), transparent, rgba(212, 163, 89, 0.2), #d4a359) border-box",
                border: "2px solid transparent",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(212, 163, 89, 0.02)",
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-600/5 border border-amber-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <p className="text-gray-200 text-sm md:text-md leading-relaxed font-normal group-hover:text-white transition-colors duration-200">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== الـ SECTION الثالث: معرض الأعمال والمشاريع ==================== */}
      <section style={{ zIndex: 30 }} className="relative max-w-7xl mx-auto px-4 pb-24">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">معرض الأعمال والمشاريع</h2>
          <div className="w-24 h-[3px] mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-xl" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg font-medium">
            تصفح نماذج حية من المشاريع البرمجية وحملات الـ SEO الناجحة وإدارة وكتابة المحتوى التسويقي.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === cat.id 
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.6)] scale-105" 
                  : "bg-[#142d5e]/80 text-gray-300 border border-amber-500/10 hover:border-amber-500/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 bg-[#142d5e]"
                style={{
                  background: "linear-gradient(#142d5e, #142d5e) padding-box, linear-gradient(135deg, rgba(212, 163, 89, 0.45), transparent, rgba(212, 163, 89, 0.45)) border-box",
                  border: "2px solid transparent",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.95), 0 15px 35px rgba(0,0,0,0.6), inset 0 0 15px rgba(212, 163, 89, 0.25)"
                }}
              >
                <div>
                  <span className="inline-block text-xs font-bold text-amber-300 px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 mb-4 uppercase tracking-wider">
                    {project.type === "nextjs" && "Next.js & SEO"}
                    {project.type === "wordpress" && "WordPress"}
                    {project.type === "landing" && "Landing Page"}
                    {project.type === "social_script" && "Social & Script"}
                  </span>
                  
                  <h3 className="text-xl font-extrabold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white hover:bg-amber-400 text-black font-black text-center rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  >
                    <span>🔗</span> معاينة العمل الحي
                  </a>
                ) : (
                  <div className="w-full py-3 bg-neutral-700 text-gray-400 font-bold text-center rounded-xl cursor-not-allowed">
                    🔒 كود داخلي / قيد الأرشفة
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      {/* ==================== الـ SECTION الرابع: الأدوات والأنظمة والذكاء الاصطناعي ==================== */}
      <section style={{ zIndex: 30 }} className="relative max-w-7xl mx-auto px-4 pb-24">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">الأدوات والأنظمة والذكاء الاصطناعي</h2>
          <div className="w-24 h-[3px] mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-xl" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg font-medium">
            العمل والاعتماد الفعال على أقوى الأدوات والأنظمة المتقدمة لرفع كفاءة المواقع وتوليد الأفكار الذكية المتكاملة.
          </p>
        </div>

        {/* شبكة الكروت الذهبية بالكامل ميتاليك */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {seoTools.map((tool, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "linear-gradient(135deg, #ffe57f 0%, #d4a359 50%, #aa7c11 100%)",
                boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.95), 0 20px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.4)"
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black/15 backdrop-blur-sm border border-black/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">
                  {tool.name}
                </h3>
                <p className="text-slate-800 text-sm font-medium leading-relaxed">
                  {tool.purpose}
                </p>
              </div>
              <div className="w-full h-[3px] bg-white/40 rounded-full mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </section>

      {/* ==================== الـ SECTION الخامس والأخير: تواصل معي الآن (مطابق للصورة تماماً) ==================== */}
      <section style={{ zIndex: 30 }} className="relative max-w-6xl mx-auto px-4 pb-28">
        <div 
          className="w-full py-12 px-6 rounded-2xl flex flex-col items-center justify-center text-center bg-[#051129]/90 backdrop-blur-md"
          style={{
            border: "2px solid #00ffcc", 
            boxShadow: "0 0 20px rgba(0, 255, 204, 0.25), inset 0 0 15px rgba(0, 255, 204, 0.05)"
          }}
        >
          {/* عنوان مشع نيون سماوي كما بالصورة */}
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide"
            style={{
              textShadow: "0 0 10px rgba(0, 225, 255, 0.8), 0 0 20px rgba(0, 225, 255, 0.4)"
            }}
          >
            تواصل معي الآن
          </h2>

          {/* أزرار التواصل الموزعة بشكل مرن ومتجاوب */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-4xl">
            
            {/* زر فيسبوك */}
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0d1933] text-sm md:text-base text-gray-200 font-semibold rounded-xl border border-slate-700/60 hover:bg-[#122247] hover:text-white transition duration-200 flex items-center justify-center gap-2"
            >
              Facebook Profile 👤
            </a>

            {/* زر واتساب الرئيسي والأخضر البارز */}
            <a 
              href="https://wa.me/201020347946" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#00c87f] hover:bg-[#00b372] text-sm md:text-base text-slate-950 font-black rounded-xl shadow-[0_4px_15px_rgba(0,200,127,0.3)] transition duration-200 flex items-center justify-center gap-2"
            >
              WhatsApp 💬
            </a>

            {/* زر البريد الإلكتروني */}
            <a 
              href="mailto:amrw28940@gmail.com"
              className="px-6 py-3 bg-[#0d1933] text-sm md:text-base text-gray-200 font-semibold rounded-xl border border-slate-700/60 hover:bg-[#122247] hover:text-white transition duration-200 flex items-center justify-center gap-2"
            >
              amrw28940@gmail.com ✉️
            </a>

          </div>
        </div>
      </section>

      {/* الـ Modal المنبثق لعرض الـ CV عند النقر */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setShowCV(false)}>
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0f244d] p-2 rounded-2xl border overflow-y-auto"
            style={{ 
              background: "linear-gradient(#0f244d, #0f244d) padding-box, linear-gradient(135deg, #ffd700, #aa7c11) border-box",
              border: "3px solid transparent",
              boxShadow: "0 0 40px rgba(212, 163, 89, 0.5)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowCV(false)} className="absolute top-4 left-4 z-50 bg-red-600 hover:bg-red-700 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center transition">✕</button>
            <img 
              src="/arbic.webp" alt="السيرة الذاتية" className="w-full h-auto rounded-xl shadow-2xl"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/800x1200?text=CV+Image+Placeholder"; }}
            />
          </div>
        </div>
      )}

    </main>
  );
}
