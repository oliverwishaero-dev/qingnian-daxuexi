import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <header id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#210C02]">
      {/* 装饰光晕 */}
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#C42121]/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#D69900]/15 blur-[100px] pointer-events-none" />
      {/* 竖排装饰文字 */}
      <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none">
        <span className="writing-vertical font-serif-sc text-[#FEF1E8]/10 text-7xl font-bold tracking-[0.4em]">
          青春向党·不负韶华
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div
          className={`flex items-center gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="inline-block w-10 h-10 rounded-full bg-[#C42121] text-[#FEF1E8] flex items-center justify-center font-serif-sc font-bold text-lg">
            学
          </span>
          <span className="text-[#D69900] tracking-[0.4em] text-sm font-medium">青年大学习 · 常态化学习机制</span>
        </div>

        <h1 className="mt-10 font-serif-sc font-bold text-[#FEF1E8] leading-[1.08] tracking-tight text-5xl sm:text-7xl lg:text-8xl">
          {["让党的创新理论", "在青年心中"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className={`block transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <span
              className={`block text-[#E86A5E] transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              style={{ transitionDelay: "500ms" }}
            >
              落地生根
            </span>
          </span>
        </h1>

        <p
          className={`mt-10 max-w-xl text-[#FEF1E8]/70 text-base lg:text-lg leading-relaxed transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          全面深化“青年大学习”常态化学习机制，系统组织青年员工学习党的创新理论，抓实“四史”学习教育与形势政策宣讲，持续提升青年员工的思想自觉、政治自觉、行动自觉。
        </p>

        <div
          className={`mt-12 flex flex-wrap items-center gap-6 transition-all duration-700 delay-[850ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <a
            href="#mechanism"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("mechanism")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 rounded-full bg-[#C42121] px-8 py-4 text-[#FEF1E8] font-medium tracking-wider transition-transform duration-300 hover:scale-[1.04]"
          >
            开始学习之旅
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>
          <span className="text-[#FEF1E8]/40 text-sm tracking-widest">滚动页面 · 逐章探索</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FEF1E8]/40">
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <span className="block w-px h-10 bg-gradient-to-b from-[#FEF1E8]/40 to-transparent animate-pulse" />
      </div>
    </header>
  );
}
