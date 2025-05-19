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
    tags: [
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Rapid API',
    ],
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
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Rapid API'],
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
      'Rapid API',
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
