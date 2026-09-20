import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const FORMATS = [
  {
    icon: "授",
    title: "党史专家授课",
    sub: "专家讲理论",
    desc: "邀请党史专家、党校教授走进基层，以深厚的理论功底和生动的历史细节，把党的创新理论讲深、讲透、讲活，让青年员工听得懂、能领会、可落实。",
    tag: "讲清楚 · 党的初心使命",
  },
  {
    icon: "享",
    title: "先进榜样分享",
    sub: "榜样讲奋斗",
    desc: "组织劳动模范、优秀共产党员、业务标兵面对面分享奋斗故事，用身边人身边事感染青年、激励青年，让榜样力量直抵人心。",
    tag: "讲清楚 · 百年奋斗征程",
  },
  {
    icon: "谈",
    title: "青年交流心得",
    sub: "青年讲体会",
    desc: "搭建青年员工交流研讨平台，围绕学习主题谈认识、谈体会、谈打算，在思想碰撞中深化理解，在互学互鉴中共同提高。",
    tag: "讲清楚 · 时代发展成就",
  },
];

function FlipCard({ item, index, visible }: { item: (typeof FORMATS)[0]; index: number; visible: boolean }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={cn(
        "group h-96 cursor-pointer transition-all duration-700 [perspective:1200px]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* 正面 */}
        <div className="absolute inset-0 rounded-3xl bg-[#F6F1EA] border border-[#210C02]/8 p-8 flex flex-col [backface-visibility:hidden]">
          <span className="w-14 h-14 rounded-2xl bg-[#C42121] text-[#FEF1E8] flex items-center justify-center font-serif-sc text-2xl font-bold">
            {item.icon}
          </span>
          <span className="mt-6 font-mono text-[10px] tracking-[0.3em] text-[#7B6556]">{item.sub}</span>
          <h3 className="mt-2 font-serif-sc text-2xl font-bold text-[#210C02]">{item.title}</h3>
          <div className="mt-auto flex items-center justify-between text-[#7B6556]">
            <span className="text-xs tracking-[0.25em]">点击翻转 · 了解详情</span>
            <span className="text-xl transition-transform duration-300 group-hover:rotate-180">⟳</span>
          </div>
        </div>
        {/* 背面 */}
        <div className="absolute inset-0 rounded-3xl bg-[#210C02] p-8 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="inline-block w-fit rounded-full bg-[#C42121] px-3 py-1 text-[10px] tracking-[0.2em] text-[#FEF1E8]">
            {item.tag}
          </span>
          <p className="mt-5 text-[#FEF1E8]/85 leading-loose text-[15px]">{item.desc}</p>
          <span className="mt-auto font-serif-sc text-[#D69900] text-lg font-bold">{item.title}</span>
        </div>
      </div>
    </div>
  );
}

export default function Lecture() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="lecture" className="bg-[#FAF7F1] py-28 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading index="03" title="面对面宣讲交流" sub="FACE TO FACE" />
        <p className="max-w-2xl -mt-8 mb-14 text-[#7B6556] leading-loose">
          创新开展面对面宣讲交流，讲清楚党的初心使命、百年奋斗征程与时代发展成就。将卡片翻转，查看每种形式的内涵。
        </p>
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {FORMATS.map((f, i) => (
            <FlipCard key={f.title} item={f} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
