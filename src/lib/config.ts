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
    emoji: '✦',
    title: '진정성',
    titleEn: 'Authenticity',
    desc: '광고처럼 느껴지지 않는 콘텐츠. 내가 직접 써봤거나 뿿는 것만 이야기합니다.',
    
  },
  {
    emoji: '✦',
    title: '일관성',
    titleEn: 'Consistency',
    desc: '2019년부터 한 주도 거르지 않은 뉴스레터. 꾸준함이 신뢰를 만든다고 생각해요.',
    descEn: 'A newsletter published every single week since 2019. I believe consistency builds trust.',
  },
  {
    emoji: '✦',
    title: '호기심',
    titleEn: 'Curiosity',
    desc: '새로운 플랫폼, 새로운 포맷, 새로운 사람. 배움을 멈추지 않는 것이 제 원동력입니다.',
    descEn: 'New platforms, new formats, new people — never stopping learning is what keeps me going.',
  }
];

const DEMO_HIGHLIGHTS: HighlightItem[] = [
  { label: '구독자 합산', labelEn: 'Total Subscribers', value: '84,000+', valueEn: '84,000+', },
  { label: '협업 브랜드', labelEn: 'Brand Collabs', value: '120+', valueEn: '120+', },
  { label: '뉴스레터 연속 발행', labelEn: 'Newsletter Streak', value: '312주', valueEn: '312 Weeks', }
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
  name: process.env.NEXT_PUBLIC_SITE_NAME || '최동혁',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Jiwon Lee',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || '한줄소개 내용',
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
