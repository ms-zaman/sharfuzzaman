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
    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body>
                <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
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
                            <button className="md:hidden p-2 text-slate-700 hover:text-blue-600">
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
                            </button>
                        </div>
                    </div>
                </nav>
                {children}
                <TanStackRouterDevtools position="bottom-right" />
                <Scripts />
            </body>
        </html>
    );
}
