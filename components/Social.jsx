import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/SachaQuiniou" },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/sachaquiniou/",
    },
    {
        icon: <SiGmail />,
        path: "mailto:sacha.quiniou@gmail.com",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
