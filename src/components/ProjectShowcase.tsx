import React from "react";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { mdiGithub } from "@mdi/js";

const ProjectShowcase = () => {
    return (
        <section>
            <h2>My work</h2>
            <div className="md:grid grid-cols-3">
                <div className="card shadow-xl">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h3 className="card-title">Test</h3>
                            <div className="flex">
                                <Icon path={mdiGithub} size={1} />
                                <Icon path={mdiOpenInNew} size={1} />
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel, nostrum accusamus corporis veritatis quae
                            quam. Explicabo, doloremque? Corrupti quam nisi nemo
                            est necessitatibus eligendi quibusdam? Accusamus
                            recusandae dolores enim sapiente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
