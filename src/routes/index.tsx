import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui";

export const Route = createFileRoute("/")({
    component: Home,
});

function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                {/* Floating Shapes */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Geometric Patterns */}
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-indigo-500/20 rotate-45 animate-spin-slow delay-500"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-500/20 rotate-45 animate-spin-slow delay-1000"></div>
            </div>

            {/* Hero Content */}
            <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 lg:pr-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm animate-fade-in">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-sm font-medium text-slate-700">
                                Available for new projects
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight animate-slide-up">
                                Crafting digital
                                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text animate-slide-up delay-200">
                                    experiences
                                </span>
                                <span className="block text-slate-900 animate-slide-up delay-400">
                                    that inspire
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-slide-up delay-600">
                                Frontend Developer • UI Enthusiast • Curious
                                Human
                            </p>
                        </div>

                        {/* Description */}
                        <div className="max-w-2xl animate-slide-up delay-800">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Hi, I'm{" "}
                                <span className="font-semibold text-slate-900 relative">
                                    Sharfuzzaman
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 animate-scale-x delay-1000"></span>
                                </span>{" "}
                                – a frontend developer who believes great code
                                should feel as good as it looks. I build
                                interfaces that aren't just pixel-perfect, but
                                human-perfect.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-1000">
                            <Link to="/work">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <span className="relative z-10">
                                        View My Work
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </Button>
                            </Link>

                            <Link to="/contact">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                >
                                    Let's Talk
                                    <svg
                                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                                </Button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up delay-1200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-slate-900">
                                    50+
                                </div>
                                <div className="text-sm text-slate-600">
                                    Projects
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-slate-900">
                                    3+
                                </div>
                                <div className="text-sm text-slate-600">
                                    Years Exp
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-slate-900">
                                    100%
                                </div>
                                <div className="text-sm text-slate-600">
                                    Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className="relative lg:pl-8 animate-slide-up delay-400">
                        {/* Profile Image Container */}
                        <div className="relative mx-auto max-w-md">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

                            {/* Main Image Container */}
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                                {/* Placeholder for Profile Image */}
                                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>

                                    {/* Profile Icon/Placeholder */}
                                    <div className="relative z-10 text-center">
                                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-12 h-12 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-slate-600 font-medium">
                                            Sharfuzzaman
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Frontend Developer
                                        </p>
                                    </div>

                                    {/* Floating Tech Icons */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-bounce delay-500">
                                        <span className="text-xs font-bold text-blue-600">
                                            JS
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center animate-bounce delay-1000">
                                        <span className="text-xs font-bold text-purple-600">
                                            TS
                                        </span>
                                    </div>
                                    <div className="absolute top-1/2 left-4 w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center animate-bounce delay-1500">
                                        <span className="text-xs font-bold text-indigo-600">
                                            ⚛
                                        </span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-4 mt-6">
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-slate-600 group-hover:text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-slate-600 group-hover:text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-slate-600 group-hover:text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="relative py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
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
                                    feel like WordPress. I have this thing for
                                    building interfaces that not only look
                                    stunning but actually <em>feel</em> right in
                                    your hands – the kind of digital experiences
                                    that make people say "ahh, this just works."
                                </p>
                                <p>
                                    When I'm not wrestling with CSS or debugging
                                    React components, you'll find me chasing
                                    cricket matches (both watching and playing),
                                    scribbling thoughts in my notebook, or
                                    planning my next adventure to somewhere I've
                                    never been.
                                </p>
                            </div>
                            <Link to="/about">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group"
                                >
                                    More About Me
                                    <svg
                                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-blue-600">
                                            50+
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Projects Completed
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-green-600">
                                            3+
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Years Experience
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-purple-600">
                                            15+
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Technologies
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="text-2xl font-bold text-orange-600">
                                            100%
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Client Satisfaction
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            My Work
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Building digital experiences that bridge the gap
                            between beautiful and functional. Each project is an
                            opportunity to craft something that truly serves its
                            purpose while delighting the people who use it.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Project 1 */}
                        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
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
                                        <p className="text-sm font-medium text-slate-700">
                                            E-Commerce Platform
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    E-Commerce Redesign
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Complete frontend overhaul with 40%
                                    conversion improvement
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                        React
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                                        TypeScript
                                    </span>
                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                                        Tailwind
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-2">
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
                                        <p className="text-sm font-medium text-slate-700">
                                            SaaS Dashboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    SaaS Dashboard
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Real-time analytics dashboard with complex
                                    data visualization
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                        React
                                    </span>
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">
                                        Node.js
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                                        MongoDB
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
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
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m9-9v18"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium text-slate-700">
                                            Portfolio Website
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    Portfolio Website
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Modern portfolio with design system and
                                    animations
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                        TanStack
                                    </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                                        TypeScript
                                    </span>
                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                                        Tailwind
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="/work">
                            <Button
                                variant="primary"
                                size="lg"
                                className="group"
                            >
                                View All Projects
                                <svg
                                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Beyond Code Section */}
            <section className="relative py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Beyond Code
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Where passion meets pixels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cricket */}
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                                <span className="text-2xl">🏏</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Cricket Chronicles
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Whether I'm watching a nail-biting final over or
                                playing weekend league cricket, the sport
                                teaches me about strategy, patience, and those
                                moments when everything just clicks. Much like
                                coding, really.
                            </p>
                        </div>

                        {/* Writing */}
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                                <span className="text-2xl">✍️</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Writing Thoughts
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                I believe the best ideas come from curiosity and
                                conversation. I document my learnings, share
                                insights from my journey, and sometimes just
                                write about the interesting intersections
                                between technology and life.
                            </p>
                        </div>

                        {/* Travel */}
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                                <span className="text-2xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Wanderlust & Wonder
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Travel isn't just about checking places off a
                                list – it's about collecting moments that
                                inspire my work. Every journey adds something
                                valuable to my perspective, keeping my work
                                fresh and my mind curious.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-slate-600 italic">
                            These aren't just hobbies – they're sources of
                            inspiration that keep my work fresh, my mind
                            curious, and my approach to problem-solving
                            wonderfully unpredictable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills & Technologies Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            I work with modern technologies to build scalable,
                            performant, and beautiful web applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* React & Modern JavaScript */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
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
                                <h3 className="text-xl font-semibold text-slate-900">
                                    React & Modern JavaScript
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Building dynamic, responsive applications with
                                clean, maintainable code that scales with your
                                ambitions.
                            </p>
                        </div>

                        {/* Tailwind CSS Magic */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg
                                        className="w-6 h-6 text-cyan-600"
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
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Tailwind CSS Magic
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Creating stunning, consistent designs without
                                the bloat – just pure, efficient styling that
                                makes development a joy.
                            </p>
                        </div>

                        {/* WordPress with Soul */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
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
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9a9 9 0 00-9 9m9-9v18"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    WordPress with Soul
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Transforming WordPress sites with Elementor into
                                custom experiences that don't scream "I'm a
                                template" – because your brand deserves better.
                            </p>
                        </div>

                        {/* Pixel-Perfect UI Implementation */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
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
                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Pixel-Perfect UI Implementation
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Taking your designs and turning them into
                                living, breathing web experiences that honor
                                every detail while adding that extra polish that
                                makes them shine.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto">
                            Every project is a chance to solve interesting
                            problems, work with passionate people, and create
                            something I can genuinely be proud of. I don't just
                            build websites – I build digital experiences that
                            people actually enjoy using.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's build something that matters
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        I'm always excited to collaborate on projects that
                        challenge me, push boundaries, and hopefully make a
                        positive impact. I believe the best work happens when
                        curious, passionate people come together to solve
                        interesting problems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-slate-50 shadow-lg"
                            >
                                Get In Touch
                            </Button>
                        </Link>
                        <Link to="/work">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white hover:text-blue-600"
                            >
                                View My Work
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
