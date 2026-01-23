/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import tefal from "../../public/images/Tefal_logo.svg";
import chery from "../../public/images/Chery_logo.svg.png";
import jmc from "../../public/images/JMC_Motor_logo.png";
import ariston from "../../public/images/Ariston-logo.png";
import lg from "../../public/images/LG_logo_(2014).svg.png";
import westpoint from "../../public/images/westpoint-logo-png-transparent.png";
import rowenta from "../../public/images/Rowenta_logo.svg.png";
import Image from 'next/image';
const reviews = [
    {
        name: "tefal",
        img: tefal,
    },
    {
        name: "chery",
        img: chery,
    },
    {
        name: "jmc",
        img: jmc,
    },
    {
        name: "ariston",
        img: ariston,
    },
    {
        name: "lg",
        img: lg,
    },
    {
        name: "westpoint",
        img: westpoint,
    },
    {
        name: "rowenta",
        img: rowenta,
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,

}: {
    img: string

}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-fit cursor-pointer   ",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="">
                <Image className="mt-10" width="100" height="100" alt="" src={img} />

            </div>

        </figure>
    )
}

export function Marquee3D() {
    return (
        <div className="relative -right-30 flex h-[600px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
            <div
                className="flex flex-row items-center gap-4"
                style={{
                    transform:
                        "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                }}
            >
                <Marquee pauseOnHover vertical className="[--duration:10s]">
                    {firstRow.map((review, index) => (
                        <ReviewCard key={`first-${review.name}-${index}`} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                    {secondRow.map((review, index) => (
                        <ReviewCard key={`second-${review.name}-${index}`} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:10s]" vertical>
                    {thirdRow.map((review, index) => (
                        <ReviewCard key={`third-${review.name}-${index}`} {...review} />
                    ))}
                </Marquee>

            </div>

            <div className="from-[#ffff] pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
            <div className="from-[#ffff] pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
            <div className="from-[#ffff] pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-[#ffff] pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
    )
}
