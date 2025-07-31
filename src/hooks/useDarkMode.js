import { useEffect, useState } from "react";

export default function useDarkMode() {
    const getInitialTheme = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme"); // ✅ Dark default
        }
        return true; // ✅ Server render default to dark
    };

    const [darkMode, setDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}
