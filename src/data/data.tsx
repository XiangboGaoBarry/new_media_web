import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import myImage from '../images/myimg.png';
import testimonialImage from '../images/testimonial.webp';
import AutoSortTrashBin from '../images/portfolio/AutoSortTrashBin.png';
import WasteRecognition from '../images/portfolio/WasteRecognition.png';
import TimeManager from '../images/portfolio/TimeManager.png';
import GeometicPoseAffordance from '../images/portfolio/GeometicPoseAffordance.png';
import PQAttackImg from '../images/publications/PQAttack.png';
import GradientLibraLossImg from '../images/publications/Gradient-Libra-Loss.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  PublicationItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Xiangbo Gao',
  description: "Xiangbo Gao's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Publications: 'publications',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  personalSrc: profilepic,
  name: `Xiangbo Gao`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I love to use deep learning to solve real-world problems.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: myImage,
  description: `I am a current senior undergraduate student at the University of California, Irvine. 
  My research focus on deep learning and its applications such as computer vision and autonomous system. 
  I am currently looking for MS/PhD and internship opportunities`,
  aboutItems: [
    {label: 'Location', text: 'Irvine, CA', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'China', Icon: FlagIcon},
    {label: 'Interests', text: 'Skiing, Rock climbing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Irvine', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      // {
      //   name: 'Spanish',
      //   level: 3,
      // },
    ],
  },
  {
    name: 'Research areas',
    skills: [
      {
        name: 'Computer Vision',
        level: 6,
      },
      {
        name: 'Graph Learning',
        level: 4,
      },
      {
        name: 'Reinforcement Learning',
        level: 3,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 4,
      },
      {
        name: 'Java',
        level: 3,
      },
    ],
  },
  {
    name: 'Soft skills',
    skills: [
      {
        name: 'Communication',
        level: 8,
      },
      {
        name: 'Leadership',
        level: 8,
      },
      {
        name: 'Humour',
        level: 0.1,
      },
    ],
  },
];

