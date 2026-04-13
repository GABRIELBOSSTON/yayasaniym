"use client";

import { useEffect, useRef } from "react";

export default function StatsSection() {
  const countersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLElement;
            const targetStr = counter.getAttribute("data-target");
            if (!targetStr) return;
            const target = +targetStr;
            const speed = 200;

            const updateCount = () => {
              // Parse current counter value, remove non-numeric chars
              const currentText = counter.innerText.replace(/\D/g, "");
              const count = +currentText;
              const inc = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + inc).toString();
                setTimeout(updateCount, 20);
              } else {
                // Add the specific formatting manually based on target
                let finalVal = target.toString();
                if (target === 3471) finalVal = "3.471";
                counter.innerText = finalVal;
              }
            };
            updateCount();
            obs.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  return (
    <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-element">
      <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 border border-gray-100 relative overflow-hidden group hover:shadow-primary-500/20 transition-all duration-500">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full opacity-50"></div>

        <div className="text-center relative z-10 p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <div
            ref={addToRefs}
            data-target="49"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-1"
          >
            0
          </div>
          <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mt-2">
            Proyek Sosial
          </div>
        </div>
        <div className="text-center relative z-10 p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <div
            ref={addToRefs}
            data-target="92"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-1"
          >
            0
          </div>
          <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mt-2">
            Mitra
          </div>
        </div>
        <div className="text-center relative z-10 p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <div
            ref={addToRefs}
            data-target="502"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-1"
          >
            0
          </div>
          <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mt-2">
            Relawan
          </div>
        </div>
        <div className="text-center relative z-10 p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <div
            ref={addToRefs}
            data-target="3471"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-1"
          >
            0
          </div>
          <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide mt-2">
            Penerima Manfaat
          </div>
        </div>
      </div>
    </div>
  );
}
