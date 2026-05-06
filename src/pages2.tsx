import React, { useState } from 'react';
import { ChevronDown, Clock, Heart, MessageCircle, Users, ChevronRight, Calendar, Video, Image as ImageIcon, Play, X } from 'lucide-react';
import { WORKS_PAGE_DATA, EVENTS_PAGE_DATA, COURSES_PAGE_DATA, MY_PROFILE_INFO, CATEGORIES } from './data';
import { RevealWrapper } from './shared';

export const WorksPage = ({ navigate, works }: any) => {
  const [primaryTab, setPrimaryTab] = useState("殿堂典藏");
  const [activeYear, setActiveYear] = useState("2025");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("热门作品");
  const [mediaType, setMediaType] = useState("摄影作品");
  const [activeCategory, setActiveCategory] = useState("全部");

  const displayWorks = works || WORKS_PAGE_DATA;

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 md:pt-40 pb-32 min-h-screen">
      <RevealWrapper delay={0} className="relative z-50">
        <div className="flex items-center gap-4 mb-10">
          <span className="w-2 h-8 bg-[#443E3D] block"></span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">作品库。</h2>
        </div>

        {/* Tabs Top Bar */}
        <div className="flex items-center gap-10 border-b border-white/5 pb-4 mb-10 relative">
          <div className="flex items-center gap-3 relative cursor-pointer group" onClick={() => setPrimaryTab("殿堂典藏")}>
            <span className={`text-xl md:text-2xl font-bold transition-all tracking-wider ${primaryTab === "殿堂典藏" ? "text-white" : "text-[#86868b] group-hover:text-white"}`}>殿堂典藏</span>
            {primaryTab === "殿堂典藏" && <span className="text-[#FBB843] text-xs font-bold mt-1">历届年赛优秀作品</span>}
            {primaryTab === "殿堂典藏" && <div className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-[#FBB843]"></div>}
          </div>
          <div className="flex items-center gap-3 relative cursor-pointer group" onClick={() => setPrimaryTab("探索共创")}>
            <span className={`text-xl md:text-2xl font-bold transition-all tracking-wider ${primaryTab === "探索共创" ? "text-white" : "text-[#86868b] group-hover:text-white"}`}>探索共创</span>
            {primaryTab === "探索共创" && <span className="text-[#FBB843] text-xs font-bold mt-1">创作者分享视界</span>}
            {primaryTab === "探索共创" && <div className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-[#FBB843]"></div>}
          </div>
        </div>

        {/* Filters Top Bar */}
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-6 items-start md:items-center">
          {primaryTab === "殿堂典藏" ? (
            /* Year Dropdown */
            <div className="relative">
              <button 
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="flex items-center justify-between w-32 border border-white/10 p-3 text-sm font-bold text-white hover:bg-white/5 bg-[#111] transition-colors"
              >
                {activeYear}年 <ChevronDown size={14} className={`transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`}/>
              </button>
              {isYearDropdownOpen && (
                <div className="absolute top-12 left-0 bg-[#151516] border border-white/10 z-[60] w-32 shadow-2xl">
                  {["2026", "2025", "2024", "2023"].map(year => (
                    <button 
                      key={year}
                      onClick={() => {setActiveYear(year); setIsYearDropdownOpen(false);}}
                      className={`block w-full text-left px-4 py-3 text-sm font-bold ${activeYear === year ? 'text-white bg-white/5' : 'text-[#86868b] hover:text-white hover:bg-white/5'}`}
                    >
                      {year}年
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Sort Order for 探索共创 */
            <div className="flex border border-white/10 bg-[#151516]">
              {["热门作品", "最新发布"].map(sort => (
                <button 
                  key={sort} onClick={() => setActiveSort(sort)}
                  className={`px-6 py-2.5 text-sm font-bold transition-colors min-w-24 ${activeSort === sort ? 'bg-white/10 text-white' : 'text-[#86868b] hover:text-white'}`}
                >
                  {sort}
                </button>
              ))}
            </div>
          )}

          {/* Media Type */}
          <div className="flex border border-white/10 bg-[#151516]">
            {["摄影作品", "视频作品"].map(type => (
              <button 
                key={type} onClick={() => setMediaType(type)}
                className={`px-6 py-2.5 text-sm font-bold flex items-center gap-2 transition-colors ${mediaType === type ? 'bg-white/10 text-white' : 'text-[#86868b] hover:text-white'}`}
              >
                {type === "摄影作品" ? <ImageIcon size={14} /> : <Video size={14} />} {type}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Fillers */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["全部", "哺乳动物", "鸟类", "植物和真菌", "水下生物", "其他动物", "人与自然", "手机组"].map(category => (
            <button 
              key={category} onClick={() => setActiveCategory(category)}
              className={`py-3 px-8 text-sm font-bold transition-all whitespace-nowrap ${activeCategory === category ? 'bg-[#333] text-[#ddd] border border-white/10' : 'bg-[#151516] text-[#86868b] border border-white/5 hover:bg-[#222] hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayWorks.map((work: any, index: number) => (
          <RevealWrapper key={index} delay={index * 100}>
            <div className="group bg-[#151516] rounded-none overflow-hidden border border-white/5 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col h-full" onClick={() => navigate('详情', work)}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={work.image || work.mainImage || "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="work"/>
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 text-xs text-white font-bold">{work.category || activeCategory}</div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-white text-base md:text-lg font-bold mb-4 line-clamp-2">{work.title}</h3>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-4 group/author" onClick={(e) => { e.stopPropagation(); navigate('他人主页'); }}>
                    <img src={work.avatar || MY_PROFILE_INFO.avatar} className="w-6 h-6 rounded-full" alt="author"/>
                    <span className="text-xs text-zinc-300 group-hover/author:text-white">{work.author}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#86868b] border-t border-white/5 pt-4">
                    <span className="flex items-center gap-1.5"><Clock size={12}/> {work.time}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5"><Heart size={12}/> {work.likes || 0}</span>
                      <span className="flex items-center gap-1.5"><MessageCircle size={12}/> {work.comments || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
};

export const EventsPage = ({ navigate }: any) => {
  const [activeTab, setActiveTab] = useState("独家企划");
  const [activeCategory, setActiveCategory] = useState("全部");
  const [activeStatus, setActiveStatus] = useState("进行中");

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 md:pt-40 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <span className="w-3 h-10 bg-[#FBB843] block"></span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">社区活动。</h2>
          </div>
          <div className="flex bg-[#111111] p-1 border border-white/5">
             {["进行中", "即将开始", "已结束"].map(status => (
              <button 
                key={status} onClick={() => setActiveStatus(status)}
                className={`px-6 py-2.5 text-sm transition-colors ${activeStatus === status ? 'bg-[#333333] text-white font-bold' : 'text-[#86868b] hover:text-white'}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6 border-b border-white/10 mb-10">
          {["独家企划", "联合共创"].map(tab => (
            <button 
              key={tab} onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg md:text-xl font-bold transition-all ${activeTab === tab ? 'text-white border-b-2 border-[#E271CB]' : 'text-[#86868b] hover:text-white border-b-2 border-transparent'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {["全部", "月度主题征集", "社区挑战赛", "线上直播"].map(cat => (
            <button 
              key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#443E3D] text-white' : 'bg-[#151516] text-[#86868b] hover:bg-white/10 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {EVENTS_PAGE_DATA.map((event, index) => (
          <RevealWrapper key={event.id} delay={index * 100}>
            <div onClick={() => navigate('活动详情')} className="group bg-[#151516] overflow-hidden cursor-pointer flex flex-col sm:flex-row h-full md:h-[320px]">
              <div className="relative w-full sm:w-1/2 h-64 sm:h-full flex-shrink-0 overflow-hidden">
                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute top-4 left-4 bg-[#E271CB] text-white text-xs px-3 py-1 font-bold">{event.status}</div>
              </div>
              <div className="w-full sm:w-1/2 p-6 md:p-8 flex flex-col justify-start">
                <div className="bg-[#443E3D] w-max px-2.5 py-1 text-zinc-300 text-xs mb-4">{event.tag}</div>
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 line-clamp-2">{event.title}</h3>
                <p className="text-[#86868b] text-sm leading-relaxed mb-6 line-clamp-2">{event.desc}</p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <div className="flex items-center gap-2 text-zinc-300 text-xs">
                     <Calendar size={14} className="text-[#86868b]" /> 
                     <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300 text-xs mb-6 border-transparent">
                      <Video size={14} className="text-[#86868b]" />
                      <span>{event.type}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Users size={14} className="text-[#86868b]" /> 
                      <span className="font-bold text-white">{event.participants}</span>
                      <span className="text-[#86868b]">件作品</span>
                    </div>
                    <span className="text-xs font-bold text-white flex items-center gap-1 group-hover:text-[#FBB843] transition-colors">查看详情 <ChevronRight size={14}/></span>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  );
};

export const CoursesPage = ({ navigate }: any) => {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [previewVideo, setPreviewVideo] = useState<any>(null);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 md:pt-40 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <span className="w-3 h-10 bg-[#E271CB] block"></span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">课程中心。</h2>
          </div>
          <div className="flex border border-white/10 rounded-none overflow-hidden h-max w-max">
            <button className="px-6 py-2.5 text-sm font-bold bg-[#333] text-white">最新上线</button>
            <button className="px-6 py-2.5 text-sm font-bold text-[#86868b] bg-[#151516] hover:text-white hover:bg-[#222] transition-colors">最受欢迎</button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-0 mb-12">
          {["全部课程", "前期拍摄", "后期修图", "生态知识", "大师班"].map(cat => {
            const actualCat = cat === "全部课程" ? "全部" : cat;
            return (
             <button 
               key={cat} onClick={() => setActiveCategory(actualCat)}
               className={`px-8 py-3 text-sm font-bold transition-all border border-transparent border-r-white/5 last:border-r-transparent ${activeCategory === actualCat ? 'bg-[#333] border-white/5 text-white' : 'bg-[#151516] text-[#86868b] hover:bg-[#222] hover:text-white'}`}
             >
               {cat}
             </button>
          )})}
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {COURSES_PAGE_DATA.filter(c => activeCategory === "全部" || c.category === activeCategory).map((course, index) => (
          <RevealWrapper key={course.id} delay={index * 100}>
            <div className="group bg-[#151516] rounded-none overflow-hidden border border-white/5 hover:border-[#E271CB]/40 transition-all duration-700 hover:-translate-y-2 cursor-pointer flex flex-col h-full relative" onClick={() => navigate('课程详情', { ...course })}>
              <div className="relative aspect-video overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-[#443E3D]/90 px-3 py-1.5 text-xs text-white font-bold">{course.category}</div>
                  <div className="bg-[#FBB843]/90 px-3 py-1.5 text-xs text-black font-bold">{course.level}</div>
                </div>
                {course.type === "视频" && (
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" onClick={(e) => { e.stopPropagation(); setPreviewVideo(course); }}>
                     <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                       <Play fill="white" className="w-6 h-6 ml-1 text-white" />
                     </div>
                   </div>
                )}
              </div>
              <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="text-white text-lg lg:text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-[#86868b] text-sm md:text-base mb-8 line-clamp-2">{course.desc}</p>
                <div className="flex items-center gap-3 mb-6">
                   <img src={course.avatar} alt={course.instructor} className="w-10 h-10 rounded-full border border-white/10 object-cover" />
                   <div className="flex flex-col">
                     <span className="text-xs text-[#86868b] font-bold">主讲导师</span>
                     <span className="text-sm font-bold text-white">{course.instructor}</span>
                   </div>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs text-[#FBB843] pt-4 border-t border-white/5 font-bold">
                  <span className="flex items-center gap-1.5"><Clock size={16}/> {course.duration}</span>
                  <span className="flex items-center gap-1.5 text-[#86868b]"><Users size={16}/> {course.views} 学习</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
      
      {previewVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <button onClick={() => setPreviewVideo(null)} className="absolute top-8 right-8 text-white hover:text-white/70 transition-colors z-[110]">
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl px-4 relative z-[105]">
            <h3 className="text-white font-bold text-xl mb-4">{previewVideo.title}</h3>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay controls className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
