/// <reference types="vite/client" />
import {
    HeadContent,
    Link,
    Scripts,
    createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            ...seo({
                title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
                description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
            }),
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
            { rel: "icon", href: "/favicon.ico" },
        ],
        scripts: [
            {
                src: "/customScript.js",
                type: "text/javascript",
            },
        ],
    }),
    errorComponent: DefaultCatchBoundary,
    notFoundComponent: () => <NotFound />,
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu on window resize (when switching to desktop)
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                // md breakpoint
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close mobile menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            const nav = document.querySelector("nav");
            if (isMobileMenuOpen && nav && !nav.contains(target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu with Escape key
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body>
                <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 relative">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link
                                to="/"
                                className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                            >
                                Sharfuzzaman
                            </Link>

                            <div className="hidden md:flex items-center space-x-8">
                                <Link
                                    to="/"
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    activeOptions={{ exact: true }}
                                    className="text-slate-700 hover:text-blue-600 transition-colors"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    className="text-slate-700 hover:text-blue-600 transition-colors"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/work"
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    className="text-slate-700 hover:text-blue-600 transition-colors"
                                >
                                    Work
                                </Link>
                                <Link
                                    to="/beyond-code"
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    className="text-slate-700 hover:text-blue-600 transition-colors"
                                >
                                    Beyond Code
                                </Link>
                                <Link
                                    to="/contact"
                                    activeProps={{
                                        className: "bg-blue-700",
                                    }}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Contact
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu panel */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white border-t border-slate-200 animate-slide-up">
                            <div className="px-6 py-4 space-y-4">
                                <Link
                                    to="/"
                                    onClick={closeMobileMenu}
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    activeOptions={{ exact: true }}
                                    className="block text-slate-700 hover:text-blue-600 transition-colors py-2"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={closeMobileMenu}
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    className="block text-slate-700 hover:text-blue-600 transition-colors py-2"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/work"
                                    onClick={closeMobileMenu}
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    className="block text-slate-700 hover:text-blue-600 transition-colors py-2"
                                >
                                    Work
                                </Link>
                                <Link
                                    to="/beyond-code"
                                    onClick={closeMobileMenu}
                                    activeProps={{
                                        className:
                                            "text-blue-600 font-semibold",
                                    }}
                                    className="block text-slate-700 hover:text-blue-600 transition-colors py-2"
                                >
                                    Beyond Code
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={closeMobileMenu}
                                    activeProps={{
                                        className: "bg-blue-700",
                                    }}
                                    className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Mobile menu backdrop */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-40 md:hidden"
                        onClick={closeMobileMenu}
                    />
                )}

                {children}

                {/* Footer */}
                <footer className="bg-slate-900 text-white">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <div className="grid md:grid-cols-4 gap-8">
                            {/* Brand Section */}
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-bold mb-4">
                                    Sharfuzzaman
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                                    Frontend developer crafting digital
                                    experiences that feel like home. Building
                                    interfaces that aren't just pixel-perfect,
                                    but human-perfect.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:hello@sharfuzzaman.dev"
                                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        aria-label="Email"
                                    >
                                        <svg
                                            className="w-5 h-5"
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
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-semibold mb-4">
                                    Quick Links
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/work"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/beyond-code"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            Beyond Code
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="font-semibold mb-4">Services</h4>
                                <ul className="space-y-2 text-slate-300">
                                    <li>Frontend Development</li>
                                    <li>React Applications</li>
                                    <li>WordPress Development</li>
                                    <li>UI Implementation</li>
                                    <li>Performance Optimization</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-slate-400 text-sm">
                                © {new Date().getFullYear()} Sharfuzzaman. All
                                rights reserved.
                            </p>
                            <p className="text-slate-400 text-sm mt-4 md:mt-0">
                                Built with React, TanStack Router & Tailwind CSS
                            </p>
                        </div>
                    </div>
                </footer>

                <TanStackRouterDevtools position="bottom-right" />
                <Scripts />
            </body>
        </html>
    );
}
