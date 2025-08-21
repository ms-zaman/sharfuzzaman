import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Section, SectionHeader, Grid, Card, CardHeader, CardTitle, CardDescription } from "~/components/ui";
import { ProjectCard } from "~/components/portfolio";
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
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm animate-fade-in mb-8">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-700">
                            My Portfolio
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-slide-up">
                        Where ideas meet
                        <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text animate-slide-up delay-200">
                            implementation
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8 animate-slide-up delay-400">
                        Crafting digital solutions that solve real problems
                    </p>
                    
                    <div className="mt-6 animate-fade-in delay-600">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="shadow-lg hover:-translate-y-1 transition-transform duration-300">
                                Let's Work Together
                            </Button>
                        </Link>
                    </div>
                    
                    <div className="mt-10 inline-flex animate-fade-in delay-800">
                        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 shadow-sm">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-medium text-slate-800">Focused on user-centered solutions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="relative px-6 py-24 overflow-hidden">
                {/* Background with gradient and pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-50">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-1/3 left-1/5 w-24 h-24 bg-blue-400/10 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-1/4 right-1/5 w-32 h-32 bg-indigo-400/10 rounded-full animate-pulse delay-700"></div>
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-indigo-50/80 backdrop-blur-sm rounded-full border border-indigo-200/50 shadow-sm animate-fade-in mb-4">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-medium text-indigo-700">
                                Client Feedback
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center animate-fade-in">
                            Client Testimonials
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 animate-scale-x"></div>
                        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
                            Don't just take my word for it – here's what clients have to say about working with me.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-300">
                            <div className="flex items-center mb-6">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-lg italic text-slate-700 mb-8">
                                "Sharfuzzaman delivered our e-commerce site <span className="text-blue-600 font-medium">ahead of schedule</span> and exceeded our expectations. His attention to detail and ability to translate our vision into reality was impressive."
                            </p>
                            <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                                    <span className="text-blue-600 font-semibold">JD</span>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">John Doe</p>
                                    <p className="text-sm text-slate-500">CEO, TechStart</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-500">
                            <div className="flex items-center mb-6">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-lg italic text-slate-700 mb-8">
                                "Working with Sharfuzzaman was a <span className="text-purple-600 font-medium">game-changer</span> for our startup. He not only built a beautiful website but also provided valuable insights that improved our overall user experience."
                            </p>
                            <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                                    <span className="text-purple-600 font-semibold">JS</span>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Jane Smith</p>
                                    <p className="text-sm text-slate-500">Founder, DesignHub</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-700">
                            <div className="flex items-center mb-6">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-lg italic text-slate-700 mb-8">
                                "The dashboard Sharfuzzaman built for our team has <span className="text-green-600 font-medium">transformed how we work</span>. It's intuitive, fast, and exactly what we needed. His communication throughout the project was excellent."
                            </p>
                            <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
                                    <span className="text-green-600 font-semibold">RJ</span>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Robert Johnson</p>
                                    <p className="text-sm text-slate-500">CTO, DataViz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="relative px-6 py-24 overflow-hidden">
                {/* Background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/50">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z' /%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm animate-fade-in mb-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-medium text-blue-700">
                                Portfolio Highlights
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center animate-fade-in">
                            Featured Projects
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8 animate-scale-x"></div>
                        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
                            A selection of my most impactful work. Each project represents a unique challenge and solution.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div key={project.id} className={`animate-fade-in delay-${(index + 2) * 100}`}>
                                <ProjectCard project={project} variant="grid" size="md" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center animate-fade-in delay-800">
                        <a 
                            href="#portfolio-browser" 
                            className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 text-slate-800 font-medium rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <span>View All Projects</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            

            {/* My Process Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                {/* Background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50">
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-500/20 rotate-45 animate-spin-slow"></div>
                    <div className="absolute bottom-1/3 right-1/6 w-5 h-5 bg-indigo-500/20 rotate-45 animate-spin-slow delay-500"></div>
                    <div className="absolute top-2/3 left-1/4 w-6 h-6 bg-purple-500/20 rounded-md animate-bounce-slow delay-300"></div>
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm animate-fade-in mb-4">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm font-medium text-blue-700">
                                Methodology
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center animate-fade-in">
                            My Process
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 animate-scale-x"></div>
                        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
                            Great work doesn't happen by accident – it's the result of thoughtful planning, intentional execution, and genuine care for the end user.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Understanding First</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Every project begins with a deep dive into the problem we're solving. I collaborate closely with clients to understand not just what they want, but <span className="text-blue-600 font-medium">why they want it</span>, and who it's for.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-400">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Design Collaboration</h3>
                            <p className="text-slate-700 leading-relaxed">
                                I work hand-in-hand with designers to ensure the final product honors the original vision while adding that <span className="text-green-600 font-medium">extra polish</span> that makes interfaces truly shine.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-500">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Clean, Maintainable Code</h3>
                            <p className="text-slate-700 leading-relaxed">
                                I don't just make things work – I make them <span className="text-purple-600 font-medium">work well</span>. My code is clean, well-documented, and built to scale.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-600">
                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Performance & Optimization</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Fast, accessible, and optimized for all devices. Every project is built with <span className="text-orange-600 font-medium">performance</span> and user experience as top priorities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="relative px-6 py-24 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700">
                    {/* Floating Circles */}
                    <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                    <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-blue-300/10 rounded-full blur-xl animate-pulse delay-300"></div>
                    
                    {/* Geometric Shapes */}
                    <div className="absolute top-1/6 right-1/4 w-8 h-8 bg-white/10 rotate-45 animate-spin-slow"></div>
                    <div className="absolute bottom-1/6 left-1/4 w-6 h-6 bg-indigo-200/20 rotate-45 animate-spin-slow delay-500"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-xl">
                        <div className="flex flex-col items-center">
                            <div className="inline-flex items-center px-4 py-2 bg-indigo-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30 shadow-sm animate-fade-in mb-6">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-sm font-medium text-indigo-200">
                                    Ready to Collaborate
                                </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center animate-fade-in">
                                Ready to bring your vision to life?
                            </h2>
                            
                            <p className="text-xl text-blue-100 mb-8 text-center max-w-2xl mx-auto animate-fade-in delay-200">
                                I'm currently available for freelance work. Let's discuss how I can help you create exceptional digital experiences.
                            </p>
                            
                            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in delay-300">
                                <span>Get in Touch</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
