import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, UploadCloud, Save, Send, CircleCheckBig, Settings, Edit3, Camera, Clock, Heart, MessageCircle, Grid, Compass, User, ImageIcon, Video } from 'lucide-react';
import { RevealWrapper } from './shared';
import { MY_PROFILE_INFO, OTHER_USER_PROFILE_DATA, CATEGORIES, HOT_TAGS } from './data';

export const PublishPage = ({ onPublish }: any) => {
  const [mediaType, setMediaType] = useState("摄影作品");
  const [activeCategory, setActiveCategory] = useState("全部");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");

  const handleFakeUpload = () => {
    if (uploadedFiles.length >= 9) return;
    const img = "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600";
    setUploadedFiles([...uploadedFiles, img]);
  };

  const removeFile = (e: any, index: number) => {
    e.stopPropagation();
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) setSelectedTags(selectedTags.filter(t => t !== tag));
    else if (selectedTags.length < 5) setSelectedTags([...selectedTags, tag]);
  };

  const handleConfirmPublish = () => {
    const defaultImage = "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600";
    const newWork = {
      id: Date.now(),
      title: title.trim() || textContent.substring(0, 15) || "新作品",
      category: activeCategory !== "全部" ? activeCategory : "未分类",
      author: MY_PROFILE_INFO.name,
      avatar: MY_PROFILE_INFO.avatar,
      image: uploadedFiles.length > 0 ? uploadedFiles[0] : defaultImage,
      thumbnails: uploadedFiles.length > 0 ? uploadedFiles : [defaultImage],
      time: "刚刚",
      likes: 0,
      comments: 0,
      story: textContent || "用镜头记录下这美好的瞬间...",
      tags: [...selectedTags],
      location: "探索的路上"
    };
    if (onPublish) onPublish(newWork);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-48 md:pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex bg-[#151516] rounded-none p-1 border border-white/10 w-full sm:w-auto">
            {["摄影作品", "视频作品", "文章", "求助"].map((type) => (
              <button 
                key={type}
                onClick={() => setMediaType(type)}
                className={`flex-1 sm:flex-none px-4 py-2.5 rounded-none text-xs md:text-sm font-bold flex items-center justify-center gap-2 ${mediaType === type ? 'bg-[#443E3D] text-white shadow-sm border border-[#E271CB]/40' : 'text-[#86868b] hover:text-white border border-transparent'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </RevealWrapper>
      
      <div className="space-y-6 md:space-y-8">
        <RevealWrapper delay={100}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
            {uploadedFiles.map((url, idx) => (
              <div key={idx} className="relative aspect-square border border-white/10 group overflow-hidden bg-[#0a0a0b]">
                <img src={url} alt={`已选 ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button onClick={(e) => removeFile(e, idx)} className="absolute top-1 right-1 w-5 h-5 md:w-6 md:h-6 bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[#E271CB]">
                  <Plus size={14} className="rotate-45" />
                </button>
              </div>
            ))}
            {uploadedFiles.length < 9 && (
              <div onClick={handleFakeUpload} className="aspect-square border border-white/10 bg-[#151516] hover:bg-[#1c1c1e] hover:border-[#FBB843]/50 flex flex-col items-center justify-center cursor-pointer group">
                <div className="w-8 h-8 bg-[#443E3D] flex items-center justify-center mb-1.5 group-hover:scale-110">
                  <Plus className="text-[#FBB843] w-4 h-4" />
                </div>
                <span className="text-[#86868b] text-[9px] font-bold tracking-widest uppercase group-hover:text-white">
                  {uploadedFiles.length === 0 ? "上传照片" : "继续添加"}
                </span>
              </div>
            )}
          </div>
        </RevealWrapper>
        <RevealWrapper delay={200}>
          <div className="bg-[#151516] border border-white/5 flex flex-col focus-within:border-[#FBB843]/50 transition-colors shadow-lg">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="填写标题会有更多赞哦~" className="w-full bg-transparent border-b border-white/5 text-white px-5 py-5 outline-none font-bold text-lg"/>
            <textarea rows={6} value={textContent} onChange={(e) => setTextContent(e.target.value)} placeholder="添加正文..." className="w-full bg-transparent text-white px-5 py-4 outline-none text-sm md:text-base resize-y min-h-[150px]"></textarea>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={300}>
          <div className="bg-[#151516] border border-white/5 shadow-lg divide-y divide-white/5">
            <div className="p-5">
              <div className="flex items-center mb-3"><span className="text-xs font-bold text-[#86868b] uppercase tracking-widest"><ImageIcon size={14} className="text-[#E271CB] mr-1.5 inline"/> 选择分类</span></div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {CATEGORIES.filter(c => c !== "全部").map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-none text-xs font-bold ${activeCategory === cat ? 'bg-[#FBB843] text-black shadow-[0_0_10px_rgba(251,184,67,0.3)]' : 'bg-[#0a0a0b] text-[#86868b] border border-white/5'}`}>{cat}</button>
                ))}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest"><Compass size={14} className="text-[#FBB843] mr-1.5 inline"/> 参与话题</span>
                <span className="text-[10px] text-[#E271CB] font-mono font-bold">{selectedTags.length}/5</span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {HOT_TAGS.map((tag) => (
                  <button key={tag} onClick={() => toggleTag(tag)} className={`px-3 py-1.5 rounded-none text-[10px] md:text-xs font-bold border ${selectedTags.includes(tag) ? 'bg-[#E271CB] text-white border-[#E271CB]' : 'bg-[#0a0a0b] text-[#86868b] border-white/5'}`}>{tag}</button>
                ))}
              </div>
            </div>
            <div className="p-5 flex items-center justify-between">
              <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest">添加位置</span>
              <button className="text-xs font-bold text-white hover:text-[#FBB843] bg-white/5 px-4 py-2">选择位置...</button>
            </div>
            <div className="p-5 flex items-center justify-between">
              <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest">高级设置 (EXIF等)</span>
              <button className="text-xs font-bold text-white hover:text-[#FBB843] bg-white/5 px-4 py-2">展开</button>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={400}>
          <div className="bottom-0 left-0 w-full z-50 flex gap-3 pt-6 justify-end">
            <button className="px-6 py-3.5 bg-transparent border border-[#443E3D] text-white font-bold text-sm flex items-center justify-center gap-2"><Save size={16} /> 存草稿</button>
            <button onClick={handleConfirmPublish} className={`px-8 py-3.5 font-bold text-sm flex items-center justify-center gap-2 bg-[#FBB843] text-black hover:bg-white`}>
              <Send size={16} /> 确认发布
            </button>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export const ProfilePage = ({ navigate, works }: any) => {
  const [activeTab, setActiveTab] = useState("我的作品");
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const displayTiles = activeTab === "我的作品" ? works : [];
  
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 md:pt-40 pb-32 min-h-screen">
      <RevealWrapper delay={0}>
        <div className="bg-[#151516] border border-white/5 p-8 flex flex-col md:flex-row gap-8 items-center md:items-start mb-12 shadow-lg relative overflow-hidden group hover:border-[#FBB843]/30">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FBB843] shadow-[0_0_15px_rgba(251,184,67,0.5)]"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
             <img src={MY_PROFILE_INFO.avatar} className="w-full h-full rounded-full object-cover border-4 border-[#443E3D] z-10 relative" alt="avatar"/>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
             <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start mb-6 gap-6 md:gap-0">
               <div className="flex flex-col items-center md:items-start">
                 <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{MY_PROFILE_INFO.name}</h1>
                 <p className="text-[#86868b] text-sm md:text-base mb-4 max-w-2xl leading-relaxed">{MY_PROFILE_INFO.bio}</p>
                 <div className="flex gap-2">
                   {MY_PROFILE_INFO.badges?.map(badge => (
                     <span key={badge} className="bg-[#333] text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-none">{badge}</span>
                   ))}
                 </div>
               </div>
               <div className="flex gap-3">
                 <button className="p-2.5 bg-[#333] hover:bg-[#444] transition-colors rounded-none text-white"><Settings size={18} /></button>
                 <button className="px-4 py-2.5 bg-white hover:bg-zinc-200 transition-colors rounded-none text-black text-sm font-bold flex items-center"><Edit3 size={16} className="mr-2"/> 编辑资料</button>
               </div>
             </div>
             
             <div className="flex gap-6 md:gap-8 text-sm md:text-base font-bold text-white w-full justify-center md:justify-start border-t border-white/10 pt-6 mt-auto">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl text-[#FBB843] mb-1">{MY_PROFILE_INFO.stats.followers}</span>
                  <span className="text-xs text-[#86868b] uppercase tracking-widest">粉丝</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl text-white mb-1">{works.length}</span>
                  <span className="text-xs text-[#86868b] uppercase tracking-widest">作品</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-2xl text-white mb-1">{MY_PROFILE_INFO.stats.likes}</span>
                  <span className="text-xs text-[#86868b] uppercase tracking-widest">获赞</span>
                </div>
             </div>
          </div>
        </div>
        
        <div className="flex border border-white/10 rounded-none bg-[#111] overflow-hidden w-max mb-8 mt-12">
          {["我的作品", "收藏夹"].map((tab) => (
            <button
              key={tab} onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-sm font-bold transition-colors ${activeTab === tab ? 'bg-[#FBB843] text-black' : 'text-[#86868b] hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {displayTiles.length === 0 ? (
          <div className="w-full bg-[#151516] border border-white/5 py-32 flex flex-col items-center justify-center text-center px-4">
             <div className="w-20 h-20 border border-white/10 bg-[#0a0a0b] flex items-center justify-center mb-6 rounded-none">
                <Camera size={32} className="text-[#86868b]" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-4">{activeTab === "我的作品" ? "还没有发布任何作品" : "暂无收藏内容"}</h3>
             {activeTab === "我的作品" && <p className="text-[#86868b] text-sm max-w-md mb-8 leading-relaxed">用镜头记录生命脉动，在社区分享你的自然探索之旅。第一篇作品往往是改变的开始。</p>}
             {activeTab === "我的作品" && <button onClick={() => navigate('发布')} className="px-8 py-4 bg-[#FBB843] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#e5a639] transition-colors rounded-none">
                <UploadCloud size={18} /> 立即发布
             </button>}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayTiles.map((work: any, idx: number) => (
               <div key={idx} onClick={() => navigate('详情', work)} className="group bg-[#151516] rounded-none overflow-hidden border border-white/5 hover:border-[#E271CB]/40 cursor-pointer flex flex-col h-full hover:shadow-xl hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={work.image || work.mainImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work"/>
                    <div className="absolute top-3 left-3 bg-[#0a0a0b]/80 px-2 py-1 text-[10px] text-white font-bold">{work.category}</div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-white font-bold tracking-tight mb-3 line-clamp-1">{work.title}</h3>
                    <div className="flex items-center justify-between text-[#86868b] text-xs font-bold mt-auto pt-3 border-t border-white/5">
                      <span className="flex items-center gap-1"><Clock size={12} /> {work.time}</span>
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Heart size={12} /> {work.likes || 0}</span>
                        <span className="flex items-center gap-1"><MessageCircle size={12} /> {work.comments || 0}</span>
                      </div>
                    </div>
                  </div>
               </div>
            ))}
          </div>
        )}
      </RevealWrapper>
    </div>
  );
};

export const OtherUserProfilePage = ({ navigate, onBack }: any) => {
  const [activeTab, setActiveTab] = useState("代表作品");
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-32 min-h-screen">
       <RevealWrapper delay={0}>
         <button onClick={onBack} className="mb-8 flex items-center gap-2 text-[#86868b] hover:text-[#FBB843] transition-colors bg-[#151516] px-4 py-2 border border-white/10 uppercase text-xs md:text-sm font-bold tracking-widest shadow-sm w-max group">
           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回
         </button>
         <div className="bg-[#151516] border border-white/5 p-8 flex flex-col md:flex-row gap-8 items-center md:items-start mb-12 shadow-lg relative overflow-hidden group hover:border-[#E271CB]/30">
           <div className="absolute top-0 left-0 w-2 h-full bg-[#E271CB] shadow-[0_0_15px_rgba(226,113,203,0.5)]"></div>
           <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
             <img src={OTHER_USER_PROFILE_DATA.avatar} className="w-full h-full rounded-full object-cover border-4 border-[#443E3D] z-10 relative shadow-xl" alt="avatar"/>
           </div>
           <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
             <div className="flex flex-col md:flex-row items-center md:items-end gap-3 mb-2">
               <h1 className="text-4xl font-bold text-white tracking-tight">{OTHER_USER_PROFILE_DATA.name}</h1>
               <span className="text-[#86868b] text-xs font-bold uppercase tracking-widest border border-white/10 px-2 py-0.5">{OTHER_USER_PROFILE_DATA.title}</span>
             </div>
             <p className="text-[#a1a1a6] text-sm md:text-base mb-6 font-medium max-w-2xl leading-relaxed">{OTHER_USER_PROFILE_DATA.bio}</p>
             <div className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-bold text-white w-full justify-center md:justify-start border-t border-white/10 pt-6 mt-auto">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-xl md:text-2xl text-white mb-1">{OTHER_USER_PROFILE_DATA.stats.followers}</span>
                  <span className="text-[10px] md:text-xs text-[#86868b] uppercase tracking-widest">粉丝</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-xl md:text-2xl text-white mb-1">{OTHER_USER_PROFILE_DATA.works.length}</span>
                  <span className="text-[10px] md:text-xs text-[#86868b] uppercase tracking-widest">作品</span>
                </div>
                <div className="ml-auto hidden md:block">
                  <button className="bg-[#443E3D] text-white px-8 py-3 font-bold text-sm tracking-widest hover:bg-[#FBB843] hover:text-black flex items-center gap-2">
                    <Plus size={16} /> 关注作者
                  </button>
                </div>
             </div>
           </div>
        </div>

        <div className="flex border-b border-white/10 mb-8 mt-12 gap-8">
          {["代表作品", "全部作品", "参加赛事"].map(tab => (
             <button 
               key={tab} onClick={() => setActiveTab(tab)}
               className={`pb-4 text-lg font-bold transition-all ${activeTab === tab ? 'text-[#FBB843] border-b-2 border-[#FBB843]' : 'text-zinc-500 hover:text-white'}`}
             >
               {tab}
             </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OTHER_USER_PROFILE_DATA.works.map((work: any, idx: number) => (
             <div key={idx} onClick={() => navigate('详情', work)} className="group bg-[#151516] rounded-none overflow-hidden border border-white/5 hover:border-[#E271CB]/40 cursor-pointer flex flex-col h-full hover:shadow-xl hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={work.image || work.mainImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="work"/>
                  <div className="absolute top-3 left-3 bg-[#0a0a0b]/80 px-2 py-1 text-[10px] text-white font-bold">{work.category}</div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-white font-bold tracking-tight mb-3 line-clamp-1">{work.title}</h3>
                  <div className="flex items-center justify-between text-[#86868b] text-xs font-bold mt-auto pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1"><Clock size={12} /> {work.time}</span>
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1"><Heart size={12} /> {work.likes || 0}</span>
                      <span className="flex items-center gap-1"><MessageCircle size={12} /> {work.comments || 0}</span>
                    </div>
                  </div>
                </div>
             </div>
          ))}
        </div>
       </RevealWrapper>
    </div>
  )
};
