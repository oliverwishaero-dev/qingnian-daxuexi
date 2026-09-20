import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const CONSCIOUSNESS = [
  {
    key: "思想自觉",
    title: "思想自觉",
    en: "IDEOLOGICAL",
    desc: "坚持不懈用党的创新理论凝心铸魂，引导青年员工真学、真懂、真信、真用，从思想深处筑牢信仰之基、补足精神之钙、把稳思想之舵。",
    points: ["读原著、学原文、悟原理", "每周固定学习日制度", "青年理论学习小组全覆盖"],
  },
  {
    key: "政治自觉",
    title: "政治自觉",
    en: "POLITICAL",
    desc: "教育引导青年员工深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”，始终在思想上政治上行动上同党中央保持高度一致。",
    points: ["主题团日与党课联动", "形势政策宣讲常态化", "重大节点专题学习研讨"],
  },
  {
    key: "行动自觉",
    title: "行动自觉",
    en: "PRACTICAL",
    desc: "坚持学思用贯通、知信行统一，把学习成效转化为立足岗位、建功立业的实际行动，引导青年在服务“三农”、普惠金融一线挺膺担当。",
    points: ["岗位建功与志愿服务结合", "学习成果转化为服务实效", "青年突击队下沉一线"],
  },
];

export default function Mechanism() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const active = CONSCIOUSNESS[activeIdx];

  return (
    <section id="mechanism" className="relative bg-[#FAF7F1] py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading index="01" title="三个自觉 · 常态化学习机制" sub="LEARNING MECHANISM" />

        <div ref={ref} className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          {/* 左侧选择器 */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2">
            {CONSCIOUSNESS.map((item, i) => (
              <button
                key={item.key}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "group relative shrink-0 text-left rounded-2xl px-6 py-5 lg:py-7 transition-all duration-500",
                  i === activeIdx
                    ? "bg-[#210C02] text-[#FEF1E8] shadow-[0_16px_40px_-12px_rgba(33,12,2,0.45)]"
                    : "bg-[#F6F1EA] text-[#210C02] hover:bg-[#EFE8DD]",
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <span
                      className={cn(
                        "block font-mono text-[10px] tracking-[0.3em] mb-1",
                        i === activeIdx ? "text-[#D69900]" : "text-[#7B6556]"
                      )}
                    >
                      {item.en} · 0{i + 1}
                    </span>
                    <span className="font-serif-sc text-xl lg:text-2xl font-bold">{item.title}</span>
                  </div>
                  <span
                    className={cn(
                      "text-2xl transition-all duration-300",
                      i === activeIdx ? "text-[#C42121] rotate-0" : "text-[#7B6556]/40 -rotate-45 group-hover:rotate-0"
                    )}
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* 右侧内容面板 */}
          <div
            key={activeIdx}
            className="relative rounded-3xl bg-[#C42121] text-[#FEF1E8] p-8 lg:p-12 overflow-hidden animate-panel-in"
          >
            <span className="absolute -right-6 -bottom-10 font-serif-sc text-[10rem] leading-none font-bold text-[#FEF1E8]/10 select-none pointer-events-none">
              {active.title.slice(0, 2)}
            </span>
            <span className="inline-block rounded-full border border-[#FEF1E8]/30 px-4 py-1 text-xs tracking-[0.25em]">
              核心要义
            </span>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed lg:leading-loose">{active.desc}</p>
            <ul className="mt-8 space-y-3">
              {active.points.map((p, i) => (
                <li key={p} className="flex items-center gap-3 text-[#FEF1E8]/90">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-[#FEF1E8]/15 flex items-center justify-center text-[11px] font-mono">
                    {i + 1}
                  </span>
                  <span className="tracking-wide">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
