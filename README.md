# Taskify - Modern SaaS Landing Page

A beautiful, modern, and responsive SaaS landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases a fictional task management tool called "Taskify" with a clean design, smooth animations, and modern UI/UX patterns.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with gradients and glassmorphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion and AOS (Animate On Scroll)
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance Optimized**: Lazy loading, optimized images, and fast loading times
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS
- **Icons**: React Icons (Feather Icons)
- **Fonts**: Inter, Poppins (Google Fonts)
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
LandingPageV1/
├── public/
│   └── images/          # Static images folder
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles and Tailwind imports
│   │   ├── layout.tsx   # Root layout with metadata and providers
│   │   └── page.tsx     # Main homepage
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── contexts/
│       └── ThemeContext.tsx  # Dark/Light mode context
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Design Features

### Sections Included:

1. **Navbar** - Sticky navigation with logo, menu items, and CTA button
2. **Hero Section** - Eye-catching headline with gradient background and CTA
3. **Features Section** - Showcase of key product features with icons
4. **How It Works** - Simple 3-step process explanation
5. **Pricing Section** - Three-tier pricing plans with toggle for monthly/annual
6. **Testimonials** - Customer reviews with ratings and photos
7. **FAQ Section** - Accordion-style frequently asked questions
8. **CTA Section** - Final call-to-action before footer
9. **Footer** - Comprehensive footer with links, contact info, and social media

### Design Elements:

- **Gradients**: Beautiful color gradients throughout the design
- **Glassmorphism**: Modern glass-like effects on cards and sections
- **Hover Effects**: Interactive hover animations on buttons and cards
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Animations**: Fade-in and slide-up animations on scroll

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd LandingPageV1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Adding Images

1. Place your images in the `public/images/` folder
2. Reference them in components using `/images/your-image.jpg`
3. For optimal performance, use WebP or AVIF formats

### Modifying Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your custom colors
  }
}
```

### Updating Content

- **Company Name**: Search and replace "Taskify" throughout the components
- **Features**: Modify the features array in `FeaturesSection.tsx`
- **Pricing**: Update pricing plans in `PricingSection.tsx`
- **Testimonials**: Edit testimonials data in `TestimonialsSection.tsx`
- **FAQ**: Modify questions and answers in `FAQSection.tsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `Navbar.tsx` if needed

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The application includes a built-in dark/light mode toggle:

- Automatically detects system preference
- Persists user choice in localStorage
- Smooth transitions between themes
- All components support both modes

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Lazy Loading**: Components load as they enter viewport
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display=swap
- **CSS Optimization**: Tailwind CSS purging unused styles

## 📊 SEO Features

- Meta title and description
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Semantic HTML structure
- Alt tags for images

## 🤝 Contributing

Feel free to customize this landing page for your own projects:

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** - The React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Motion library for React
- **React Icons** - Popular icon library
- **Unsplash** - Beautiful stock photos

---

**Built with ❤️ for modern web development**

For questions or support, please open an issue in the repository.