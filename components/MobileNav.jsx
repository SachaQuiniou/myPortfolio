"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <RxHamburgerMenu className="text-4xl text-primary" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Sacha <span className="text-primary">.</span>Q
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${
                                    link.path === pathname &&
                                    "text-primary border-b-2 border-primary"
                                } text-xl hover:text-primary transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
