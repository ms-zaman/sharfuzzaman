/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-out",
                "slide-up": "slideUp 0.8s ease-out",
                "scale-in": "scaleIn 0.2s ease-out",
                "scale-x": "scaleX 0.8s ease-out",
                "spin-slow": "spin 8s linear infinite",
                "bounce-slow": "bounce 3s infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                scaleX: {
                    "0%": { transform: "scaleX(0)" },
                    "100%": { transform: "scaleX(1)" },
                },
            },
            animationDelay: {
                200: "200ms",
                400: "400ms",
                500: "500ms",
                600: "600ms",
                800: "800ms",
                1000: "1000ms",
                1200: "1200ms",
                1500: "1500ms",
                2000: "2000ms",
            },
        },
    },
    plugins: [],
};
