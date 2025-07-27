import { Link } from '@tanstack/react-router'
import { forwardRef } from 'react'
import { cn } from '~/utils/cn'

// Button variants and sizes
const buttonVariants = {
  variant: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
    ghost: 'text-slate-700 hover:bg-slate-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  },
  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  },
}

type ButtonVariant = keyof typeof buttonVariants.variant
type ButtonSize = keyof typeof buttonVariants.size

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
}

interface ButtonProps extends BaseButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

interface LinkButtonProps extends BaseButtonProps {
  to: string
  external?: boolean
}

// Regular Button Component
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, disabled, loading, onClick, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Link Button Component
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, to, external, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      className
    )

    if (external) {
      return (
        <a
          ref={ref}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        to={to}
        className={baseClasses}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

LinkButton.displayName = 'LinkButton'

// Icon Button Component
interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ReactNode
  'aria-label': string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'ghost', size = 'md', className, icon, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          buttonVariants.variant[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
