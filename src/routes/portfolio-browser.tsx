import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "~/components/ui";
import { projects } from "~/data/projects";

export const Route = createFileRoute("/portfolio-browser")({
    component: PortfolioBrowserPage,
});

function PortfolioBrowserPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Section variant="gradient" spacing="lg">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Portfolio Browser
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Complete portfolio browsing experience with filtering,
                        search, and sorting
                    </p>
                </div>
            </Section>

            {/* Portfolio Browser */}
            <Section variant="default" spacing="lg">
                <PortfolioBrowserPage
                    projects={projects}
                    initialLayout="grid"
                    showFilters={true}
                    showSearch={true}
                    showSort={true}
                    showLayoutToggle={true}
                />
            </Section>

            {/* Features Overview */}
            <Section variant="muted" spacing="lg">
                <SectionHeader
                    title="Portfolio Browser Features"
                    description="Comprehensive project browsing and discovery"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                            Smart Search
                        </h3>
                        <p className="text-sm text-slate-600">
                            Search across project titles, descriptions, and
                            technologies with real-time results.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                            Advanced Filtering
                        </h3>
                        <p className="text-sm text-slate-600">
                            Filter by category, technology, status, and featured
                            projects with dynamic counts.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                            Flexible Sorting
                        </h3>
                        <p className="text-sm text-slate-600">
                            Sort by date, title, category, or featured status in
                            ascending or descending order.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                            <svg
                                className="w-6 h-6 text-orange-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                            Multiple Layouts
                        </h3>
                        <p className="text-sm text-slate-600">
                            Switch between grid, list, and compact views for
                            optimal browsing experience.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
