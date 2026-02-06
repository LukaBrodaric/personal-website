"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFeatureWork(data?.featureWork)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section id="projects">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Projects</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-primary/10">
                        {featureWork?.map((value: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 border-primary/10 sm:border-l first:sm:border-l-0 lg:first:border-l-0 lg:[&:nth-child(4n+1)]:border-l-0"
                                >
                                    <Link 
                                        href={value?.link || "/"} 
                                        className="overflow-hidden"
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                    >
                                        <Image
                                            src={value?.image}
                                            alt="Image"
                                            width={490}
                                            height={300}
                                            className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <Link 
                                            href={value?.link || "/"}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                        >
                                            <h4>{value?.title}</h4>
                                        </Link>
                                        <div className="flex">
                                            <p>{value?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork