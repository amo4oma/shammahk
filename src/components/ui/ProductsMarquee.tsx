/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import qaisar from "../../public/images/qaisar.png"
import imgs from "../../public/images/ارز-شماخ.png"
import imgs2 from "../../public/images/ارز-البيت.png"
import imgs3 from "../../public/images/ارز-الفارس-النبيل.png"
import imgs4 from "../../public/images/بازلياء-خضراء.png"

import imgs6 from "../../public/images/العطية.png"
import imgs7 from "../../public/images/التونه.png"
import imgs8 from "../../public/images/الخريف-موكب-اب.png"
import imgs9 from "../../public/images/فاصوليا-بيضاء.png"
import imgs10 from "../../public/images/فاصوليا-حمراء.png"
import imgs11 from "../../public/images/خيرات-اليمن-موكب-اب.png"
import leaf from "../../public/images/الشكل-الجمالي-31.png"
import leaf2 from "../../public/images/الشكل-الجمالي-1-2.png"
import Image from 'next/image';

import mobileWheat from "../../public/images/mobile-whest.png"
import mobileRice from "../../public/images/mobile-rice.png"
import mobileBeans from "../../public/images/mobile-beans.png"
import mobileTuna from "../../public/images/mobile-tuan.png"

const reviews = [
  {

    img: mobileWheat,
  },
  {

    img: mobileRice,
  },
  {

    img: mobileBeans,
  },
  {

    img: mobileTuna,
  }

]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
 
}: {
  img: string
 
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
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
        <Marquee pauseOnHover reverse vertical className="[--duration:20s]">
            {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
            ))}
        </Marquee>
 
      <div className="from-[#abbaab] bg-gradient-to-b pointer-events-none absolute inset-x-0 top-0 h-1/4 "></div>
      <div className="from-[#ffffff]  bg-gradient-to-t pointer-events-none absolute inset-x-0 bottom-0 h-1/4  "></div>
    </div>
  )
}
