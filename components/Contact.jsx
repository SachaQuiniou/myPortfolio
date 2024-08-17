import { FaPhone, FaEnvelope } from "react-icons/fa";

const contacts = [
    {
        icon: <FaPhone />,
        info: "06 43 45 99 63",
    },
    {
        icon: <FaEnvelope />,
        info: "cerva.sacha@gmail.com",
    },
];

const Contact = () => {
    return (
        <section id="contact">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center pt-12">
                    Contact
                </h2>
            </div>
            <div className="flex flex-row flex-wrap pt-8 items-center justify-evenly lg:pt-24 lg:pb-24">
                {contacts.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li className="flex flex-col lg:flex-row gap-8 items-center">
                                <span className="text-4xl text-primary">
                                    {item.icon}
                                </span>
                                <p>{item.info}</p>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;
