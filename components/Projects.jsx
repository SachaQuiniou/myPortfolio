import Link from "next/link";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const projects = [
    {
        name: "My Portfolio",
        icons: [<RiTailwindCssFill />, <FaReact />, <RiNextjsFill />],
        resume: "I'm using the creation of this portfolio as an opportunity to strengthen my technical skills. I chose to explore and learn new technologies during this project. ",
        image: "/img/portfolio.png",
        link: "https://sacha-quiniou.vercel.app/",
        github: "https://github.com/SachaQuiniou/myPortfolio",
    },
    {
        name: "Figurine Website",
        icons: [<FaNodeJs />, <BiLogoPostgresql />],
        resume: "Practical exercise during my training. to practice on express and postgresql.",
        image: "/img/figurine.png",
        link: "",
        github: "https://github.com/SachaQuiniou/Figurine-Website",
    },
    {
        name: "Deck Builder",
        icons: [<FaNodeJs />, <BiLogoPostgresql />],
        resume: "Practical exercise during my training. to practice on express and postgresql.",
        image: "/img/deckbuilder.png",
        link: "",
        github: "https://github.com/SachaQuiniou/Deck-Builder",
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center pt-12">
                    Projects
                </h2>
                <div className="flex lg:flex-row flex-wrap flex-col justify-evenly gap-4 pt-8 lg:pt-24 lg:pb-24">
                    {projects.map((item, index) => {
                        return (
                            <div
                                className="mb-12 lg:w-96 lg:h-160  flex flex-col text-center items-center
                                bg-card border border-primary rounded-lg brightness-90 hover:brightness-110
                                hover:scale-105 shadow-xl hover:shadow-2xl hover:transition-all duration-500 "
                            >
                                <div>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="object-fill w-full h-full border-b-2 border-primary rounded-t-lg"
                                    />
                                </div>
                                <div className="flex  flex-col p-4 gap-8 items-center">
                                    <h3 className="text-xl">{item.name}</h3>
                                    <div className="flex text-4xl gap-8">
                                        {item.icons}
                                    </div>

                                    <p className="text-foreground/80 text-justify">
                                        {item.resume}
                                    </p>
                                    <div className="flex gap-4 text-primary">
                                        <Link
                                            href={item.link}
                                            className="hover:text-foreground"
                                        >
                                            {item.link ? "Preview" : ""}
                                        </Link>
                                        <Link
                                            href={item.github}
                                            className="hover:text-foreground"
                                        >
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
