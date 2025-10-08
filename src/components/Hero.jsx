import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FileDown, GalleryHorizontalEnd } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <main id="main" className="bg-square-pattern bg-repeat bg-50 text-start bg-background text-foreground">
                <div id="hero" className="relative flex justify-center items-center p-6 min-h-[calc(100vh-80px)] mx-auto mesh-gradient-center overflow-hidden">
                    <motion.div
                        className="grid grid-cols-1"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Avatar and Title */}
                        <motion.div
                            className="flex flex-col md:flex-row md:items-center gap-10 pb-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <motion.img
                                alt="3D Avatar of Sejal"
                                width="128"
                                height="128"
                                src="./sejal3D_avatar.webp"
                                className="w-32"
                                loading="lazy"
                                style={{ color: "transparent" }}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            />
                            <motion.h1
                                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Hey, I&#x27;m <span className="gradient-text">Sejal</span>
                                <div className="inline-block">✨</div>
                                <br />
                                A <span className="gradient-text mt-3">UI/UX Designer</span>
                            </motion.h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl max-w-[750px] bg-foreground gradient-text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            I <span className="font-bold tracking-[-0.04px]">design</span> and <span className="font-bold tracking-[-0.04px]">build</span> clean, <span className="font-bold tracking-[-0.04px]">user-focused</span> web interfaces that just feel <span className="font-bold tracking-[-0.04px]">right</span>.
                            <br />Passionate about creating seamless user experiences with a creative touch.
                        </motion.p>

                        {/* Buttons and Socials */}
                        <motion.div
                            className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[600px] mt-8"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                        >
                            {/* Call to Actions */}
                            <div className="flex gap-6 lg:gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/SejalMahadik_CV.pdf"
                                    download="Sejal_Mahadik_Resume.pdf" // File name for download
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shadow-xl cursor-pointer"
                                >
                                    <FileDown className="mr-2 h-5 w-5" />
                                    Resume (PDF)
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shadow-xl cursor-pointer"
                                    onClick={() => {
                                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <GalleryHorizontalEnd className="mr-2 h-5 w-5" />
                                    View Projects
                                </motion.a>
                            </div>

                            {/* Divider */}
                            <div className="shrink-0 w-[1px] bg-foreground h-4 hidden lg:block"></div>

                            {/* Social Icons */}
                            <motion.div
                                className="flex items-center pb-10 sm:pb-0 px-5 gap-14 md:gap-8 text-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                            >
                                <div
                                    className="flex items-center pb-10 sm:pb-0 gap-14 md:gap-8 text-xl"
                                >
                                    <a href="https://github.com/sejal0115"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Github"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                            ></path>
                                        </svg>
                                    </a>
                                    {/* Dev community */}
                                    <a
                                        href="https://dev.to/codedbysejal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="DEV "
                                        className='w-5'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 448 512" stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"

                                            className="hover:text-black dark:hover:text-white"
                                            height="1em"
                                            width="1em"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" /></svg>
                                    </a>
                                    {/* LinkedIN */}
                                    <a
                                        href="https://www.linkedin.com/in/sejal-mahadik-69b546170/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Linkedin"
                                    ><svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                            ></path></svg>
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Twitter"
                                    ><svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <path
                                                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                                            ></path></svg>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                {/* Scroll Down Arrow */}
                <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8 text-foreground"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>

            </main>
        </>
    );
};

export default Hero;
