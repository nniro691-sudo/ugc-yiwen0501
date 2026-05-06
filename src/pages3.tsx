import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Maximize2, Maximize, Star, Users, FileText, MessageCircle, Heart, Bookmark, Share2, MapPin, User, Clock, X, Video } from 'lucide-react';
import { RevealWrapper } from './shared';
import { EVENT_DETAIL_DATA, COURSES_PAGE_DATA, WORKS_PAGE_DATA, MY_PROFILE_INFO, DETAIL_DATA_FALLBACK, COMMENTS_DATA } from './data';

export const EventDetailPage = ({ onBack, navigate }: any) => {
  const [activeTab, setActiveTab] = useState("热 门");
  const [activeCategory, setActiveCategory] = useState("全部");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const eventTags = ["全部", "探索_夜景", "探索_街头瞬间", "探索_面孔", "探索_组图故事", "探索_黑白", "探索_情感聚焦", "探索_文化脉络"];
  const displayWorks = [...WORKS_PAGE_DATA].sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-white font-bold text-sm tracking-widest uppercase mb-8 w-max transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回活动列表
        </button>
      </RevealWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          <RevealWrapper delay={100}>
            <div className="relative w-full aspect-[21/9] bg-[#151516] border border-white/5 rounded-none overflow-hidden group">
              <img src={EVENT_DETAIL_DATA.image} className="w-full h-full object-cover opacity-80" alt="event" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute top-6 left-0 flex items-center bg-[#111111] p-1 border border-white/5 ml-6">
                <div className="bg-[#E271CB] text-white text-xs px-4 py-2 font-bold">{EVENT_DETAIL_DATA.status}</div>
                <div className="text-[#86868b] text-xs px-4 py-2 font-bold">{EVENT_DETAIL_DATA.tag}</div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">「探索」月度主题征集</h1>
                <p className="text-white text-sm font-bold tracking-wider">征集期： 4月1日-4月30日</p>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="bg-[#151516] border border-white/5 p-8 lg:p-10 rounded-none shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-6 bg-[#FBB843] block"></span>
                <h3 className="text-xl font-bold text-white tracking-[0.2em] uppercase">介 绍</h3>
              </div>
              <div className="space-y-6">
                <p className="text-[#a1a1a6] text-base leading-loose font-medium">
                  小米与徕卡携手发起“小米徕卡全球影像大赛”，邀你与我们用镜头继续探索世界，在风暖日长的四月，去发现目光所及之处的无限可能。
                </p>
                <p className="text-[#a1a1a6] text-base leading-loose font-medium">
                  我们希望通过这些影像，唤起大家对身边自然环境的关注，重新发现城市中的野性之美。
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-6">
            <RevealWrapper delay={200}>
              <div className="bg-[#151516] border border-white/5 p-8 rounded-none shadow-xl">
                <div className="mb-6">
                  <p className="text-white text-base font-bold">
                    距离截止还有 <span className="text-[#FBB843] text-lg mx-1">3</span> 天 共 <span className="text-[#FBB843] text-lg mx-1">56105</span> 件作品
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-5 bg-[#FBB843] rounded-[4px] flex items-center justify-center text-black">
                    <User size={12} strokeWidth={3}/>
                  </div>
                  <span className="text-[#86868b] text-sm hidden md:inline">主办方: 小米影像官方账号</span>
                  <span className="text-[#86868b] text-sm md:hidden">小米影像官方账号</span>
                </div>
                
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6 text-sm text-[#86868b]">
                  <span>分享到</span>
                  <span className="text-[#333]">|</span>
                  <button className="w-5 h-5 bg-[#E271CB] flex items-center justify-center rounded-[4px] text-white hover:opacity-80 transition-opacity">
                    <Share2 size={10} strokeWidth={3} />
                  </button>
                </div>
                
                <button onClick={() => navigate('发布')} className="w-full py-4 bg-[#FBB843] text-black font-bold text-base tracking-[0.25em] shadow-[4px_4px_0_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(255,255,255,0.05)] hover:bg-white transition-all">
                  我 要 参 加
                </button>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <RevealWrapper delay={300}>
        <div className="mt-16 sm:mt-24">
          <div className="flex items-center gap-4 mb-8">
            {["活 动 介 绍", "热 门", "最 新"].map((tab, idx) => (
              <React.Fragment key={tab}>
                <button 
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg md:text-xl font-bold tracking-widest transition-colors ${activeTab === tab ? 'text-white' : 'text-[#86868b] hover:text-white'}`}
                >
                  {tab}
                </button>
                {idx < 2 && <span className="text-[#333] font-bold text-xl">/</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {eventTags.map(cat => (
              <button 
                key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-bold transition-all ${activeCategory === cat ? 'bg-white text-black' : 'bg-transparent text-white border border-white/10 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayWorks.map((work: any, index: number) => (
              <div key={index} onClick={() => navigate('详情', work)} className="group bg-[#151516] rounded-none overflow-hidden border border-white/5 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col h-full hover:border-[#E271CB]/30 transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={work.image || work.mainImage} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="work"/>
                  <div className="absolute top-4 left-4 bg-[#111] px-3 py-1.5 text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{work.category}</div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-white text-base md:text-lg font-bold mb-4 line-clamp-2">{work.title}</h3>
                  <div className="mt-auto">
                    <div className="flex items-center gap-3 mb-4 group/author" onClick={(e) => { e.stopPropagation(); navigate('他人主页'); }}>
                      <img src={work.avatar || MY_PROFILE_INFO.avatar} className="w-6 h-6 rounded-full" alt="author"/>
                      <span className="text-xs text-zinc-300 group-hover/author:text-white transition-colors">{work.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#86868b] border-t border-white/5 pt-4">
                      <span className="flex items-center gap-1.5"><Clock size={12}/> {work.time}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 group-hover:text-[#E271CB] transition-colors"><Heart size={12}/> {work.likes || 0}</span>
                        <span className="flex items-center gap-1.5 group-hover:text-white transition-colors"><MessageCircle size={12}/> {work.comments || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
};

export const CourseDetailPage = ({ onBack, navigate, courseData }: any) => {
  const [activeTab, setActiveTab] = useState("课程简介");
  const [previewVideo, setPreviewVideo] = useState<any>(null);
  
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const course = courseData || COURSES_PAGE_DATA[0];

  const isVideo = course.type === "视频";

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-white font-bold text-sm mb-10 w-max uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> 返回课程中心
        </button>
      </RevealWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <RevealWrapper delay={100}>
            {isVideo ? (
              <div className="relative w-full aspect-video bg-[#151516] border border-white/5 rounded-none overflow-hidden group shadow-2xl cursor-pointer" onClick={() => setPreviewVideo(true)}>
                <img src={course.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="course" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#FBB843] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(251,184,67,0.4)]">
                    <Play fill="black" className="text-black ml-1.5 w-8 h-8" />
                  </div>
                </div>
                
                {/* Video controls mock */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent flex items-end justify-between z-20">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#E271CB] text-white text-xs font-bold px-2 py-1">{course.category || "大师班"}</span>
                    <span className="text-white font-bold text-sm">先导片：光影背后的自然主义</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                     <span>01:45 / 05:24</span>
                     <Maximize className="w-4 h-4 hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <div className="h-full bg-[#E271CB] w-1/3"></div>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[21/9] md:aspect-[3/1] bg-[#151516] border border-white/5 rounded-none overflow-hidden group shadow-2xl">
                <img src={course.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200"} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105" alt="course cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151516] via-[#151516]/80 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8 md:p-12 z-20 w-max">
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur text-white text-xs font-bold px-3 py-1.5 w-max rounded-sm border border-white/10 mb-4"><FileText size={14}/> 深度图文解析</span>
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{course.title}</h2>
                  <p className="text-[#a1a1a6] text-sm md:text-base max-w-xl line-clamp-2 md:line-clamp-none leading-relaxed">{course.desc}</p>
                </div>
              </div>
            )}
          </RevealWrapper>
          
          <RevealWrapper delay={200}>
            <div className="bg-[#151516] border border-white/5 p-8 rounded-none shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-5">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-[#86868b] text-sm font-bold mb-8">
                <span className="flex items-center gap-1.5 text-[#FBB843]"><Star size={14} className="fill-[#FBB843]" /> 4.9 超高好评</span>
                <span className="opacity-50">·</span>
                <span className="flex items-center gap-1.5"><Users size={14} /> {course.views} 人已加入学习</span>
                <span className="opacity-50">·</span>
                <span className="bg-[#333] text-white px-2 py-0.5 text-xs">{course.level || "进阶"}难度</span>
              </div>
              
              <div className="flex border-b border-white/10 mb-8 mt-12 gap-8">
                {["课程简介", "课程大纲", "学员评价(128)"].map(tab => (
                   <button 
                     key={tab} onClick={() => setActiveTab(tab)}
                     className={`pb-4 text-base md:text-lg font-bold transition-all ${activeTab === tab ? 'text-[#FBB843] border-b-2 border-[#FBB843]' : 'text-[#86868b] hover:text-white'}`}
                   >
                     {tab}
                   </button>
                ))}
              </div>
              
              {activeTab === "课程简介" && (
                <div className="text-[#a1a1a6] text-sm md:text-base leading-8 md:leading-9 space-y-6">
                   <p>{course.desc}学习在极端环境下如何隐蔽自己并捕捉决定性瞬间。</p>
                   <p>在这门{course.category}课程中，我们将带你深入地球上最极端的自然环境。从冰雪覆盖的极地到炎热干旱的沙漠，主讲导师将毫无保留地分享他多年来积累的野外拍摄经验。</p>
                   <p className="text-white font-bold text-base md:text-lg mt-8">**你将学到：**</p>
                   <ul className="list-disc pl-5 space-y-3">
                      <li>如何根据不同环境选择和伪装器材</li>
                      <li>野生动物的行为模式及拍摄预判技巧</li>
                      <li>光线运用与后期影调处理的核心逻辑</li>
                      <li>极端气候下的自我防护与安全准则</li>
                   </ul>
                </div>
              )}
              
              {activeTab === "课程大纲" && (
                <div className="space-y-4">
                   {[1, 2, 3, 4, 5].map((idx) => (
                     <div key={idx} className="flex items-center justify-between p-4 border border-white/5 hover:border-white/20 transition-all cursor-pointer bg-white/5 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                        <div className="flex items-center gap-4 text-[#d2d2d7] group-hover:text-white font-bold relative z-10 transition-colors">
                           <span className="text-[#86868b] w-6 font-mono">0{idx}</span>
                           <span>第 {idx} 课时：{
                             idx === 1 ? "认识你的器材与隐蔽装备" :
                             idx === 2 ? "动物行为学与预判（上）" :
                             idx === 3 ? "动物行为学与预判（下）" :
                             idx === 4 ? "光线运用与实战解析" : "后期影调处理的核心逻辑"
                           }</span>
                        </div>
                        <span className="text-xs text-[#86868b] font-bold font-mono relative z-10">12:30</span>
                     </div>
                   ))}
                </div>
              )}
              
              {activeTab === "学员评价(128)" && (
                <div className="text-[#86868b] text-center py-20 font-bold">暂无评价记录。</div>
              )}
            </div>
          </RevealWrapper>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <RevealWrapper delay={150}>
            <div className="bg-[#151516] border border-white/5 p-8 shadow-lg">
              <p className="text-[#86868b] text-xs font-bold mb-3 tracking-widest">课程状态</p>
              <h2 className="text-4xl font-bold text-[#FBB843] mb-8 tracking-wider">公益免费</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 text-sm text-[#d2d2d7]">
                  <FileText size={18} className="text-[#FBB843] shrink-0" />
                  <span>共 {course.duration || '12课时'} {isVideo ? '超清视频内容' : '深度图文解析'}</span>
                </div>
                <div className="flex gap-3 text-sm text-[#d2d2d7]">
                  <MessageCircle size={18} className="text-[#FBB843] shrink-0" />
                  <span>专属创作者交流社群</span>
                </div>
              </div>
              
              <button className="w-full py-4 bg-[#FBB843] text-black font-bold text-base hover:bg-white transition-colors mb-4 rounded-none">加入学习计划</button>
            </div>
          </RevealWrapper>
          
          <RevealWrapper delay={250}>
            <div className="bg-[#151516] border border-white/5 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-5">
                <img src={course.avatar || MY_PROFILE_INFO.avatar} className="w-14 h-14 rounded-full object-cover" alt="instructor"/>
                <div>
                  <h3 className="text-white font-bold text-lg">{course.instructor}</h3>
                  <p className="text-[#86868b] text-xs font-bold mt-1">主讲导师</p>
                </div>
              </div>
              <p className="text-[#a1a1a6] text-sm leading-relaxed mb-6">中国国家地理特约生态摄影师，常年深入极地与无人区，拥有超过十年的野生动物拍摄经验。擅长在极端环境下捕捉震撼人心的生命张力。</p>
              <button onClick={() => navigate('他人主页')} className="w-full py-3 bg-[#333] hover:bg-[#444] border border-white/10 text-white font-bold text-sm transition-colors">关注导师</button>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={350}>
            <div className="bg-[#151516] border border-white/5 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-white font-bold flex items-center gap-2">
                   {isVideo ? <Play className="w-4 h-4 text-[#E271CB]" /> : <FileText className="w-4 h-4 text-[#FBB843]" />}
                   课程选集
                 </h3>
                 <span className="text-[#86868b] text-xs font-mono">1 / 5</span>
              </div>
              <div className="space-y-4">
                 <div className={`border-l-2 p-3 text-sm font-bold flex items-center gap-3 cursor-pointer transition-colors ${isVideo ? 'bg-[#2A1F27] border-[#E271CB] text-[#E271CB]' : 'bg-[#2A2318] border-[#FBB843] text-[#FBB843]'}`}>
                    {isVideo ? <Play className="w-4 h-4 fill-current" /> : <FileText className="w-4 h-4" />} 
                    先导片：光影背后的自然主义
                 </div>
                 {["第一章：认识你的器材与隐蔽装备", "第二章：动物行为学与预判（上）", "第三章：动物行为学与预判（下）", "第四章：光线运用与实战解析"].map((item, idx) => (
                   <div key={idx} className="text-[#a1a1a6] hover:text-white hover:bg-white/5 p-3 text-sm transition-colors cursor-pointer flex items-center gap-3">
                     {isVideo ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />} {item}
                   </div>
                 ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
      
      {previewVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <button onClick={() => setPreviewVideo(null)} className="absolute top-8 right-8 text-white hover:text-white/70 transition-colors z-[110]">
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl px-4 relative z-[105]">
            <h3 className="text-white font-bold text-xl mb-4">{course.title} - 先导片</h3>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay controls className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const DetailPage = ({ onBack, navigate, workData }: any) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const data = workData ? {
    ...DETAIL_DATA_FALLBACK,
    title: workData.title || DETAIL_DATA_FALLBACK.title,
    author: workData.author || DETAIL_DATA_FALLBACK.author,
    avatar: workData.avatar || DETAIL_DATA_FALLBACK.avatar,
    mainImage: workData.image || DETAIL_DATA_FALLBACK.mainImage,
    thumbnails: workData.thumbnails || (workData.image ? [workData.image] : DETAIL_DATA_FALLBACK.thumbnails),
    location: workData.location || DETAIL_DATA_FALLBACK.location,
  } : DETAIL_DATA_FALLBACK;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] font-bold mb-10 w-max text-sm uppercase">
          <ArrowLeft className="w-4 h-4" /> 返回上一页
        </button>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <RevealWrapper delay={100}>
            <div className="relative w-full bg-[#151516] p-2 md:p-4 border border-white/5 shadow-2xl group cursor-pointer">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#333] group-hover:border-[#E271CB] transition-colors duration-500 z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#333] group-hover:border-[#E271CB] transition-colors duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#333] group-hover:border-[#E271CB] transition-colors duration-500 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#333] group-hover:border-[#E271CB] transition-colors duration-500 z-10"></div>

              <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-black overflow-hidden">
                <img src={data.thumbnails[activeImageIndex]} alt={data.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]" />
                
                {/* Image Index Indicator */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 flex items-center justify-center border border-white/10 z-20">
                    <span className="w-1.5 h-1.5 bg-[#FBB843] mr-2 block"></span>
                    <span className="text-[#FBB843] font-bold font-mono text-sm tracking-wider mr-1">0{activeImageIndex+1}</span>
                    <span className="text-zinc-500 text-[10px] font-mono">/ 0{data.thumbnails.length}</span>
                </div>

                {/* Hover Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="relative w-24 h-24">
                    <div className="absolute top-1/2 left-0 w-10 h-[1px] bg-[#E271CB]/50 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-10 h-[1px] bg-[#E271CB]/50 -translate-y-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-[1px] h-10 bg-[#E271CB]/50 -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-[1px] h-10 bg-[#E271CB]/50 -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E271CB]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#E271CB]/50 rotate-45"></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>

                <button className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md p-3 text-white hover:bg-white hover:text-black transition-colors rounded-none z-30 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
            {data.thumbnails && data.thumbnails.length > 1 && (
              <div className="bg-[#151516] border border-white/5 mt-4 p-4 flex gap-4 overflow-x-auto scrollbar-hide">
                {data.thumbnails.map((thumb: any, index: number) => (
                  <div key={index} onClick={() => setActiveImageIndex(index)} className={`relative w-24 h-20 flex-shrink-0 cursor-pointer overflow-hidden ${activeImageIndex === index ? 'border-2 border-[#FBB843]' : 'border-2 border-transparent opacity-50'}`}>
                    <img src={thumb} alt={`thumb ${index}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="bg-[#151516] border border-white/5 p-8 lg:p-10 shadow-lg mt-6">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">{data.title}</h1>
              <p className="text-[#a1a1a6] text-sm md:text-base leading-loose whitespace-pre-line mb-8">{data.story}</p>
              <div className="flex flex-wrap gap-3 mb-10">
                {data.tags && data.tags.map((tag: any) => (
                  <span key={tag} className="px-4 py-2 bg-[#2c2c2e] text-[#86868b] text-xs font-bold">{tag}</span>
                ))}
              </div>
              
              <div className="bg-[#1c1c1e] p-6 border border-white/5 mb-10 text-sm">
                <h4 className="text-white font-bold mb-4 tracking-widest">拍摄参数</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div><p className="text-[#86868b] mb-1">相机 / 设备</p><p className="text-white font-bold">Leica Q3</p></div>
                  <div><p className="text-[#86868b] mb-1">焦段</p><p className="text-white font-bold">28mm</p></div>
                  <div><p className="text-[#86868b] mb-1">光圈 / 快门</p><p className="text-white font-bold">f/1.7  1/500s</p></div>
                  <div><p className="text-[#86868b] mb-1">ISO</p><p className="text-white font-bold">200</p></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div className="flex items-center gap-8">
                  <button className="flex items-center gap-2 text-white font-bold text-lg hover:text-[#E271CB]"><Heart size={22}/> {data.likesCount}</button>
                  <button className="flex items-center gap-2 text-white font-bold text-lg hover:text-[#00AEEC]"><MessageCircle size={22}/> {data.commentsCount}</button>
                </div>
                <div className="flex gap-4">
                  <button className="text-[#86868b] hover:text-white p-2 bg-white/5"><Bookmark size={20}/></button>
                  <button className="text-[#86868b] hover:text-white p-2 bg-white/5"><Share2 size={20}/></button>
                </div>
              </div>
            </div>
          </RevealWrapper>
          
          <RevealWrapper delay={250}>
             <div className="bg-[#151516] border border-white/5 p-8 lg:p-10 shadow-lg mb-20">
               <h3 className="text-xl font-bold text-white mb-8 tracking-widest">共 {data.commentsCount} 条评论</h3>
               <div className="flex items-start gap-4 border-b border-white/5 pb-8 mb-8">
                 <img src={MY_PROFILE_INFO.avatar} className="w-12 h-12 flex-shrink-0" alt="me" />
                 <div className="flex-1">
                   <textarea rows={3} placeholder="写下你的评论..." className="w-full bg-[#1c1c1e] border border-white/10 p-4 text-white text-sm outline-none focus:border-[#FBB843] mb-4"></textarea>
                   <div className="flex justify-end"><button className="px-6 py-2 bg-[#FBB843] text-black font-bold text-sm">发 表</button></div>
                 </div>
               </div>
               
               <div className="space-y-8">
                 {COMMENTS_DATA && COMMENTS_DATA.length > 0 ? COMMENTS_DATA.map((comment: any) => (
                    <div key={comment.id} className="flex items-start gap-4">
                      <img src={comment.avatar} className="w-10 h-10 flex-shrink-0" alt={comment.user}/>
                      <div className="flex-1">
                         <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-bold text-sm">{comment.user}</span>
                            <span className="text-[#86868b] text-xs">{comment.time}</span>
                         </div>
                         <p className="text-zinc-400 text-sm leading-relaxed mb-3">{comment.content}</p>
                         <button className="flex items-center gap-1.5 text-xs text-[#86868b] hover:text-white font-bold"><Heart size={12}/> {comment.likes}</button>
                      </div>
                    </div>
                 )) : (
                    <div className="text-center text-zinc-500 font-bold py-10">暂无评论数据</div>
                 )}
               </div>
             </div>
          </RevealWrapper>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <RevealWrapper delay={150}>
            <div onClick={() => navigate('他人主页')} className="bg-[#151516] border border-white/5 p-8 flex flex-col items-center cursor-pointer hover:border-[#E271CB]/30 transition-all shadow-lg group">
              <img src={data.avatar} className="w-24 h-24 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform" alt="author"/>
              <h3 className="text-white font-bold text-xl mb-2">{data.author}</h3>
              <p className="text-xs text-[#86868b] mb-6 text-center">{data.authorTitle}</p>
              <div className="w-full flex justify-between px-2 mb-8 text-center text-[#86868b] text-xs font-bold uppercase">
                <div><p className="text-white text-lg">{data.stats?.followers || '12.5k'}</p><p>粉丝</p></div>
                <div><p className="text-white text-lg">{data.stats?.works || '342'}</p><p>作品</p></div>
              </div>
              <button className="w-full py-4 bg-[#443E3D] text-white font-bold text-sm hover:bg-[#FBB843] hover:text-black">关注作者</button>
            </div>
          </RevealWrapper>
          
          <RevealWrapper delay={250}>
            <div className="bg-[#151516] border border-white/5 p-8 shadow-lg">
              <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-widest"><MapPin size={16} className="text-[#00AEEC]"/> 拍摄地点</h4>
              <p className="text-zinc-400 text-sm mb-6">{data.location}</p>
              <div className="w-full aspect-[4/3] bg-[#2c2c2e] overflow-hidden border border-white/5">
                <img src={data.mapImage || "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="map"/>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};
