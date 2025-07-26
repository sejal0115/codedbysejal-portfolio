import React from 'react';

const projectsData = [
    {
        title: '🎬 PopcornBoard',
        description: 'A movie explorer app using TMDb API with Netflix-style UI.',
        image: '/popcornboard.webp',
        alt: 'PopcornBoard',
        url: 'https://popcornboard.netlify.app/',
        tech: ['React', 'Tailwind CSS', 'TMDb API', 'Responsive UI']
    },
    {
        title: '🌈 Color Tide',
        description:
            'Color Tide is a responsive Gradient Generator PWA built with React.js and Bootstrap, enabling users to create, copy, and download curated CSS gradients.',
        image: '/Tide1.png',
        alt: 'Color Tide Gradient Generator',
        url: 'https://sejal0115.github.io/color-tide/',
        tech: ['React', 'Bootstrap', 'PWA', 'Responsive UI', 'CSS Gradients']
    }
];

const Projects = () => {
    return (
        // <section
        //     id="projects"
        //     className="flex flex-col border-t border-border py-20 px-5 sm:px-20 xl:px-52 bg-background min-h-[calc(100vh-80px)]"
        // >
        //     <div>
        //         <h1 className="text-4xl font-bold mb-2">Projects</h1>
        //         <p className="text-gray-600 dark:text-gray-400">
        //             Take a look at some of the things I've created.
        //         </p>
        //     </div>

        //     <div className="pt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        //         {projectsData.map((project, index) => (
        //             <a
        //                 key={index}
        //                 aria-label={`View ${project.title} project`}
        //                 href={project.url}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="flex h-full"
        //             >
        //                 <div className="relative rounded-lg overflow-hidden group border border-gray-300 dark:border-border">
        //                     <div className="relative">
        //                         <img
        //                             alt={project.alt}
        //                             width="600"
        //                             height="400"
        //                             decoding="async"
        //                             className="w-full h-[200px] object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-20"
        //                             src={project.image}
        //                             style={{ color: 'transparent' }}
        //                         />
        //                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        //                             <div className="p-4">
        //                                 <h1 className="text-xl font-bold text-[hsl(var(--text-heading))]">
        //                                     {project.title}
        //                                 </h1>
        //                                 <p className="text-[hsl(var(--text-heading))] dark:text-zinc-500">
        //                                     {project.description}
        //                                 </p>
        //                                 <div className="flex flex-wrap gap-2 mt-2">
        //                                     {project.tech.map((badge, i) => (
        //                                         <span key={i} className="badge">
        //                                             {badge}
        //                                         </span>
        //                                     ))}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </a>
        //         ))}
        //     </div>
        // </section>
        <section
            id="projects"
            className="flex flex-col border-t border-b border-border py-20 px-5 sm:px-20 xl:px-52 bg-background min-h-[calc(100vh-60px)]"
        >
            <div>
                <h1 className="text-4xl font-bold mb-2">Projects</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Take a look at some of the things I've created.
                </p>
            </div>

            <div className="pt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 auto-rows-fr">
                {projectsData.map((project, index) => (
                    <a
                        key={index}
                        aria-label={`View ${project.title} project`}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col h-full"
                    >
                        <div className="relative rounded-lg overflow-hidden group border border-gray-300 dark:border-border flex flex-col h-full">
                            {/* Project Image */}
                            <div className="relative">
                                <img
                                    alt={project.alt}
                                    width="600"
                                    height="400"
                                    decoding="async"
                                    className="w-full h-[200px] object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-20"
                                    src={project.image}
                                    style={{ color: 'transparent' }}
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <div className="p-4">
                                        <h1 className="text-xl font-bold text-[hsl(var(--text-heading))]">
                                            {project.title}
                                        </h1>
                                        <p className="text-[hsl(var(--text-heading))] dark:text-zinc-300">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tech.map((badge, i) => (
                                                <span key={i} className="badge">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>

    );
};

export default Projects;
