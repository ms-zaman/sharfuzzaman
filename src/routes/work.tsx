import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
    component: Work,
});

function Work() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Where ideas meet
                        <span className="block text-blue-600">
                            implementation
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Crafting digital solutions that solve real problems
                    </p>
                </div>
            </section>

            {/* My Process Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                        My Process
                    </h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-4xl mx-auto">
                        Great work doesn't happen by accident – it's the result
                        of thoughtful planning, intentional execution, and
                        genuine care for the end user. Here's how I approach
                        every project:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Understanding First
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Every project begins with a deep dive into the
                                problem we're solving. I collaborate closely
                                with clients to understand not just what they
                                want, but why they want it, and who it's for.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
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
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Design Collaboration
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                I work hand-in-hand with designers to ensure the
                                final product honors the original vision while
                                adding that extra polish that makes interfaces
                                truly shine. Because let's be honest – the best
                                projects happen when creative minds align.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
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
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Clean, Maintainable Code
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                I don't just make things work – I make them work
                                well. My code is clean, well-documented, and
                                built to scale. Because tomorrow's features
                                shouldn't suffer because of today's deadlines.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
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
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Testing & Refinement
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                The devil is in the details, and I'm on a
                                first-name basis with most of them. Every
                                project goes through rigorous testing to ensure
                                it works flawlessly across devices and browsers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="px-6 py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Featured Projects
                    </h2>

                    <div className="space-y-12">
                        {/* Project 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        E-Commerce Platform Redesign
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        A complete frontend overhaul of an
                                        existing e-commerce platform, focusing
                                        on user experience and conversion
                                        optimization.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                The Challenge:
                                            </h4>
                                            <p className="text-slate-700">
                                                High bounce rate and poor mobile
                                                experience affecting sales
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                My Role:
                                            </h4>
                                            <p className="text-slate-700">
                                                Frontend development, UI
                                                implementation, performance
                                                optimization
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                Tech Stack:
                                            </h4>
                                            <p className="text-slate-700">
                                                React, TypeScript, Tailwind CSS,
                                                Next.js
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                The Outcome:
                                            </h4>
                                            <p className="text-slate-700">
                                                40% increase in conversion rate,
                                                60% improvement in mobile
                                                performance
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
                                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-slate-600">
                                        Project showcase image would go here
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="md:order-2">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        SaaS Dashboard Interface
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Built a comprehensive dashboard
                                        interface for a B2B SaaS platform with
                                        complex data visualization and real-time
                                        updates.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                The Challenge:
                                            </h4>
                                            <p className="text-slate-700">
                                                Complex data visualization with
                                                real-time updates and multiple
                                                user roles
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                My Role:
                                            </h4>
                                            <p className="text-slate-700">
                                                Full frontend architecture,
                                                component library creation,
                                                state management
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                Tech Stack:
                                            </h4>
                                            <p className="text-slate-700">
                                                React, Redux Toolkit, Chart.js,
                                                Material-UI
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                The Outcome:
                                            </h4>
                                            <p className="text-slate-700">
                                                Reduced user onboarding time by
                                                50%, improved data accessibility
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 text-center md:order-1">
                                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-slate-600">
                                        Project showcase image would go here
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        WordPress Custom Theme
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Developed a custom WordPress theme with
                                        Elementor integration for a creative
                                        agency, focusing on performance and ease
                                        of content management.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                The Challenge:
                                            </h4>
                                            <p className="text-slate-700">
                                                Create a flexible, fast-loading
                                                WordPress site that doesn't look
                                                like WordPress
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                My Role:
                                            </h4>
                                            <p className="text-slate-700">
                                                Custom theme development,
                                                Elementor widgets, performance
                                                optimization
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                Tech Stack:
                                            </h4>
                                            <p className="text-slate-700">
                                                WordPress, PHP, Elementor, Sass,
                                                JavaScript
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">
                                                The Outcome:
                                            </h4>
                                            <p className="text-slate-700">
                                                95+ PageSpeed score, 70% faster
                                                load times, easy content
                                                management
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 text-center">
                                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-slate-600">
                                        Project showcase image would go here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Technologies I Work With
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Frontend Magic
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                React, JavaScript (ES6+), TypeScript, HTML5,
                                CSS3, Tailwind CSS, Sass
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                WordPress Wizardry
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Custom theme development, Elementor mastery,
                                plugin integration, performance optimization
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Tools & Workflow
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Git, Vite, Figma, Adobe XD, VS Code, npm/pnpm,
                                Netlify
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            I'm always excited to learn new technologies, but
                            I've found that mastering the fundamentals and
                            understanding when to use the right tool for the job
                            is what truly makes the difference.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-6 py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        What Clients Say
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-semibold">
                                        JD
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        John Doe
                                    </h4>
                                    <p className="text-slate-600 text-sm">
                                        CEO, TechStart Inc.
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed italic">
                                "Sharfuzzaman brought our vision to life in ways
                                we never imagined. His attention to detail and
                                genuine care for the user experience made all
                                the difference."
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-green-600 font-semibold">
                                        SM
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Sarah Miller
                                    </h4>
                                    <p className="text-slate-600 text-sm">
                                        Creative Director, Design Studio
                                    </p>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed italic">
                                "Working with Sharfuzzaman was a breeze. He
                                communicated clearly, delivered on time, and the
                                final product exceeded our expectations."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 leading-relaxed">
                        Every project is an opportunity to create something
                        meaningful. Whether you're launching a new product,
                        redesigning an existing website, or need help with a
                        specific technical challenge – I'd love to help bring
                        your vision to life.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                    >
                        Let's Build Something Amazing
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
