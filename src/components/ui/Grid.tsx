import React, { forwardRef } from "react";
import { cn } from "~/utils/cn";

// Grid configurations
const gridConfigs = {
    cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    },
    gap: {
        none: "gap-0",
        sm: "gap-4",
        md: "gap-6",
        lg: "gap-8",
        xl: "gap-12",
    },
};

type GridCols = keyof typeof gridConfigs.cols;
type GridGap = keyof typeof gridConfigs.gap;

interface GridProps {
    cols?: GridCols;
    gap?: GridGap;
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
    (
        {
            cols = 3,
            gap = "md",
            className,
            children,
            as: Component = "div",
            ...props
        },
        ref
    ) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "grid",
                    gridConfigs.cols[cols],
                    gridConfigs.gap[gap],
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Grid.displayName = "Grid";

// Grid Item Component
interface GridItemProps {
    span?: number;
    className?: string;
    children: React.ReactNode;
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
    ({ span, className, children, ...props }, ref) => {
        const spanClass = span ? `col-span-${span}` : "";

        return (
            <div ref={ref} className={cn(spanClass, className)} {...props}>
                {children}
            </div>
        );
    }
);

GridItem.displayName = "GridItem";
