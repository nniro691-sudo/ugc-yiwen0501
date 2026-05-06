import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Aperture } from 'lucide-react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

export const RevealWrapper = ({ children, delay = 0, className = "" }: any) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const InfoPage = ({ title, subtitle, data, onBack }: any) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="max-w-[1000px] mx-auto px-6 lg:px-12 pt-28 md:pt-40 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] font-bold text-xs md:text-sm tracking-widest uppercase transition-colors mb-10 md:mb-16 group bg-[#151516] px-4 md:px-5 py-2 md:py-2.5 border border-white/10 hover:border-[#FBB843] rounded-none shadow-sm hover:shadow-[0_0_15px_rgba(251,184,67,0.2)] w-max">
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4" /> 返回
        </button>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="w-3 h-10 bg-[#E271CB] block shadow-[0_0_15px_rgba(226,113,203,0.5)]"></span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{title}</h1>
          <span className="text-[#86868b] text-sm md:text-base font-mono uppercase tracking-widest ml-4 pt-2 hidden sm:block">{subtitle}</span>
        </div>
      </RevealWrapper>
      <div className="space-y-8 md:space-y-12">
        {data.map((block: any, idx: number) => (
          <RevealWrapper key={idx} delay={200 + idx * 100}>
            <div className="bg-[#151516] border border-white/5 p-8 md:p-10 rounded-none shadow-lg hover:border-[#FBB843]/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#443E3D] group-hover:bg-[#FBB843] transition-colors"></div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-[#FBB843] transition-colors pl-2">{block.heading}</h3>
              <div className="text-[#a1a1a6] text-sm md:text-base leading-loose whitespace-pre-line pl-2 font-medium">
                {block.text}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
};
