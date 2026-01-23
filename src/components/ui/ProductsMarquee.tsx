/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image, { StaticImageData } from 'next/image';

import mobileWheat from "../../public/images/mobile-whest.png"
import mobileRice from "../../public/images/mobile-rice.png"
import mobileBeans from "../../public/images/mobile-beans.png"
import mobileTuna from "../../public/images/mobile-tuan.png"

const reviews = [
  {
    name: "wheat",
    img: mobileWheat,
  },
  {
    name: "rice",
    img: mobileRice,
  },
  {
    name: "beans",
    img: mobileBeans,
  },
  {
    name: "tuna",
    img: mobileTuna,
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
}: {
  img: StaticImageData
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="w-full h-full" alt="" src={img} />
      </div>
    </figure>
  )
}

export function ProductsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`first-${review.name}-${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse vertical className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`second-${review.name}-${index}`} {...review} />
        ))}
      </Marquee>

      <div className="from-[#abbaab] bg-linear-to-b pointer-events-none absolute inset-x-0 top-0 h-1/4 "></div>
      <div className="from-[#ffffff] bg-linear-to-t pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
    </div>
  )
}

