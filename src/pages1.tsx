import React, { useState, useEffect } from 'react';
import { ArrowLeft, Aperture, Bell, MessageCircle, ImageIcon, Video, Plus, UploadCloud, Save, Send, CircleCheckBig } from 'lucide-react';
import { RevealWrapper } from './shared';
import { MY_PROFILE_INFO, CATEGORIES, HOT_TAGS } from './data';

export const SocialPage = ({ platform, data, onBack }: any) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-24 md:top-32 left-6 lg:left-12">
        <RevealWrapper delay={0}>
          <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] font-bold text-xs md:text-sm tracking-widest uppercase transition-colors group bg-[#151516] px-4 md:px-5 py-2 md:py-2.5 border border-white/10 hover:border-[#FBB843] rounded-none shadow-sm hover:shadow-[0_0_15px_rgba(251,184,67,0.2)]">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4" /> 返回
          </button>
        </RevealWrapper>
      </div>
      
      <RevealWrapper delay={100} className="w-full max-w-md mt-20 md:mt-0">
        <div className="bg-[#151516] border-2 p-8 md:p-12 flex flex-col items-center text-center rounded-none shadow-2xl group relative overflow-hidden" style={{ borderColor: data.color }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: data.color }}></div>
          <div className="w-48 h-48 md:w-56 md:h-56 bg-[#0a0a0b] border border-white/10 mb-8 p-3 relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center overflow-hidden shadow-inner">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: data.color }}></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: data.color }}></div>
             <div className="w-full h-full relative opacity-70 group-hover:opacity-100 transition-opacity">
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 bg-black border border-white flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
                   <Aperture className="text-white w-6 h-6 animate-[spin_10s_linear_infinite]" />
                 </div>
               </div>
             </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-widest">{platform}</h2>
          <p className="text-[#86868b] text-sm md:text-base leading-relaxed font-medium">{data.desc}</p>
        </div>
      </RevealWrapper>
    </div>
  );
};

export const MessageCenterPage = ({ onBack }: any) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeTab, setActiveTab] = useState("全部");

  const MESSAGES = [
    { id: 1, type: 'system', title: '系统通知', content: '恭喜！您的作品已被选入。', time: '10分钟前', unread: true },
    { id: 2, type: 'interaction', title: '互动消息', content: '极地探险家_星 赞了您的作品。', time: '2小时前', unread: true }
  ];

  const filteredMessages = MESSAGES.filter(msg => {
    if (activeTab === "全部") return true;
    if (activeTab === "系统通知") return msg.type === 'system';
    return msg.type === 'interaction';
  });

  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] font-bold mb-8">
          <ArrowLeft className="w-4 h-4" /> 返回
        </button>
        <div className="flex items-center gap-4 mb-8">
          <span className="w-2 h-8 bg-[#E271CB] block"></span>
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">信息中心</h1>
        </div>
        <div className="flex gap-6 md:gap-10 border-b border-white/10 mb-8">
          {["全部", "系统通知", "互动消息"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm md:text-base font-bold transition-colors relative ${activeTab === tab ? 'text-white' : 'text-[#86868b]'}`}>
              {tab}
            </button>
          ))}
        </div>
      </RevealWrapper>
      <div className="space-y-4">
        {filteredMessages.map((msg, idx) => (
          <RevealWrapper key={msg.id} delay={idx * 50}>
            <div className={`bg-[#151516] border ${msg.unread ? 'border-[#E271CB]/30' : 'border-white/5'} p-5 rounded-none flex items-start gap-4`}>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white">{msg.title}</h3>
                  <span className="text-[#86868b] text-xs">{msg.time}</span>
                </div>
                <p className="text-xs text-zinc-300">{msg.content}</p>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
};