/**
 * Portfolio section
 */

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Auto Sort Trash Bin',
    description: 'A trash bin that automatic sort four different categories of trash',
    url: 'assets/documents/portfolio/AutoSortTrashBin.pdf',
    image: AutoSortTrashBin,
  },
  {
    title: 'ZotBins Waste Recognition',
    description: 'Waste classification and waste object detection modules for ZotBins',
    url: 'https://github.com/zotbins/Zotbins-Waste-Recognition',
    image: WasteRecognition,
  },
  {
    title: 'Time Manager',
    description: 'A time manager app built with React, Node.js, and MongoDB',
    url: 'https://github.com/XiangboGaoBarry/TimeManager',
    image: TimeManager,
  },
  {
    title: 'Geometic Pose Affordance',
    description: 'Project of UCI Hackathon 2020',
    url: 'https://github.com/XiangboGaoBarry/UCI-Hackathon-GPA/blob/master/democode_GPA_UCIhackthon.ipynb',
    image: GeometicPoseAffordance,
  },
  {
    title: 'PQAttack',
    description: 'Project Repo of "Adversarial Attack with Semantic Pattern"',
    url: 'https://github.com/XiangboGaoBarry/PQAttack',
    image: PQAttackImg,
  },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2018.9 - 2023.3',
    location: 'University of California, Irvine',
    title: 'B.S. in Computer Science | B.S. in Mathematics',
    content: <p>GPA 3.72/4</p>,
  },
  {
    date: '2019.6 - 2019.9',
    location: 'University of California, Berkeley',
    title: 'Summer Session',
    content: <p>GPA 3.566/4</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022.5 - Present',
    location: 'Advanced Integrated Cyber-Physical Systems Lab, University of California, Irvine',
    title: 'Auto-generated graphical model in the autonomous driving system',
    content: (
      <ul>
      <li>-Designed and created a multi-domain autonomous driving dataset for different driving scenarios using CARLA simulator.</li>
      <li>-Designed a probabilistic LSTM structure that encodes states to variational embeddings. Transferred the knowledge from PointNet to encode the unordered lane marks information.</li>
      <li>-Evaluating the model performance and cross-domain transferability by various metrics and comparing them with other motion prediction algorithms (MTP, PGP, Trajectron++, etc.)</li>
      </ul>
    ),
  },
  {
    date: '2022.2 - 2022.6',
    location: 'Intelligent Dynamics Lab, University of California, Irvine',
    title: 'Goal-conditional Reinforcement Learning',
    content: (
      <ul>
      <li>-Reviewed literature on imitation learning and general reinforcement learning.</li>
      <li>-Come up with spring loss which uses the idea of contrastive learning that aligns the
embeddings in linear distance.</li>
      <li>-Visualization by the PCA dimension reduction method shows that the learned embedding
better aligns with the real-world trajectory.</li>
      </ul>
    ),
  },
  {   
  date: '2022.6 - 2022.8',
  location: 'Independent',
  title: 'Multi-modal 3D Object Detection in autonomous driving scenario',
  content: (
    <ul>
    <li>-iterature review of existing general 3D object detection algorithms including camera-based, point-based, voxel-based, and multi-model algorithms.</li>
    <li>--	Run experiments on camera-only nad multi-model 3D object detection algorithms (Pseudo-LiDAR, Lidar Painting, Bev fusion).</li>
    </ul>
  ),
  },
  
  {
    date: '2021.4 - 2022.11',
    location: 'Institute of Computer Vision, Shenzen University, China',
    title: 'Adversarial Attack with Semantic Pattern',
    content: (
      <ul>
      <li>-Proposed a novel Patch Quilting Generative Adversarial Network (PQ-GAN) training strategy
that learned a set of cascaded generators to manipulate image patterns of varying scales
without distortion or discontinuity.</li>
      <li>-Applied the PQ-GAN to adversarial attacks that delivered state-of-the-art attack strength
and robustness with respect to various types of defense algorithms.</li>
      <li>-Published work <a className='italic text-cyan-700 hover:not-italic' href='https://arxiv.org/pdf/2208.06222.pdf'> Scale-free and Task-agnostic Attack: Generating Photo-realistic Adversarial Patterns with Patch Quilting Generator.</a> </li>
      </ul>
    ),
  },
  {
    date: '2021.4 - 2022.11',
    location: 'Institute of Computer Vision, Shenzen University, China',
    title: 'Long-tailed Cervical Cell Detection',
    content: (
      <ul>
      <li>-Assisted to propose a Grad-Libra Loss that leverages the gradients to dynamically
calibrate the hardness of each sample and rebalanced their gradients..</li>
      <li>-Published work <a className='italic text-cyan-700 hover:not-italic' href='https://www.researchgate.net/profile/Xuechen-Li-5/publication/362567778_Sample_hardness_based_gradient_loss_for_long-tailed_cervical_cell_detection/links/632807bc071ea12e36443214/Sample-hardness-based-gradient-loss-for-long-tailed-cervical-cell-detection.pdf'> Sample Hardness Based Gradient Loss for Long-Tailed Cervical Cell Detection.</a> </li>
      </ul>
    ),
  },
  {
    date: '2020.9 - 2022.4',
    location: 'Donald Bren Hall, University of California, Irvine',
    title: <div><a className='text-cyan-700' href='https://zotbins.github.io/'>ZerO</a> Waste Anteaters</div>,
    content: (
      <ul>
      <li>-Led a team of 8 members to explore waste recognition solutions.</li>
      <li>-Designed a computer vision and waste recognition tutorial that stimulate students' interests.</li>
      <li>-Trained light-weight models for waste image classification (Mobilenetv3, ShuffleNet, and
EfficientNet) and waste object detection (Faster-RCNN and YOLOv5); achieved ~0.94
classification accuracy and ~0.76 mean precision error.</li>
      <li>-Deployed the waste recognition models to resource-limited machines (Jetson Nano)</li>
      </ul>
    ),
  }
];


export const employment: TimelineItem[] = [
  {
    date: '2020.6 - 2020.8',
    location: 'Tandll Investment Management Limited, China',
    title: 'Full-stack Software developer',
    content: (
      <p>
        -	Built a quantitative trading support website using Python (Django & React) and MySQL, 
        which supported high-level trading management, 
        model parameters modification, and historical data & behaviors Visualization
      </p>
    )
  }
]

