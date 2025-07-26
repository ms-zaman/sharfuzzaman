import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Home,
});

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                            Crafting digital experiences
                            <span className="block text-blue-600">
                                that feel like home
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Frontend Developer • UI Enthusiast • Curious Human
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Hi, I'm{" "}
                            <span className="font-semibold text-slate-900">
                                Sharfuzzaman
                            </span>{" "}
                            – a frontend developer who believes great code
                            should feel as good as it looks. I build interfaces
                            that aren't just pixel-perfect, but human-perfect.
                        </p>
                    </div>

                    <div className="pt-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            Let's Create Something Beautiful
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
                </div>
            </section>

            {/* About Preview Section */}
            <section className="px-6 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                About Me
                            </h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    I'm the kind of person who gets genuinely
                                    excited about a perfectly aligned button,
                                    but I'm equally thrilled by a perfectly
                                    timed six over long-on.
                                </p>
                                <p>
                                    As a frontend developer, I spend my days
                                    bringing designs to life with React, styling
                                    with Tailwind's elegant utility classes, and
                                    crafting WordPress experiences that don't
                                    feel like WordPress.
                                </p>
                                <p>
                                    But here's the thing: I'm not just about
                                    code. I'm about connection. I'm about
                                    creating things that spark joy, solve real
                                    problems, and remind us that technology
                                    should enhance our humanity, not complicate
                                    it.
                                </p>
                            </div>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                            >
                                Learn more about my journey
                                <svg
                                    className="ml-2 w-4 h-4"
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

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-slate-900">
                                    When I'm not coding...
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">🏏</span>
                                        <div>
                                            <h4 className="font-medium text-slate-900">
                                                Cricket Chronicles
                                            </h4>
                                            <p className="text-sm text-slate-600">
                                                Strategy, patience, and those
                                                perfect moments when everything
                                                clicks
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">✍️</span>
                                        <div>
                                            <h4 className="font-medium text-slate-900">
                                                Writing Thoughts
                                            </h4>
                                            <p className="text-sm text-slate-600">
                                                Documenting learnings and
                                                exploring tech-life
                                                intersections
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">🌍</span>
                                        <div>
                                            <h4 className="font-medium text-slate-900">
                                                Wanderlust & Wonder
                                            </h4>
                                            <p className="text-sm text-slate-600">
                                                Collecting moments that inspire
                                                my work
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Preview Section */}
            <section className="px-6 py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        My Work
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                        Building digital experiences that bridge the gap between
                        beautiful and functional
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">
                                React & Modern JavaScript
                            </h3>
                            <p className="text-sm text-slate-600">
                                Building dynamic, responsive applications with
                                clean, maintainable code
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                            <h3 className="font-semibold text-slate-900 mb-2">
                                Tailwind CSS Magic
                            </h3>
                            <p className="text-sm text-slate-600">
                                Creating stunning, consistent designs without
                                the bloat
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">
                                WordPress with Soul
                            </h3>
                            <p className="text-sm text-slate-600">
                                Custom experiences that don't scream "I'm a
                                template"
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">
                                Pixel-Perfect UI
                            </h3>
                            <p className="text-sm text-slate-600">
                                Turning designs into living, breathing web
                                experiences
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link
                            to="/work"
                            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            View My Work
                            <svg
                                className="ml-2 w-4 h-4"
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
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's build something that matters
                    </h2>
                    <p className="text-xl mb-8 opacity-90 leading-relaxed">
                        I'm always excited to collaborate on projects that
                        challenge me, push boundaries, and hopefully make a
                        positive impact. Whether you have a startup idea that
                        needs bringing to life, an existing product that needs a
                        fresh perspective, or just want to chat about the
                        intersection of technology and human experience – I'd
                        love to hear from you.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                    >
                        Get in Touch
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
                    <p className="mt-6 text-sm opacity-75">
                        Always curious, always learning, always up for an
                        interesting conversation.
                    </p>
                </div>
            </section>
        </div>
    );
}
