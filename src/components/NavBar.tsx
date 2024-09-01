import { useEffect, useState } from "react";
import DarkBtn from "./buttons/DarkBtn";
import LightBtn from "./buttons/LightBtn";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
    const [theme, setTheme] = useState<string>();

    useEffect(() => {
        const pageTheme = localStorage.getItem("theme") || "light";
        setTheme(pageTheme);
    }, []);

    useEffect(() => {
        const handleThemeChange = () => {
            const htmlElement = document.querySelector("html");

            if (theme === "light") {
                htmlElement?.classList.remove("dark");
                localStorage.setItem("theme", "light");
            } else if (theme === "dark") {
                htmlElement?.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
        };
        handleThemeChange();
    }, [theme]);

    return (
        <header className="flex z-50 w-full text-sm py-4 dark:bg-gray-800 sticky top-0 bg-stone-100">
            <nav className="flex items-center mx-5 w-full sm:justify-end">
                <div className="flex gap-5 text-center">
                    <a
                        href="#splashPage"
                        className="font-medium text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                        Home
                    </a>
                    <a
                        href="#aboutMe"
                        className="font-medium text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                        About Me
                    </a>
                    <a
                        href="#projectShowcase"
                        className="font-medium text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                        Project Showcase
                    </a>
                    <a
                        href="#contactMe"
                        className="font-medium text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                    >
                        Contact Me
                    </a>
                </div>
                {/* dark mode button toggle */}
                {theme === "light" && <DarkBtn setTheme={setTheme} />}
                {/* light mode button toggle */}
                {theme === "dark" && <LightBtn setTheme={setTheme} />}
            </nav>
        </header>
    );
};

export default NavBar;
