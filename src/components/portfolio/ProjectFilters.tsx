import { forwardRef, useState } from 'react'
import { cn } from '~/utils/cn'
import { ProjectFilters as ProjectFiltersType, ProjectCategory, Technology } from '~/types/portfolio'
import { getCategoryDisplayName } from '~/utils/portfolio'
import { Button, Card } from '~/components/ui'
import { CheckIcon, CloseIcon } from '~/components/ui'

interface ProjectFiltersProps {
  filters: ProjectFiltersType
  onFiltersChange: (filters: ProjectFiltersType) => void
  categories: { value: ProjectCategory; label: string; count: number }[]
  technologies: Technology[]
  className?: string
}

export const ProjectFilters = forwardRef<HTMLDivElement, ProjectFiltersProps>(
  ({ filters, onFiltersChange, categories, technologies, className, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const updateFilters = (updates: Partial<ProjectFiltersType>) => {
      onFiltersChange({ ...filters, ...updates })
    }

    const toggleCategory = (category: ProjectCategory) => {
      const currentCategories = filters.category || []
      const newCategories = currentCategories.includes(category)
        ? currentCategories.filter(c => c !== category)
        : [...currentCategories, category]
      
      updateFilters({ category: newCategories.length > 0 ? newCategories : undefined })
    }

    const toggleTechnology = (techId: string) => {
      const currentTech = filters.technology || []
      const newTech = currentTech.includes(techId)
        ? currentTech.filter(t => t !== techId)
        : [...currentTech, techId]
      
      updateFilters({ technology: newTech.length > 0 ? newTech : undefined })
    }

    const clearAllFilters = () => {
      onFiltersChange({})
    }

    const hasActiveFilters = Object.values(filters).some(value => 
      Array.isArray(value) ? value.length > 0 : value !== undefined
    )

    const activeFilterCount = [
      filters.category?.length || 0,
      filters.technology?.length || 0,
      filters.status?.length || 0,
      filters.featured ? 1 : 0
    ].reduce((sum, count) => sum + count, 0)

    return (
      <Card
        ref={ref}
        variant="default"
        padding="md"
        className={cn('transition-all duration-200', className)}
        {...props}
      >
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-slate-900">Filters</h3>
            {activeFilterCount > 0 && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {activeFilterCount} active
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
              >
                <CloseIcon size="sm" className="mr-1" />
                Clear All
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden"
            >
              {isExpanded ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </div>

        {/* Filter Content */}
        <div className={cn(
          'space-y-6 transition-all duration-200',
          !isExpanded && 'hidden md:block'
        )}>
          {/* Featured Toggle */}
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Featured</h4>
            <Button
              variant={filters.featured ? 'primary' : 'outline'}
              size="sm"
              onClick={() => updateFilters({ featured: filters.featured ? undefined : true })}
            >
              {filters.featured && <CheckIcon size="sm" className="mr-2" />}
              Featured Projects
            </Button>
          </div>

          {/* Status Filter */}
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Status</h4>
            <div className="flex flex-wrap gap-2">
              {['completed', 'in-progress', 'concept'].map((status) => {
                const isSelected = filters.status?.includes(status as any)
                return (
                  <Button
                    key={status}
                    variant={isSelected ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => {
                      const currentStatus = filters.status || []
                      const newStatus = isSelected
                        ? currentStatus.filter(s => s !== status)
                        : [...currentStatus, status as any]
                      updateFilters({ status: newStatus.length > 0 ? newStatus : undefined })
                    }}
                  >
                    {isSelected && <CheckIcon size="sm" className="mr-2" />}
                    {status === 'in-progress' ? 'In Progress' : 
                     status.charAt(0).toUpperCase() + status.slice(1)}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isSelected = filters.category?.includes(category.value)
                return (
                  <Button
                    key={category.value}
                    variant={isSelected ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => toggleCategory(category.value)}
                    disabled={category.count === 0}
                  >
                    {isSelected && <CheckIcon size="sm" className="mr-2" />}
                    {category.label} ({category.count})
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 12).map((tech) => {
                const isSelected = filters.technology?.includes(tech.id)
                return (
                  <Button
                    key={tech.id}
                    variant={isSelected ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => toggleTechnology(tech.id)}
                  >
                    {isSelected && <CheckIcon size="sm" className="mr-2" />}
                    {tech.name}
                  </Button>
                )
              })}
              {technologies.length > 12 && (
                <Button variant="ghost" size="sm">
                  +{technologies.length - 12} more
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    )
  }
)

ProjectFilters.displayName = 'ProjectFilters'
