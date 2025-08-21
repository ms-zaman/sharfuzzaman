import { forwardRef } from "react";
import { cn } from "~/utils/cn";

// Card variants
const cardVariants = {
    variant: {
        default: "bg-white border border-slate-200 shadow-sm",
        elevated: "bg-white shadow-lg border border-slate-100",
        outlined: "bg-white border-2 border-slate-200",
        ghost: "bg-transparent",
        gradient:
            "bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200",
    },
    padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-12",
    },
};

type CardVariant = keyof typeof cardVariants.variant;
type CardPadding = keyof typeof cardVariants.padding;

interface CardProps {
    variant?: CardVariant;
    padding?: CardPadding;
    className?: string;
    children: React.ReactNode;
    hover?: boolean;
    onClick?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = "default",
            padding = "md",
            className,
            children,
            hover = false,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl transition-all duration-200",
                    cardVariants.variant[variant],
                    cardVariants.padding[padding],
                    hover && "hover:shadow-md hover:-translate-y-1",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

// Card Header Component
interface CardHeaderProps {
    className?: string;
    children: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col space-y-1.5", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

CardHeader.displayName = "CardHeader";

// Card Title Component
interface CardTitleProps {
    className?: string;
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, children, as: Component = "h3", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "text-xl font-semibold text-slate-900",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

CardTitle.displayName = "CardTitle";

// Card Description Component
interface CardDescriptionProps {
    className?: string;
    children: React.ReactNode;
}

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    CardDescriptionProps
>(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn("text-slate-600 leading-relaxed", className)}
            {...props}
        >
            {children}
        </p>
    );
});

CardDescription.displayName = "CardDescription";

// Card Content Component
interface CardContentProps {
    className?: string;
    children: React.ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("pt-6", className)} {...props}>
                {children}
            </div>
        );
    }
);

CardContent.displayName = "CardContent";

// Card Footer Component
interface CardFooterProps {
    className?: string;
    children: React.ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex items-center pt-6", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

CardFooter.displayName = "CardFooter";
