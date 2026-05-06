import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, ImageIcon, Video, ArrowRight, UploadCloud, Folder, CheckCircle, Save, Smartphone, ChevronRight, Clock, Users, User, Heart, MessageCircle, MapPin, Plus, X } from 'lucide-react';
import { RevealWrapper } from './shared';
import { SNAPDRAGON_MATERIALS_DATA, SNAPDRAGON_HERO_BG, COURSES_PAGE_DATA } from './data';

export const MaterialDetailPage = ({ onBack, materialData }: any) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const item = materialData || SNAPDRAGON_MATERIALS_DATA[0];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen flex flex-col items-center">
      <RevealWrapper delay={0} className="w-full self-start">
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] font-bold text-sm tracking-widest uppercase mb-12">
          <ArrowLeft className="w-4 h-4" /> 返回素材库
        </button>
      </RevealWrapper>

      <RevealWrapper delay={100} className="w-full">
        <div className="bg-[#151516] border border-white/5 p-8 shadow-2xl relative">
          <div className="relative w-full aspect-video bg-[#0a0a0b] flex items-center justify-center overflow-hidden border border-white/10 mb-8 group">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            {item.type.includes("视频") && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                  <Play fill="white" className="w-8 h-8 ml-1" />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center gap-6 mb-8 border-b border-white/10 pb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#443E3D] text-white text-xs px-3 py-1 font-bold uppercase">{item.type}</span>
                <span className="text-[#86868b] text-xs font-mono font-bold">128MB</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{item.title}</h1>
              <p className="text-[#a1a1a6] text-base leading-relaxed max-w-3xl">{item.desc}</p>
            </div>
            <button className="px-12 py-4 bg-[#FBB843] text-black font-bold text-base hover:bg-white flex items-center gap-3">
              <Download size={20} /> 立即下载
            </button>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">授权声明</h3>
            <p className="text-[#86868b] text-sm leading-loose bg-[#0a0a0b] p-6 border border-white/5">
              本素材仅供创作者在「中国野生生物影像年赛」及相关社区内用于学习、交流与二次创作。严禁用于任何商业用途，转载或使用需注明来源“骁龙影像专区”。
            </p>
          </div>
        </div>
      </RevealWrapper>
    </div>
  );
};

