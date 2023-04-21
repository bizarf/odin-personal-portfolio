import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const ContactMe = () => {
    return (
        <div>
            <h2>Contact Me</h2>

            <form action="" className="form-control w-full max-w-md">
                <label htmlFor="contactName">
                    <span className="label-text">Name:</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered max-w-md w-full"
                    id="contactName"
                    name="name"
                />
                <label htmlFor="contactEmail">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    className="input input-bordered max-w-md w-full"
                    id="contactEmail"
                    name="email"
                />
                <label htmlFor="contactMessage">
                    <span className="label-text">Message</span>
                </label>
                <TextareaAutosize
                    className="input input-bordered w-full max-w-md"
                    id="contactMessage"
                    name="message"
                    minRows={4}
                />
            </form>
        </div>
    );
};

export default ContactMe;
