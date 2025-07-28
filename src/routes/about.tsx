import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui";
export const Route = createFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                    {/* Floating Shapes */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                    {/* Geometric Patterns */}
                    <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-blue-500/20 rotate-45 animate-spin-slow"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-indigo-500/20 rotate-45 animate-spin-slow delay-500"></div>
                    <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-purple-500/20 rounded-md animate-bounce-slow delay-300"></div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/6 h-px w-16 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0"></div>
                    <div className="absolute bottom-1/3 right-1/6 h-px w-24 bg-gradient-to-r from-indigo-400/0 via-indigo-400/50 to-indigo-400/0"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm animate-fade-in mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">
              My Journey
            </span>
          </div> */}

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-slide-up">
                        From curious coder to
                        <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text animate-slide-up delay-200">
                            frontend craftsman
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed animate-slide-up delay-400">
                        The journey of turning curiosity into clean code
                    </p>

                    <div className="mt-10 inline-flex animate-fade-in delay-600">
                        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 shadow-sm">
                            <div className="flex items-center space-x-2">
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
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-slate-800">
                                    Passionate about clean, accessible code
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Story Section */}
            <section className="px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="h-0.5 w-8 bg-blue-600 mr-4"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 animate-fade-in">
                            My Story
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
                        <p className="animate-fade-in">
                            You know how some people collect vinyl records or
                            vintage cameras? Well, I collect{" "}
                            <span className="font-semibold text-slate-900 relative inline-block">
                                "aha!" moments
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 animate-scale-x delay-1000"></span>
                            </span>{" "}
                            – those satisfying instances when a tricky piece of
                            code finally clicks into place, or when a design
                            element transforms from concept to pixel-perfect
                            reality.
                        </p>

                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 shadow-sm animate-fade-in delay-200">
                            <p>
                                My journey into frontend development wasn't
                                exactly linear. It started with tinkering (like
                                most of us), breaking things just to see if I
                                could fix them again. What began as casual
                                curiosity slowly evolved into genuine passion,
                                and eventually into a career where I get to
                                build things that matter, one line of code at a
                                time.
                            </p>
                        </div>

                        <p className="animate-fade-in delay-400">
                            I've learned that being a frontend developer isn't
                            just about knowing the latest frameworks or writing
                            flawless JavaScript (though that helps). It's about{" "}
                            <span className="text-blue-600 font-medium">
                                understanding people
                            </span>{" "}
                            – how they think, how they interact, what frustrates
                            them, and what delights them. Every project teaches
                            me something new about the beautiful complexity of
                            human experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* My Approach Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50">
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        }}
                    ></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-12">
                        {/* <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm animate-fade-in mb-4">
                            <span className="text-sm font-medium text-slate-700">
                                Philosophy
                            </span>
                        </div> */}
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center animate-fade-in">
                            My Approach
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 animate-scale-x"></div>
                        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
                            I believe the best digital experiences are built on
                            a foundation of empathy, curiosity, and attention to
                            detail. Here's how I approach my work:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg
                                    className="w-7 h-7 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Start with Why
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Before I write a single line of code, I ask: Who
                                is this for? What problem are we solving? How
                                can this make someone's day just a{" "}
                                <span className="text-blue-600 font-medium">
                                    little bit better
                                </span>
                                ?
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-400">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg
                                    className="w-7 h-7 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0h3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Build with Intention
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Every design decision, every line of code, every
                                interaction – nothing happens by accident. I
                                craft interfaces that feel{" "}
                                <span className="text-green-600 font-medium">
                                    intentional and purposeful
                                </span>
                                .
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-500">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg
                                    className="w-7 h-7 text-purple-600"
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
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Embrace the Details
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                That perfectly timed animation, the subtle hover
                                effect, the way a form feels when it just works
                                – these details aren't just polish, they're{" "}
                                <span className="text-purple-600 font-medium">
                                    poetry
                                </span>
                                .
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-600">
                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg
                                    className="w-7 h-7 text-orange-600"
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
                                Stay Curious
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                Technology evolves fast, and I wouldn't have it
                                any other way. I'm always experimenting,
                                learning, and pushing myself to{" "}
                                <span className="text-orange-600 font-medium">
                                    grow as a developer
                                </span>{" "}
                                and as a creator.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond the Code Section */}
            <section className="px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-4"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 animate-fade-in">
                            Beyond the Code
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
                        <p className="animate-fade-in">
                            When I'm not building interfaces, you'll still find
                            me building – just in different ways. Whether I'm
                            strategizing my next{" "}
                            <span className="text-indigo-600 font-medium">
                                cricket innings
                            </span>
                            , crafting thoughts in my notebook, or mapping out
                            my next adventure, I'm always creating something.
                        </p>

                        <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100/50 shadow-sm animate-fade-in delay-200">
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-indigo-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <p className="italic">
                                These experiences don't just fill my time – they
                                inform my work. The patience I learn from
                                watching a 20-over innings translates to
                                debugging complex components. The storytelling
                                instincts from my writing help me create more
                                intuitive user flows. The problem-solving
                                mindset from travel mishaps (yes, those teach
                                you a lot!) helps me architect better solutions.
                            </p>
                        </div>

                        <p className="text-xl font-medium text-center text-slate-800 animate-fade-in delay-400">
                            I've come to realize that being a well-rounded
                            person makes me a better developer, and vice versa.
                        </p>
                    </div>
                </div>
            </section>
            {/* Call to Action Section */}
            <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>

                {/* Floating Background Shapes */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/5 rounded-full blur-3xl"></div>

                {/* Floating Tech Icons */}
                <div className="absolute top-32 right-32 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center animate-bounce delay-500">
                    <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute bottom-32 left-32 w-10 h-10 bg-purple-300/20 rounded-lg flex items-center justify-center animate-bounce delay-1500">
                    <span className="text-xl">💡</span>
                </div>
                <div className="absolute top-1/2 right-20 w-8 h-8 bg-indigo-300/20 rounded-lg flex items-center justify-center animate-bounce delay-2000">
                    <span className="text-lg">✨</span>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    {/* Enhanced Content Container */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                Let's build something that matters
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-4xl mx-auto animate-slide-up delay-200">
                            I'm always excited to collaborate on projects that
                            challenge me, push boundaries, and hopefully make a
                            positive impact. I believe the best work happens
                            when curious, passionate people come together to
                            solve interesting problems.
                        </p>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-400">
                            <Link to="/contact" className="group">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        <svg
                                            className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
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
                                        Get In Touch
                                    </span>
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Button>
                            </Link>

                            <Link to="/work" className="group">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                                >
                                    <span className="flex items-center">
                                        <svg
                                            className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                        View My Work
                                    </span>
                                </Button>
                            </Link>
                        </div>

                        {/* Additional Interactive Elements */}
                        <div className="mt-12 flex justify-center items-center space-x-8 animate-slide-up delay-600">
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                                    Available for projects
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                                <span className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                                    Remote friendly
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                                <span className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                                    Quick response
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
