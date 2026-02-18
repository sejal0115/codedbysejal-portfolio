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
                                A <span className="gradient-text mt-3">UI/UX Engineer</span>
                            </motion.h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl max-w-[750px] bg-foreground gradient-text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            I translate <span className="font-bold tracking-[-0.04px]">user research</span> into <span className="font-bold tracking-[-0.04px]">scalable,</span> clean, <span className="font-bold tracking-[-0.04px]">responsive interfaces</span> designing systems in Figma and bringing them to life with React.
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

                                    {/* Behance */}
                                    <a
                                        href="https://www.behance.net/sejalmahadik2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Behance"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="currentColor"
                                            fill="currentColor"
                                            height="1.2em"
                                            width="1.2em" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
                                            <g>
                                                <path d="M344.1,244.5c-4.9-4.2-11-6.3-18.2-6.3c-7.8,0-13.9,2.2-18.3,6.7c-4.3,4.5-7,10.5-8.2,18.1h52.7   C351.7,254.9,348.9,248.8,344.1,244.5z" />
                                                <path d="M214.3,266.1c-3.8-1.7-9-2.6-15.8-2.7h-39v42.2H198c6.9,0,12.2-0.9,16-2.8c7-3.5,10.4-10,10.4-19.7   C224.4,274.9,221,269.2,214.3,266.1z" />
                                                <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M291.6,182.3h67.8V202h-67.8   L291.6,182.3L291.6,182.3z M250.7,310.6c-3,4.9-6.7,9.1-11.2,12.4c-5,3.9-11,6.5-17.9,8c-6.9,1.4-14.3,2.1-22.4,2.1H128V174.9h76.5   c19.3,0.3,33,5.9,41,16.9c4.8,6.7,7.2,14.8,7.2,24.2c0,9.6-2.4,17.4-7.3,23.3c-2.7,3.3-6.8,6.3-12.1,9c8.1,3,14.2,7.6,18.3,14   s6.2,14.1,6.2,23.2C257.8,294.7,255.4,303.1,250.7,310.6z M384,283.2h-85.2c0.5,11.7,4.5,20,12.2,24.7c4.7,2.9,10.3,4.4,16.9,4.4   c6.9,0,12.6-1.8,17-5.4c2.4-1.9,4.5-4.6,6.3-8.1h31.2c-0.8,6.9-4.6,14-11.3,21.2c-10.5,11.4-25.1,17.1-44,17.1   c-15.6,0-29.3-4.8-41.2-14.4c-11.9-9.6-17.9-25.2-17.9-46.8c0-20.3,5.4-35.8,16.1-46.6c10.8-10.8,24.7-16.2,41.8-16.2   c10.2,0,19.4,1.8,27.5,5.5c8.2,3.6,14.9,9.4,20.2,17.3c4.8,6.9,7.9,15,9.3,24.2C383.8,265.4,384.1,273.1,384,283.2z" />
                                                <path d="M214.8,233.3c4.3-2.6,6.4-7.3,6.4-13.9c0-7.4-2.8-12.2-8.5-14.6c-4.9-1.6-11.1-2.5-18.7-2.5h-34.4v34.9H198   C204.9,237.3,210.4,236,214.8,233.3z" />
                                            </g>
                                        </svg>
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

                                    {/* Dev community */}
                                    {/* <a
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
                                    </a> */}
                                    {/* Dribbble */}
                                    <a
                                        href="https://dribbble.com/sejal-s-mahadik"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Dribbble "
                                        className='w-5'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" stroke="currentColor"
                                            fill="currentColor" viewBox="0 0 32 32" version="1.1">
                                            <title>dribble</title>
                                            <path d="M25.916 7.921c-1.881 2.234-4.289 3.965-7.035 5.009l-0.118 0.039c0.3 0.612 0.587 1.231 0.85 1.857 0.1 0.225 0.187 0.45 0.275 0.662 0.927-0.102 2.003-0.16 3.092-0.16 2.063 0 4.077 0.208 6.023 0.605l-0.193-0.033c-0.020-3.040-1.107-5.821-2.904-7.994l0.017 0.021zM13.001 3.569c1.595 2.15 3.176 4.6 4.598 7.151l0.178 0.347c2.712-0.908 4.989-2.511 6.694-4.6l0.021-0.026c-2.247-2.006-5.228-3.232-8.494-3.232-1.063 0-2.096 0.13-3.084 0.375l0.088-0.018zM3.46 13.395c4.219-0.022 8.295-0.59 12.176-1.636l-0.333 0.076c-1.652-2.899-3.222-5.318-4.912-7.644l0.163 0.236c-3.596 1.721-6.227 4.966-7.077 8.875l-0.015 0.085zM6.484 24.585c2.42-3.882 6.010-6.839 10.271-8.408l0.141-0.045c0.169-0.056 0.337-0.105 0.506-0.15-0.325-0.731-0.675-1.458-1.040-2.174-3.888 1.154-8.355 1.819-12.977 1.819-0.066 0-0.131-0-0.196-0l0.010 0-0.005 0.39c0 0.003 0 0.006 0 0.009 0 3.297 1.25 6.302 3.301 8.568l-0.010-0.011zM21.005 27.809c-0.682-3.699-1.63-6.957-2.863-10.070l0.126 0.361-0.082 0.025c-4.314 1.346-7.826 4.192-10.002 7.915l-0.045 0.083c2.145 1.688 4.885 2.707 7.863 2.707 1.805 0 3.522-0.374 5.078-1.049l-0.083 0.032zM28.646 18.052c-1.571-0.474-3.376-0.747-5.245-0.747-0.964 0-1.911 0.073-2.836 0.213l0.104-0.013c0.98 2.564 1.842 5.629 2.436 8.789l0.054 0.344c2.874-1.96 4.893-4.993 5.482-8.51l0.010-0.075zM16 30.996c0 0 0 0-0 0-8.282 0-14.996-6.714-14.996-14.996s6.714-14.996 14.996-14.996c8.282 0 14.996 6.714 14.996 14.996 0 0 0 0 0 0v0c-0.011 8.277-6.718 14.984-14.995 14.996h-0.001z" />
                                        </svg>
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
