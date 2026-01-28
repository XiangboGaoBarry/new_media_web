// import {
//   AcademicCapIcon,
//   CalendarIcon,
//   DownloadIcon,
//   FlagIcon,
//   MapIcon,
//   SparklesIcon,
// } from '@heroicons/react/outline';

import { FaTwitter } from 'react-icons/fa';
import { SiZhihu } from 'react-icons/si';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/profilepic.jpg';


import {
  HomepageMeta,
  Introduction,
  MediaSection,
  Challenge,
  Social,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Xiangbo Gao - HCI Class Page',
  description: "Xiangbo Gao's personal website for HCI class",
};

/**
 * Introduction Section
 */
export const introductionData: Introduction = {
  name: "Xiangbo Gao",
  imageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Ph.D. student at Texas A&M University.
      </p>
    </>
  ),
  statement: (
    <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg mt-4">
      <p>
        I am taking this class to gain a deeper understanding of Human-Computer Interaction and to explore how we interact with various forms of media in our daily lives. As a researcher in video generation and editing, I am interested in how humans perceive and generate content, and how we can build better tools to support these activities.
      </p>
    </div>
  )
};

/**
 * Media Usage Section
 */
export const mediaData: MediaSection = {
  consumer: [
    {
      name: "Moving Images",
      items: [
        { name: "Science Fiction", subCategory: "Movies/TV", device: "TV/Laptop" },
        { name: "Tech Reviews", subCategory: "YouTube/Bilibili", device: "Phone/Laptop" },
        { name: "Academic Talks", subCategory: "Conference Videos", device: "Laptop" }
      ]
    },
    {
      name: "Text & Social Media",
      items: [
        { name: "Research Papers", subCategory: "PDFs", device: "Tablet/Laptop" },
        { name: "Tech News", subCategory: "X (Twitter)/Websites", device: "Phone" },
        { name: "Knowledge Sharing", subCategory: "Zhihu", device: "Phone" },
        { name: "Lifestyle", subCategory: "Xiaohongshu", device: "Phone" }
      ]
    },
    {
      name: "Games",
      items: [
        { name: "Strategy Games", subCategory: "PC", device: "Desktop" }
      ]
    }
  ],
  generator: [
    {
      name: "Text & Code",
      items: [
        { name: "Code", subCategory: "GitHub/Python/C++", device: "Laptop" },
        { name: "Academic Papers", subCategory: "LaTeX", device: "Laptop" },
        { name: "Professional Profile", subCategory: "LinkedIn", device: "Laptop" },
        { name: "Knowledge Sharing", subCategory: "Zhihu/Xiaohongshu", device: "Phone" },
        { name: "Emails", subCategory: "Communication", device: "Laptop/Phone" },
      ]
    },
    {
      name: "Visuals",
      items: [
        { name: "Presentation Slides", subCategory: "PowerPoint", device: "Laptop" },
        { name: "Data Visualizations", subCategory: "Python/Matplotlib", device: "Laptop" }
      ]
    }
  ]
};

/**
 * Challenge Section
 */
export const challengeData: Challenge = {
  description: (
    <div className="prose-sm text-stone-800 sm:prose-base lg:prose-lg">
      <p>
        <strong>Challenge: Managing Scattered Digital Knowledge</strong>
      </p>
      <p className="mt-2">
        One significant challenge I face in my content generation workflow (specifically for research and coding) is managing scattered knowledge. I generate a lot of content in the form of code snippets, reading notes, paper summaries, and experimental logs. These are often scattered across different tools: local markdown files, Notion pages, innovative code comments, and physical notebooks.
      </p>
      <p className="mt-2">
        <strong>Difficulty:</strong> It is difficult to synthesize this information when I need to write a paper or revisit a project. Searching across these disparate sources is inefficient, and often I find myself re-learning or re-writing things I have already documented but cannot find. The friction of context switching between these tools disrupts my "flow" state during content generation.
      </p>
    </div>
  )
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/XiangboGaoBarry' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/xiangbo-gao-9ab24417a/' },
  { label: 'X', Icon: FaTwitter, href: 'https://x.com/XiangboGao' },
  { label: 'zhihu', Icon: SiZhihu, href: 'https://www.zhihu.com/people/gao-xiang-bo-35' },
];
