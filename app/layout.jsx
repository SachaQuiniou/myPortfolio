import { Inter as Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

//Components
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-rubik",
});

export const metadata = {
    title: "Sacha Quiniou - Portfolio",
    description:
        "Portfolio de Sacha Quiniou. Créé avec Next.js TailwindCSS et React.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={cn("font-primary", rubik.variable)}>
                <Header />
                {children}
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </body>
        </html>
    );
}
