import { forwardRef } from 'react'
import { cn } from '~/utils/cn'

// Icon sizes
const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
}

type IconSize = keyof typeof iconSizes

interface IconProps {
  size?: IconSize
  className?: string
  children: React.ReactNode
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(iconSizes[size], className)}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    )
  }
)

Icon.displayName = 'Icon'

// Common Icons
export const ArrowRightIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </Icon>
)

export const CheckIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </Icon>
)

export const ExternalLinkIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </Icon>
)

export const EmailIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>
)

export const LocationIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </Icon>
)

export const ClockIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Icon>
)

export const CodeIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </Icon>
)

export const DesignIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
  </Icon>
)

export const LightbulbIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </Icon>
)

export const SparkleIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </Icon>
)

export const MenuIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
)

export const CloseIcon = ({ size = 'md', className }: { size?: IconSize; className?: string }) => (
  <Icon size={size} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </Icon>
)
