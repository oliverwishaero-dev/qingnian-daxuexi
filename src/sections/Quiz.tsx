import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const QUESTIONS = [
  {
    q: "中国共产党成立于哪一年？",
    options: ["1919年", "1921年", "1927年", "1949年"],
    answer: 1,
    explain: "1921年7月，中共一大在上海召开，宣告中国共产党正式成立，这是中国历史上开天辟地的大事变。",
  },
  {
    q: "“四史”学习教育指的是哪“四史”？",
    options: [
      "党史、新中国史、改革开放史、社会主义发展史",
      "党史、军史、新中国史、改革开放史",
      "古代史、近代史、现代史、当代史",
      "党史、国史、地方志、行业史",
    ],
    answer: 0,
    explain: "“四史”即党史、新中国史、改革开放史、社会主义发展史。",
  },
  {
    q: "开启改革开放和社会主义现代化建设新时期的会议是？",
    options: ["中共八大", "十一届三中全会", "中共十二大", "南方谈话"],
    answer: 1,
    explain: "1978年党的十一届三中全会作出把党和国家工作中心转移到经济建设上来、实行改革开放的历史性决策。",
  },
  {
    q: "青年大学习机制要提升青年员工的“三个自觉”，不包括以下哪项？",
    options: ["思想自觉", "政治自觉", "行动自觉", "生活自觉"],
    answer: 3,
    explain: "“三个自觉”是思想自觉、政治自觉、行动自觉。",
  },
  {
    q: "面对面宣讲交流的三种主要形式是？",
    options: [
      "专家授课、榜样分享、青年交流",
      "集中观影、外出参观、知识竞赛",
      "线上打卡、撰写心得、主题演讲",
      "领导讲话、文件学习、闭卷考试",
    ],
    answer: 0,
    explain: "采取党史专家授课、先进榜样分享奋斗故事、青年员工交流心得体会等形式开展面对面宣讲交流。",
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUESTIONS[step];
  const progress = useMemo(() => ((done ? QUESTIONS.length : step) / QUESTIONS.length) * 100, [step, done]);

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 >= QUESTIONS.length) setDone(true);
    else setStep((s) => s + 1);
    setPicked(null);
  };

  const restart = () => {
    setStep(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  return (
    <section id="quiz" className="bg-[#C42121] py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute -bottom-32 -right-24 w-[26rem] h-[26rem] rounded-full bg-[#210C02]/20 blur-[100px] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-12">
        <SectionHeading index="04" title="学以致用 · 知识问答" sub="QUIZ TIME" light />

        <div className="rounded-3xl bg-[#FAF7F1] p-8 lg:p-12 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.4)]">
          {!done ? (
            <>
              <div className="flex items-center justify-between font-mono text-xs tracking-widest text-[#7B6556] mb-3">
                <span>
                  第 {String(step + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")} 题
                </span>
                <span>已得 {score} 分</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#E5E2DA] overflow-hidden mb-8">
                <div
                  className="h-full bg-[#C42121] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h3 className="font-serif-sc text-xl lg:text-2xl font-bold text-[#210C02] leading-relaxed" key={step}>
                {question.q}
              </h3>

              <div className="mt-8 space-y-3">
                {question.options.map((opt, i) => {
                  const isAnswer = i === question.answer;
                  const isPicked = i === picked;
                  return (
                    <button
                      key={opt}
                      onClick={() => pick(i)}
                      disabled={picked !== null}
                      className={cn(
                        "w-full text-left rounded-2xl border px-6 py-4 transition-all duration-300 flex items-center gap-4",
                        picked === null &&
                          "border-[#210C02]/12 bg-white hover:border-[#C42121] hover:bg-[#C42121]/5 hover:translate-x-1",
                        picked !== null && isAnswer && "border-[#2E7D32] bg-[#2E7D32]/10 text-[#1B5E20]",
                        picked !== null && isPicked && !isAnswer && "border-[#C42121] bg-[#C42121]/10 text-[#C42121]",
                        picked !== null && !isPicked && !isAnswer && "border-[#210C02]/8 bg-white opacity-50"
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-mono text-sm",
                          picked !== null && isAnswer
                            ? "border-[#2E7D32] bg-[#2E7D32] text-white"
                            : picked !== null && isPicked
                              ? "border-[#C42121] bg-[#C42121] text-white"
                              : "border-[#210C02]/20"
                        )}
                      >
                        {picked !== null && isAnswer ? "✓" : picked !== null && isPicked ? "✗" : String.fromCharCode(65 + i)}
                      </span>
                      <span className="leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <div className="mt-6 animate-panel-in">
                  <p className="rounded-2xl bg-[#D69900]/10 border border-[#D69900]/30 px-5 py-4 text-sm leading-relaxed text-[#7B5A00]">
                    <span className="font-bold">{picked === question.answer ? "回答正确！" : "再想想——"}</span>
                    {question.explain}
                  </p>
                  <button
                    onClick={next}
                    className="mt-5 w-full rounded-full bg-[#210C02] text-[#FEF1E8] py-4 font-medium tracking-[0.2em] transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {step + 1 >= QUESTIONS.length ? "查看成绩" : "下一题 →"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8 animate-panel-in">
              <span className="font-serif-sc text-7xl font-bold text-[#C42121]">
                {score}
                <span className="text-3xl text-[#7B6556]"> / {QUESTIONS.length}</span>
              </span>
              <h3 className="mt-6 font-serif-sc text-2xl font-bold text-[#210C02]">
                {score === QUESTIONS.length
                  ? "满分！理论学习标兵就是你"
                  : score >= 3
                    ? "成绩不错，继续加油！"
                    : "学无止境，回到章节再学习一遍吧"}
              </h3>
              <p className="mt-4 text-[#7B6556] leading-relaxed">
                学思用贯通，知信行统一。把学习成效转化为岗位建功的实际行动。
              </p>
              <button
                onClick={restart}
                className="mt-8 rounded-full bg-[#C42121] text-[#FEF1E8] px-10 py-4 font-medium tracking-[0.2em] transition-transform duration-300 hover:scale-105"
              >
                再答一次
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
