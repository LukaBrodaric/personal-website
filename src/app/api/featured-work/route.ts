import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Descrify",
        description: "AI-powered tool for generating SEO-optimized real estate descriptions from structured property data. Built with Next.js, TypeScript, and powered by Gemini AI.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-4.png",
        link: "https://descrify.xyz/" 
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
        description: "Designed and developed a premium website for a luxury villa, including a fully integrated booking engine with real-time availability, online reservations, and secure payment processing.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/project-3.png",
        link: "https://villaostrocroatia.com/" 
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