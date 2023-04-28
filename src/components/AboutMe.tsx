import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import html5Icon from "../assets/Icons/html5-original.svg";
import cssIcon from "../assets/Icons/css3-original.svg";
import javascriptIcon from "../assets/Icons/javascript-original.svg";
import typescriptIcon from "../assets/Icons/typescript-original.svg";
import reactIcon from "../assets/Icons/react-original.svg";
import vsCodeIcon from "../assets/Icons/vscode-original.svg";
import firebaseIcon from "../assets/Icons/firebase-plain.svg";
import tailwindCssIcon from "../assets/Icons/tailwindcss-plain.svg";
import vitestIcon from "../assets/Icons/vitest.svg";
import gitIcon from "../assets/Icons/git-original.svg";

const AboutMe = () => {
    return (
        <section
            className="py-4 bg-gradient-to-t from-sky-400 dark:to-black dark:from-slate-800 scroll-mt-10"
            id="aboutMe"
        >
            <div className="grid md:grid-cols-2 md:mx-20 md:gap-8 gap-6 mx-4">
                <div className="md:px-4 dark:bg-gray-800 p-4 rounded-xl bg-yellow-200">
                    <h2 className="text-gray-800 dark:text-white text-xl font-bold pb-2">
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
                                </a>
                                . There were many challenges throughout the
                                journey, but I found it to be a fun experience
                                and have gained many skills.
                            </p>
                        </div>
                        <div className="self-end mb-8 flex">
                            <a
                                href="https://github.com/bizarf?tab=repositories"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="My Github repository"
                            >
                                <GoMarkGithub className="text-2xl dark:text-white mr-2" />
                            </a>
                            <a
                                href="mailto:bizarf40@gmail.com"
                                aria-label="bizarf40@gmail.com"
                            >
                                <MdOutlineEmail className="text-2xl dark:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:px-4 dark:bg-gray-800 p-4 rounded-xl bg-yellow-200">
                    <h2 className="text-gray-800 dark:text-white text-xl font-bold pb-2">
                        Technologies and tools
                    </h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                        <div className="flex flex-col items-center">
                            <img src={html5Icon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                HTML
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={cssIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                CSS
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={javascriptIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Javascript
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={typescriptIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Typescript
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={reactIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                React
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src={tailwindCssIcon}
                                className="w-16"
                                alt=""
                            />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Tailwind CSS
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={vsCodeIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                VS Code
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={gitIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Git
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={firebaseIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Firebase
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={vitestIcon} className="w-16" alt="" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Vitest
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
