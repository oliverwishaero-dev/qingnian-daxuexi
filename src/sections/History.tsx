import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const HISTORIES = [
  {
    key: "党史",
    span: "1921 —",
    title: "中国共产党史",
    desc: "从石库门到天安门，从兴业路到复兴路。一百多年来，党团结带领人民开辟了伟大道路、创造了伟大事业、取得了伟大成就，书写了中华民族几千年历史上最恢宏的史诗。",
    milestones: [
      { year: "1921", event: "中国共产党成立，开天辟地的大事变" },
      { year: "1935", event: "遵义会议，生死攸关的伟大转折" },
      { year: "1949", event: "中华人民共和国成立" },
      { year: "2021", event: "建党百年，全面建成小康社会" },
    ],
  },
  {
    key: "新中国史",
    span: "1949 —",
    title: "中华人民共和国史",
    desc: "七十多年披荆斩棘，七十多年风雨兼程。新中国从一穷二白到世界第二大经济体，实现了从站起来、富起来到强起来的伟大飞跃。",
    milestones: [
      { year: "1949", event: "开国大典，中国人民站起来了" },
      { year: "1956", event: "社会主义基本制度确立" },
      { year: "1964", event: "第一颗原子弹爆炸成功" },
      { year: "2020", event: "脱贫攻坚战取得全面胜利" },
    ],
  },
  {
    key: "改革开放史",
    span: "1978 —",
    title: "改革开放史",
    desc: "改革开放是决定当代中国命运的关键一招。四十多年来，从农村到城市、从沿海到内地，改革不停顿、开放不止步，创造了中国式现代化新道路。",
    milestones: [
      { year: "1978", event: "十一届三中全会，开启改革开放" },
      { year: "1980", event: "设立经济特区" },
      { year: "2001", event: "加入世界贸易组织" },
      { year: "2013", event: "提出共建“一带一路”倡议" },
    ],
  },
  {
    key: "社会主义发展史",
    span: "1516 —",
    title: "社会主义发展史",
    desc: "五百年沧桑巨变，社会主义从空想到科学、从理论到实践、从一国到多国。中国特色社会主义进入新时代，科学社会主义在二十一世纪的中国焕发出强大生机活力。",
    milestones: [
      { year: "1848", event: "《共产党宣言》发表" },
      { year: "1917", event: "十月革命一声炮响" },
      { year: "1956", event: "社会主义制度在中国确立" },
      { year: "2017", event: "中国特色社会主义进入新时代" },
    ],
  },
];

export default function History() {
  const [tab, setTab] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const h = HISTORIES[tab];

  return (
    <section id="history" className="relative bg-[#210C02] py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[#C42121]/15 blur-[120px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading index="02" title="抓实“四史”学习教育" sub="FOUR HISTORIES" light />

        <div ref={ref}>
          {/* Tab 切换 */}
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-12">
            {HISTORIES.map((item, i) => (
              <button
                key={item.key}
                onClick={() => setTab(i)}
                className={cn(
                  "rounded-full px-5 lg:px-7 py-2.5 lg:py-3 font-serif-sc text-sm lg:text-base tracking-wider transition-all duration-300 border",
                  i === tab
                    ? "bg-[#C42121] border-[#C42121] text-[#FEF1E8] scale-105"
                    : "border-[#FEF1E8]/20 text-[#FEF1E8]/60 hover:border-[#FEF1E8]/50 hover:text-[#FEF1E8]",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {item.key}
              </button>
            ))}
          </div>

          <div key={tab} className="grid lg:grid-cols-2 gap-10 lg:gap-20 animate-panel-in">
            <div>
              <span className="font-mono text-[#D69900] tracking-[0.3em] text-sm">{h.span}</span>
              <h3 className="mt-3 font-serif-sc text-3xl lg:text-5xl font-bold text-[#FEF1E8]">{h.title}</h3>
              <p className="mt-6 text-[#FEF1E8]/70 leading-loose lg:text-lg">{h.desc}</p>
            </div>

            {/* 时间轴 */}
            <ol className="relative border-l border-[#FEF1E8]/15 pl-8 space-y-8">
              {h.milestones.map((m, i) => (
                <li
                  key={m.year}
                  className="relative group animate-panel-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-[#D69900] bg-[#210C02] transition-colors duration-300 group-hover:bg-[#D69900]" />
                  <span className="font-mono text-[#D69900] text-lg tracking-widest">{m.year}</span>
                  <p className="mt-1 text-[#FEF1E8]/80 leading-relaxed">{m.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
