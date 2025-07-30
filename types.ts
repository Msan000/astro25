
export type ContentType = 'heading' | 'subheading' | 'paragraph' | 'list' | 'ritual' | 'mandala' | 'quote' | 'event-list' | 'zodiac-grid';

export interface ContentItem {
  type: ContentType;
  text?: string;
  items?: string[] | { date: string; event: string }[];
  title?: string;
}

export interface Section {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  content: ContentItem[];
  subSections?: Section[];
}

export interface ZodiacSignData {
  name: string;
  emoji: string;
  opportunity: string;
  challenge: string;
  affirmation: string;
  description: string;
}

export interface GuideData {
  mainSections: Section[];
}
