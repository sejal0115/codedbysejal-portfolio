import React from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};


const About = () => {
    return (
        <>
            <section
                id="about"
                className="flex flex-col border-t-1 border-border px-5 sm:px-20 xl:px-52 bg-background min-h-[500px] py-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl font-bold mb-2">Designing Experiences, Not Just Interfaces</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        I craft visually compelling UIs and develop seamless applications that stand out in both form and function.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 pt-12">
                    <div
                        className="flex flex-col border-1 border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl"
                    >
                        <div className="flex pb-4 items-center">
                            <div className="text-3xl md:text-4xl text-primary mr-5">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    style={{ fill: "var(--primary)" }}
                                    height="45"
                                    width="45"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                                    ></path>
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold text-center">What I can do</h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 pb-4">
                            I collaborate to build effective, user-focused solutions that drive growth:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li className="font-medium">UI/UX Design</li>
                            <li className="font-medium">Fullstack Web Development</li>
                            <li className="font-medium">Database Architecture</li>
                            <li className="font-medium">API Integration & Automation</li>
                        </ul>
                    </div>
                    <div
                        className="flex flex-col border-1 border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl"
                    >
                        <div className="flex pb-4 items-center">
                            <div className="text-3xl md:text-4xl text-primary mr-5">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    style={{ fill: "var(--primary)" }}
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
                                    ></path>
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold text-center">Tools I Use</h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 pb-4">
                            I work with a modern stack to craft fast, scalable, and maintainable digital products:
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="">
                                <h2 className="font-medium">Frontend:</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Tailwind CSS, React
                                </p>
                            </li>
                            <li className="">
                                <h2 className="font-medium">Backend:</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Node.js, MongoDB
                                </p>
                            </li>
                            <li className="">
                                <h2 className="font-medium">Design:</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Figma, Framer, Photoshop
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="flex flex-col border-1 border-border rounded-xl p-8 dark:bg-gradient-gray backdrop-blur-3xl"
                    >
                        <div className="flex pb-4 items-center">
                            <div className="text-3xl md:text-4xl text-primary mr-5">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    style={{ fill: "var(--primary)" }}
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                    ></path>
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold text-center">UI/UX Design</h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 pb-4">
                            Design comes first in everything I build. I focus on creating clean, intuitive, and delightful experiences:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li className="font-medium">Human-Centered Interfaces</li>
                            <li className="font-medium">Clean, Modern Aesthetics</li>
                            <li className="font-medium">Fully Responsive Layouts</li>
                            <li className="font-medium">Interactive Wireframe & Prototypes</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
}

export default About