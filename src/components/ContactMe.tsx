import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "@/components/ui/input";

const ContactMe = () => {
    const [successMsg, setSuccessMsg] = useState<Boolean>(false);
    const [errorMsg, setErrorMsg] = useState<Boolean>(false);

    // zod validation handles form inputs
    const formSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        message: z.string().min(10).max(500),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // send the form values to formspree
            const response = await fetch("https://formspree.io/f/mjkbzbyw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setSuccessMsg((state) => !state);
                setTimeout(() => setSuccessMsg((state) => !state), 3000);
                // resets the form
                form.reset();
            } else {
                setErrorMsg((state) => !state);
                setTimeout(() => setErrorMsg((state) => !state), 3000);
            }
        } catch (err) {
            console.log(err);
            setErrorMsg((state) => !state);
            setTimeout(() => setErrorMsg((state) => !state), 3000);
        }
    };

    return (
        <section
            className="py-6 bg-gradient-to-t from-sky-400 to-gray-200 dark:to-black dark:from-slate-800 scroll-mt-10"
            id="contactMe"
        >
            <h2 className="text-xl font-bold mx-20  text-gray-800 dark:text-white text-center pb-4">
                Contact Me
            </h2>
            <div className="grid md:grid-cols-2 md:mx-20 md:gap-8 gap-6 mx-4">
                <p className="text-gray-800 dark:text-gray-400 bg-stone-200 p-4 rounded-xl dark:bg-gray-800 h-fit border-black border-solid border dark:border-0">
                    Feel free to send me a message if you have any questions or
                    are interested in my work.
                </p>
                {/* new form built using shadcn ui form components */}
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="dark:bg-gray-800 p-4 rounded-xl bg-stone-200 border-black border-solid border dark:border-0 space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Message"
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {successMsg && (
                            <p className="text-md font-bold text-green-600">
                                Message successfully sent
                            </p>
                        )}{" "}
                        {errorMsg && (
                            <p className="text-md font-bold text-destructive">
                                Something went wrong
                            </p>
                        )}
                        <Button
                            type="submit"
                            className="bg-blue-600 dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default ContactMe;
