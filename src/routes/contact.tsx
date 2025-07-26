import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
    component: Contact,
});

function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Let's create something
                        <span className="block text-blue-600">
                            meaningful together
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Because the best projects start with a conversation
                    </p>
                </div>
            </section>

            {/* Collaboration Mindset Section */}
            <section className="px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                        The Collaboration Mindset
                    </h2>
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                        <p>
                            I believe the most rewarding work happens when
                            curious, passionate people come together to solve
                            interesting problems. Whether you have a startup
                            idea that needs bringing to life, an existing
                            product that needs a fresh perspective, or just want
                            to chat about the intersection of technology and
                            human experience – I'm all ears.
                        </p>
                        <p>
                            I don't just build websites – I collaborate on
                            digital experiences that people actually enjoy
                            using. That means listening carefully to understand
                            your vision, asking the right questions to uncover
                            hidden opportunities, and communicating clearly
                            throughout the entire process.
                        </p>
                    </div>
                </div>
            </section>

            {/* What I Can Help With Section */}
            <section className="px-6 py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        What I Can Help You With
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm">
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
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                New Project Development
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Ready to bring your digital vision to life? I'll
                                work with you to understand your goals, plan the
                                technical approach, and build something that not
                                only looks great but actually works for your
                                users.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm">
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Existing Project Enhancement
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Got an existing website or application that
                                needs improvement? I can help optimize
                                performance, enhance user experience, or add new
                                features that take your project to the next
                                level.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm">
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
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Technical Consultation
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Need a second opinion on your frontend
                                architecture? Want to explore new technologies
                                for your stack? I'm happy to provide insights
                                and recommendations based on real-world
                                experience.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm">
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
                                Code Review & Optimization
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Sometimes a fresh pair of eyes is exactly what
                                your project needs. I can review your codebase
                                and suggest improvements for performance,
                                maintainability, and best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Approach Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        My Approach to Working Together
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        Transparent Communication
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        I believe in keeping you informed every
                                        step of the way. No jargon, no mystery –
                                        just clear, honest communication about
                                        progress, challenges, and next steps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        Realistic Timelines
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        I'll give you honest estimates and stick
                                        to them. Because respect for your time
                                        is just as important as respect for your
                                        project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        Quality Focus
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        I don't just make things work – I make
                                        them work well. Every line of code I
                                        write is crafted with attention to
                                        detail and a commitment to excellence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg
                                        className="w-4 h-4 text-orange-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        Continuous Collaboration
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        This isn't a
                                        drop-it-in-my-lap-and-forget-about-it
                                        situation. I believe in working together
                                        throughout the process, incorporating
                                        your feedback and ensuring we're
                                        building exactly what you need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-6 py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                        Let's Start the Conversation
                    </h2>
                    <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                        Ready to turn your ideas into reality? I'd love to hear
                        about your project, your goals, and how I can help make
                        them happen.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">
                                Send me a message
                            </h3>
                            <form className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-slate-700 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-slate-700 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="project"
                                        className="block text-sm font-medium text-slate-700 mb-2"
                                    >
                                        Project Type
                                    </label>
                                    <select
                                        id="project"
                                        name="project"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    >
                                        <option value="">
                                            Select a project type
                                        </option>
                                        <option value="new-website">
                                            New Website
                                        </option>
                                        <option value="redesign">
                                            Website Redesign
                                        </option>
                                        <option value="web-app">
                                            Web Application
                                        </option>
                                        <option value="wordpress">
                                            WordPress Development
                                        </option>
                                        <option value="consultation">
                                            Technical Consultation
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-slate-700 mb-2"
                                    >
                                        Tell me about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                        placeholder="I'd love to hear about your project goals, timeline, and any specific requirements you have in mind..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                                    Get in touch
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">
                                                Email
                                            </p>
                                            <p className="text-slate-600">
                                                hello@sharfuzzaman.dev
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">
                                                Location
                                            </p>
                                            <p className="text-slate-600">
                                                Working remotely worldwide
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-purple-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">
                                                Response Time
                                            </p>
                                            <p className="text-slate-600">
                                                Within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                                    Connect with me
                                </h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                                <h4 className="font-semibold text-slate-900 mb-3">
                                    What makes me excited:
                                </h4>
                                <p className="text-slate-700 leading-relaxed">
                                    Projects that challenge me, push boundaries,
                                    and hopefully make a positive impact. If
                                    your idea does at least two of those things,
                                    there's a good chance it'll excite me too.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Still Have Questions?
                    </h2>

                    <div className="space-y-8">
                        <div className="border-b border-slate-200 pb-8">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                What's your typical timeline for projects?
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                It depends on the scope, but I'll always provide
                                a realistic timeline upfront and keep you
                                updated on progress throughout the process. Most
                                projects range from 2-8 weeks.
                            </p>
                        </div>

                        <div className="border-b border-slate-200 pb-8">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                What's your process for handling revisions?
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                I include revision rounds in every project
                                timeline. Clear communication upfront usually
                                minimizes major revisions, but I'm always happy
                                to make sure we get it right.
                            </p>
                        </div>

                        <div className="border-b border-slate-200 pb-8">
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                Do you work with other developers or designers?
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Absolutely! I love collaborating with talented
                                designers, backend developers, and other
                                frontend specialists. Great projects are team
                                efforts.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                What if I'm not sure what I need?
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                That's totally fine! We can start with a
                                conversation to explore your goals and figure
                                out the best approach together. Sometimes the
                                best solutions come from these exploratory
                                discussions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's Build Something Beautiful Together
                    </h2>
                    <p className="text-lg opacity-90 mb-8">
                        Always curious, always learning, always up for an
                        interesting conversation.
                    </p>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                    >
                        Start the Conversation
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
                    </a>
                </div>
            </section>
        </div>
    );
}
