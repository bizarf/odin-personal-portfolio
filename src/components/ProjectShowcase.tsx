import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { MdOpenInNew } from "react-icons/md";
import projects from "./Projects";

const ProjectShowcase = () => {
    return (
        <section
            className="bg-gradient-to-b from-sky-400 dark:from-slate-800 dark:to-black py-4 scroll-mt-10"
            id="projectShowcase"
        >
            <h2 className="text-xl font-bold mx-20 text-gray-800 dark:text-white ">
                Projects
            </h2>
            <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 mx-20 ">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] m-2"
                    >
                        <picture>
                            <source
                                srcSet={project.mainImage}
                                media="(min-width: 768px)"
                            />
                            <source
                                srcSet={project.tabletImage}
                                media="(min-width: 640px)"
                            />
                            <img
                                src={project.mobileImage}
                                alt={project.cardTitle}
                                className="w-full h-auto rounded-t-xl"
                            />
                        </picture>
                        <div className="p-4 md:p-5">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    {project.cardTitle}
                                </h3>
                                <div className="flex">
                                    {/* repo link */}
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="pr-2"
                                    >
                                        <GoMarkGithub className="text-xl dark:text-white" />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <MdOpenInNew className="text-xl dark:text-white" />
                                    </a>
                                </div>
                            </div>
                            <p className="mt-1 text-gray-800 dark:text-gray-400">
                                {project.cardDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectShowcase;
