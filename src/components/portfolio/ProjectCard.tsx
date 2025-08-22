import { Link } from "@tanstack/react-router";
import { forwardRef } from "react";
import {
    ArrowRightIcon,
    Button,
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    ExternalLinkIcon,
} from "~/components/ui";
import { Project } from "~/types/portfolio";
import { cn } from "~/utils/cn";
import {
    formatProjectDateRange,
    getCategoryDisplayName,
    getProjectStatusColor,
} from "~/utils/portfolio";

// Project card variants
const projectCardVariants = {
    layout: {
        grid: "flex flex-col",
        list: "flex flex-col md:flex-row md:items-center gap-6",
    },
    size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    },
};

type ProjectCardLayout = keyof typeof projectCardVariants.layout;
type ProjectCardSize = keyof typeof projectCardVariants.size;

interface ProjectCardProps {
    project: Project;
    layout?: ProjectCardLayout;
    size?: ProjectCardSize;
    showDescription?: boolean;
    showTechnologies?: boolean;
    showMetrics?: boolean;
    className?: string;
    variant?: "default" | "ghost" | "elevated" | "outlined" | "gradient";
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
    (
        {
            project,
            layout = "grid",
            size = "md",
            showDescription = true,
            showTechnologies = true,
            showMetrics = false,
            className,
            ...props
        },
        ref
    ) => {
        const liveLink = project.links.find((link) => link.type === "live");
        const caseStudyLink = project.links.find(
            (link) => link.type === "case-study"
        );

        return (
            <Card
                ref={ref}
                variant="elevated"
                padding="none"
                hover
                className={cn(
                    "group overflow-hidden transition-all duration-300",
                    projectCardVariants.layout[layout],
                    className
                )}
                {...props}
            >
                {/* Project Image */}
                <div
                    className={cn(
                        "relative overflow-hidden bg-slate-100",
                        layout === "grid"
                            ? "aspect-video"
                            : "md:w-80 md:h-48 md:flex-shrink-0"
                    )}
                >
                    {project.heroImage ? (
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                            <div className="text-slate-400 text-center">
                                <div className="w-16 h-16 mx-auto mb-2 bg-slate-300 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm">Project Image</p>
                            </div>
                        </div>
                    )}

                    {/* Project Status Badge */}
                    <div className="absolute top-4 left-4">
                        <span
                            className={cn(
                                "px-2 py-1 text-xs font-medium rounded-full",
                                getProjectStatusColor(project.status)
                            )}
                        >
                            {project.status === "in-progress"
                                ? "In Progress"
                                : project.status === "completed"
                                  ? "Completed"
                                  : "Concept"}
                        </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-4 right-4">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                                Featured
                            </span>
                        </div>
                    )}

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {liveLink && (
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => {
                                    window.open(liveLink.url, "_blank");
                                }}
                            >
                                <ExternalLinkIcon size="sm" className="mr-2" />
                                View Live
                            </Button>
                        )}
                        {caseStudyLink && (
                            <Link to={caseStudyLink.url}>
                                <Button variant="secondary" size="sm">
                                    Case Study
                                    <ArrowRightIcon
                                        size="sm"
                                        className="ml-2"
                                    />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Project Content */}
                <div className={cn(projectCardVariants.size[size], "flex-1")}>
                    <CardHeader className="p-0">
                        {/* Category and Date */}
                        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                            <span className="font-medium">
                                {getCategoryDisplayName(project.category)}
                            </span>
                            <span>{formatProjectDateRange(project)}</span>
                        </div>

                        {/* Title */}
                        <CardTitle className="group-hover:text-blue-600 transition-colors">
                            <Link
                                to={`/projects/${project.slug}` as any}
                                className="hover:underline"
                            >
                                {project.title}
                            </Link>
                        </CardTitle>

                        {/* Description */}
                        {showDescription && (
                            <CardDescription className="line-clamp-2">
                                {project.description}
                            </CardDescription>
                        )}
                    </CardHeader>

                    {/* Technologies */}
                    {showTechnologies && project.technologies.length > 0 && (
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies
                                    .slice(0, 4)
                                    .map((tech) => (
                                        <span
                                            key={tech.id}
                                            className={cn(
                                                "px-2 py-1 text-xs font-medium rounded-md",
                                                tech.color
                                            )}
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                {project.technologies.length > 4 && (
                                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600">
                                        +{project.technologies.length - 4} more
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Metrics */}
                    {showMetrics &&
                        project.results &&
                        project.results.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-slate-200">
                                <div className="grid grid-cols-2 gap-4">
                                    {project.results
                                        .slice(0, 2)
                                        .map((metric, index) => (
                                            <div
                                                key={index}
                                                className="text-center"
                                            >
                                                <div className="text-lg font-bold text-slate-900">
                                                    {metric.value}
                                                </div>
                                                <div className="text-xs text-slate-600">
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                    {/* Actions */}
                    <div className="mt-6 flex items-center justify-between">
                        <Link to={`/projects/${project.slug}` as any}>
                            <Button variant="ghost" size="sm">
                                Learn More
                                <ArrowRightIcon size="sm" className="ml-2" />
                            </Button>
                        </Link>

                        {liveLink && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    window.open(liveLink.url, "_blank")
                                }
                            >
                                <ExternalLinkIcon size="sm" className="mr-2" />
                                Live Demo
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        );
    }
);

ProjectCard.displayName = "ProjectCard";
