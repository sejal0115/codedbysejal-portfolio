import Slider from 'react-infinite-logo-slider';

const TechStack = () => {
    const techStackList = [
        "React.js", "Tailwind CSS", "JavaScript", "Redux Toolkit", "Context API", "Git", "GitHub",
        "HTML5", "CSS3", "Framer Motion", "Node.js", "Express.js",
        "MongoDB", "JWT Auth", "RESTful APIs",
        "Figma", "Vite", "ShadCN/UI",
        "UI/UX"
    ];

    return (
        <section className="bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto">
                <div className="gap-4">
                    <div className="py-3 Xsm:py-7">
                        <Slider
                            width="200px"
                            duration={50}
                            pauseOnHover={true}
                            blurBorders={false}
                        >
                            {techStackList.map((tech, index) => (
                                <Slider.Slide key={index}>
                                    <div className="flex items-center justify-center h-full px-6">
                                        <p className="text-lg font-semibold text-foreground">
                                            {tech}
                                        </p>
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
