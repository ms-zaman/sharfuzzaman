import React, { forwardRef } from "react";
import { cn } from "~/utils/cn";

// Container sizes
const containerSizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
};

type ContainerSize = keyof typeof containerSizes;

interface ContainerProps {
    size?: ContainerSize;
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    (
        { size = "lg", className, children, as: Component = "div", ...props },
        ref
    ) => {
        return (
            <Component
                ref={ref}
                className={cn("mx-auto px-6", containerSizes[size], className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Container.displayName = "Container";
