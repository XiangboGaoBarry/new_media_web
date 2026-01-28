import type React from 'react';
import { StaticImageData } from 'next/image';
import { FC } from 'react';
import { IconProps } from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
}

/** Introduction (formerly Hero/About) */
export interface Introduction {
  name: string;
  description: React.ReactNode;
  imageSrc: string | StaticImageData;
  statement: React.ReactNode;
}

/** Media Usage */
export interface MediaItem {
  name: string;
  type: 'consumer' | 'generator';
  category: string; // e.g. "Television", "Music"
  subCategory?: string; // e.g. "Science Fiction", "Jazz"
  device?: string; // e.g. "Cell phone"
}

export interface MediaSection {
  consumer: MediaCategory[];
  generator: MediaCategory[];
}

export interface MediaCategory {
  name: string; // e.g. "Television"
  items: MediaItemDetails[];
}

export interface MediaItemDetails {
  name: string; // e.g. "Stranger Things"
  subCategory?: string;
  device?: string;
}


/** Challenge */
export interface Challenge {
  description: React.ReactNode;
}

/** Social */
export interface Social { label: string; Icon: FC<IconProps>; href: string; }
