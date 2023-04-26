import React from "react";
// import { MdAccountCircle } from "react-icons/md";
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
            <div className="md:grid md:grid-cols-2 md:mx-20 md:gap-8">
                {/* <div className="md:flex-1">
                    <h2 className="text-gray-800 dark:text-white text-xl pl-2">
                        Tony Hoong
                    </h2>
                    <MdAccountCircle className="dark:text-white text-9xl" />
                </div> */}
                {/* <div className="md:max-w-xl">
                    <h1 className="text-gray-800 dark:text-white text-xl">
                        About Me
                    </h1>
                    <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus officia voluptas quaerat labore earum
                        ab. Cumque dolore quis quam officiis sequi? Odit,
                        corrupti praesentium aperiam voluptatum accusamus
                        distinctio iusto debitis.
                    </p>
                </div> */}
                <div className="md:px-4 dark:bg-gray-800 p-4 rounded-xl bg-yellow-200">
                    <h2 className="text-gray-800 dark:text-white text-xl font-bold pb-2">
                        About Me
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque nulla labore recusandae tempore excepturi magni
                        error, illum veritatis iste qui, animi dignissimos,
                        repellat reprehenderit maiores ipsum earum tempora est
                        voluptates!
                    </p>
                </div>
                <div className="md:px-4 dark:bg-gray-800 p-4 rounded-xl bg-yellow-200">
                    <h2 className="text-gray-800 dark:text-white text-xl font-bold pb-2">
                        Technologies and tools
                    </h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                        <div className="flex flex-col items-center">
                            <img src={html5Icon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                HTML
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={cssIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                CSS
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={javascriptIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Javascript
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={typescriptIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Typescript
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={reactIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                React
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={tailwindCssIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Tailwind CSS
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={vsCodeIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                VS Code
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={gitIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Git
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={firebaseIcon} className="w-16" />
                            <p className="text-gray-800 dark:text-gray-400 text-sm">
                                Firebase
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={vitestIcon} className="w-16" />
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
