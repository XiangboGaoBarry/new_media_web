import type React from 'react';
import {StaticImageData} from 'next/image';
import {FC, SVGProps} from 'react';
import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/** Hero */
export interface Hero {
  imageSrc: string;
  personalSrc: string;
  name: string;
  description: React.ReactNode;
  actions: HeroActionItem[];
}
interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
}

/** About */
export interface About {
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
}
export interface AboutItem {
  label: string;
  text: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
}

/** Stat */
export interface Stat {
  title: string;
  value: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
}

/** Skills */
export interface Skill { name: string; level: number; max?: number; }
export interface SkillGroup { name: string; skills: Skill[]; }

/** Portfolio */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/** Resume */
export interface TimelineItem {
  type: 'education' | 'experience' | 'employment' | 'competitions';
  date: string;
  location: string;
  title: string | React.ReactNode;
  content: React.ReactNode;
}

export interface PublicationItem {
  title: string;
  imageSrc: string;
  authors: string;
  conference: string;
  paperlink: string;
  paperlinksmall: string;
  githublink: string;
  description: string;
  projectpage: string;
}

export interface ScholarMetrics {
  totalCitations: number;
  totalCitationsSince: number;
  totalCitationsSinceYear: number | null;
  hIndex: number;
  hIndexSince: number;
  hIndexSinceYear: number | null;
  i10Index: number;
  i10IndexSince: number;
  i10IndexSinceYear: number | null;
}

/** Testimonial */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}
export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

/** Contact */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}
export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;
export type ContactType = typeof ContactType[keyof typeof ContactType];
export interface ContactItem { type: ContactType; text: string; href?: string; }
export interface ContactValue {
  Icon: FC<IconProps> | ((props: SVGProps<SVGSVGElement>) => React.ReactNode);
  srLabel: string;
}

/** Social */
export interface Social { label: string; Icon: FC<IconProps>; href: string; }

/** Service */
export interface Service {
  title: string;
  description: string | React.ReactNode;
  date: string;
}
