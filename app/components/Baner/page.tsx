import Image from 'next/image';

export default function Baner() {
    return (
        <>
            <div className="relative">
                {/* Image with black overlay */}
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <Image
                    src="/assest/baner.png"
                    alt="Banner"
                    layout="responsive"
                    width={1920}  // Set the width of the image
                    height={400}  // Set the height of the image
                    className="w-full object-cover"
                />
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
                    <span className="font-sans text-white font-bold text-[18px] sm:text-[26px] md:text-[34px] xl:text-[48px] uppercase leading-[1.4]">
                        stylist picks beat
                        <br />
                        the heat
                    </span>
                    <div className="mt-5 text-white">
                        <button className="font-sans border-4 border-white uppercase px-4 py-2 font-bold">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}