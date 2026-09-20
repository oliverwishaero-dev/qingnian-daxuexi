import ChapterNav from "@/sections/ChapterNav";
import Hero from "@/sections/Hero";
import Mechanism from "@/sections/Mechanism";
import History from "@/sections/History";
import Lecture from "@/sections/Lecture";
import Quiz from "@/sections/Quiz";

export default function Home() {
  return (
    <main className="bg-[#FAF7F1] text-[#210C02] antialiased">
      <ChapterNav />
      <Hero />
      <Mechanism />
      <History />
      <Lecture />
      <Quiz />
      <footer className="bg-[#210C02] py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#C42121] text-[#FEF1E8] flex items-center justify-center font-serif-sc font-bold">
              学
            </span>
            <span className="text-[#FEF1E8]/80 font-serif-sc tracking-widest">青年大学习 · 永远在路上</span>
          </div>
          <p className="text-[#FEF1E8]/40 text-xs tracking-[0.25em]">
            思想自觉 · 政治自觉 · 行动自觉
          </p>
        </div>
      </footer>
    </main>
  );
}
