import { Technology } from '~/types/portfolio'

/**
 * Technology definitions with categories and styling
 */
export const technologies: Technology[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    color: 'text-blue-700 bg-blue-100',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    color: 'text-gray-800 bg-gray-100',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    color: 'text-cyan-600 bg-cyan-100',
  },
  {
    id: 'sass',
    name: 'Sass',
    category: 'frontend',
    color: 'text-pink-600 bg-pink-100',
  },
  {
    id: 'html',
    name: 'HTML5',
    category: 'frontend',
    color: 'text-orange-600 bg-orange-100',
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'frontend',
    color: 'text-blue-500 bg-blue-100',
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    color: 'text-green-600 bg-green-100',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    color: 'text-blue-600 bg-blue-100',
  },

  // Database
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    color: 'text-green-600 bg-green-100',
  },

  // CMS
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'cms',
    color: 'text-blue-800 bg-blue-100',
  },
  {
    id: 'elementor',
    name: 'Elementor',
    category: 'cms',
    color: 'text-pink-600 bg-pink-100',
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tool',
    color: 'text-orange-600 bg-orange-100',
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tool',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'tool',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    id: 'eslint',
    name: 'ESLint',
    category: 'tool',
    color: 'text-purple-600 bg-purple-100',
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'design',
    color: 'text-pink-600 bg-pink-100',
  },
]

// Helper function to get technology by ID
export const getTechnologyById = (id: string): Technology | undefined => {
  return technologies.find(tech => tech.id === id)
}

// Helper function to get technologies by IDs
export const getTechnologiesByIds = (ids: string[]): Technology[] => {
  return ids.map(id => getTechnologyById(id)).filter(Boolean) as Technology[]
}
