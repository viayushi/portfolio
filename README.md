# Portfolio Website

A stunning, modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features a dark theme with beautiful animations and a responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: `components/Hero.tsx` - Update name, title, and description
- **About Section**: `components/About.tsx` - Update personal info, education, and story
- **Skills Section**: `components/Skills.tsx` - Update skills and proficiency levels
- **Experience Section**: `components/Experience.tsx` - Update work experience
- **Projects Section**: `components/Projects.tsx` - Update project details
- **Contact Section**: `components/Contact.tsx` - Update contact information

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Animations**: Adjust animation parameters in component files
- **Layout**: Update spacing and layout in component files

### Social Links
Update social media links in:
- `components/Navbar.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Experience.tsx       # Experience section
│   ├── Projects.tsx         # Projects section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## 🎯 Key Sections

### Hero Section
- Animated introduction with your name and title
- Call-to-action buttons
- Statistics showcase
- Floating background elements

### About Section
- Personal information with icons
- Educational background
- Professional story
- Key skills preview

### Skills Section
- Categorized skills with progress bars
- Additional skills grid


### Experience Section
- Timeline layout for work experience
- Detailed role descriptions
- Technologies used
- Key achievements

### Projects Section
- Filterable project grid
- Interactive project cards
- Technology tags
- Live and GitHub links

### Contact Section
- Contact form with validation
- Contact information
- Social media links
- Availability status

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Performance Optimization
- Images are optimized automatically with Next.js
- CSS is purged in production
- Animations are optimized for performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with Next.js and Framer Motion
- Icons from Lucide React
- Styling with Tailwind CSS

---

**Happy Coding! 🚀** 