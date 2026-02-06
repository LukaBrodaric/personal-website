"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Pojavljuje se nakon 200px scrolla
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
            } bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-7">
                    {/* Logo */}
                    <Link href="https://brodaric.xyz/" className="flex items-center gap-2">
                        <Image 
                            src="/favicon.ico" 
                            alt="Luka Brodarič logo" 
                            width={32} 
                            height={32}
                            className="w-8 h-8"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Button asChild className="h-auto rounded-full p-0.5 hidden sm:block">
                        <Link
                            href="mailto:brodaricluka81@gmail.com"
                            className="inline-block p-0.5 rounded-full bg-gradient-to-r from-violet-600 to-amber-500"
                        >
                            <span className="flex items-center gap-2 bg-primary hover:bg-transparent py-2 px-4 rounded-full transition-all duration-300">
                                <Image
                                    src="/images/icon/spark-icon.svg"
                                    alt="contact"
                                    width={14}
                                    height={14}
                                />
                                <span className="text-sm font-semibold text-white">Contact</span>
                            </span>
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" aria-label="Menu">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;