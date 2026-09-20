import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  sub,
  light = false,
}: {
  index: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mb-14 lg:mb-20">
      <div
        className={cn(
          "flex items-baseline gap-4 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        <span className={cn("font-mono text-sm tracking-widest", light ? "text-[#D69900]" : "text-[#C42121]")}>
          {index}
        </span>
        <span className={cn("h-px flex-1", light ? "bg-[#FEF1E8]/20" : "bg-[#210C02]/15")} />
        {sub && (
          <span className={cn("text-xs tracking-[0.3em]", light ? "text-[#FEF1E8]/60" : "text-[#7B6556]")}>
            {sub}
          </span>
        )}
      </div>
      <h2
        className={cn(
          "mt-6 font-serif-sc text-4xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-700 delay-100",
          light ? "text-[#FEF1E8]" : "text-[#210C02]",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
