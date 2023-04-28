import React from "react";

const ContactMe = () => {
    return (
        <section
            className="py-6 bg-gradient-to-t from-sky-400 dark:to-black dark:from-slate-800 scroll-mt-10"
            id="contactMe"
        >
            <h2 className="text-xl font-bold mx-20  text-gray-800 dark:text-white text-center pb-4">
                Contact Me
            </h2>
            <div className="grid md:grid-cols-2 md:mx-20 md:gap-8 gap-6 mx-4">
                <p className="text-gray-800 dark:text-gray-400 bg-yellow-200 p-4 rounded-xl dark:bg-gray-800 h-fit">
                    Feel free to send me a message if you have any questions or
                    are interested in my work.
                </p>
                <form
                    action="mailto:bizarf40@gmail.com"
                    method="post"
                    className="dark:bg-gray-800 p-4 rounded-xl bg-yellow-200"
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
                        required
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
                        required
                    />
                    <label
                        htmlFor="contactMessage"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        Message
                    </label>
                    <textarea
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        id="contactMessage"
                        name="message"
                        rows={4}
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mt-4"
                    />
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
