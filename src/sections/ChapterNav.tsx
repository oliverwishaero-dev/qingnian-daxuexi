import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  { id: "hero", label: "开篇" },
  { id: "mechanism", label: "学习机制" },
  { id: "history", label: "四史学习" },
  { id: "lecture", label: "宣讲交流" },
  { id: "quiz", label: "知识问答" },
];

export default function ChapterNav() {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      let current = "hero";
      for (const c of CHAPTERS) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = c.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#E5E2DA]">
        <div
          className="h-full bg-[#C42121] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <nav className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5">
        {CHAPTERS.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span
              className={cn(
                "font-mono text-[10px] tracking-widest transition-colors",
                active === c.id ? "text-[#C42121]" : "text-[#B9AFA2]"
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "block h-px transition-all duration-300",
                active === c.id ? "w-8 bg-[#C42121]" : "w-4 bg-[#CFC7BA] group-hover:w-6"
              )}
            />
            <span
              className={cn(
                "text-xs tracking-wider transition-all duration-300",
                active === c.id
                  ? "opacity-100 text-[#210C02] font-medium"
                  : "opacity-0 group-hover:opacity-100 text-[#7B6556]"
              )}
            >
              {c.label}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
}
