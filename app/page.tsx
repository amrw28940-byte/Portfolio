import React from "react";

export default function Portfolio() {
  const projects = [
    // --- قسم المواقع وصفحات الهبوط ---
    {
      title: "موقع Gieotic الاحترافي",
      description: "تطوير وبناء موقع إلكتروني متكامل بأحدث تقنيات الـ Web Development باستخدام Next.js، مع مراعاة السرعة الفائقة وتجربة المستخدم السلسة.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      link: "https://gieotic.vercel.app/",
      type: "تطوير مواقع (Next.js)",
    },
    {
      title: "موقع Unique Agency",
      description: "تصميم مخصص وبرمجة بالكامل عبر الأكواد باستخدام Next.js لبناء واجهة تفاعلية تعكس الهوية الرقمية للوكالة بشكل عصري وأنيق.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      link: "https://unique-agency.vercel.app/",
      type: "تطوير مواقع (Next.js)",
    },
    {
      title: "صفحة هبوط كريم محيط العين (Eye Contour Cream)",
      description: "تصميم صفحة الهبوط بالكامل، وتوليد وتصميم الصور البصرية الجذابة وكتابة المحتوى التسويقي المقنع لزيادة معدل التحويل والمبيعات.",
      image: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80", // الصورة المحدثة والمناسبة للبشرة
      link: "https://artistic-touch1.myeasyorders.com/products/Eye-Contour-Cream",
      type: "صفحة هبوط مبيعات",
    },

    // --- قسم السيو وكتابة المحتوى للمواقع ---
    {
      title: "موقع Slife Home",
      description: "إمساك زمام الـ SEO التقني (Technical SEO) وإستراتيجية كتابة المحتوى المتوافق مع محركات البحث لرفع ترتيب الموقع وزيادة الزيارات الحقيقية.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      link: "https://slifehome.com/",
      type: "سيو وكتابة محتوى",
    },
    {
      title: "موقع Tech Motivations",
      description: "إعداد المحتوى الرقمي المتخصص وتحسين البنية البرمجية والمحتوى للموقع ليتصدر الكلمات المفتاحية المستهدفة في مجاله.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      link: "https://techmotivations.com/ar/",
      type: "سيو وكتابة محتوى",
    },
    {
      title: "منصة جالينوس للترجمة الطبية (Galenus)",
      description: "تحسين محركات البحث لكتابة محتوى طبي وترجمي متخصص يتوافق مع معايير E-E-A-T لضمان ظهور قوي في النتائج الأولى لجوجل.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      link: "https://galenus-translation.com/",
      type: "سيو وكتابة محتوى",
    },

    // --- قسم السوشيال ميديا وصناعة الفيديو ---
    {
      title: "فيديو ريل إعلاني تفاعلي (AI Video)",
      description: "صناعة وإنتاج فيديو رقمي مبتكر؛ قمت بكتابة السكريبت الإعلاني بالكامل مع تصميم وإنتاج البصريات باستخدام تقنيات الذكاء الاصطناعي.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      link: "https://www.facebook.com/reel/841692428981510",
      type: "صناعة سكريبت وفيديو AI",
    },
    {
      title: "فيديو موشن  (YouTube)",
      description: "صياغة السكريبت التسويقي والقصصي للفيديو بهدف شد انتباه المشاهد من الثواني الأولى وتحقيق أعلى نسب تفاعل.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
      link: "https://www.youtube.com/watch?v=ZjW6mpw8NQk",
      type: "كتابة سكريبت فيديو",
    },
    {
      title: "إدارة محتوى صفحة صيدلية براءة (Baraa Pharmacy)",
      description: "تأسيس وصياغة المحتوى الطبي التوعوي والتسويقي الموجه للجمهور لبناء الثقة وزيادة التفاعل على منصة فيسبوك.",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80",
      link: "https://www.facebook.com/Baraapharmacy",
      type: "صناعة محتوى سوشيال ميديا",
    },
    {
      title: "إدارة محتوى صفحة د. إبراهيم فرج (جلدية)",
      description: "كتابة وتجهيز المحتوى المتخصص لعيادة الأمراض الجلدية والليزر، وصياغة الشروحات الطبية لتعزيز مكانة العيادة رقمياً.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80",
      link: "https://www.facebook.com/Dr.Ibrahim.Farag.dermatologist",
      type: "صناعة محتوى سوشيال ميديا",
    },
    {
      title: "إدارة محتوى صفحة د. حازم حافظ",
      description: "صناعة الأفكار الطبية وكتابة المنشورات التفاعلية بطريقة مبسطة تجذب المرضى والمتابعين وتزيد من الاستشارات اليومية.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      link: "https://www.facebook.com/Dr.HazemHafez",
      type: "صناعة محتوى سوشيال ميديا",
    },
  ];

  return (
    // التدرج اللوني الطولي المطلوب (أبيض -> بني -> أصفر -> برتقالي -> أخضر) ومثبت بالكامل
    <main className="relative min-h-screen bg-gradient-to-b from-white via-[#5d4037] via-[#ffd54f] via-[#ff9800] to-[#2e7d32] bg-fixed text-black overflow-x-hidden font-sans select-none antialiased">
      
      {/* نظام الجليد المتساقط الشامل ومثبت (fixed) ليغطي كل السكينات أثناء الحركة */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        {[...Array(140)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-80 animate-fall"
            style={{
                width: `${Math.random() * 5 + 2}px`, // حجم عشوائي ذكي
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}vw`, // انتشار عبر العرض بالكامل
                animationDelay: `${Math.random() * 12}s`, // عشوائية البدء
                animationDuration: `${Math.random() * 12 + 6}s`, // سرعات سقوط متباينة للأناقة
                top: `-${Math.random() * 10 + 2}vh`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/70 border border-white/40 px-4 py-2 rounded-full text-slate-900 text-sm mb-6 shadow-sm backdrop-blur-md relative z-20">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
          متاح للمشاريع الجديدة والمتميزة
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-black via-slate-900 to-black bg-clip-text text-transparent relative z-20">
          عمرو السيد
        </h1>

        <p className="text-xl md:text-2xl text-slate-900 max-w-4xl mx-auto leading-relaxed font-bold relative z-20">
          كاتب محتوى مواقع إلكترونية متوافق مع <span className="text-emerald-950 font-black">السيو</span> ومحتوى صفحات <span className="text-amber-900 font-black">السوشيال ميديا</span> وسكريبتات فيديوهات <span className="text-red-950 font-black">يوتيوب</span> ومصمم مواقع على <span className="text-indigo-950 font-black">المنتور</span> وعلى <span className="text-slate-950 font-black">نيكست جي اس</span> إلى جانب تصميم فيديوهات <span className="text-teal-950 font-black">بالذكاء الاصطناعي</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12 relative z-20">
          <a
            href="#projects"
            className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all transform hover:-translate-y-1"
          >
            استعراض صالة الأعمال
          </a>

          <a
            href="#contact"
            className="bg-white/80 hover:bg-white border border-slate-300 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-md"
          >
            مناقشة مشروعك
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-950">
            معرض الأعمال والمشاريع
          </h2>
          <p className="text-slate-900 font-semibold max-w-xl mx-auto">
            مزيج احترافي من الأكواد، التميز في محركات البحث، وصناعة المحتوى الإبداعي.
          </p>
        </div>

        {/* شبكة الكروت بتأثير الزجاج الشفاف المطور لتمرير الثلج خلفها */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/50 hover:bg-white/85 rounded-3xl overflow-hidden border border-white/30 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div>
                <div className="relative overflow-hidden h-52 bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-50"></div>
                </div>

                <div className="p-6">
                  <span className="inline-block bg-white/80 border border-slate-200 text-slate-900 text-xs px-3 py-1 rounded-full font-black mb-4 shadow-sm">
                    {project.type}
                  </span>

                  <h3 className="text-xl font-black mb-3 text-slate-950 transition-colors group-hover:text-emerald-900">
                    {project.title}
                  </h3>

                  <p className="text-slate-900 text-sm leading-relaxed line-clamp-4 font-bold">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex justify-center items-center bg-slate-950 hover:bg-emerald-800 text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 text-sm shadow-md"
                >
                  معاينة العمل الحي 🔗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 bg-white/30 rounded-3xl border border-white/20 backdrop-blur-md max-w-6xl my-10 text-slate-950">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              لماذا توظيف خدماتي يمنحك الأفضلية؟
            </h2>
            {/* الفقرة المحدثة بالكامل بناءً على طلبك الإحترافي */}
            <p className="leading-relaxed mb-6 font-bold text-slate-900">
              أنا لا أقوم بمجرد تصميم الصفحات بل أصنع منظومات رقمية متكاملة أدمج مهاراتي التقنية في تطوير المواقع مع فهمي العميق لقواعد تهيئة محركات البحث لأضمن لك موقعاً فائق السرعة ومؤرشفاً بشكل مثالي في صدارة نتائج البحث، ومدعوماً بمحتوى تسويقي مدروس يحول الزوار إلى عملاء دائمين.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-black text-slate-950">
              <div className="flex items-center gap-2">
                <span className="text-emerald-900">✔</span> تحسين السيو التقني ومحلي
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-900">✔</span> برمجة تطبيقات وواجهات تفاعلية
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-900">✔</span> صناعة سكريبتات فيديو بالـ AI
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-900">✔</span> صياغة المحتوى الطبي والتسويقي
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/70 border border-white/40 rounded-2xl text-center shadow-sm backdrop-blur-sm">
              <div className="text-4xl font-black text-emerald-950 mb-2">100%</div>
              <div className="text-xs text-slate-900 uppercase font-black tracking-wider">سرعة وأداء Next.js</div>
            </div>
            <div className="p-6 bg-white/70 border border-white/40 rounded-2xl text-center shadow-sm backdrop-blur-sm">
              <div className="text-4xl font-black text-amber-950 mb-2">Top #1</div>
              <div className="text-xs text-slate-900 uppercase font-black tracking-wider">نتائج أرشفة جوجل</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-950 relative z-20">
          هل أنت مستعد لبناء مشروعك القادم؟
        </h2>
        <p className="text-slate-900 font-bold max-w-xl mx-auto mb-12 relative z-20">
          تواصل معي اليوم لنبدأ في تحويل أفكارك ورؤيتك الاستثمارية إلى منتج رقمي حقيقي ينافس بقوة.
        </p>

        <div className="flex flex-wrap justify-center gap-5 relative z-20">
          <a
            href="https://wa.me/201000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-black px-8 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1"
          >
            <span>محادثة عبر واتساب</span>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-black px-8 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1"
          >
            <span>تابعني على فيسبوك</span>
          </a>

          <a
            href="mailto:info@example.com"
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-950 font-bold px-8 py-4 rounded-2xl transition-all border border-slate-300 transform hover:-translate-y-1"
          >
            <span>البريد الإلكتروني الرسمي</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 bg-white/10 backdrop-blur-md py-8 text-center text-slate-950 font-bold text-sm">
        © {new Date().getFullYear()} عمرو السيد. جميع الحقوق محفوظة. تم التطوير بشغف بواسطة نكست جي اس.
      </footer>
    </main>
  );
}