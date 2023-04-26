import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const ContactMe = () => {
    return (
        <section
            className="py-6 bg-gradient-to-t from-sky-400 dark:to-black dark:from-slate-800 scroll-mt-10"
            id="contactMe"
        >
            <h2 className="text-xl font-bold mx-20  text-gray-800 dark:text-white text-center pb-2">
                Contact Me
            </h2>
            <div className="grid grid-cols-2 mx-20">
                <p className="text-gray-800 dark:text-gray-400 bg-yellow-200 p-4 rounded-xl dark:bg-gray-800 h-fit">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro reiciendis aliquid modi sed totam. Natus accusantium
                    ducimus alias accusamus ab cum ut aspernatur, soluta tempora
                    praesentium, culpa nam tempore molestiae.
                </p>
                <form
                    action=""
                    className="mx-6 dark:bg-gray-800 p-4 rounded-xl bg-yellow-200"
                >
                    <label
                        htmlFor="contactName"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        id="contactName"
                        name="name"
                    />
                    <label
                        htmlFor="contactEmail"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        id="contactEmail"
                        name="email"
                    />
                    <label
                        htmlFor="contactMessage"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        Message
                    </label>
                    <TextareaAutosize
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        id="contactMessage"
                        name="message"
                        minRows={4}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mt-4"
                    />
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
