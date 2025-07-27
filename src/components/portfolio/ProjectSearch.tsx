import { forwardRef, useState, useEffect } from 'react'
import { cn } from '~/utils/cn'
import { CloseIcon } from '~/components/ui'

interface ProjectSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export const ProjectSearch = forwardRef<HTMLInputElement, ProjectSearchProps>(
  ({ value, onChange, placeholder = 'Search projects...', className, ...props }, ref) => {
    const [localValue, setLocalValue] = useState(value)

    // Debounce search input
    useEffect(() => {
      const timer = setTimeout(() => {
        onChange(localValue)
      }, 300)

      return () => clearTimeout(timer)
    }, [localValue, onChange])

    // Update local value when prop changes
    useEffect(() => {
      setLocalValue(value)
    }, [value])

    const clearSearch = () => {
      setLocalValue('')
      onChange('')
    }

    return (
      <div className={cn('relative', className)}>
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Input */}
        <input
          ref={ref}
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'block w-full pl-10 pr-10 py-3 border border-slate-300 rounded-lg',
            'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'placeholder-slate-400 text-slate-900',
            'transition-colors duration-200'
          )}
          {...props}
        />

        {/* Clear Button */}
        {localValue && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-slate-600 transition-colors"
          >
            <CloseIcon size="sm" />
          </button>
        )}
      </div>
    )
  }
)

ProjectSearch.displayName = 'ProjectSearch'
