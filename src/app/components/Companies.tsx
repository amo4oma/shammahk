"use client";
import Image from 'next/image';
import Marquee from "react-fast-marquee";

import tefal from "../../public/images/Tefal_logo.svg";
import chery from "../../public/images/Chery_logo.svg.png";
import jmc from "../../public/images/JMC_Motor_logo.png";
import ariston from "../../public/images/Ariston-logo.png";
import lg from "../../public/images/LG_logo_(2014).svg.png";
import westpoint from "../../public/images/westpoint-logo-png-transparent.png";
import rowenta from "../../public/images/Rowenta_logo.svg.png";
import {Marquee3D} from "@/components/ui/3DMqrquee";
const Companies = () => {
    const companies = [
        { name: "Tefal", logo: tefal },
        { name: "Chery", logo: chery },
        { name: "JMC", logo: jmc },
        { name: "Ariston", logo: ariston },
        { name: "LG", logo: lg },
        { name: "Westpoint", logo: westpoint },
        { name: "Rowenta", logo: rowenta },
    ];

    return (
        <div className='mx-auto relative md:mt-[111px] h-full overflow-hidden' dir='ltr'>
            <h2 className='hidden md:block text-5xl md:text-7xl font-extrabold text-primary font-beiruti leading-tight text-center mb-16' dir='rtl'>
                شُركاؤنا
            </h2>
            <h2 className='block md:hidden absolute top-20 z-40 end-10  text-5xl md:text-7xl font-extrabold text-primary font-beiruti leading-tight text-center mb-16' dir='rtl'>
                شُركاؤنا
            </h2>

            <div className='hidden md:block relative w-full py-8'>
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={false}
                    direction="right"
                >
                    {companies.map((company, index) => (
                        <div
                            key={`${company.name}-${index}`}
                            className='company-card mx-3 w-[200px] h-[200px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center p-6 border border-gray-100'
                        >
                            <div className='relative w-full h-full'>
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={false}
                    direction="left"
                    className="mt-5"
                >
                    {companies.map((company, index) => (
                        <div
                            key={`${company.name}-${index}`}
                            className='company-card mx-3 w-[200px] h-[200px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center p-6 border border-gray-100'
                        >
                            <div className='relative w-full h-full'>
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="md:hidden">
                <Marquee3D />
            </div>
        </div>
    );
};

export default Companies;
