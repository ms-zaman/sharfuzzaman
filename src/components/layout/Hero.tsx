import { forwardRef } from 'react'
import { cn } from '~/utils/cn'
import { Container } from '../ui/Container'

// Hero variants
const heroVariants = {
  variant: {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-slate-50 to-blue-50',
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white',
    dark: 'bg-slate-900 text-white',
  },
  size: {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-24',
    xl: 'py-24 md:py-32',
  },
}

type HeroVariant = keyof typeof heroVariants.variant
type HeroSize = keyof typeof heroVariants.size

interface HeroProps {
  variant?: HeroVariant
  size?: HeroSize
  className?: string
  children: React.ReactNode
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ variant = 'default', size = 'lg', className, children, containerSize = 'lg', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          heroVariants.variant[variant],
          heroVariants.size[size],
          className
        )}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    )
  }
)

Hero.displayName = 'Hero'

// Hero Content Component
interface HeroContentProps {
  className?: string
  children: React.ReactNode
  centered?: boolean
}

export const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, children, centered = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'space-y-8',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

HeroContent.displayName = 'HeroContent'

// Hero Title Component
interface HeroTitleProps {
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const HeroTitle = forwardRef<HTMLHeadingElement, HeroTitleProps>(
  ({ className, children, size = 'lg', ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-3xl md:text-4xl',
      md: 'text-4xl md:text-5xl',
      lg: 'text-4xl md:text-6xl',
      xl: 'text-5xl md:text-7xl',
    }

    return (
      <h1
        ref={ref}
        className={cn(
          'font-bold leading-tight',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  }
)

HeroTitle.displayName = 'HeroTitle'

// Hero Subtitle Component
interface HeroSubtitleProps {
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const HeroSubtitle = forwardRef<HTMLParagraphElement, HeroSubtitleProps>(
  ({ className, children, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-lg md:text-xl',
      md: 'text-xl md:text-2xl',
      lg: 'text-2xl md:text-3xl',
    }

    return (
      <p
        ref={ref}
        className={cn(
          'leading-relaxed opacity-90',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

HeroSubtitle.displayName = 'HeroSubtitle'

// Hero Description Component
interface HeroDescriptionProps {
  className?: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

export const HeroDescription = forwardRef<HTMLParagraphElement, HeroDescriptionProps>(
  ({ className, children, maxWidth = 'lg', ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-md',
      md: 'max-w-2xl',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      none: '',
    }

    return (
      <p
        ref={ref}
        className={cn(
          'text-lg leading-relaxed mx-auto',
          maxWidthClasses[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

HeroDescription.displayName = 'HeroDescription'

// Hero Actions Component
interface HeroActionsProps {
  className?: string
  children: React.ReactNode
}

export const HeroActions = forwardRef<HTMLDivElement, HeroActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col sm:flex-row gap-4 justify-center items-center',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

HeroActions.displayName = 'HeroActions'
