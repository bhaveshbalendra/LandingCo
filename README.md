# LandingCo 🚀

A modern, high-performance landing page platform built with React, TypeScript, and cutting-edge web technologies. Create stunning, conversion-optimized landing pages with ease.

![LandingCo Preview](https://picsum.photos/id/237/1200/600)

## ✨ Features

- **🎨 Beautiful UI Components** - Over 100+ pre-built, conversion-optimized components
- **⚡ Lightning Fast** - Optimized for speed with lazy loading and performance best practices
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- **🎯 Conversion Focused** - Built-in analytics and optimization features
- **🔧 Easy Customization** - Drag-and-drop editor with intuitive controls
- **👥 Team Collaboration** - Real-time collaboration features
- **🛡️ Secure by Default** - Enterprise-grade security and privacy protection
- **🎭 Smooth Animations** - Beautiful animations and transitions powered by Framer Motion
- **🌙 Modern Design System** - Built with Tailwind CSS and shadcn/ui components

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)
- **State Management:** Redux Toolkit
- **Routing:** React Router Dom 7
- **Code Quality:** ESLint + TypeScript ESLint

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd LandingCo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 📜 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   └── ...
├── lib/                # Utility functions and configurations
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Key Sections

- **Hero Section** - Eye-catching introduction with call-to-action
- **Features Section** - Showcase of platform capabilities
- **Stats Section** - Key metrics and achievements
- **Timeline Section** - Company journey and milestones
- **Testimonials** - Customer reviews and social proof
- **Contact Section** - Contact form and information
- **Parallax Effects** - Engaging visual experiences

## 🔧 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design system by modifying:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and CSS variables

### Components

All UI components are built with shadcn/ui and can be customized in the `src/components/ui/` directory.

### Content

Update content in the respective component files:

- Hero content: `src/components/HeroSection.tsx`
- Features: `src/components/FeaturesSection.tsx`
- And so on...

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms

- **Vercel** - Zero-config deployment with automatic previews
- **Netlify** - Continuous deployment with form handling
- **GitHub Pages** - Free hosting for open-source projects
- **AWS S3 + CloudFront** - Scalable cloud hosting

## 🧪 Performance Features

- **Code Splitting** - Automatic code splitting with Vite
- **Lazy Loading** - Images and components load on demand
- **Tree Shaking** - Unused code is automatically removed
- **Asset Optimization** - Images and assets are optimized
- **Modern Build** - ES modules for modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

## 📞 Support

If you have any questions or need help getting started, please:

- Open an issue on GitHub
- Check out our documentation
- Join our community discussions

---

**Made with ❤️ by the LandingCo team**
