import { Project, ProjectCollection, PortfolioStats } from '~/types/portfolio'
import { getTechnologiesByIds } from './technologies'

/**
 * Mock portfolio projects data
 */
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform Redesign',
    slug: 'ecommerce-platform-redesign',
    description: 'Complete frontend overhaul of an existing e-commerce platform, focusing on user experience and conversion optimization.',
    longDescription: 'Led the complete redesign and frontend development of a major e-commerce platform serving over 100,000 monthly users. The project involved modernizing the tech stack, improving performance, and creating a more intuitive shopping experience.',
    category: 'e-commerce',
    status: 'completed',
    featured: true,
    startDate: '2023-08-01',
    endDate: '2023-12-15',
    heroImage: '/images/projects/ecommerce-hero.jpg',
    images: [
      {
        id: 'ecom-1',
        url: '/images/projects/ecommerce-home.jpg',
        alt: 'E-commerce homepage redesign',
        type: 'screenshot',
        caption: 'New homepage with improved navigation and product discovery'
      },
      {
        id: 'ecom-2',
        url: '/images/projects/ecommerce-product.jpg',
        alt: 'Product page design',
        type: 'screenshot',
        caption: 'Enhanced product pages with better imagery and information hierarchy'
      },
      {
        id: 'ecom-3',
        url: '/images/projects/ecommerce-checkout.jpg',
        alt: 'Streamlined checkout process',
        type: 'screenshot',
        caption: 'Simplified checkout flow that reduced cart abandonment by 35%'
      }
    ],
    technologies: getTechnologiesByIds(['react', 'typescript', 'tailwind', 'nextjs', 'nodejs']),
    role: ['Frontend Developer', 'UI Implementation', 'Performance Optimization'],
    teamSize: 5,
    links: [
      {
        type: 'live',
        url: 'https://example-ecommerce.com',
        label: 'View Live Site'
      },
      {
        type: 'case-study',
        url: '/projects/ecommerce-platform-redesign',
        label: 'Read Case Study'
      }
    ],
    challenge: 'The existing platform had a high bounce rate (65%) and poor mobile experience, leading to declining sales and customer satisfaction.',
    solution: 'Implemented a mobile-first redesign with improved navigation, faster loading times, and a streamlined checkout process using modern React patterns and performance optimization techniques.',
    process: [
      'User research and analytics analysis',
      'Wireframing and prototyping',
      'Component library development',
      'Progressive implementation with A/B testing',
      'Performance optimization and monitoring'
    ],
    results: [
      {
        label: 'Conversion Rate',
        value: '+40%',
        description: 'Increase in overall conversion rate'
      },
      {
        label: 'Mobile Performance',
        value: '+60%',
        description: 'Improvement in mobile page load speed'
      },
      {
        label: 'User Satisfaction',
        value: '4.8/5',
        description: 'Average user rating post-launch'
      }
    ],
    tags: ['E-commerce', 'React', 'Performance', 'UX Design', 'Mobile-First'],
    color: 'blue'
  },
  
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard Interface',
    slug: 'saas-dashboard-interface',
    description: 'Built a comprehensive dashboard interface for a B2B SaaS platform with complex data visualization and real-time updates.',
    longDescription: 'Developed a feature-rich dashboard for a project management SaaS platform, handling complex data visualization, real-time collaboration features, and multi-tenant architecture.',
    category: 'dashboard',
    status: 'completed',
    featured: true,
    startDate: '2023-03-01',
    endDate: '2023-07-30',
    heroImage: '/images/projects/saas-hero.jpg',
    images: [
      {
        id: 'saas-1',
        url: '/images/projects/saas-overview.jpg',
        alt: 'Dashboard overview',
        type: 'screenshot',
        caption: 'Main dashboard with project overview and analytics'
      },
      {
        id: 'saas-2',
        url: '/images/projects/saas-charts.jpg',
        alt: 'Data visualization',
        type: 'screenshot',
        caption: 'Interactive charts and data visualization components'
      }
    ],
    technologies: getTechnologiesByIds(['react', 'typescript', 'tailwind', 'nodejs', 'mongodb']),
    role: ['Full-stack Developer', 'UI/UX Implementation', 'Data Visualization'],
    teamSize: 3,
    links: [
      {
        type: 'live',
        url: 'https://example-saas.com',
        label: 'View Demo'
      },
      {
        type: 'github',
        url: 'https://github.com/example/saas-dashboard',
        label: 'View Code'
      }
    ],
    challenge: 'Creating an intuitive interface for complex project data while maintaining real-time performance and supporting multiple user roles.',
    solution: 'Built a modular component system with efficient state management, implemented WebSocket connections for real-time updates, and created role-based access controls.',
    process: [
      'Requirements gathering with stakeholders',
      'Information architecture design',
      'Component library development',
      'Real-time feature implementation',
      'User testing and iteration'
    ],
    results: [
      {
        label: 'User Onboarding',
        value: '-50%',
        description: 'Reduction in time to first value'
      },
      {
        label: 'Data Processing',
        value: '10x',
        description: 'Faster data visualization rendering'
      }
    ],
    tags: ['SaaS', 'Dashboard', 'Real-time', 'Data Visualization', 'TypeScript'],
    color: 'green'
  },

  {
    id: 'wordpress-agency-site',
    title: 'Creative Agency WordPress Site',
    slug: 'wordpress-agency-site',
    description: 'Developed a custom WordPress theme with Elementor integration for a creative agency, focusing on performance and ease of content management.',
    longDescription: 'Created a high-performance WordPress website for a creative agency, featuring custom post types, advanced animations, and a flexible content management system.',
    category: 'wordpress',
    status: 'completed',
    featured: false,
    startDate: '2023-01-15',
    endDate: '2023-03-30',
    heroImage: '/images/projects/wordpress-hero.jpg',
    images: [
      {
        id: 'wp-1',
        url: '/images/projects/wordpress-home.jpg',
        alt: 'Agency homepage',
        type: 'screenshot',
        caption: 'Creative homepage with custom animations'
      }
    ],
    technologies: getTechnologiesByIds(['wordpress', 'php', 'javascript', 'sass', 'elementor']),
    role: ['WordPress Developer', 'Theme Development', 'Performance Optimization'],
    teamSize: 2,
    links: [
      {
        type: 'live',
        url: 'https://example-agency.com',
        label: 'View Live Site'
      }
    ],
    challenge: 'Creating a flexible, fast-loading WordPress site that doesn\'t look like a typical WordPress template.',
    solution: 'Developed a custom theme with modular components, optimized for performance with lazy loading and efficient asset management.',
    results: [
      {
        label: 'PageSpeed Score',
        value: '95+',
        description: 'Google PageSpeed Insights score'
      },
      {
        label: 'Load Time',
        value: '-70%',
        description: 'Improvement in page load times'
      }
    ],
    tags: ['WordPress', 'Custom Theme', 'Performance', 'Elementor', 'PHP'],
    color: 'purple'
  },

  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    slug: 'portfolio-website',
    description: 'Modern portfolio website built with TanStack Start, featuring a comprehensive design system and optimized performance.',
    longDescription: 'Built this very portfolio website using cutting-edge technologies, implementing a full design system and showcasing modern frontend development practices.',
    category: 'website',
    status: 'completed',
    featured: true,
    startDate: '2024-01-01',
    endDate: '2024-02-15',
    heroImage: '/images/projects/portfolio-hero.jpg',
    images: [
      {
        id: 'port-1',
        url: '/images/projects/portfolio-home.jpg',
        alt: 'Portfolio homepage',
        type: 'screenshot',
        caption: 'Clean, modern homepage design'
      }
    ],
    technologies: getTechnologiesByIds(['react', 'typescript', 'tailwind', 'vite']),
    role: ['Frontend Developer', 'UI/UX Design', 'Design System'],
    teamSize: 1,
    links: [
      {
        type: 'live',
        url: 'https://sharfuzzaman.dev',
        label: 'View Live Site'
      },
      {
        type: 'github',
        url: 'https://github.com/sharfuzzaman/portfolio',
        label: 'View Source'
      }
    ],
    challenge: 'Creating a portfolio that showcases technical skills while maintaining excellent user experience and performance.',
    solution: 'Implemented a comprehensive design system with reusable components, optimized for performance and accessibility.',
    results: [
      {
        label: 'Performance',
        value: '100',
        description: 'Lighthouse performance score'
      },
      {
        label: 'Accessibility',
        value: '100',
        description: 'Lighthouse accessibility score'
      }
    ],
    tags: ['Portfolio', 'Design System', 'Performance', 'TanStack', 'Modern React'],
    color: 'indigo'
  }
]

// Portfolio statistics
export const portfolioStats: PortfolioStats = {
  totalProjects: projects.length,
  completedProjects: projects.filter(p => p.status === 'completed').length,
  technologiesUsed: 15,
  yearsExperience: 3
}

// Project categories with counts
export const projectCategories = [
  { value: 'web-app' as const, label: 'Web Applications', count: 0 },
  { value: 'website' as const, label: 'Websites', count: 1 },
  { value: 'e-commerce' as const, label: 'E-Commerce', count: 1 },
  { value: 'dashboard' as const, label: 'Dashboards', count: 1 },
  { value: 'wordpress' as const, label: 'WordPress', count: 1 },
  { value: 'landing-page' as const, label: 'Landing Pages', count: 0 },
  { value: 'mobile' as const, label: 'Mobile Apps', count: 0 }
]

// Complete project collection
export const projectCollection: ProjectCollection = {
  projects,
  stats: portfolioStats,
  categories: projectCategories,
  technologies: []
}
