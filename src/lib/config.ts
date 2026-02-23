export interface ValueItem {
  emoji: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
}

export interface HighlightItem {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

const DEMO_VALUES: ValueItem[] = [
  {
    emoji: '\\u2726',
    title: '\\uC9C4\\uC815\\uC131',
    titleEn: 'Authenticity',
    desc: '\\uAD11\\uACE0\\uCC98\\uB7FC \\uB290\\uAEF4\\uC9C0\\uC9C0 \\uC54A\\uB294 \\uCF58\\uD150\\uCE20. \\uB0B4\\uAC00 \\uC9C1\\uC811 \\uC368\\uBD24\\uAC70\\uB098 \\uBFFF\\uB294 \\uAC83\\uB9CC \\uC774\\uC57C\\uAE30\\uD569\\uB2C8\\uB2E4.',
    
  },
  {
    emoji: '\\u2726',
    title: '\\uC77C\\uAD00\\uC131',
    titleEn: 'Consistency',
    desc: '2019\\uB144\\uBD80\\uD130 \\uD55C \\uC8FC\\uB3C4 \\uAC70\\uB974\\uC9C0 \\uC54A\\uC740 \\uB274\\uC2A4\\uB808\\uD130. \\uAFB8\\uC900\\uD568\\uC774 \\uC2E0\\uB8B0\\uB97C \\uB9CC\\uB4E0\\uB2E4\\uACE0 \\uC0DD\\uAC01\\uD574\\uC694.',
    descEn: 'A newsletter published every single week since 2019. I believe consistency builds trust.',
  },
  {
    emoji: '\\u2726',
    title: '\\uD638\\uAE30\\uC2EC',
    titleEn: 'Curiosity',
    desc: '\\uC0C8\\uB85C\\uC6B4 \\uD50C\\uB7AB\\uD3FC, \\uC0C8\\uB85C\\uC6B4 \\uD3EC\\uB9F7, \\uC0C8\\uB85C\\uC6B4 \\uC0AC\\uB78C. \\uBC30\\uC6C0\\uC744 \\uBA48\\uCD94\\uC9C0 \\uC54A\\uB294 \\uAC83\\uC774 \\uC81C \\uC6D0\\uB3D9\\uB825\\uC785\\uB2C8\\uB2E4.',
    descEn: 'New platforms, new formats, new people \\u2014 never stopping learning is what keeps me going.',
  }
];

const DEMO_HIGHLIGHTS: HighlightItem[] = [
  { label: '\\uAD6C\\uB3C5\\uC790 \\uD569\\uC0B0', labelEn: 'Total Subscribers', value: '84,000+', valueEn: '84,000+', },
  { label: '\\uD611\\uC5C5 \\uBE0C\\uB79C\\uB4DC', labelEn: 'Brand Collabs', value: '120+', valueEn: '120+', },
  { label: '\\uB274\\uC2A4\\uB808\\uD130 \\uC5F0\\uC18D \\uBC1C\\uD589', labelEn: 'Newsletter Streak', value: '312\\uC8FC', valueEn: '312 Weeks', }
];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'uC774uC9C0uC6D0',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Jiwon Lee',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || 'uCF58uD150uCE20uB85C uC138uC0C1uC744 uC5F0uACB0uD558uB294 uD06CuB9ACuC5D0uC774uD130',
  taglineEn: process.env.NEXT_PUBLIC_TAGLINE_EN || 'Creator who connects the world through content',
  heroImageUrl: process.env.NEXT_PUBLIC_HERO_IMAGE_URL || null,
  story:
    process.env.NEXT_PUBLIC_STORY ||
    'uC548uB155uD558uC138uC694, uC800uB294 uC774uC9C0uC6D0uC785uB2C8uB2E4. 5uB144uC0B4 uB514uC9C0uD138 uCF58uD150uCE20uB97C uB9CCuB4E4uBA70 uBE0CuB79CuB4DCuC640 uC0ACuB78C uC0ACuC774uC758 uB2E4uB9ACuB97C uB193uACE0 uC788uC5B4uC694.',
  storyEn:
    process.env.NEXT_PUBLIC_STORY_EN ||
    'Hi, I\'m Jiwon Lee. For the past five years I\'ve been building bridges between brands and people through digital content.',
  values: parseJSON<ValueItem[]>(process.env.NEXT_PUBLIC_VALUES, DEMO_VALUES),
  highlights: parseJSON<HighlightItem[]>(process.env.NEXT_PUBLIC_HIGHLIGHTS, DEMO_HIGHLIGHTS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, []),
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@jiwonlee.kr',
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
  { platform: 'youtube', url: 'https://youtube.com' },
  { platform: 'instagram', url: 'https://instagram.com' }
]),
  gradientFrom: '#ee5b2b',
  gradientTo: '#f59e0b',
  parallaxEnabled: true,
  fontFamily: 'Pretendard',
  galleryColumns: '3',
  designPreset: 'storyteller',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
