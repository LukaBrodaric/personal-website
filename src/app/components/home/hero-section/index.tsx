import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/images/icon/linkedin.svg",
            href: "https://www.linkedin.com/in/lukabrodaric/",
            icon: "LinkedIn",
            ariaLabel: "Visit Luka Brodarič on LinkedIn"
        },
        {
            img: "/images/icon/facebook.svg",
            href: "https://www.facebook.com/lukabrodaric33",
            icon: "Facebook",
            ariaLabel: "Visit Luka Brodarič on Facebook"
        },
        {
            img: "/images/icon/instagram.svg",
            href: "https://www.instagram.com/luka.brodaric/",
            icon: "Instagram",
            ariaLabel: "Visit Luka Brodarič on Instagram"
        },
    ];
    
    return (
        <section aria-label="Hero section">
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image 
                            src={"/images/hero-sec/web-background.jpg"} 
                            alt="Professional web development and digital marketing background showcasing modern design" 
                            width={1080} 
                            height={267} 
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image 
                                    src={"/images/hero-sec/luka-brodaric.png"} 
                                    alt="Luka Brodarič - Digital Growth Specialist from Pula, Croatia" 
                                    width={145} 
                                    height={145} 
                                    className="border-4 border-white rounded-full"
                                    priority
                                />
                                <span 
                                    className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" 
                                    aria-label="Available for work"
                                    role="status"
                                />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-start text-left">
                                <h1 className="text-3xl sm:text-4xl font-bold">Luka Brodarič</h1>
                                <p className="text-violet-700 font-normal text-lg sm:text-xl">
                                    Digital Growth Specialist
                                </p>
                                <div className="flex items-center gap-2">
                                    <Image 
                                        src={"/images/icon/map-icon.svg"} 
                                        alt="Location icon" 
                                        width={20} 
                                        height={20}
                                        aria-hidden="true"
                                    />
                                    <p className="text-primary">
                                        <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                            <span itemProp="addressLocality">Pula</span>, <span itemProp="addressCountry">Croatia</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <nav aria-label="Social media links">
                                    <div className="flex items-center gap-2">
                                        {socialIcon?.map((value, index) => {
                                            return (
                                                <Link 
                                                    href={value?.href} 
                                                    key={index} 
                                                    className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
                                                    aria-label={value?.ariaLabel}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Image 
                                                        src={value?.img} 
                                                        alt="" 
                                                        width={18} 
                                                        height={18}
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </nav>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="mailto:brodaricluka81@gmail.com"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                        aria-label="Send email to Luka Brodarič"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt=""
                                                width={14}
                                                height={14}
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">Get in touch</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection