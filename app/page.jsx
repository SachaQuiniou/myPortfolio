import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col pt-24 lg:flex-row items-center justify-between lg:pt-48 lg:pb-24">
                    <div className="text-center lg:text-left order-2 lg:order-none">
                        <span className="text-2xl"> Full-Stack Developer</span>
                        <h1 className="text-6xl leading-[1.1] font-semibold mb-6">
                            Hello I'm <br />
                            <span className="text-primary">Sacha Quiniou</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-foreground/80">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda ratione doloribus dolorem aut
                            temporibus? Suscipit itaque quos doloremque
                            obcaecati veritatis.
                        </p>
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <a href="/files/cvsacha.pdf" download="cvSacha">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-2 text-primary hover:bg-primary/80 hover:text-foreground
                                hover:transition-all duration-500 border-primary"
                                >
                                    <span>Download CV</span>
                                    <FiDownload className="text-xl" />
                                </Button>
                            </a>
                            <div className="mb-8 lg:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center
                                    items-center text-primary text-base hover:bg-primary hover:text-foreground
                                    hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