export const competitions: TimelineItem[] = [
  {
    date: '2020.4',
    location: 'University of California, Irvine, CA, USA',
    title: 'UCI 2020 Machine Learning Hackathon',
    content: (
      <p>
        1st place on the <a className='italic text-cyan-700 hover:not-italic' href='https://github.com/XiangboGaoBarry/UCI-Hackathon-GPA/blob/master/democode_GPA_UCIhackthon.ipynb'>subproject</a> of <a className='italic text-cyan-700 hover:not-italic' href='https://arxiv.org/pdf/1905.07718.pdf'>3D Human Pose with Scene Constraints</a>
      </p>
    )
  },
  {
    date: '2020.2',
    location: 'Irvine, CA',
    title: 'Google Hash Code 2020 Algorithms Competition',
    content: (
      <p>
        Result: 2nd place / 13 at UCI | Team name: &epsilon;=.99
      </p>
    )
  },
  {
    date: '2020.6',
    location: 'China',
    title: 'Netease Hackathon Competition',
    content: (
      <p>
        Outstanding Award
      </p>
    )
  }
]


export const onsubmission: PublicationItem[] = [
  {
    title: 'Scale-free and Task-agnostic Attack: Generating Photo-realistic Adversarial Patterns with Patch Quilting Generator',
    imageSrc: PQAttackImg,
    authors: 'Xiangbo Gao, Cheng Luo, Qinliang Lin, Weicheng Xie, Minmin Liu, Linlin Shen, Keerthy Kusumam, Siyang Song',
    conference: 'arXiv:2208.06222',
    paperlink: 'https://arxiv.org/pdf/2208.06222.pdf',
    paperlinksmall: 'assets/documents/publications/PQAttack.pdf',
    githublink: 'https://github.com/XiangboGaoBarry/PQAttack',
    description: 'Traditional L_p norm-restricted image attack algorithms suffer from poor transferability to black box scenarios and poor robustness to defense algorithms. Recent CNN generator-based attack approaches can synthesize unrestricted and semantically meaningful entities to the image, which is shown to be transferable and robust. However, such methods attack images by either synthesizing local adversarial entities, which are only suitable for attacking specific contents or performing global attacks, which are only applicable to a specific image scale. In this paper, we propose a novel Patch Quilting Generative Adversarial Networks (PQ-GAN) to learn the first scale-free CNN generator that can be applied to attack images with arbitrary scales for various computer vision tasks. The principal investigation on transferability of the generated adversarial examples, robustness to defense frameworks, and visual quality assessment show that the proposed PQG-based attack framework outperforms the other nine state-of-the-art adversarial attack approaches when attacking the neural networks trained on two standard evaluation datasets (i.e., ImageNet and CityScapes).' 
  }
];

export const selected: PublicationItem[] = [
  {
    title: 'Sample Hardness Based Gradient Loss for Long-Tailed Cervical Cell Detection',
    imageSrc: GradientLibraLossImg,
    authors: 'Minmin Liu, Xuechen Li, Xiangbo Gao, Junliang Chen, Linlin Shen, Huisi Wu',
    conference: 'Medical Image Computing and Computer Assisted Intervention – MICCAI 2022',
    paperlink: 'https://arxiv.org/pdf/2208.03779.pdf',
    paperlinksmall: 'assets/documents/publications/Gradient-Libra-Loss.pdf',
    githublink: '',
    description: 'Due to the difficulty of cancer samples collection and annotation, cervical cancer datasets usually exhibit a long-tailed data distribution. When training a detector to detect the cancer cells in a WSI (Whole Slice Image) image captured from the TCT (Thinprep Cytology Test) specimen, head categories (e.g. normal cells and inflammatory cells) typically have a much larger number of samples than tail categories (e.g. cancer cells). Most existing state-of-the-art long-tailed learning methods in object detection focus on category distribution statistics to solve the problem in the long-tailed scenario without considering the "hardness" of each sample. To address this problem, in this work we propose a Grad-Libra Loss that leverages the gradients to dynamically calibrate the degree of hardness of each sample for different categories, and re-balance the gradients of positive and negative samples. Our loss can thus help the detector to put more emphasis on those hard samples in both head and tail categories. Extensive experiments on a long-tailed TCT WSI image dataset show that the mainstream detectors, e.g. RepPoints, FCOS, ATSS, YOLOF, etc. trained using our proposed Gradient-Libra Loss, achieved much higher (7.8%) mAP than that trained using cross-entropy classification loss.'
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  // 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'xiangbog@uci.edu',
      href: 'mailto:xiangbog@uci.edu',
    },
    {
      type: ContactType.Location,
      text: 'Irvine, CA',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'XiangboGaoBarry',
      href: 'https://github.com/XiangboGaoBarry',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/XiangboGaoBarry'},
  {label: 'Google Scholar', Icon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?user=dcw41CcAAAAJ&hl=en'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/xiangbo-gao-9ab24417a/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
