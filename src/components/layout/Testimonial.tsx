import { forwardRef } from "react";
import { cn } from "~/utils/cn";

// Testimonial variants
const testimonialVariants = {
    variant: {
        default: "bg-white border border-slate-200",
        elevated: "bg-white shadow-lg border border-slate-100",
        minimal: "bg-transparent",
        gradient:
            "bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200",
    },
    layout: {
        vertical: "text-center",
        horizontal: "text-left",
    },
};

type TestimonialVariant = keyof typeof testimonialVariants.variant;
type TestimonialLayout = keyof typeof testimonialVariants.layout;

interface TestimonialProps {
    variant?: TestimonialVariant;
    layout?: TestimonialLayout;
    className?: string;
    children: React.ReactNode;
}

export const Testimonial = forwardRef<HTMLDivElement, TestimonialProps>(
    (
        {
            variant = "default",
            layout = "vertical",
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl p-6 transition-all duration-200",
                    testimonialVariants.variant[variant],
                    testimonialVariants.layout[layout],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Testimonial.displayName = "Testimonial";

// Testimonial Quote Component
interface TestimonialQuoteProps {
    className?: string;
    children: React.ReactNode;
    showQuotes?: boolean;
}

export const TestimonialQuote = forwardRef<
    HTMLQuoteElement,
    TestimonialQuoteProps
>(({ className, children, showQuotes = true, ...props }, ref) => {
    return (
        <blockquote
            ref={ref}
            className={cn(
                "text-slate-700 leading-relaxed mb-6",
                showQuotes && "italic",
                className
            )}
            {...props}
        >
            {showQuotes && '"'}
            {children}
            {showQuotes && '"'}
        </blockquote>
    );
});

TestimonialQuote.displayName = "TestimonialQuote";

// Testimonial Author Component
interface TestimonialAuthorProps {
    className?: string;
    children: React.ReactNode;
}

export const TestimonialAuthor = forwardRef<
    HTMLDivElement,
    TestimonialAuthorProps
>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("flex items-center space-x-4", className)}
            {...props}
        >
            {children}
        </div>
    );
});

TestimonialAuthor.displayName = "TestimonialAuthor";

// Testimonial Avatar Component
interface TestimonialAvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    initials?: string;
    size?: "sm" | "md" | "lg";
}

export const TestimonialAvatar = forwardRef<
    HTMLDivElement,
    TestimonialAvatarProps
>(({ className, src, alt, initials, size = "md", ...props }, ref) => {
    const sizeClasses = {
        sm: "w-10 h-10 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
    };

    if (src) {
        return (
            <img
                ref={ref as React.Ref<HTMLImageElement>}
                src={src}
                alt={alt}
                className={cn(
                    "rounded-full object-cover",
                    sizeClasses[size],
                    className
                )}
                {...props}
            />
        );
    }

    return (
        <div
            ref={ref}
            className={cn(
                "rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600",
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {initials}
        </div>
    );
});

TestimonialAvatar.displayName = "TestimonialAvatar";

// Testimonial Info Component
interface TestimonialInfoProps {
    className?: string;
    children: React.ReactNode;
}

export const TestimonialInfo = forwardRef<HTMLDivElement, TestimonialInfoProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("flex-1", className)} {...props}>
                {children}
            </div>
        );
    }
);

TestimonialInfo.displayName = "TestimonialInfo";

// Testimonial Name Component
interface TestimonialNameProps {
    className?: string;
    children: React.ReactNode;
}

export const TestimonialName = forwardRef<
    HTMLParagraphElement,
    TestimonialNameProps
>(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn("font-semibold text-slate-900", className)}
            {...props}
        >
            {children}
        </p>
    );
});

TestimonialName.displayName = "TestimonialName";

// Testimonial Role Component
interface TestimonialRoleProps {
    className?: string;
    children: React.ReactNode;
}

export const TestimonialRole = forwardRef<
    HTMLParagraphElement,
    TestimonialRoleProps
>(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn("text-sm text-slate-600", className)}
            {...props}
        >
            {children}
        </p>
    );
});

TestimonialRole.displayName = "TestimonialRole";

// Testimonial Rating Component
interface TestimonialRatingProps {
    className?: string;
    rating: number;
    maxRating?: number;
}

export const TestimonialRating = forwardRef<
    HTMLDivElement,
    TestimonialRatingProps
>(({ className, rating, maxRating = 5, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("flex items-center space-x-1 mb-4", className)}
            {...props}
        >
            {Array.from({ length: maxRating }, (_, i) => (
                <svg
                    key={i}
                    className={cn(
                        "w-5 h-5",
                        i < rating ? "text-yellow-400" : "text-slate-300"
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
});

TestimonialRating.displayName = "TestimonialRating";
