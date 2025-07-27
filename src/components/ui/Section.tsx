import { forwardRef } from 'react'
import { cn } from '~/utils/cn'
import { Container } from './Container'

// Section variants and spacing
const sectionVariants = {
  variant: {
    default: 'bg-white',
    muted: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-br from-slate-50 to-blue-50',
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white',
  },
  spacing: {
    none: '',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
  },
}

type SectionVariant = keyof typeof sectionVariants.variant
type SectionSpacing = keyof typeof sectionVariants.spacing

interface SectionProps {
  variant?: SectionVariant
  spacing?: SectionSpacing
  className?: string
  children: React.ReactNode
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  as?: keyof JSX.IntrinsicElements
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    variant = 'default', 
    spacing = 'md', 
    className, 
    children, 
    containerSize = 'lg',
    as: Component = 'section',
    ...props 
  }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          sectionVariants.variant[variant],
          sectionVariants.spacing[spacing],
          className
        )}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </Component>
    )
  }
)

Section.displayName = 'Section'

// Section Header Component
interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  centered?: boolean
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, subtitle, description, className, centered = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        {subtitle && (
          <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {title}
        </h2>
        {description && (
          <p className={cn(
            'text-xl text-slate-600 leading-relaxed',
            centered && 'max-w-3xl mx-auto'
          )}>
            {description}
          </p>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'
