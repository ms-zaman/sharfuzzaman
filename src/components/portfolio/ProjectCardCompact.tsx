import { Link } from "@tanstack/react-router";
import { forwardRef } from "react";
import { ArrowRightIcon, Card, CardHeader, CardTitle } from "~/components/ui";
import { Project } from "~/types/portfolio";
import { cn } from "~/utils/cn";
import {
    getCategoryDisplayName,
    getProjectStatusColor,
} from "~/utils/portfolio";

interface ProjectCardCompactProps {
    project: Project;
    className?: string;
}

export const ProjectCardCompact = forwardRef<
    HTMLDivElement,
    ProjectCardCompactProps
>(({ project, className, ...props }, ref) => {
    return (
        <Card
            ref={ref}
            variant="default"
            padding="md"
            hover
            className={cn(
                "group transition-all duration-200 border-l-4 border-l-blue-600",
                className
            )}
            {...props}
        >
            <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                        {/* Category and Status */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-slate-500">
                                {getCategoryDisplayName(project.category)}
                            </span>
                            <span
                                className={cn(
                                    "px-2 py-0.5 text-xs font-medium rounded-full",
                                    getProjectStatusColor(project.status)
                                )}
                            >
                                {project.status === "in-progress"
                                    ? "In Progress"
                                    : project.status === "completed"
                                      ? "Completed"
                                      : "Concept"}
                            </span>
                            {project.featured && (
                                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors mb-2">
                            <Link
                                to={`/projects/${project.slug}` as any}
                                className="hover:underline"
                            >
                                {project.title}
                            </Link>
                        </CardTitle>

                        {/* Description */}
                        <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                    key={tech.id}
                                    className={cn(
                                        "px-2 py-0.5 text-xs font-medium rounded",
                                        tech.color
                                    )}
                                >
                                    {tech.name}
                                </span>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="px-2 py-0.5 text-xs font-medium rounded bg-slate-100 text-slate-600">
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Action */}
                        <Link to={`/projects/${project.slug}` as any}>
                            <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                                View Project
                                <ArrowRightIcon
                                    size="sm"
                                    className="ml-1 group-hover:translate-x-1 transition-transform"
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Project Image Thumbnail */}
                    {project.heroImage && (
                        <div className="w-16 h-16 ml-4 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </CardHeader>
        </Card>
    );
});

ProjectCardCompact.displayName = "ProjectCardCompact";
