import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    setTheme: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const DarkBtn = ({ setTheme }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger
                    className="flex ml-4 items-center text-gray-800 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                    aria-label="Turn on dark mode"
                    onClick={() => setTheme("dark")}
                >
                    <MdOutlineDarkMode className="text-2xl" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Dark mode</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default DarkBtn;
