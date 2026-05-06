import React, { useState, useEffect } from 'react';
import { Search, Bell, Plus, User, Camera, ArrowRight, Home, Grid, Compass, Heart, MessageCircle, ChevronRight, ChevronDown, ChevronUp, MapPin, Mouse, Play } from 'lucide-react';
import { HERO_BG, ONGOING_EVENTS, HOT_TAGS, HORIZONTAL_WORKS, TOP_CREATORS, FEATURED_WORKS, CATEGORIES } from './data';
import { RevealWrapper, InfoPage } from './shared';
import { ABOUT_DATA, RULES_DATA, CONTACT_DATA, SOCIAL_DATA, WORKS_PAGE_DATA, MY_PROFILE_INFO } from './data';
import { SocialPage, MessageCenterPage } from './pages1';
import { WorksPage, EventsPage, CoursesPage } from './pages2';
import { EventDetailPage, CourseDetailPage, DetailPage } from './pages3';
import { MaterialDetailPage, SnapdragonPage, MaterialPage, UploadMaterialPage } from './pages4';
import { PublishPage, ProfilePage, OtherUserProfilePage } from './pages5';

const HomeAnchorNav = () => {
  const [active, setActive] = useState('section-hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section-hero', 'section-explore', 'section-videos', 'section-images'];
      let current = 'section-hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 + 50) current = id;
        }
      }
      setActive(current);
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'section-hero', lines: ['首页'] },
    { id: 'section-explore', lines: ['探索', '社区'] },
    { id: 'section-videos', lines: ['精选', '视频'] },
    { id: 'section-images', lines: ['精选', '图片'] }
  ];

  return (
    <div className={`fixed left-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col bg-black/60 backdrop-blur-xl border border-white/20 border-l-0 shadow-[4px_4px_20px_rgba(0,0,0,0.8)] py-1 rounded-r-none transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`}>
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => {
            const el = document.getElementById(item.id);
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className={`relative px-1.5 py-2 md:px-2 md:py-2.5 text-[10px] font-bold transition-colors duration-300 overflow-hidden group ${
            active === item.id ? 'text-black' : 'text-zinc-400 hover:text-white'
          }`}
        >
          <div className={`absolute inset-0 bg-white transition-transform duration-500 origin-left ${active === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-white/10'}`}></div>
          <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-white transition-opacity ${active === item.id ? 'opacity-100' : 'opacity-0'}`}></div>
          {index !== navItems.length - 1 && <div className="absolute bottom-0 left-1.5 right-1.5 h-[1px] bg-white/10"></div>}
          <span className="relative z-10 flex flex-col items-center leading-[1.2] tracking-widest gap-[2px]">
            {item.lines.map((line, i) => <span key={i}>{line}</span>)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState({ page: '首页', params: null as any });
  const [history, setHistory] = useState(['首页']);
  const currentPage = currentRoute.page;
  const [searchTarget, setSearchTarget] = useState("活动");
  const [isSearchTargetOpen, setIsSearchTargetOpen] = useState(false);
  const [language, setLanguage] = useState("中");

  const navigate = (page: string, params: any = null) => {
    if (page !== currentPage) {
      setHistory(prev => [...prev, page]);
    }
    setCurrentRoute({ page, params });
  };

  const goBack = () => {
    const newHistory = [...history];
    newHistory.pop(); 
    const prevPage = newHistory.length > 0 ? newHistory[newHistory.length - 1] : '首页';
    setHistory(newHistory);
    setCurrentRoute({ page: prevPage, params: null });
  };
  
  const [activeCategory, setActiveCategory] = useState("全部");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("热门");
  const [myWorks, setMyWorks] = useState<any[]>([]);
  const [allWorks, setAllWorks] = useState<any[]>(WORKS_PAGE_DATA);
  const [featuredWorks, setFeaturedWorks] = useState<any[]>(FEATURED_WORKS);

  const handlePublish = (newWork: any) => {
    setMyWorks([newWork, ...myWorks]); 
    setAllWorks([newWork, ...allWorks]); 
    setFeaturedWorks([newWork, ...featuredWorks.slice(0, 5)]); 
    navigate('个人主页');
  };

  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] font-sans selection:bg-white selection:text-black">
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-out border-b flex flex-col ${
        scrolled ? 'bg-black/80 backdrop-blur-3xl border-white/10 pt-2 pb-3' : 'bg-gradient-to-b from-black/60 to-transparent border-transparent pt-4 pb-6'
      }`}>
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('首页')}>
              <img src="https://www.wonderoflife.cn/static/index/images/logo.png" alt="Logo" className="h-8 md:h-10 object-contain group-hover:scale-105 transition-transform duration-500 ease-out" />
              <span className="font-bold tracking-tight text-white text-sm md:text-base hidden sm:block leading-tight whitespace-nowrap">中国野生生物影像年赛<br />创作者社区</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {['首页', '活动', '作品', '课程', '骁龙专区', '素材'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => navigate(item)}
                  className={`px-2 lg:px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    currentPage === item ? 'text-white' : 'text-[#86868b] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <div className="hidden lg:flex items-center bg-[#1c1c1e]/80 border border-white/10 rounded-none relative">
              <div 
                className="flex items-center gap-1 pl-3 pr-2 py-1.5 cursor-pointer text-xs font-bold text-[#86868b] hover:text-white border-r border-white/10"
                onClick={() => setIsSearchTargetOpen(!isSearchTargetOpen)}
              >
                {searchTarget} <ChevronDown size={12} className={`transition-transform ${isSearchTargetOpen ? 'rotate-180' : ''}`} />
              </div>
              {isSearchTargetOpen && (
                <div className="absolute top-10 left-0 bg-[#151516] border border-white/10 shadow-2xl flex flex-col z-50 py-1">
                  {["活动", "作品", "素材"].map(target => (
                    <button 
                      key={target} 
                      onClick={() => {setSearchTarget(target); setIsSearchTargetOpen(false);}}
                      className={`px-4 py-2 text-xs font-bold text-left whitespace-nowrap hover:bg-white/5 transition-colors ${searchTarget === target ? 'text-[#FBB843]' : 'text-white'}`}
                    >
                      {target}
                    </button>
                  ))}
                </div>
              )}
              <div className="relative group flex items-center">
                <Search size={14} className="absolute left-2 text-[#86868b] group-focus-within:text-[#FBB843] transition-colors pointer-events-none" />
                <input type="text" placeholder={`搜索${searchTarget}...`} className="bg-transparent text-sm text-white placeholder-[#86868b] pl-8 pr-3 py-1.5 w-24 xl:w-32 transition-all outline-none" />
              </div>
            </div>

            <button 
              onClick={() => setLanguage(language === "中" ? "En" : "中")} 
              className="hidden lg:flex items-center justify-center border border-white/10 w-8 h-8 text-xs font-bold text-[#86868b] hover:text-white hover:bg-white/10 transition-colors bg-[#1c1c1e]/80 backdrop-blur-xl"
            >
              {language}
            </button>

            <button onClick={() => navigate("发布")} className="hidden md:flex items-center gap-1.5 bg-[#f5f5f7] hover:bg-white text-black text-sm font-bold px-3 py-1.5 transition-all rounded-none whitespace-nowrap">
              <Plus size={16} strokeWidth={2.5} /> 发布
            </button>
            <button onClick={() => navigate("信息中心")} className="relative p-2 text-[#86868b] hover:text-white transition-colors rounded-none">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#E271CB] rounded-full border-2 border-black"></span>
            </button>
            <button onClick={() => navigate("个人主页")} className="hidden md:block relative p-2 text-[#86868b] hover:text-white transition-colors rounded-none group">
              <User size={22} className="group-hover:text-[#FBB843] transition-colors duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {currentPage === '社区介绍' && <InfoPage title="社区介绍" subtitle="ABOUT US" data={ABOUT_DATA} onBack={goBack} />}
      {currentPage === '社区规则' && <InfoPage title="社区规则" subtitle="COMMUNITY RULES" data={RULES_DATA} onBack={goBack} />}
      {currentPage === '联系我们' && <InfoPage title="联系我们" subtitle="CONTACT US" data={CONTACT_DATA} onBack={goBack} />}
      {['微信公众号', '微博', '哔哩哔哩'].includes(currentPage) && <SocialPage platform={currentPage} data={SOCIAL_DATA[currentPage]} onBack={goBack} />}

      {currentPage === '信息中心' && <MessageCenterPage onBack={goBack} navigate={navigate} />}
      {currentPage === '发布' && <PublishPage onPublish={handlePublish} />}
      {currentPage === '课程' && <CoursesPage navigate={navigate} />}
      {currentPage === '课程详情' && <CourseDetailPage onBack={goBack} navigate={navigate} courseData={currentRoute.params} />}
      {currentPage === '活动' && <EventsPage navigate={navigate} />}
      {currentPage === '活动详情' && <EventDetailPage onBack={goBack} navigate={navigate} />}
      {currentPage === '作品' && <WorksPage navigate={navigate} works={allWorks} />}
      {currentPage === '骁龙专区' && <SnapdragonPage navigate={navigate} works={allWorks} />}
      {currentPage === '素材' && <MaterialPage navigate={navigate} />}
      {currentPage === '素材详情' && <MaterialDetailPage onBack={goBack} materialData={currentRoute.params} />}
      {currentPage === '素材上传' && <UploadMaterialPage onBack={goBack} onPublish={() => { goBack(); }} />}
      {currentPage === '详情' && <DetailPage onBack={goBack} navigate={navigate} workData={currentRoute.params} />}
      {currentPage === '个人主页' && <ProfilePage navigate={navigate} works={myWorks} />}
      {currentPage === '他人主页' && <OtherUserProfilePage navigate={navigate} onBack={goBack} />}

      {currentPage === '首页' && (
        <>
          <HomeAnchorNav />
          <section id="section-hero" className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black will-change-transform" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
              <img src={HERO_BG} alt="Hero" className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10"></div>
            </div>
            <div className="relative z-20 max-w-[1440px] w-full px-6 lg:px-12 flex flex-col justify-center h-full mt-20">
              <RevealWrapper delay={150}>
                <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-white mb-6 leading-[1.05]">
                  拍摄自然好故事 <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">看见生命的力量</span>
                </h1>
              </RevealWrapper>
            </div>
            <div 
              className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
            >
              <div className="w-[30px] h-[46px] md:w-[34px] md:h-[52px] border-2 border-white/40 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-mouse"></div>
              </div>
              <ChevronDown size={20} className="text-[#FBB843] animate-bounce" />
            </div>
          </section>

          <main className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-32 flex flex-col gap-24 relative z-30 bg-black">
            <section id="section-explore">
              <RevealWrapper>
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-3 h-10 bg-[#FBB843] block"></span>
                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">探索社区。</h2>
                </div>
              </RevealWrapper>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <RevealWrapper delay={0} className="lg:col-span-6 lg:h-[480px]">
                  <div className="group relative w-full h-full overflow-hidden bg-[#151516] hover:shadow-2xl cursor-pointer" onClick={() => navigate('活动详情')}>
                    <img src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s]" alt="event" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-[#E271CB] text-white text-xs font-bold px-4 py-2 uppercase z-10">进行中</div>
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                      <h4 className="text-zinc-400 text-sm font-semibold mb-2">2026年度自然摄影大赛</h4>
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">鸟类专场</h3>
                      <p className="text-zinc-300 text-sm">记录那些翱翔天际的精灵，赢取丰厚奖品。</p>
                    </div>
                  </div>
                </RevealWrapper>
                
                <div className="lg:col-span-3 flex flex-col gap-6 lg:h-[480px]">
                  <RevealWrapper delay={100} className="flex-1 h-full">
                    <div className="w-full h-full bg-[#1c1c1e] p-6 lg:p-8 flex flex-col justify-between group hover:shadow-2xl hover:border-white/20 hover:-translate-y-1 transition-all duration-700 cursor-pointer rounded-none border border-transparent" onClick={() => navigate('发布')}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 border border-[#FBB843]/40 rounded-none flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <Camera className="text-[#FBB843] w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="pt-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#FBB843] transition-colors">分享视界</h3>
                          <p className="text-[#86868b] text-xs font-bold">发布摄影或视频</p>
                        </div>
                      </div>
                      <button className="w-full bg-white text-black font-bold py-3.5 lg:py-4 text-sm mt-auto hover:bg-[#FBB843] transition-colors rounded-none">
                        + 立即发布
                      </button>
                    </div>
                  </RevealWrapper>
                  
                  <RevealWrapper delay={200} className="flex-1 h-full">
                    <div className="w-full h-full bg-[#151516] p-6 lg:p-8 flex flex-col justify-center transition-all duration-700 rounded-none border border-transparent hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl">
                        <h3 className="text-sm border-transparent md:text-base font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                          <Compass size={16} className="text-[#86868b]" /> 热门标签
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {["#风景", "#自然", "#动物", "#雪豹"].map(tag => (
                            <span key={tag} onClick={() => navigate('作品', { tag })} className="px-4 py-2.5 bg-[#443E3D] text-zinc-300 text-xs font-semibold hover:bg-[#FBB843] hover:text-black cursor-pointer transition-all duration-300 rounded-none whitespace-nowrap">
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>
                  </RevealWrapper>
                </div>

                <RevealWrapper delay={300} className="lg:col-span-3 lg:h-[480px]">
                  <div className="w-full h-full bg-[#1c1c1e] p-6 lg:p-8 flex flex-col border border-transparent hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-700">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 tracking-tight">历届年赛获奖者</h3>
                    <div className="flex flex-col gap-6 lg:gap-8 flex-1 justify-center">
                      {[
                        { name: "自然观察者_壹", followers: "12.5k", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"},
                        { name: "极地探险家_星", followers: "8.2k", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100"},
                        { name: "鸟类图鉴", followers: "15.1k", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"}
                      ].map((c: any, index: number) => (
                        <div key={index} className="flex items-center justify-between group/creator cursor-pointer" onClick={() => navigate('他人主页')}>
                          <div className="flex items-center gap-4">
                            <img src={c.avatar} className="w-12 h-12 rounded-full object-cover border border-white/5" alt="creator" />
                            <div>
                              <h4 className="text-sm font-bold text-white flex items-center gap-1 group-hover/creator:text-[#FBB843] transition-colors">{c.name}</h4>
                              <p className="text-xs text-[#86868b] mt-1 font-medium">{c.followers} 关注</p>
                            </div>
                          </div>
                          <button className="w-8 h-8 bg-[#333] flex items-center justify-center text-white hover:bg-[#FBB843] hover:text-black transition-all duration-300 rounded-none">
                            <Plus size={16} className="w-4 h-4"/>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealWrapper>
              </div>
            </section>

            <section id="section-videos" className="w-full relative overflow-hidden mt-24">
              <RevealWrapper>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="w-3 h-10 bg-[#E271CB] block"></span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">精选视频。</h2>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
              <RevealWrapper delay={150}>
                <div 
                  className="relative w-full overflow-hidden"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                  }}
                >
                  <div className="flex w-max auto-scroll-container gap-4 md:gap-6">
                    {[...HORIZONTAL_WORKS, ...HORIZONTAL_WORKS].map((work, index) => (
                      <div key={`${work.id}-${index}`} className="w-[85vw] sm:w-[400px] lg:w-[500px] aspect-[16/10] relative group cursor-pointer bg-[#151516] rounded-none overflow-hidden flex-shrink-0" onClick={() => navigate('详情', work)}>
                        <img src={work.image} alt={work.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                            <Play fill="white" className="w-6 h-6 ml-1 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-20">
                          <button className="w-8 h-8 md:w-10 md:h-10 bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors rounded-none">
                            <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-[#86868b] font-bold text-[10px] md:text-xs tracking-widest uppercase mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#E271CB] rounded-full"></span> {work.location}
                          </p>
                          <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-tight">{work.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </section>

            <section id="section-images" className="relative z-50 mt-24">
              <RevealWrapper className="relative z-[100]">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-12 gap-6 md:gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                      <span className="w-3 h-10 bg-[#443E3D] block"></span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">精选图片。</h2>
                    </div>
                    <div className="relative w-[230px] z-50">
                      <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between border border-white/20 px-6 py-4 text-white font-bold text-base hover:bg-white/5 transition-colors rounded-none"
                      >
                        {activeCategory}
                        <ChevronDown size={16} className={`transition-transform duration-300 flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-16 left-0 w-full bg-[#151516] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 rounded-none">
                          {CATEGORIES.map(category => (
                            <button
                              key={category}
                              onClick={() => { setActiveCategory(category); setIsDropdownOpen(false); }}
                              className={`w-full text-left px-6 py-4 font-bold transition-colors text-sm hover:bg-white/5 border-b border-white/5 last:border-0 ${activeCategory === category ? 'text-black bg-[#FBB843] hover:bg-[#FBB843]/90' : 'text-[#86868b] hover:text-white'}`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex border border-white/10 rounded-none bg-[#111] overflow-hidden w-max">
                    {["热门", "最新"].map(sort => (
                      <button
                        key={sort}
                        onClick={() => setActiveSort(sort)}
                        className={`px-8 py-3 text-sm font-bold transition-colors min-w-[80px] ${activeSort === sort ? 'bg-white/10 text-white' : 'text-[#86868b] hover:text-white hover:bg-white/5'}`}
                      >
                        {sort}
                      </button>
                    ))}
                  </div>
                </div>
              </RevealWrapper>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {featuredWorks.map((work, index) => (
                  <RevealWrapper key={work.id} delay={index % 3 * 100} className="break-inside-avoid mb-6">
                    <div className="group cursor-pointer" onClick={() => navigate('详情', work)}>
                      <div className={`relative w-full ${work.height || 'h-[400px]'} overflow-hidden bg-[#151516] mb-4 rounded-none`}>
                        <img src={work.image || work.mainImage} alt={work.title} className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-6">
                          <div className="self-start bg-black/50 backdrop-blur-2xl border border-white/10 text-white text-[10px] md:text-xs px-3 py-1.5 md:px-4 md:py-2 font-bold uppercase tracking-wider rounded-none">
                            {work.category}
                          </div>
                          <div className="flex items-center justify-end gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <button className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 rounded-none">
                              <Heart className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-2">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-zinc-300 transition-colors truncate">{work.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5 group/author cursor-pointer" onClick={(e) => { e.stopPropagation(); navigate('他人主页'); }}>
                            <img src={work.avatar || MY_PROFILE_INFO.avatar} alt={work.author} className="w-6 h-6 md:w-7 md:h-7 rounded-full object-cover border border-transparent group-hover/author:border-[#FBB843] transition-colors" />
                            <span className="text-xs md:text-sm font-semibold text-[#86868b] group-hover/author:text-[#FBB843] transition-colors">{work.author}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs md:text-sm font-semibold text-[#86868b]">
                            <span className="flex items-center gap-1.5"><Heart size={14} className="md:w-4 md:h-4 group-hover:text-[#E271CB] transition-colors" /> {work.likes || 0}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </div>
              <RevealWrapper delay={200}>
                <div className="mt-16 md:mt-20 flex justify-center">
                  <button onClick={() => navigate('作品')} className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 border border-[#443E3D] bg-[#151516] text-white font-bold text-base md:text-lg hover:bg-white hover:text-black hover:border-transparent transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl rounded-none">
                    浏览更多 <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </RevealWrapper>
            </section>
          </main>
        </>
      )}

      <footer className="relative z-30 w-full bg-[#111114] pt-20 pb-28 md:pb-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <Camera size={26} className="text-white mb-8" />
              <p className="text-[#98989f] leading-loose text-sm max-w-md">中国野生生物影像年赛创作者社区，连接全球自然影像力量。</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">关于我们</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigate('社区介绍')} className="text-[#86868b] hover:text-white text-sm transition-colors cursor-pointer">社区介绍</button></li>
                <li><button onClick={() => navigate('社区规则')} className="text-[#86868b] hover:text-white text-sm transition-colors cursor-pointer">社区规则</button></li>
                <li><button onClick={() => navigate('联系我们')} className="text-[#86868b] hover:text-white text-sm transition-colors cursor-pointer">联系我们</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">关注我们</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigate('微信公众号')} className="text-[#86868b] hover:text-[#07C160] text-sm transition-colors cursor-pointer group flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#07C160] opacity-0 group-hover:opacity-100 transition-opacity"></span>微信公众号</button></li>
                <li><button onClick={() => navigate('微博')} className="text-[#86868b] hover:text-[#E6162D] text-sm transition-colors cursor-pointer group flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E6162D] opacity-0 group-hover:opacity-100 transition-opacity"></span>微博</button></li>
                <li><button onClick={() => navigate('哔哩哔哩')} className="text-[#86868b] hover:text-[#00AEEC] text-sm transition-colors cursor-pointer group flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00AEEC] opacity-0 group-hover:opacity-100 transition-opacity"></span>哔哩哔哩</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 text-center"><p className="text-[#55555a] text-sm">© 2026 中国野生生物影像年赛创作者社区 版权所有</p></div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0a0a0b]/95 border-t border-white/10 z-[100] flex justify-between items-end px-4 pb-2 shadow-2xl">
        <button onClick={() => navigate('首页')} className="p-2"><Home size={22} className={currentPage === '首页' ? 'text-[#FBB843]' : 'text-zinc-500'}/></button>
        <button onClick={() => navigate('发布')} className="bg-[#FBB843] p-3 text-black"><Plus size={24}/></button>
        <button onClick={() => navigate('个人主页')} className="p-2"><User size={22} className={['个人主页', '他人主页'].includes(currentPage) ? 'text-[#E271CB]' : 'text-zinc-500'}/></button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
        .animate-slow-zoom { animation: slowZoom 25s ease-in-out infinite alternate; }
        @keyframes slowZoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
        @keyframes scrollMouse {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-mouse {
          animation: scrollMouse 1.5s infinite;
        }
        @keyframes autoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .auto-scroll-container {
          animation: autoScroll 40s linear infinite;
        }
        .auto-scroll-container:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
