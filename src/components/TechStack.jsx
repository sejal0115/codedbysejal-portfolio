import Slider from 'react-infinite-logo-slider';

const TechStack = () => {
    const techStackList = [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "/github-original.svg" },
    ];

    return (
        <section className="bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto">
                <div className="gap-4">
                    <div className="py-3 Xsm:py-7">
                        <Slider
                            width="120px"
                            duration={40}
                            pauseOnHover
                            blurBorders={false}
                        >
                            {techStackList.map((tech, index) => (
                                <Slider.Slide key={index}>
                                    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 overflow-visible">
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            title={tech.name}
                                            className="mb-2 object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shadow"
                                        />
                                    </div>
                                </Slider.Slide>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
