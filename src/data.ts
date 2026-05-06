export const HERO_BG = "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?auto=format&fit=crop&q=80&w=2560";
export const EVENT_1 = "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?auto=format&fit=crop&q=80&w=1200";
export const EVENT_2 = "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&q=80&w=1200";

export const ONGOING_EVENTS = [
  { id: 1, title: "2026年度自然摄影大赛", subtitle: "鸟类专场", desc: "记录那些翱翔天际的精灵，赢取丰厚奖品。", image: EVENT_1, status: "进行中" },
  { id: 2, title: "国家地理：地球脉动", subtitle: "视频挑战赛", desc: "用动态影像捕捉生命的奇迹与力量。", image: EVENT_2, status: "进行中" }
];

export const CATEGORIES = ["全部", "鸟类", "哺乳动物", "其他动物", "植物和真菌", "国家公园与自然保护地", "人与自然", "手机组", "新视角组"];
export const HOT_TAGS = ["#风景", "#自然", "#动物", "#雪豹"];

export const HORIZONTAL_WORKS = [
  { id: 101, title: "极地冰川的脉络", location: "南极洲", image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=1200" },
  { id: 102, title: "纳米布沙丘光影", location: "纳米布沙漠", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" },
  { id: 103, title: "凝固的熔岩之海", location: "冰岛高地", image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80&w=1200" },
  { id: 104, title: "幽蓝深渊秘境", location: "马里亚纳海沟", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1200" },
  { id: 105, title: "晨雾中的喀纳斯", location: "新疆喀纳斯", image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&q=80&w=1200" },
  { id: 106, title: "平原雷暴奇观", location: "得克萨斯州", image: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&q=80&w=1200" }
];

export const TOP_CREATORS = [
  { id: 1, name: "自然观察者_壹", followers: "12.5k", works: "342", avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=150" },
  { id: 2, name: "极地探险家_星", followers: "8.2k", works: "156", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" },
  { id: 3, name: "鸟类图鉴", followers: "15.1k", works: "890", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150" },
];

export const FEATURED_WORKS = [
  { id: 1, title: "破晓时的呼唤", category: "鸟类", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800", author: "自然观察者_林", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150", likes: "1.2k", comments: "86", height: "h-[600px]", story: "一只破晓时分的飞鹰，充满力量与希望。参数：F4.0, 1/1000s, ISO 400" },
  { id: 2, title: "冰岛黑沙滩的怒吼", category: "风光", image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800", author: "北极光影", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150", likes: "3.4k", comments: "128", height: "h-[400px]" },
  { id: 3, title: "塞伦盖蒂的守望者", category: "哺乳动物", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", author: "野生追踪", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", likes: "2.8k", comments: "94", height: "h-[500px]" },
  { id: 4, title: "深海巨鲸的温柔相遇", category: "其他动物", image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800", author: "深海之蓝", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", likes: "4.1k", comments: "210", height: "h-[450px]" },
  { id: 5, title: "微观迷宫", category: "植物和真菌", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800", author: "微距世界", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", likes: "956", comments: "42", height: "h-[650px]" },
  { id: 6, title: "优胜美地的星辰", category: "国家公园", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=800", author: "星空猎人", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150", likes: "5.6k", comments: "340", height: "h-[400px]" }
];

export const WORKS_PAGE_DATA = [
  { id: 1, title: "在国家公园捕捉到的珍稀野生动物瞬间，自然的力量令人敬畏", category: "鸟类", author: "自然摄影师_0", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600", time: "2小时前", likes: 1200, comments: 86 },
  { id: 2, title: "静谧清晨的雾气穿透森林，光影斑驳", category: "风光", author: "自然摄影师_1", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600", time: "3小时前", likes: 1213, comments: 91 },
  { id: 3, title: "生命力顽强的沙丘爬行者，适应极端环境", category: "哺乳动物", author: "自然摄影师_2", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600", time: "4小时前", likes: 1226, comments: 96 },
  { id: 4, title: "湛蓝深海之下，与巨型海洋生物的一次共舞", category: "其他动物", author: "自然摄影师_3", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=600", time: "5小时前", likes: 1239, comments: 101 },
  { id: 5, title: "露水折射下的植物纹理，微距宇宙的奥秘", category: "植物和真菌", author: "自然摄影师_4", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600", time: "昨天", likes: 1252, comments: 106 },
  { id: 6, title: "银河如拱门般悬挂在绝壁之上，仰望苍穹", category: "风光", author: "自然摄影师_5", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600", time: "昨天", likes: 1265, comments: 111 },
  { id: 7, title: "纯粹的极地冰蓝，见证时间流逝的痕迹", category: "风光", author: "自然摄影师_6", avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=600", time: "2天前", likes: 1278, comments: 116 },
  { id: 8, title: "沙漠边缘的最后防线，光影重塑了地貌", category: "风光", author: "自然摄影师_7", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", time: "3天前", likes: 1291, comments: 121 },
];

export const EVENTS_PAGE_DATA = [
  { id: 1, status: "进行中", tag: "月度主题征集", title: "「探索」月度主题征集", desc: "小米与徕卡携手发起“小米徕卡全球影像大赛”...", date: "4月1日-4月30日", type: "小米影像官方账号", participants: "56105", image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80&w=600" },
  { id: 2, status: "进行中", tag: "月度主题征集", title: "【生态保护】无痕山林：用镜头记录我们对环境的承诺", desc: "倡导环保拍摄，不仅是为了记录美，更是为了保护美。", date: "2026.06.01 - 2026.06.30", type: "线上提交作品参与", participants: "890", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=600" },
  { id: 3, status: "进行中", tag: "月度主题征集", title: "【色彩专题】自然调色板：秋日斑斓物语", desc: "秋季是大自然打翻的调色盘。捕捉自然界中最饱和、最丰富的色彩。", date: "2026.09.01 - 2026.10.15", type: "线上提交作品参与", participants: "2,156", image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&q=80&w=600" },
  { id: 4, status: "进行中", tag: "月度主题征集", title: "【极端天气】雷暴与极光：见证天地之威", desc: "记录极端天气现象下的视觉奇观，展现摄影师的胆识与技术。", date: "2026.07.01 - 2026.08.31", type: "线上提交作品参与", participants: "450", image: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&q=80&w=600" },
];

export const EVENT_DETAIL_DATA = {
  title: "「探索」月度主题征集",
  status: "进行中",
  tag: "月度主题征集",
  date: "4月1日-4月30日",
  type: "小米影像官方账号",
  participants: "56105",
  image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&q=80&w=2560",
  description: "小米与徕卡携手发起...\n\n我们希望通过这些影像...",
  rules: [
    "作品必须在2026年5月1日至5月31日期间拍摄。",
    "每位参赛者最多可提交5件作品（单张或组图均可）。",
    "作品须保留原始EXIF信息...",
    "请在发布作品时添加标签 #城市自然角落 。"
  ],
  prizes: [
    { award: "一等奖 (1名)", desc: "大疆 DJI Mavic 3 Pro 航拍无人机" },
    { award: "二等奖 (3名)", desc: "索尼 Sony FE 200-600mm 镜头" },
    { award: "优秀奖 (10名)", desc: "中国国家地理全年实体杂志" }
  ]
};

export const SNAPDRAGON_HERO_BG = "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?auto=format&fit=crop&q=80&w=2560";

export const SNAPDRAGON_MATERIALS_DATA = [
  { id: 1, type: "高清样张", title: "骁龙8 Gen 3 极暗光环境测试样张", desc: "在零下20度的极端环境中...", downloads: "12,050", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-2" },
  { id: 2, type: "4K 视频素材", title: "【4K 120fps】高速运动物体抓拍素材包", desc: "体验无拖影的极限刷新，专为专业后期调色准备。", downloads: "8,334", image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-2" },
  { id: 4, type: "高清样张", title: "移动计算的色彩科学 - 纳米布沙漠航拍记录", desc: "10-bit色彩深度下的壮丽沙丘光影层次。", downloads: "6,602", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1" },
  { id: 6, type: "4K 视频素材", title: "【8K 30fps】HDR10+ 极限风光演示片 - 冰岛", desc: "难以置信的动态范围，记录黑沙滩的怒吼与深渊。", downloads: "11,402", image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-2" },
  { id: 7, type: "高清样张", title: "微距视界 - 昆虫复眼与植物纤维的细节保留", desc: "超越人眼的极限放大，纤毫毕现的微观宇宙。", downloads: "5,980", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 8, type: "高清样张", title: "瞬息万变 - 雷暴天气的动态捕捉", desc: "零快门延迟(ZSL)实战...", downloads: "9,150", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1" },
  { id: 9, type: "4K 视频素材", title: "雨林生态全纪录 - 移动镜头跟踪", desc: "穿梭于雨林之中的色彩密码。", downloads: "5,432", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-2" },
  { id: 10, type: "高清样张", title: "冰川遗迹 - 绝对零度下的细节还原", desc: "极寒条件下的性能考验。", downloads: "3,212", image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 11, type: "高清样张", title: "荒野之息 - 野生动物瞬间连拍", desc: "捕捉极致速度与力量感。", downloads: "8,920", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1" },
  { id: 12, type: "4K 视频素材", title: "星空轨迹 - 延时摄影下的绝美星河", desc: "暗光记录，超越人眼的星辰之美。", downloads: "10,030", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 13, type: "高清样张", title: "斑驳光影 - 从树冠到地面的层次过度", desc: "精准曝光控制下的林间光束。", downloads: "7,845", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-2" }
];

export const COURSES_PAGE_DATA = [
  { id: 1, type: "视频", level: "进阶", category: "大师班", title: "野生动物摄影：从隐蔽到抓拍的艺术", desc: "跟随顶级摄影师...", instructor: "自然摄影师_林", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600", duration: "12课时", views: "2.4w" },
  { id: 2, type: "视频", level: "入门", category: "前期拍摄", title: "零基础风光摄影指南", desc: "解析光圈、快门...", instructor: "北极光影", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600", duration: "8课时", views: "5.1w" },
  { id: 3, type: "图文", level: "高阶", category: "后期修图", title: "Lr+PS 电影级生态调色解析", desc: "突破平庸色彩...", instructor: "深海之蓝", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=600", duration: "15课时", views: "1.8w" },
  { id: 4, type: "视频", level: "进阶", category: "生态知识", title: "鸟类行为学与拍摄预判", desc: "懂鸟才能拍好鸟...", instructor: "野生追踪", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600", duration: "10课时", views: "3.2w" },
  { id: 5, type: "图文", level: "入门", category: "前期拍摄", title: "微距摄影：探索昆虫微观宇宙", desc: "微距镜头推荐...", instructor: "微距世界", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600", duration: "6课时", views: "4.5w" },
  { id: 6, type: "视频", level: "高阶", category: "大师班", title: "水下摄影：光影与压力的平衡", desc: "挑战极寒与深潜...", instructor: "星空猎人", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100", image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600", duration: "20课时", views: "9.8k" },
];

export const DETAIL_DATA_FALLBACK = {
  title: "晨雾中的翠鸟：等待三个小时的完美瞬间",
  author: "自然摄影师_张三",
  authorTitle: "中国国家地理签约摄影师...",
  avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=150",
  stats: { followers: "12.5k", works: "342", likes: "89k" },
  mainImage: "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&q=80&w=1600",
  thumbnails: [
    "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=300"
  ],
  time: "2026-05-12",
  likesCount: "1,234",
  commentsCount: "86",
  category: "鸟类",
  tags: ["#野生动物", "#自然摄影", "#生态保护", "#微距"],
  location: "云南省 迪庆藏族自治州 普达措国家公园",
  mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
  story: "清晨的湖面上弥漫着一层薄雾..."
};

export const MY_PROFILE_INFO = {
  name: "自然摄影师_我的主页",
  title: "中国野生生物影像年赛入围创作者",
  avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=300",
  bio: "用镜头记录生命脉动，探索自然奇观的无限可能。期待在这里与大家分享更多故事。",
  badges: ["新锐创作者", "认证摄影师"],
  stats: { followers: "1,024", following: "88", likes: "2.3k", views: "12.5k" }
};

export const OTHER_USER_PROFILE_DATA = {
  name: "极地探险家_星",
  title: "自由生态摄影师 /极地科考队随队摄影",
  avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
  cover: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=2560",
  bio: "常年驻扎在南北极，用镜头记录冰川的消融与极地生灵的坚韧。相信影像能唤醒人类对自然的敬畏之心。",
  badges: ["极地之光", "年度风云摄影师"],
  stats: { followers: "86.2k", following: "45", likes: "890k", views: "3.2m" },
  works: WORKS_PAGE_DATA.map(w => ({
    ...w,
    id: w.id + 100,
    author: "极地探险家_星",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
  }))
};

export const ABOUT_DATA = [
  { heading: "我们的愿景", text: "中国野生生物影像年赛创作者社区，是连接全球自然摄影爱好者、生态保护者与视觉艺术家的核心阵地。\n\n我们坚信影像的力量，致力于用镜头记录生命脉动，以视觉传递保护理念。在这里，每一次快门的按下，都是对地球生态的一次深情致敬。" },
  { heading: "社区文化", text: "硬核、真实、探索。\n\n我们鼓励创作者深入无人之境，探索那些鲜为人知的自然奇观。无论是翱翔天际的飞鸟，还是深海潜游的巨鲸，都在我们的关注之列。我们拒绝平庸，追求极致的视觉张力与真实的故事内核。" }
];

export const RULES_DATA = [
  { heading: "基本准则", text: "1. 真实呈现：拒绝过度修图与AI生成，保留自然影像的真实性。\n2. 生态伦理：拍摄过程须严格遵守生态保护规范，严禁诱拍、惊扰野生动植物。\n3. 版权尊重：所有上传作品须拥有完整版权，严禁盗图。\n4. 友善交流：尊重每一位创作者，拒绝网络暴力与恶意攻击。" },
  { heading: "违规处理", text: "对于违反社区规则的用户，系统将根据情节严重程度，采取警告、作品下架、封禁账号等措施。我们致力于维护一个纯粹、专业的自然影像交流环境。" }
];

export const CONTACT_DATA = [
  { heading: "联系方式", text: "商务合作: business@wonderoflife.cn\n媒体支持: media@wonderoflife.cn\n创作者服务: creator@wonderoflife.cn" },
  { heading: "办公地址", text: "北京市朝阳区野生生物保护中心大楼 赛博区 404室\n\n工作时间: 周一至周五 10:00 - 19:00" }
];

export const COMMENTS_DATA = [
  { id: 1, user: "摄影初学者_Jack", avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100", content: "太震撼了！请问用的什么镜头？光圈快门参数能分享下吗？", time: "2小时前", likes: 12 },
  { id: 2, user: "生态保护者_Annie", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100", content: "画面色彩非常通透，能感受到清晨那种凛冽的空气感。构图也很完美，主体突出。", time: "5小时前", likes: 34 },
  { id: 3, user: "深海之蓝", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100", content: "非常棒的作品，我也曾去过普达措，但没能拍出这么棒的光影效果。向你学习！", time: "1天前", likes: 5 }
];

export const SOCIAL_DATA: Record<string, {color: string, desc: string}> = {
  "微信公众号": { color: "#07C160", desc: "扫码关注微信公众号，获取最新赛事资讯与精选作品推送。" },
  "微博": { color: "#E6162D", desc: "关注官方微博，参与话题互动，与千万摄影师在线交流。" },
  "哔哩哔哩": { color: "#00AEEC", desc: "订阅B站官方频道，观看高清生态纪录片与大师公开课。" }
};
