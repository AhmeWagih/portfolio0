import { Code2, Trophy } from "lucide-react";

export const words = ['Full Stack Developer'];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'NextAuth.js',
    'Redux.js',
    'React Query',
    'Tailwind CSS',
    'MUI',
    'Bootstrap',
    'shadcn/ui',
    'Framer Motion',
  ],
  Backend: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST API', 'MongoDB'],
  'Tools & Others': [
    'Git',
    'GitHub',
    'Docker',
    'Figma',
    'Notion',
    'Postman',
    'Vercel',
  ],
};

export const categories = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'Mobile',
];

export const projects = [
  {
    id: 1,
    title: 'IdeaFlow',
    description:
      'IdeaFlow is a mindmap generator that allows users to create and share mindmaps online.',
    image: '/projects/ideaflow.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Generative AI'],
    demoUrl: 'https://ideaflow-client.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/ideaflow',
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'Earth Simulator',
    description:
      "Created an interactive platform using NASA data to explore Earth's systems, featuring quizzes, AI-generated videos, and a personalized footprint calculator. The platform provides real-time feedback on sustainable choices, helping users understand and reduce their environmental impact.",
    image: '/projects/earth.png',
    tags: [
      'Next.js',
      'JavaScript',
      'Three.js',
      'GLSX',
      'LIL-GUI',
      'Tailwind CSS',
      'Framer Motion',
    ],
    demoUrl: 'https://nasa-space-app-mauve.vercel.app',
    githubUrl: 'https://github.com/AhmeWagih/earth_simulator',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Youtube Clone',
    description:
      ' Developed a YouTube clone application using React and Tailwind CSS, integrating it with YouTube’s API to fetch and display videos, enabling users to search and watch videos seamlessly.',
    image: '/projects/youtubeclone.png',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Rapid API'],
    demoUrl: 'https://youtube-clone-eight-nu.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/youtube-clone',
    category: 'Frontend',
  },
  // {
  //   id: 4,
  //   title: 'Portfolio Website',
  //   description:
  //     'A sleek, responsive portfolio website showcasing projects and skills.',
  //   image: '/projects/portfolio.png',
  //   tags: ['Next.js','TypeScript', 'Tailwind CSS', 'Framer Motion'],
  //   demoUrl: 'https://ahmed-wagih-one.vercel.app/',
  //   githubUrl: 'https://github.com/AhmeWagih/my_portfolio',
  //   category: 'Frontend',
  // },
  {
    id: 4,
    title: 'CarHub',
    description:
      'Developed a fully responsive car information website using Next.js. CarHub allows users to search and explore car specifications by make, model, or year, offering a sleek and intuitive UI. Key features include real-time search, detailed specs like MPG and engine type, and mobile-first responsive design.',
    image: '/projects/carhub.png',
    tags: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Rapid API'],
    demoUrl: 'https://carshub-ruddy.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/carshub',
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Article Summarizer',
    description:
      'Developed an AI-powered article summarizer using React and Vite, which extracts concise summaries from article URLs. The tool features a responsive UI with Tailwind CSS and delivers quick, accurate results.',
    image: '/projects/ai-sum.png',
    tags: ['React.js', 'Vite', 'JavaScript', 'Tailwind CSS', 'Rapid API'],
    demoUrl: 'https://article-summarizer-liart-eight.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/article_summarizer',
    category: 'Frontend',
  },
  {
    id: 6,
    title: 'Promptopia',
    description:
      'Built a modern prompt-sharing platform using Next.js and MongoDB featuring glassmorphism-inspired design. Users can create, edit, and delete prompts, explore community profiles, search by tags, and copy prompts to the clipboard. The platform is fully responsive, with a smooth user experience across all devices.',
    image: '/projects/posts.png',
    tags: [
      'Next.js',
      'JavaScript',
      'NextAuth.js',
      'MongoDB',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    demoUrl: 'https://promptopia-rouge-kappa.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/promptopia',
    category: 'Full Stack',
  },
  {
    id: 7,
    title: 'Nike Website',
    description: ' Simple website application using React and Tailwind CSS.',
    image: '/projects/nike.png',
    demoUrl: 'https://app-landing-page-using-tailwind.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/AppLandingPage_UsingTailwind',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS'],
    category: 'Frontend',
  },
  {
    id: 8,
    title: 'Movie App',
    description:
      'Developed a simple movie application using React and Tailwind CSS.',
    image: '/projects/movieapp.png',
    demoUrl: 'https://movie-app-one-peach.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/movie-app',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS'],
    category: 'Frontend',
  },
  {
    id: 9,
    title: 'JavaScript E-Commerce',
    description:
      'Built a dynamic e-commerce application using React and Redux, allowing users to effortlessly browse, select, and purchase items conveniently. The platform features a user-friendly interface and a robust state management system, enhancing the overall shopping experience.',
    image: '/projects/ecommerce.png',
    demoUrl: 'https://e-commerce-app-inky-gamma.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/e-commerce-js',
    tags: ['React.js', 'JavaScript', 'Redux.js', 'Bootstrap'],
    category: 'Frontend',
  },
  {
    id: 10,
    title: 'TypeScript E-Commerce',
    description:
      'Built an e-commerce application using React and Redux, allowing users to browse, select, and purchase items conveniently. The platform includes Wishlist and Cart pages, enabling users to add items to their wishlist and cart seamlessly while enjoying a responsive design with Tailwind CSS.',
    image: '/projects/ecom-ts.png',
    demoUrl: '',
    githubUrl: 'https://github.com/AhmeWagih/e-commerce-ts',
    tags: ['React.js', 'TypeScript', 'Redux.js', 'Json Server', 'Bootstrap'],
    category: 'Frontend',
  },
];

