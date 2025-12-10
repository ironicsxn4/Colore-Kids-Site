import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function CountdownBar() {
  const [time, setTime] = useState({ days: 1, hours: 16, mins: 56, secs: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-brand-pink to-brand-orange text-white py-2 px-4 text-center shadow-md sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base font-bold">
        <span className="uppercase tracking-wider text-xs sm:text-sm">Promoção Limitada! Kit Devocional com Desconto Especial Até 00h</span>
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
          <span className="text-xs font-bold">TERMINA EM:</span>
          <div className="flex gap-1">
            <TimeBox value={time.days} label="DIAS" />
            <span className="self-center pb-1">:</span>
            <TimeBox value={time.hours} label="HRS" />
            <span className="self-center pb-1">:</span>
            <TimeBox value={time.mins} label="MIN" />
            <span className="self-center pb-1">:</span>
            <TimeBox value={time.secs} label="SEG" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-brand-pink rounded-md p-1 min-w-[32px] flex flex-col items-center justify-center leading-none border-b-2 border-black/10">
      <span className="text-sm font-bold">{String(value).padStart(2, '0')}</span>
      <span className="text-[0.5rem] opacity-90">{label}</span>
    </div>
  );
}
