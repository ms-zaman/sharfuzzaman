import { Project, ProjectFilters, ProjectSort, ProjectCategory } from '~/types/portfolio'

/**
 * Utility functions for portfolio data manipulation
 */

// Filter projects based on criteria
export function filterProjects(projects: Project[], filters: ProjectFilters): Project[] {
  return projects.filter(project => {
    // Filter by category
    if (filters.category && filters.category.length > 0) {
      if (!filters.category.includes(project.category)) {
        return false
      }
    }

    // Filter by technology
    if (filters.technology && filters.technology.length > 0) {
      const projectTechIds = project.technologies.map(tech => tech.id)
      const hasMatchingTech = filters.technology.some(techId => 
        projectTechIds.includes(techId)
      )
      if (!hasMatchingTech) {
        return false
      }
    }

    // Filter by status
    if (filters.status && filters.status.length > 0) {
      if (!filters.status.includes(project.status)) {
        return false
      }
    }

    // Filter by featured
    if (filters.featured !== undefined) {
      if (project.featured !== filters.featured) {
        return false
      }
    }

    return true
  })
}

// Sort projects
export function sortProjects(projects: Project[], sort: ProjectSort): Project[] {
  const sorted = [...projects].sort((a, b) => {
    let comparison = 0

    switch (sort.by) {
      case 'date':
        const dateA = new Date(a.startDate).getTime()
        const dateB = new Date(b.startDate).getTime()
        comparison = dateB - dateA // Default to newest first
        break

      case 'title':
        comparison = a.title.localeCompare(b.title)
        break

      case 'category':
        comparison = a.category.localeCompare(b.category)
        break

      case 'featured':
        comparison = (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        break

      default:
        return 0
    }

    return sort.order === 'desc' ? comparison : -comparison
  })

  return sorted
}

// Get featured projects
export function getFeaturedProjects(projects: Project[], limit?: number): Project[] {
  const featured = projects.filter(project => project.featured)
  return limit ? featured.slice(0, limit) : featured
}

// Get projects by category
export function getProjectsByCategory(projects: Project[], category: ProjectCategory): Project[] {
  return projects.filter(project => project.category === category)
}

// Get related projects (same category or shared technologies)
export function getRelatedProjects(
  projects: Project[], 
  currentProject: Project, 
  limit: number = 3
): Project[] {
  const related = projects
    .filter(project => project.id !== currentProject.id)
    .map(project => {
      let score = 0
      
      // Same category gets higher score
      if (project.category === currentProject.category) {
        score += 3
      }
      
      // Shared technologies
      const currentTechIds = currentProject.technologies.map(tech => tech.id)
      const projectTechIds = project.technologies.map(tech => tech.id)
      const sharedTechs = currentTechIds.filter(techId => projectTechIds.includes(techId))
      score += sharedTechs.length
      
      return { project, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.project)

  return related
}

// Search projects by title, description, or tags
export function searchProjects(projects: Project[], query: string): Project[] {
  const lowercaseQuery = query.toLowerCase()
  
  return projects.filter(project => {
    const searchableText = [
      project.title,
      project.description,
      project.longDescription,
      ...project.tags,
      ...project.technologies.map(tech => tech.name)
    ].join(' ').toLowerCase()
    
    return searchableText.includes(lowercaseQuery)
  })
}

// Get unique technologies from projects
export function getUniqueTechnologies(projects: Project[]) {
  const techMap = new Map()
  
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!techMap.has(tech.id)) {
        techMap.set(tech.id, { ...tech, count: 0 })
      }
      techMap.get(tech.id).count++
    })
  })
  
  return Array.from(techMap.values()).sort((a, b) => b.count - a.count)
}

// Get project by slug
export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

// Calculate project duration in months
export function getProjectDuration(project: Project): number {
  const start = new Date(project.startDate)
  const end = project.endDate ? new Date(project.endDate) : new Date()
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth())
  
  return Math.max(1, months) // Minimum 1 month
}

// Format project date range
export function formatProjectDateRange(project: Project): string {
  const start = new Date(project.startDate)
  const startFormatted = start.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  })
  
  if (!project.endDate) {
    return `${startFormatted} - Present`
  }
  
  const end = new Date(project.endDate)
  const endFormatted = end.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  })
  
  return `${startFormatted} - ${endFormatted}`
}

// Get project status color
export function getProjectStatusColor(status: Project['status']): string {
  switch (status) {
    case 'completed':
      return 'text-green-600 bg-green-100'
    case 'in-progress':
      return 'text-blue-600 bg-blue-100'
    case 'concept':
      return 'text-gray-600 bg-gray-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

// Get category display name
export function getCategoryDisplayName(category: ProjectCategory): string {
  const categoryNames: Record<ProjectCategory, string> = {
    'web-app': 'Web Application',
    'website': 'Website',
    'e-commerce': 'E-Commerce',
    'dashboard': 'Dashboard',
    'mobile': 'Mobile App',
    'wordpress': 'WordPress',
    'landing-page': 'Landing Page'
  }
  
  return categoryNames[category] || category
}
