import { forwardRef } from 'react'
import { cn } from '~/utils/cn'
import { ProjectSort as ProjectSortType, ProjectSortBy, ProjectSortOrder } from '~/types/portfolio'

interface ProjectSortProps {
  sort: ProjectSortType
  onSortChange: (sort: ProjectSortType) => void
  className?: string
}

const sortOptions: { value: ProjectSortBy; label: string }[] = [
  { value: 'date', label: 'Date' },
  { value: 'title', label: 'Title' },
  { value: 'category', label: 'Category' },
  { value: 'featured', label: 'Featured' },
]

export const ProjectSort = forwardRef<HTMLDivElement, ProjectSortProps>(
  ({ sort, onSortChange, className, ...props }, ref) => {
    const updateSort = (updates: Partial<ProjectSortType>) => {
      onSortChange({ ...sort, ...updates })
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-3', className)}
        {...props}
      >
        <span className="text-sm font-medium text-slate-700">Sort by:</span>
        
        {/* Sort By Dropdown */}
        <select
          value={sort.by}
          onChange={(e) => updateSort({ by: e.target.value as ProjectSortBy })}
          className={cn(
            'px-3 py-2 border border-slate-300 rounded-lg text-sm',
            'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'bg-white text-slate-900 transition-colors'
          )}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Sort Order Toggle */}
        <button
          onClick={() => updateSort({ order: sort.order === 'asc' ? 'desc' : 'asc' })}
          className={cn(
            'p-2 border border-slate-300 rounded-lg',
            'hover:bg-slate-50 focus:ring-2 focus:ring-blue-500',
            'transition-colors duration-200'
          )}
          title={`Sort ${sort.order === 'asc' ? 'descending' : 'ascending'}`}
        >
          {sort.order === 'asc' ? (
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
          )}
        </button>
      </div>
    )
  }
)

ProjectSort.displayName = 'ProjectSort'
