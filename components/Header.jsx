import Link from "next/link";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 lg:py-12">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Sacha <span className="text-primary">.</span>
                    </h1>
                </Link>

                {/* DesktopNav */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                </div>

                {/* MobileNav */}
                <div className=" lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
