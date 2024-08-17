import { FaCaretSquareUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 lg:py-12">
            <div className="container mx-auto pt-8">
                <div className="flex items-center justify-center gap-12 border-t-2 border-foreground/10 pt-8">
                    <p className="text-center">Create By Me Copyright © 2024</p>
                    <ul>
                        <li>
                            <a href="#home" className="text-4xl text-primary">
                                <FaCaretSquareUp />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
