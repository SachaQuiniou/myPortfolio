"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
    {
        name: "Home",
        id: "#home",
    },
    {
        name: "Skills",
        id: "#skills",
    },
    {
        name: "Projects",
        id: "#projects",
    },
    {
        name: "Contact",
        id: "#contact",
    },
];

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex justify-center items-center">
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
                                href={link.id}
                                key={index}
                                className="text-xl hover:text-primary"
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
