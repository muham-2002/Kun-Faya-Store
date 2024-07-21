"use client";
import React from "react";
import Bannerdiv from "@/lib/ui/bannerdiv";
import AnimatedButton from "@/lib/ui/animatedButton";

export function CollectionHeading({ title, description }: { title: string, description: string }) {
    return (
        <Bannerdiv>
            <div className="flex flex-col items-center gap-2 w-full">
                <p className="text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center">
                    {title}
                </p>
                {description != "" &&
                    <p className="text-base w-[95%] mx-auto md:text-lg mt-4 text-white font-normal inter-var text-center">
                        {description}
                    </p>
                }
            </div>
            <AnimatedButton text="View All"/>
        </Bannerdiv>
    );
}
