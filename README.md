# Modern Portfolio Website

A sleek and responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a dark/light mode toggle, smooth animations, and a clean, modern design.

![Portfolio Preview](https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg)

## Features

- 🌓 Dark/Light mode with system preference detection
- 🎨 Smooth animations using Framer Motion
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js
- 🎯 SEO optimized
- 📝 Contact form with validation
- 🔍 Active section highlighting
- 🖼️ Project showcase with filtering
- 🚀 Smooth scrolling navigation

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Form validation
- [Lucide React](https://lucide.dev/) - Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── layout/        # Layout components
│   ├── sections/      # Page sections
│   └── ui/            # UI components
├── lib/               # Utility functions
└── public/            # Static assets
```

## Customization

1. Update personal information in `app/layout.tsx`
2. Modify project data in `components/sections/projects.tsx`
3. Edit skills in `components/sections/skills.tsx`
4. Customize theme colors in `app/globals.css`

## Deployment

This project is configured for static exports and can be deployed to any static hosting platform:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Contributing

Feel free to submit issues and enhancement requests!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)