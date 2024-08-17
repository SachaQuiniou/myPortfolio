import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const skills = [
    {
        name: "TAILWIND",
        icon: <RiTailwindCssFill />,
    },
    {
        name: "NODE.JS",
        icon: <FaNodeJs />,
    },
    {
        name: "REACT",
        icon: <FaReact />,
    },
    {
        name: "NEXT.JS",
        icon: <RiNextjsFill />,
    },
    {
        name: "POSTGRESQL",
        icon: <BiLogoPostgresql />,
    },
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center pt-12">
                    Skills
                </h2>
                <div className="flex flex-row flex-wrap pt-8 items-center gap-8 justify-evenly lg:pt-24 lg:pb-24">
                    {skills.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="lg:w-48 lg:h-48 w-32 h-32 bg-card border border-primary rounded-lg flex flex-col items-center justify-center
                                    text-primary text-4xl text-center hover:bg-primary/80 hover:text-foreground shadow-xl hover:shadow-2xl
                                    hover:transition-all duration-500"
                            >
                                <div className="text-6xl">{item.icon}</div>

                                <p className="text-sm pt-4">{item.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
