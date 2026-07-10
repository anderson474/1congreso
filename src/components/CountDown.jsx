"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const EVENT_DATE = new Date("2026-08-06T00:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [sticky, setSticky] = useState(false);

  const triggerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const cards = useMemo(
    () => [
      { value: timeLeft.days, label: "Días" },
      { value: timeLeft.hours, label: "Horas" },
      { value: timeLeft.minutes, label: "Min" },
      { value: timeLeft.seconds, label: "Seg" },
    ],
    [timeLeft],
  );

  return (
    <>
      <div ref={triggerRef} />

      {/* Normal */}
      <div className={sticky ? "opacity-0 pointer-events-none" : ""}>
        <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-white/70 text-center mb-3">
            Faltan
          </p>

          <div className="flex gap-3">
            {cards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center min-w-[60px]"
              >
                <span className="text-2xl font-bold">
                  {String(card.value).padStart(2, "0")}
                </span>

                <span className="text-xs uppercase text-white/70">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky */}
      <div
        className={`
          fixed
          top-5
          right-5
          z-50
          transition-all
          duration-500
          ${
            sticky
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="rounded-2xl border border-white/15 bg-[#4A0D66]/90 backdrop-blur-xl px-5 py-4 shadow-2xl">
          <p className="text-xs uppercase tracking-widest text-white/70 text-center mb-3">
            Faltan
          </p>

          <div className="flex gap-3">
            {cards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center min-w-[55px]"
              >
                <span className="text-xl font-bold">
                  {String(card.value).padStart(2, "0")}
                </span>

                <span className="text-[10px] uppercase text-white/70">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function getTimeRemaining() {
  const difference = EVENT_DATE.getTime() - Date.now();

  if (difference <= 0)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
