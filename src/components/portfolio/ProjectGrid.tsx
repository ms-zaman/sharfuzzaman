import { forwardRef, useState } from 'react'
import { cn } from '~/utils/cn'
import { Project } from '~/types/portfolio'
import { Grid, Button } from '~/components/ui'
import { ProjectCard } from './ProjectCard'
import { ProjectCardCompact } from './ProjectCardCompact'

// Grid layout options
const gridLayouts = {
  grid: {
    cols: 3 as const,
    gap: 'lg' as const,
  },
  list: {
    cols: 1 as const,
    gap: 'md' as const,
  },
  compact: {
    cols: 2 as const,
    gap: 'md' as const,
  },
}

type GridLayout = keyof typeof gridLayouts

interface ProjectGridProps {
  projects: Project[]
  layout?: GridLayout
  showLoadMore?: boolean
  initialCount?: number
  className?: string
}

export const ProjectGrid = forwardRef<HTMLDivElement, ProjectGridProps>(
  ({ 
    projects, 
    layout = 'grid',
    showLoadMore = false,
    initialCount = 6,
    className,
    ...props 
  }, ref) => {
    const [displayCount, setDisplayCount] = useState(initialCount)
    
    const displayedProjects = showLoadMore 
      ? projects.slice(0, displayCount)
      : projects

    const hasMore = displayCount < projects.length

    const handleLoadMore = () => {
      setDisplayCount(prev => Math.min(prev + initialCount, projects.length))
    }

    if (projects.length === 0) {
      return (
        <div 
          ref={ref}
          className={cn(
            'text-center py-12',
            className
          )}
          {...props}
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No Projects Found</h3>
            <p className="text-slate-600">
              No projects match your current filters. Try adjusting your search criteria.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className={className} {...props}>
        <Grid 
          cols={gridLayouts[layout].cols}
          gap={gridLayouts[layout].gap}
          className="mb-8"
        >
          {displayedProjects.map((project) => {
            if (layout === 'compact') {
              return (
                <ProjectCardCompact
                  key={project.id}
                  project={project}
                />
              )
            }

            return (
              <ProjectCard
                key={project.id}
                project={project}
                layout={layout === 'list' ? 'list' : 'grid'}
                showMetrics={layout === 'list'}
              />
            )
          })}
        </Grid>

        {/* Load More Button */}
        {showLoadMore && hasMore && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={handleLoadMore}
            >
              Load More Projects ({projects.length - displayCount} remaining)
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center text-sm text-slate-500 mt-6">
          Showing {displayedProjects.length} of {projects.length} projects
        </div>
      </div>
    )
  }
)

ProjectGrid.displayName = 'ProjectGrid'
