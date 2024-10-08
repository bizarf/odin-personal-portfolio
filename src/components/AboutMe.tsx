import { MdOutlineEmail } from "react-icons/md";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import techAndTools from "./techAndTools";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const AboutMe = () => {
    return (
        <section
            className="py-4 bg-gradient-to-t from-sky-400 to-gray-200 dark:to-black dark:from-slate-700 scroll-mt-10"
            id="aboutMe"
        >
            <div className="grid md:grid-cols-2 md:mx-20 md:gap-8 gap-6 mx-4">
                <div className="md:px-4 dark:bg-gray-800 p-4 rounded-xl bg-stone-200 border-black border-solid border dark:border-0">
                    <h2 className="text-gray-800 dark:text-white text-xl font-bold mb-4">
                        About Me
                    </h2>
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <p className="text-gray-800 dark:text-gray-400">
                                My name is Tony Hoong, and I am a self taught
                                web developer based in London, United Kingdom.
                            </p>
                            <p className="text-gray-800 dark:text-gray-400 pt-4">
                                My learning journey first started in March 2022
                                through{" "}
                                <a
                                    href="https://www.theodinproject.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    The Odin Project
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.freecodecamp.org/learn/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    FreeCodeCamp
                                </a>
                                .
                            </p>
                            <p className="text-gray-800 dark:text-gray-400 pt-4">
                                I've recently completed a Level 3 Software
                                Development course where I further refined my
                                skills in HTML, CSS, and JavaScript. I also
                                learnt Python and MySQL.
                            </p>
                            <p className="text-gray-800 dark:text-gray-400 pt-4">
                                There have been many challenges throughout the
                                journey, but I found it to be a fun experience
                                and have gained many skills.
                            </p>
                        </div>
                        <div className="self-end mb-10 flex">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a
                                            href="https://www.linkedin.com/in/tony-hoong-ab43a6288/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="My LinkedIn account"
                                        >
                                            <GrLinkedin className="text-2xl dark:text-white mr-2" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>My LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a
                                            href="https://github.com/bizarf"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="My GitHub"
                                        >
                                            <GrGithub className="text-2xl dark:text-white mr-2" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>My GitHub</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a
                                            href="mailto:tonyhoong40@gmail.com"
                                            aria-label="tonyhoong40@gmail.com"
                                        >
                                            <MdOutlineEmail className="text-2xl dark:text-white" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>My Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="md:px-4 dark:bg-gray-800 p-4 rounded-xl bg-stone-200 border-black border-solid border dark:border-0">
                    <h2 className="text-gray-800 dark:text-white text-xl font-bold mb-4">
                        Technologies and tools
                    </h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center">
                        {techAndTools.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-16"
                                />
                                <p className="text-gray-800 dark:text-gray-400 text-sm">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
