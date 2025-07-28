import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("message", formData.message);

        try {
            const res = await fetch("https://formspree.io/f/mkgzrepa", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: form,
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error(data?.error || "Something went wrong.");
            }
        } catch (err) {
            toast.error("Network error. Please try again.");
        }
    };



    return (
        <>
            <Toaster position="top-right" />
            <section id="contact" className="flex flex-col border-border px-5 sm:px-20 xl:px-52 bg-background py-20">
                <div className="mesh-gradient border-border border rounded-xl z-0 overflow-hidden">
                    <div className="bg-gradient-primary wave-grid flex flex-col 2xl:flex-row lg:items-center p-8 lg:p-12 gap-12 justify-between">
                        <div className="2xl:mb-10 md:text-center 2xl:text-left">
                            <h1 className="font-bold text-3xl 2xl:text-5xl text-primary">
                                Bringing your ideas to life.<br />Let&#x27;s turn your vision into reality
                            </h1>
                            <p className="text:lg 2xl:text-xl text-secondary mt-2">
                                Have a project in mind or just want to chat? Let&#x27;s connect!
                            </p>
                        </div>
                        <div className="w-full lg:w-[500px] bg-background bg-gradient-gray p-6 border-border border rounded-lg shadow-xl z-50 backdrop-blur-xl">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    />

                                    <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="contact@example.com"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    />

                                    <label className="text-sm font-medium leading-none" htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your message here..."
                                        className="flex min-h-[80px] w-full h-32 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto mt-2 text-sm font-medium"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