interface Experience {
  title: string
  company: string
  logo: string
  location: string
  duration: string
  type: "current" | "past"
  achievements: string[]
  skills: string[]
  metrics?: {
    icon: string
    label: string
    value: string
  }[]
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "KimCam",
    logo: "/experience/kimkam.svg",
    location: "Zagazig, Sharkia, Egypt • Remote",
    duration: "Jul 2025 - Sep 2025",
    type: "past",
    achievements: [
      "Developed and optimized the Teacher Dashboard to streamline educational content management and enhance user experience",
      "Designed and implemented features for course and content management",
      "Built tools for student tracking and performance monitoring",
      "Developed functionality for video uploads and creating an educational media library",
      "Managed account settings and teacher controls for better usability",
      "Ensured a scalable and responsive UI to support both teachers and learners",
      "Contributed to delivering a modern, user-friendly platform for educational content delivery and teacher-student interaction",
    ],
    skills: ["React", "Vite", "JavaScript", "Redux.js", "Bunny.net", "Tailwind CSS", "shadcn/ui"],
    metrics: [
      { icon: "Users", label: "Duration", value: "3 mos" },
      { icon: "TrendingUp", label: "Type", value: "Full-time" },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Qumra",
    logo: "/experience/qumra.png",
    location: "Alexandria, Egypt • Remote",
    duration: "Dec 2024 - Jun 2025",
    type: "past",
    achievements: [
      "Developed the company's main landing page, boosting user engagement by 40%",
      "Built complex dashboards with interactive components and data visualizations",
      "Created themeable UI kits with 'qumra-ui' and Nunjucks for scalable client branding",
      "Boosted performance by 35% through lazy loading and memoization",
      "Reduced bundle size by 28% via code splitting, image optimization, and dependency cleanup",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Nunjucks", "GraphQL"],
    metrics: [
      // { icon: "TrendingUp", label: "Engagement", value: "+40%" },
      // { icon: "Award", label: "Performance", value: "+35%" },
      { icon: "Users", label: "Duration", value: "6 mos" },
      { icon: "TrendingUp", label: "Type", value: "Part-time" },
    ],
  },
  {
    title: "React Web Developer",
    company: "Digital Egypt Pioneers Initiative - DEPI",
    logo: "/experience/depi.jpg",
    location: "Zagazig, Sharkia, Egypt • Hybrid",
    duration: "May 2024 - Nov 2024",
    type: "past",
    achievements: [
      "Completed a 6-month internship focused on practical React development",
      "Collaborated on real-world web applications in a fast-paced, team-oriented environment",
      "Improved understanding of front-end architecture and scalable state management",
      "Gained hands-on experience with modern React patterns and best practices",
    ],
    skills: [
      "React",
      "JavaScript",
      "Redux.js",
      "Bootstrap",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Docker",
      "Next.js",
      "Postman"
    ],
    metrics: [
      { icon: "Calendar", label: "Duration", value: "6 mos" },
      { icon: "Users", label: "Type", value: "Internship" },
    ],
  },
]

export const achievements = [
  {
    title: 'NASA Space Apps Cairo',
    subtitle: 'Certificate',
    link: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/skybound',
    grade: 'Global Nominee',
    date: 'October 2024',
    organization: 'Innovation University',
    icon: Trophy,
    accomplishments: [
      'Secured a place in the top 10 among 500+ competing teams by developing an interactive platform that achieved 95% positive user feedback.',
      'Created a solution that earned recognition from NASA judges for innovative use of satellite data integration.',
      'Developed a web platform that reduced environmental education complexity by 40%, making climate science accessible to non-technical users.',
    ],
    color:
      'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
];

export const activities = [
  {
    title: 'Competitive Programmer',
    platform: 'Codeforces',
    category: 'Problem Solving',
    status: 'Present',
    icon: Code2,
    achievements: [
      'Solved 200+ algorithmic problems on Codeforces, mastered 5 core data structure implementations and 12 different algorithmic techniques including dynamic programming, graph algorithms, and greedy approaches.',
      'Participated in 10+ competitive programming contests, consistently ranking in the top 35% of participants.',
    ],
    skills: [
      'Dynamic Programming',
      'Graph Algorithms',
      'Greedy Approaches',
      'Data Structures',
    ],
    stats: [
      { label: 'Problems Solved', value: '200+' },
      { label: 'Contest Participation', value: '10+' },
      { label: 'Top Ranking', value: '35%' },
    ],
  },
];