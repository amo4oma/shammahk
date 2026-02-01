import Image, { StaticImageData } from 'next/image';


const NewsViewr = ({ newsImage, content, title }: { newsImage: string | StaticImageData, content: string, title: string }) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-4">
                <Image src={newsImage} alt="news" className='object-contain rounded-2xl shadow-lg shadow-primary' width={500} height={500} />
                <h2 className='text-2xl font-beiruti text-justify text-black max-w-2xl'>{title}</h2>
                <p className='text-2xl font-beiruti text-justify text-black max-w-2xl'>{content}</p>
            </div>
        </div>
    );
};

export default NewsViewr;