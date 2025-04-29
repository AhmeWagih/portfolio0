export const words = ['Front_End Developer'];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
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

export const categories = ["All", "Frontend", "Full Stack", "Mobile", "Backend"];

export const projects = [
  {
    id: 1,
    title: 'Earth Simulator',
    description:
      "Created an interactive platform using NASA data to explore Earth's systems, featuring quizzes, AI-generated videos, and a personalized footprint calculator. The platform provides real-time feedback on sustainable choices, helping users understand and reduce their environmental impact.",
    image: '/projects/earth.png',
    tags: [
      'Next',
      'React',
      'Three.js',
      'GLSX',
      'LIL-GUI',
      'Tailwind CSS',
      'Framer Motion',
    ],
    demoUrl: 'https://nasa-space-app-mauve.vercel.app',
    githubUrl: 'https://github.com/AhmeWagih/earth_simulator',
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description:
      ' Developed a YouTube clone application using React and Tailwind CSS, integrating it with YouTube’s API to fetch and display videos, enabling users to search and watch videos seamlessly.',
    image: '/projects/youtubeclone.png',
    tags: ['React', 'Tailwind CSS', 'Rapid API'],
    demoUrl: 'https://youtube-clone-eight-nu.vercel.app/',
    githubUrl: 'https://github.com/AhmeWagih/youtube-clone',
    category: "Frontend",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio website showcasing projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://ahmed-wagih-one.vercel.app/",
    githubUrl: "https://github.com/AhmeWagih/my_portfolio",
    category: "Frontend",
  },
];