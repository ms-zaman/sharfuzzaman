import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Section, SectionHeader, Grid, Card, CardHeader, CardTitle, CardDescription } from "~/components/ui";
import { ProjectCard, PortfolioBrowser } from "~/components/portfolio";
import { projects } from "~/data/projects";
import { getFeaturedProjects } from "~/utils/portfolio";

export const Route = createFileRoute("/work")({
    component: Work,
});

function Work() {
    const featuredProjects = getFeaturedProjects(projects, 3);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <Section variant="gradient" spacing="lg">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Where ideas meet
                        <span className="block text-blue-600">
                            implementation
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Crafting digital solutions that solve real problems
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg">
                            Let's Work Together
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* Featured Projects */}
            <Section variant="default" spacing="lg">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="Portfolio Highlights"
                    description="A selection of my most impactful and innovative work"
                />

                <Grid cols={3} gap="lg" className="mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            showMetrics={true}
                        />
                    ))}
                </Grid>

                <div className="text-center">
                    <Link to="/portfolio-browser">
                        <Button variant="outline" size="lg">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* Portfolio Browser */}
            <Section variant="muted" spacing="lg">
                <SectionHeader
                    title="Explore My Work"
                    description="Browse through all my projects with advanced filtering and search"
                />

                <PortfolioBrowser
                    projects={projects}
                    initialLayout="grid"
                    showFilters={true}
                    showSearch={true}
                    showSort={true}
                    showLayoutToggle={true}
                />
            </Section>

            {/* My Process Section */}
            <Section variant="default" spacing="lg">
                <SectionHeader
                    title="My Process"
                    description="Great work doesn't happen by accident – it's the result of thoughtful planning, intentional execution, and genuine care for the end user."
                />

                <Grid cols={2} gap="lg">
                    <Card variant="elevated" padding="lg">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <CardTitle>Understanding First</CardTitle>
                            <CardDescription>
                                Every project begins with a deep dive into the problem we're solving. I collaborate closely with clients to understand not just what they want, but why they want it, and who it's for.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="elevated" padding="lg">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                </svg>
                            </div>
                            <CardTitle>Design Collaboration</CardTitle>
                            <CardDescription>
                                I work hand-in-hand with designers to ensure the final product honors the original vision while adding that extra polish that makes interfaces truly shine.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="elevated" padding="lg">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <CardTitle>Clean, Maintainable Code</CardTitle>
                            <CardDescription>
                                I don't just make things work – I make them work well. My code is clean, well-documented, and built to scale.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="elevated" padding="lg">
                        <CardHeader>
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <CardTitle>Performance & Optimization</CardTitle>
                            <CardDescription>
                                Fast, accessible, and optimized for all devices. Every project is built with performance and user experience as top priorities.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Grid>
            </Section>
        </div>
    );
}
