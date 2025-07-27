import { forwardRef } from 'react'
import { cn } from '~/utils/cn'

// Feature variants
const featureVariants = {
  variant: {
    default: 'bg-white',
    card: 'bg-white rounded-xl shadow-sm border border-slate-200 p-6',
    elevated: 'bg-white rounded-xl shadow-lg border border-slate-100 p-8',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6',
  },
  layout: {
    vertical: 'text-center',
    horizontal: 'flex items-start space-x-4 text-left',
  },
}

type FeatureVariant = keyof typeof featureVariants.variant
type FeatureLayout = keyof typeof featureVariants.layout

interface FeatureProps {
  variant?: FeatureVariant
  layout?: FeatureLayout
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export const Feature = forwardRef<HTMLDivElement, FeatureProps>(
  ({ variant = 'default', layout = 'vertical', className, children, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'transition-all duration-200',
          featureVariants.variant[variant],
          featureVariants.layout[layout],
          hover && 'hover:shadow-md hover:-translate-y-1',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Feature.displayName = 'Feature'

// Feature Icon Component
interface FeatureIconProps {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

export const FeatureIcon = forwardRef<HTMLDivElement, FeatureIconProps>(
  ({ className, children, variant = 'primary', size = 'md', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-slate-100 text-slate-600',
      primary: 'bg-blue-100 text-blue-600',
      secondary: 'bg-purple-100 text-purple-600',
      success: 'bg-green-100 text-green-600',
      warning: 'bg-orange-100 text-orange-600',
      error: 'bg-red-100 text-red-600',
    }

    const sizeClasses = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg flex items-center justify-center flex-shrink-0 mb-4',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

FeatureIcon.displayName = 'FeatureIcon'

// Feature Content Component
interface FeatureContentProps {
  className?: string
  children: React.ReactNode
}

export const FeatureContent = forwardRef<HTMLDivElement, FeatureContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-3', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

FeatureContent.displayName = 'FeatureContent'

// Feature Title Component
interface FeatureTitleProps {
  className?: string
  children: React.ReactNode
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const FeatureTitle = forwardRef<HTMLHeadingElement, FeatureTitleProps>(
  ({ className, children, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-lg font-semibold text-slate-900', className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

FeatureTitle.displayName = 'FeatureTitle'

// Feature Description Component
interface FeatureDescriptionProps {
  className?: string
  children: React.ReactNode
}

export const FeatureDescription = forwardRef<HTMLParagraphElement, FeatureDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-slate-600 leading-relaxed', className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

FeatureDescription.displayName = 'FeatureDescription'

// Feature List Component
interface FeatureListProps {
  className?: string
  children: React.ReactNode
}

export const FeatureList = forwardRef<HTMLUListElement, FeatureListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        {children}
      </ul>
    )
  }
)

FeatureList.displayName = 'FeatureList'

// Feature List Item Component
interface FeatureListItemProps {
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export const FeatureListItem = forwardRef<HTMLLIElement, FeatureListItemProps>(
  ({ className, children, icon, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn('flex items-start space-x-3', className)}
        {...props}
      >
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        <span className="text-slate-700">{children}</span>
      </li>
    )
  }
)

FeatureListItem.displayName = 'FeatureListItem'
