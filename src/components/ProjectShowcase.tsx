import React from "react";
import { GrGithub } from "react-icons/gr";
import { MdOpenInNew } from "react-icons/md";
import projects from "./projects";

const ProjectShowcase = () => {
    return (
        <section
            className="bg-gradient-to-b from-sky-400 to-gray-200 dark:from-slate-700 dark:to-black py-6 scroll-mt-10"
            id="projectShowcase"
        >
            <h2 className="text-2xl font-bold mx-20 text-gray-800 dark:text-white text-center pb-4">
                Projects
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:mx-20 gap-6 mx-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white border border-black shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition ease-in-out sm:hover:scale-110"
                    >
                        <picture className="border-b border-black dark:border-gray-700">
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
                                alt=""
                                className=" h-56 object-cover rounded-t-xl w-full"
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
                                        aria-label="project repository"
                                    >
                                        <GrGithub className="text-xl dark:text-white" />
                                    </a>
                                    {/* live page link */}
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="view project in new window"
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
