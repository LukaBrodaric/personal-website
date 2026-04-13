import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Apartments Punta Premantura",
        description: "Designed and developed a high-end, SEO-optimized apartment website for a rental 5-unit property in Premantura near Rt Kamenjak using Astro and Tailwind, focused on modern UX and direct booking inquiries.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-7.png",
        link: "https://punta-premantura.com/" 
    },
    {
        title: "EDIH Adria - AI & Digital Innovation Project",
        description: "Contributed to the EDIH Adria project by developing and delivering AI-driven educational workshops focused on practical AI adoption in business and education.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-2.png",
        link: "https://edihadria.eu/en/" 
    },
    {
        title: "Luxury Villa Website & Booking System",
        description: "A modern, SEO-optimized and multilingual website built with Astro, focused on high performance, premium design, and strong conversion.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-3.png",
        link: "https://villaostrocroatia.com/" 
    },
    {
        title: "Real Estate Photography Website – Istria 2nd Home",
        description: "Designed and developed a premium website for a luxury villa, including a fully integrated booking engine with real-time availability, online reservations, and secure payment processing.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-6.png",
        link: "https://fotonekretnine.hr/" 
    },
    {
        title: "Descrify",
        description: "AI-powered tool for generating SEO-optimized real estate descriptions from structured property data. Built with Next.js, TypeScript, and powered by Gemini AI.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-4.png",
        link: "https://descrify.xyz/" 
    },
    {
        title: "Ecommerce Webshop Development + Marketing Strategy",
        description: "Developed a fully customized e-commerce webshop with complete DHL delivery automation, AI-powered customer support, email marketing automation, and intelligent upsell features to increase conversion and operational efficiency.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-1.png",
        link: "https://tartufi-istra.com/en/" 
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};