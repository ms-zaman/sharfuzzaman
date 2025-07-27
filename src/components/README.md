# Component Library Documentation

This document provides an overview of the reusable UI components and design system for the Sharfuzzaman portfolio website.

## Design System Overview

Our design system is built with the following principles:
- **Consistency**: Unified visual language across all components
- **Flexibility**: Components that adapt to different use cases
- **Accessibility**: Built with semantic HTML and proper ARIA attributes
- **Performance**: Optimized for fast loading and smooth interactions

## Design Tokens

### Colors
- **Primary**: Blue (#2563eb) - Main brand color
- **Slate**: Gray scale for text and backgrounds
- **Semantic**: Success (green), warning (orange), error (red)

### Typography
- **Font Family**: Inter for sans-serif, JetBrains Mono for monospace
- **Scale**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
- **Weights**: normal (400), medium (500), semibold (600), bold (700)

### Spacing
- **Scale**: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
- **Units**: rem-based for consistent scaling

## Core UI Components

### Button
Flexible button component with multiple variants and sizes.

**Variants:**
- `primary` - Main call-to-action button
- `secondary` - Secondary actions with outline
- `outline` - Subtle outline button
- `ghost` - Minimal button without background
- `danger` - For destructive actions

**Sizes:**
- `sm` - Small button (32px height)
- `md` - Medium button (40px height) - default
- `lg` - Large button (48px height)

**Usage:**
```tsx
import { Button, LinkButton, IconButton } from '~/components/ui'

<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>

<LinkButton to="/contact" variant="secondary">
  Contact Us
</LinkButton>

<IconButton icon={<MenuIcon />} aria-label="Open menu" />
```

### Card
Versatile card component for content organization.

**Variants:**
- `default` - Basic card with border
- `elevated` - Card with shadow
- `outlined` - Prominent border styling
- `ghost` - Transparent background
- `gradient` - Gradient background

**Sub-components:**
- `CardHeader` - Header section
- `CardTitle` - Card title
- `CardDescription` - Card description
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription } from '~/components/ui'

<Card variant="elevated" hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
</Card>
```

### Section
Layout component for consistent page sections.

**Variants:**
- `default` - White background
- `muted` - Light gray background
- `dark` - Dark background with white text
- `gradient` - Gradient background
- `primary` - Primary color background

**Spacing:**
- `none` - No padding
- `sm` - Small padding (32px)
- `md` - Medium padding (64px) - default
- `lg` - Large padding (80px)
- `xl` - Extra large padding (96px)

**Usage:**
```tsx
import { Section, SectionHeader } from '~/components/ui'

<Section variant="muted" spacing="lg">
  <SectionHeader 
    title="Section Title"
    subtitle="Optional Subtitle"
    description="Section description"
  />
  {/* Section content */}
</Section>
```

### Grid
Responsive grid system for layout.

**Columns:**
- `1` - Single column
- `2` - Two columns on medium screens and up
- `3` - Three columns on large screens and up
- `4` - Four columns on large screens and up
- `6` - Six columns on extra large screens and up

**Gap:**
- `none` - No gap
- `sm` - Small gap (16px)
- `md` - Medium gap (24px) - default
- `lg` - Large gap (32px)
- `xl` - Extra large gap (48px)

**Usage:**
```tsx
import { Grid, GridItem } from '~/components/ui'

<Grid cols={3} gap="lg">
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
</Grid>
```

### Container
Responsive container with max-width constraints.

**Sizes:**
- `sm` - Max width 672px
- `md` - Max width 768px
- `lg` - Max width 1024px - default
- `xl` - Max width 1280px
- `full` - Full width

**Usage:**
```tsx
import { Container } from '~/components/ui'

<Container size="lg">
  {/* Content */}
</Container>
```

## Layout Components

### Hero
Hero section component for page headers.

**Variants:**
- `default` - White background
- `gradient` - Gradient background
- `primary` - Primary color background
- `dark` - Dark background

**Sub-components:**
- `HeroContent` - Content wrapper
- `HeroTitle` - Main heading
- `HeroSubtitle` - Subtitle text
- `HeroDescription` - Description paragraph
- `HeroActions` - Action buttons container

**Usage:**
```tsx
import { Hero, HeroContent, HeroTitle, HeroSubtitle, HeroActions } from '~/components/ui'

<Hero variant="gradient" size="lg">
  <HeroContent>
    <HeroTitle>Page Title</HeroTitle>
    <HeroSubtitle>Subtitle text</HeroSubtitle>
    <HeroActions>
      <Button variant="primary">Get Started</Button>
    </HeroActions>
  </HeroContent>
</Hero>
```

### Feature
Component for showcasing features or services.

**Variants:**
- `default` - Basic styling
- `card` - Card-like appearance
- `elevated` - With shadow
- `gradient` - Gradient background

**Sub-components:**
- `FeatureIcon` - Icon container
- `FeatureContent` - Content wrapper
- `FeatureTitle` - Feature title
- `FeatureDescription` - Feature description
- `FeatureList` - List of feature points
- `FeatureListItem` - Individual list item

### Testimonial
Component for displaying client testimonials.

**Sub-components:**
- `TestimonialQuote` - Quote text
- `TestimonialAuthor` - Author information
- `TestimonialAvatar` - Author avatar
- `TestimonialInfo` - Author details
- `TestimonialName` - Author name
- `TestimonialRole` - Author role/title
- `TestimonialRating` - Star rating

## Icons

Common SVG icons with consistent sizing:

**Available Icons:**
- `ArrowRightIcon` - Right arrow
- `CheckIcon` - Checkmark
- `ExternalLinkIcon` - External link
- `EmailIcon` - Email
- `LocationIcon` - Location pin
- `ClockIcon` - Clock/time
- `CodeIcon` - Code brackets
- `DesignIcon` - Design/layout
- `LightbulbIcon` - Ideas/innovation
- `SparkleIcon` - Magic/special
- `MenuIcon` - Hamburger menu
- `CloseIcon` - Close/X

**Usage:**
```tsx
import { ArrowRightIcon, CheckIcon } from '~/components/ui'

<ArrowRightIcon size="lg" className="text-blue-600" />
<CheckIcon size="sm" />
```

## Utilities

### cn() Function
Utility for merging Tailwind CSS classes with conflict resolution.

```tsx
import { cn } from '~/utils/cn'

const className = cn(
  'base-classes',
  condition && 'conditional-classes',
  'override-classes'
)
```

## Best Practices

1. **Use semantic HTML** - Components use proper HTML elements
2. **Consistent spacing** - Use design tokens for spacing
3. **Responsive design** - Components work on all screen sizes
4. **Accessibility** - Include proper ARIA labels and keyboard navigation
5. **Performance** - Components are optimized for fast rendering
6. **Maintainability** - Keep components focused and reusable

## Development

To add new components:
1. Create component file in appropriate directory
2. Follow existing patterns for props and variants
3. Add to index.ts exports
4. Update this documentation
5. Add examples to design-system page

## Testing

Visit `/design-system` to see all components in action and test different variants and states.
