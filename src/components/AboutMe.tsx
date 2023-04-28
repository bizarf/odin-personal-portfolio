import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import techAndTools from "./techAndTools";

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
                        {techAndTools.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <img src={item.icon} alt="" className="w-16" />
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
