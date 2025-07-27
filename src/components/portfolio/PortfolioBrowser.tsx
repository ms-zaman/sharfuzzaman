import { forwardRef, useState, useMemo } from 'react'
import { cn } from '~/utils/cn'
import { Project, ProjectFilters, ProjectSort, Technology } from '~/types/portfolio'
import { filterProjects, sortProjects, searchProjects, getUniqueTechnologies } from '~/utils/portfolio'
import { Button } from '~/components/ui'
import { ProjectGrid } from './ProjectGrid'
import { ProjectFilters as ProjectFiltersComponent } from './ProjectFilters'
import { ProjectSearch } from './ProjectSearch'
import { ProjectSort as ProjectSortComponent } from './ProjectSort'

interface PortfolioBrowserProps {
  projects: Project[]
  initialLayout?: 'grid' | 'list' | 'compact'
  showFilters?: boolean
  showSearch?: boolean
  showSort?: boolean
  showLayoutToggle?: boolean
  className?: string
}

export const PortfolioBrowser = forwardRef<HTMLDivElement, PortfolioBrowserProps>(
  ({ 
    projects,
    initialLayout = 'grid',
    showFilters = true,
    showSearch = true,
    showSort = true,
    showLayoutToggle = true,
    className,
    ...props 
  }, ref) => {
    // State
    const [layout, setLayout] = useState<'grid' | 'list' | 'compact'>(initialLayout)
    const [filters, setFilters] = useState<ProjectFilters>({})
    const [searchQuery, setSearchQuery] = useState('')
    const [sort, setSort] = useState<ProjectSort>({ by: 'date', order: 'desc' })

    // Derived data
    const technologies = useMemo(() => getUniqueTechnologies(projects), [projects])
    
    const categories = useMemo(() => {
      const categoryMap = new Map()
      projects.forEach(project => {
        const current = categoryMap.get(project.category) || 0
        categoryMap.set(project.category, current + 1)
      })
      
      return [
        { value: 'web-app' as const, label: 'Web Applications', count: categoryMap.get('web-app') || 0 },
        { value: 'website' as const, label: 'Websites', count: categoryMap.get('website') || 0 },
        { value: 'e-commerce' as const, label: 'E-Commerce', count: categoryMap.get('e-commerce') || 0 },
        { value: 'dashboard' as const, label: 'Dashboards', count: categoryMap.get('dashboard') || 0 },
        { value: 'wordpress' as const, label: 'WordPress', count: categoryMap.get('wordpress') || 0 },
        { value: 'landing-page' as const, label: 'Landing Pages', count: categoryMap.get('landing-page') || 0 },
        { value: 'mobile' as const, label: 'Mobile Apps', count: categoryMap.get('mobile') || 0 }
      ]
    }, [projects])

    // Filtered and sorted projects
    const processedProjects = useMemo(() => {
      let result = projects

      // Apply search
      if (searchQuery.trim()) {
        result = searchProjects(result, searchQuery)
      }

      // Apply filters
      result = filterProjects(result, filters)

      // Apply sorting
      result = sortProjects(result, sort)

      return result
    }, [projects, searchQuery, filters, sort])

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Search Bar */}
        {showSearch && (
          <ProjectSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search projects by title, description, or technology..."
          />
        )}

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Sort Controls */}
          {showSort && (
            <ProjectSortComponent
              sort={sort}
              onSortChange={setSort}
            />
          )}

          {/* Layout Toggle */}
          {showLayoutToggle && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">View:</span>
              <div className="flex rounded-lg border border-slate-300 overflow-hidden">
                <button
                  onClick={() => setLayout('grid')}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors',
                    layout === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Grid
                </button>
                <button
                  onClick={() => setLayout('list')}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors border-l border-slate-300',
                    layout === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  )}
                >
                  List
                </button>
                <button
                  onClick={() => setLayout('compact')}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors border-l border-slate-300',
                    layout === 'compact'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-50'
                  )}
                >
                  Compact
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:col-span-1">
              <ProjectFiltersComponent
                filters={filters}
                onFiltersChange={setFilters}
                categories={categories}
                technologies={technologies}
              />
            </div>
          )}

          {/* Projects Grid */}
          <div className={cn(showFilters ? 'lg:col-span-3' : 'lg:col-span-4')}>
            {/* Results Summary */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-slate-600">
                {processedProjects.length === projects.length ? (
                  `Showing all ${projects.length} projects`
                ) : (
                  `Showing ${processedProjects.length} of ${projects.length} projects`
                )}
              </div>
              
              {(searchQuery || Object.keys(filters).length > 0) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('')
                    setFilters({})
                  }}
                >
                  Clear all filters
                </Button>
              )}
            </div>

            {/* Project Grid */}
            <ProjectGrid
              projects={processedProjects}
              layout={layout}
              showLoadMore={true}
              initialCount={layout === 'compact' ? 8 : 6}
            />
          </div>
        </div>
      </div>
    )
  }
)

PortfolioBrowser.displayName = 'PortfolioBrowser'