export const SnapdragonPage = ({ navigate, works }: any) => {
  const [visionTab, setVisionTab] = useState("历届年赛特别奖");
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const displayWorks = works.slice(0, 4);
  const courses = COURSES_PAGE_DATA.slice(0, 3);
  
  const EVENTS = [
    { id: 1, title: '国家地理：地球脉动', desc: '骁龙特别赞助：用手机镜头定格极限瞬间。参与挑战赢取最新旗舰手机及认证头衔。', img: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&q=80&w=600', participants: '8,902' },
    { id: 2, title: '极境探索：微影集', desc: '探索无人之境，记录极限风光，赢取丰厚奖品。', img: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80&w=600', participants: '5,210' },
    { id: 3, title: '生生不息：影像纪', desc: '通过镜头展现自然万物的蓬勃生机，发现生命真正的力量。', img: 'https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?auto=format&fit=crop&q=80&w=600', participants: '12,400' }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-32">
      <div 
        className="relative w-full h-[500px] lg:h-[600px] flex justify-center text-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${SNAPDRAGON_HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
        <RevealWrapper delay={100} className="relative z-10 flex flex-col items-center w-full mt-32">
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-[0.4em] mb-6 drop-shadow-lg ml-4">骁龙视界</h1>
          <p className="text-white/90 text-sm lg:text-base max-w-2xl leading-relaxed mb-10 tracking-widest font-bold drop-shadow-md">
            见证移动计算摄影的无限可能。参与专属活动，学习大师课程，分享你的视界。
          </p>
          <button onClick={() => navigate('发布')} className="bg-[#FBB843] text-black font-bold px-8 py-3.5 flex items-center gap-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(251,184,67,0.3)]">
            <UploadCloud size={18} /> 发 布 作 品
          </button>
        </RevealWrapper>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16 md:mt-24 space-y-20 md:space-y-28">
        <section>
          <RevealWrapper delay={0}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-2 h-8 bg-[#E271CB] block"></span>
              <h2 className="text-3xl font-bold tracking-tight text-white">专属活动。</h2>
            </div>
            
            <div 
              className="relative w-full overflow-hidden"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 1%, black 99%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 1%, black 99%, transparent)' }}
            >
              <div className="flex w-max auto-scroll-container gap-6 pb-6 pr-6">
                {EVENTS.map((event, idx) => (
                  <div key={idx} className="bg-[#151516] border border-white/5 flex flex-col sm:flex-row hover:border-[#E271CB]/30 cursor-pointer w-[85vw] sm:w-[600px] flex-shrink-0 group" onClick={() => navigate('活动详情')}>
                    <div className="relative w-full sm:w-[280px] aspect-video sm:aspect-[4/3] flex-shrink-0 overflow-hidden">
                      <img src={event.img} alt="event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-[#E271CB] text-white text-[10px] font-bold px-3 py-1.5 uppercase">进行中</div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 line-clamp-1">{event.title}</h3>
                      <p className="text-[#86868b] text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">{event.desc}</p>
                      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 group-hover:border-[#E271CB]/30 transition-colors">
                        <span className="flex items-center gap-1.5 text-[#86868b] text-xs font-bold"><Users size={14}/> {event.participants} 参与</span>
                        <span className="text-[#a1a1a6] text-xs font-bold flex items-center gap-1 group-hover:text-white transition-colors">查看详情 <ChevronRight size={14}/></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </section>

        <section>
          <RevealWrapper delay={200}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-2 h-8 bg-[#00AEEC] block"></span>
              <h2 className="text-3xl font-bold tracking-tight text-white">大师课程。</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course: any, index: number) => (
                <div key={course.id} onClick={() => navigate('课程详情', course)} className="bg-[#151516] text-left border border-white/5 group cursor-pointer hover:border-white/20 transition-colors">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute top-3 left-3 bg-[#0a0a0b]/80 px-2 py-1 text-[10px] text-white font-bold">{course.level || '进阶'}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold mb-2 line-clamp-1">{course.title}</h3>
                    <div className="flex items-center justify-between text-[#86868b] text-xs">
                      <span className="flex items-center gap-1.5"><User size={12}/>{course.instructor}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12}/>{course.duration || '2小时'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </section>

        <section>
          <RevealWrapper delay={300}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="flex items-center gap-4">
                <span className="w-2 h-10 bg-[#FBB843] block"></span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">创作者视界。</h2>
              </div>
              <div className="flex border border-white/10 bg-[#151516] rounded-none">
                {["历届年赛特别奖", "社区日常精选"].map(tab => (
                  <button 
                    key={tab} onClick={() => setVisionTab(tab)}
                    className={`px-6 py-2.5 text-sm font-bold flex items-center gap-2 transition-colors ${visionTab === tab ? 'bg-white/10 text-white' : 'text-[#86868b] hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayWorks.map((work: any, idx: number) => (
                 <div key={idx} onClick={() => navigate('详情', work)} className="group bg-[#151516] text-left rounded-none overflow-hidden border border-white/5 hover:border-[#FBB843]/40 cursor-pointer flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all relative">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={work.image || work.mainImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work"/>
                      <div className="absolute top-3 left-3 bg-[#0a0a0b]/80 px-2 py-1 text-[10px] text-white font-bold tracking-widest">{visionTab === '历届年赛特别奖' ? '2025入围' : work.category || '摄影作品'}</div>
                      {idx % 2 !== 0 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                            <Play fill="white" className="w-5 h-5 ml-1 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-white font-bold tracking-tight mb-3 line-clamp-1">{work.title}</h3>
                      <div className="flex items-center justify-between text-[#86868b] text-xs font-bold mt-auto pt-3 border-t border-white/5">
                        <span className="flex items-center gap-1"><Clock size={12} /> {work.time || '刚刚'}</span>
                        <div className="flex gap-3">
                          <span className="flex items-center gap-1"><Heart size={12} /> {work.likes || 0}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={12} /> {work.comments || 0}</span>
                        </div>
                      </div>
                    </div>
                 </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
               <button 
                onClick={() => navigate('作品')}
                className="text-[#86868b] hover:text-white flex items-center gap-2 text-sm font-bold transition-colors uppercase tracking-widest border border-white/10 px-8 py-3 hover:bg-white/5"
                >
                浏览全部视频及图集 <ArrowRight size={14} />
              </button>
            </div>
          </RevealWrapper>
        </section>
      </div>
    </div>
  );
};

export const MaterialPage = ({ navigate }: any) => {
  const [materialMode, setMaterialMode] = useState("官方素材");
  const [filterType, setFilterType] = useState("全部素材");
  const [previewVideo, setPreviewVideo] = useState<any>(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-[1440px] mx-auto pt-24 md:pt-32 pb-32 min-h-screen">
      <RevealWrapper delay={0} className="flex justify-center mb-16 relative z-50">
        <div className="flex bg-[#111] rounded-none border border-white/5 w-max">
          {["官方素材", "付费素材"].map((mode) => (
            <button key={mode} onClick={() => setMaterialMode(mode)} className={`px-10 py-3 text-sm font-bold transition-colors ${materialMode === mode ? 'bg-[#FBB843] text-black' : 'text-[#86868b] hover:text-white'}`}>
              {mode}
            </button>
          ))}
        </div>
      </RevealWrapper>

      <div className="px-6 lg:px-12">
        <RevealWrapper delay={100} className="mb-16">
          <div className="relative w-full aspect-[21/9] min-h-[400px] border border-white/5 bg-[#151516] flex flex-col items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=2560" alt="hero background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
              <div className="w-12 h-12 border border-[#FBB843]/50 bg-black/40 flex items-center justify-center mb-6">
                <Smartphone className="text-[#FBB843]" size={20} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider">骁龙影像素材</h1>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                探索移动影像的无限可能。获取由骁龙移动平台驱动的高清样张、视频素材及技术文档，<br className="hidden md:block"/>助力你的创作之旅。
              </p>
              <button className="px-8 py-3 bg-[#333] border border-white/10 text-white text-sm font-bold hover:bg-white hover:text-black transition-colors">
                探索素材库
              </button>
            </div>
          </div>
        </RevealWrapper>

        {materialMode === "官方素材" ? (
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="flex items-center gap-4">
                <span className="w-2 h-10 bg-[#E271CB] block"></span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">精选素材库。</h2>
              </div>
              <div className="flex border border-white/10 bg-[#151516]">
                {["全部素材", "摄影素材", "视频素材"].map(type => (
                  <button 
                    key={type} onClick={() => setFilterType(type)}
                    className={`px-6 py-2.5 text-sm font-bold flex items-center gap-2 transition-colors ${filterType === type ? 'bg-white/10 text-white' : 'text-[#86868b] hover:text-white'}`}
                  >
                    {type === "全部素材" ? null : type === "摄影素材" ? <ImageIcon size={14} /> : <Video size={14} />} 
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-1 md:gap-2 space-y-1 md:space-y-2">
              {SNAPDRAGON_MATERIALS_DATA.filter(item => {
                if (filterType === "全部素材") return true;
                if (filterType === "摄影素材") return !item.type.includes("视频");
                if (filterType === "视频素材") return item.type.includes("视频");
                return true;
              }).map((item, index) => (
                <RevealWrapper key={item.id} delay={index * 50} className="break-inside-avoid">
                  <div className="relative w-full bg-[#151516] border border-white/5 cursor-pointer flex flex-col group overflow-hidden">
                    <img src={item.image} alt={item.title} onClick={() => navigate('素材详情', item)} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-transform duration-[3s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute top-2 right-2 z-20 flex gap-2 pointer-events-none">
                       <div className="bg-black/60 backdrop-blur-md px-2 py-1 text-[10px] text-white/90 font-bold flex items-center gap-1.5 rounded-sm">
                         {item.type.includes("视频") ? <Video size={10} className="text-[#E271CB]"/> : <ImageIcon size={10} className="text-[#FBB843]"/>}
                         <span className="hidden sm:inline">{item.type}</span>
                       </div>
                    </div>
                    {item.type.includes("视频") && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" onClick={(e) => { e.stopPropagation(); setPreviewVideo(item); }}>
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <Play fill="white" className="w-5 h-5 ml-1 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 w-full z-20 p-4 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md truncate">{item.title}</h3>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        ) : (
          <RevealWrapper delay={100}>
            <div className="w-full flex justify-end mb-8">
              <button onClick={() => navigate('素材上传')} className="bg-[#E271CB] text-white font-bold px-6 py-3 hover:bg-white hover:text-black flex items-center gap-2">
                <UploadCloud size={18} /> 用户上传
              </button>
            </div>
            <div className="w-full bg-[#151516] border border-white/5 p-20 flex flex-col items-center text-center">
              <Folder size={48} className="text-[#443E3D] mb-6" />
              <h3 className="text-xl text-white font-bold mb-2">暂无付费素材</h3>
              <p className="text-[#86868b] text-sm">成为首个上传者，将您的优秀视觉资产分享给社区创作者。</p>
            </div>
          </RevealWrapper>
        )}
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

export const UploadMaterialPage = ({ onBack, onPublish }: any) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-8 pt-24 md:pt-32 pb-48 min-h-screen">
      <RevealWrapper delay={0}>
        <button onClick={onBack} className="flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] font-bold text-sm tracking-widest uppercase mb-10 w-max">
          <ArrowLeft className="w-4 h-4" /> 返回素材库
        </button>
        <div className="flex items-center gap-4 mb-8">
          <span className="w-2 h-8 bg-[#E271CB] block"></span>
          <h1 className="text-4xl font-bold text-white tracking-tight">发布付费素材</h1>
        </div>
      </RevealWrapper>
      <div className="space-y-8">
        <RevealWrapper delay={200}>
          <div className="bg-[#151516] border border-white/5 flex flex-col">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="素材标题 (例如: 4K 120fps 极光延时摄影)" className="w-full bg-transparent border-b border-white/5 text-white px-5 py-5 outline-none font-bold text-lg placeholder-[#443E3D]"/>
            <div className="relative border-b border-white/5 flex items-center">
              <div className="pl-5 text-[#FBB843] font-bold flex items-center gap-2 whitespace-nowrap">
                设置价格 <span className="text-xs text-[#86868b] font-normal">(积分)</span> <span className="text-red-500">*</span>
              </div>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0 - 10000" className="w-full bg-transparent text-white px-4 py-5 outline-none font-bold text-base placeholder-[#443E3D]"/>
            </div>
            <textarea rows={5} placeholder="详细描述你的素材内容..." className="w-full bg-transparent text-white px-5 py-4 outline-none text-base placeholder-[#443E3D] resize-y min-h-[120px]"></textarea>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={400}>
          <div className="flex justify-end gap-3 pt-6">
            <button className="px-6 py-4 bg-transparent border border-[#443E3D] text-white font-bold flex items-center gap-2">
              <Save size={16} /> 保存草稿
            </button>
            <button onClick={() => { if(title && price) onPublish(); }} className={`px-8 py-4 font-bold flex items-center gap-2 ${title && price ? 'bg-[#E271CB] text-white hover:bg-white hover:text-black' : 'bg-[#443E3D] text-[#86868b] cursor-not-allowed'}`}>
              {title && price ? <UploadCloud size={16} /> : <CheckCircle size={16} />} 
              发布收费素材
            </button>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};
