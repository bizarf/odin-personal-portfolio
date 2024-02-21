import React from "react";
import Typewriter from "typewriter-effect";

const Splash = () => {
    return (
        <section
            className="py-4 bg-gradient-to-b from-sky-400 to-gray-200 dark:to-black dark:from-slate-800 scroll-mt-14"
            id="splashPage"
        >
            <h1 className="text-center md:text-3xl md:py-40 py-20 text-xl sm:text-2xl sm:py-28 sm:px-4 text-gray-800 dark:text-white">
                {/* Hi, my name is Tony and I am a web developer. */}
                <Typewriter
                    options={{
                        strings:
                            "Hi, my name is Tony and I am a web developer.",
                        autoStart: true,
                    }}
                />
            </h1>
        </section>
    );
};

export default Splash;
