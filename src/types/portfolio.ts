/**
 * Portfolio Project Types
 * TypeScript interfaces for portfolio projects and related data
 */

// Technology/Tool interface
export interface Technology {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'design' | 'cms'
  color: string // Tailwind color class
  icon?: string // Icon name or component
}

// Project category
export type ProjectCategory = 
  | 'web-app' 
  | 'website' 
  | 'e-commerce' 
  | 'dashboard' 
  | 'mobile' 
  | 'wordpress' 
  | 'landing-page'

// Project status
export type ProjectStatus = 'completed' | 'in-progress' | 'concept'

// Project image
export interface ProjectImage {
  id: string
  url: string
  alt: string
  caption?: string
  type: 'hero' | 'screenshot' | 'mockup' | 'detail'
}

// Project link
export interface ProjectLink {
  type: 'live' | 'github' | 'case-study' | 'design'
  url: string
  label: string
}

// Project metrics/results
export interface ProjectMetrics {
  label: string
  value: string
  description?: string
}

// Main project interface
export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  
  // Dates
  startDate: string
  endDate?: string
  
  // Visual assets
  heroImage: string
  images: ProjectImage[]
  
  // Technical details
  technologies: Technology[]
  role: string[]
  teamSize?: number
  
  // Links
  links: ProjectLink[]
  
  // Case study details
  challenge: string
  solution: string
  process?: string[]
  results?: ProjectMetrics[]
  
  // SEO and metadata
  tags: string[]
  color?: string // Theme color for the project
}

// Filter options
export interface ProjectFilters {
  category?: ProjectCategory[]
  technology?: string[]
  status?: ProjectStatus[]
  featured?: boolean
}

// Sort options
export type ProjectSortBy = 'date' | 'title' | 'category' | 'featured'
export type ProjectSortOrder = 'asc' | 'desc'

export interface ProjectSort {
  by: ProjectSortBy
  order: ProjectSortOrder
}

// Portfolio statistics
export interface PortfolioStats {
  totalProjects: number
  completedProjects: number
  technologiesUsed: number
  yearsExperience: number
}

// Project collection with metadata
export interface ProjectCollection {
  projects: Project[]
  stats: PortfolioStats
  categories: { value: ProjectCategory; label: string; count: number }[]
  technologies: Technology[]
}
