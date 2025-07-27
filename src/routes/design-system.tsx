import { createFileRoute } from "@tanstack/react-router";
import {
    ArrowRightIcon,
    Button,
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CodeIcon,
    DesignIcon,
    Grid,
    LightbulbIcon,
    LinkButton,
    Section,
    SectionHeader,
} from "~/components/ui";

export const Route = createFileRoute("/design-system")({
    component: DesignSystem,
});

function DesignSystem() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <Section variant="gradient" spacing="lg">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Design System
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Testing our reusable UI components
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="primary" size="lg">
                            Primary Button
                        </Button>
                        <Button variant="secondary" size="lg">
                            Secondary Button
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Components Section */}
            <Section variant="default" spacing="lg">
                <SectionHeader
                    title="UI Components"
                    subtitle="Design System"
                    description="Reusable components for consistent design"
                />

                <Grid cols={3} gap="lg">
                    <Card variant="elevated" hover>
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <CodeIcon className="text-blue-600" />
                            </div>
                            <CardTitle>Button Component</CardTitle>
                            <CardDescription>
                                Flexible button component with multiple variants
                                and sizes
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="elevated" hover>
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <DesignIcon className="text-green-600" />
                            </div>
                            <CardTitle>Card Component</CardTitle>
                            <CardDescription>
                                Versatile card component for content
                                organization
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="elevated" hover>
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <LightbulbIcon className="text-purple-600" />
                            </div>
                            <CardTitle>Section Component</CardTitle>
                            <CardDescription>
                                Layout component for consistent page sections
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Grid>

                <div className="text-center mt-12">
                    <LinkButton to="/" variant="primary" size="lg">
                        Back to Home
                        <ArrowRightIcon className="ml-2" />
                    </LinkButton>
                </div>
            </Section>

            {/* Button Showcase */}
            <Section variant="muted" spacing="lg">
                <SectionHeader
                    title="Button Variants"
                    description="Different button styles and sizes for various use cases"
                />

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">
                            Variants
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="danger">Danger</Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">
                            Sizes
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" size="sm">
                                Small
                            </Button>
                            <Button variant="primary" size="md">
                                Medium
                            </Button>
                            <Button variant="primary" size="lg">
                                Large
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">
                            States
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Normal</Button>
                            <Button variant="primary" loading>
                                Loading
                            </Button>
                            <Button variant="primary" disabled>
                                Disabled
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Card Showcase */}
            <Section variant="default" spacing="lg">
                <SectionHeader
                    title="Card Components"
                    description="Flexible card layouts for content organization"
                />

                <Grid cols={2} gap="lg">
                    <Card variant="default">
                        <CardHeader>
                            <CardTitle>Default Card</CardTitle>
                            <CardDescription>
                                Basic card with default styling and border
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="elevated">
                        <CardHeader>
                            <CardTitle>Elevated Card</CardTitle>
                            <CardDescription>
                                Card with shadow for more prominence
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="gradient">
                        <CardHeader>
                            <CardTitle>Gradient Card</CardTitle>
                            <CardDescription>
                                Card with gradient background for special
                                content
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card variant="outlined">
                        <CardHeader>
                            <CardTitle>Outlined Card</CardTitle>
                            <CardDescription>
                                Card with prominent border styling
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Grid>
            </Section>
        </div>
    );
}
