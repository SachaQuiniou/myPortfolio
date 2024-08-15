"use client";

import Link from "next/link";

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

const Nav = () => {
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.id}
                        key={index}
                        className="font-medium hover:text-primary transition-all"
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
