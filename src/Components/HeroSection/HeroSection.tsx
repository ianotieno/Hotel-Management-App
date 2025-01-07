import Image from "next/image";

const HeroSection = () => {
    return (
        <section className='flex flex-col md:flex-row px-4 items-center gap-12 container mx-auto'>
            <div className='py-10 h-full'>
                <h1 className='font-heading mb-6 text-3xl lg:text-5xl font-bold'>
                    Explore Our Exquisite Hotel
                </h1>
                <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
                    Experience an Exquisite Hotel Immersed in Rich History and Timeless
                    Elegance.
                </p>
                <button className='btn-primary mb-10'>Get Started</button>

                <div className="flex justify-between gap-8">
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-xs lg:text-xl text-center'>Basic Room</p>
                        <p className="md:font-bold font-medium text-lg xl:text-5xl">
                            +20
                        </p>
                    </div>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
                        <p className="md:font-bold font-medium text-lg xl:text-5xl">
                            +20
                        </p>
                    </div>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-xs lg:text-xl text-center'>Suite</p>
                        <p className="md:font-bold font-medium text-lg xl:text-5xl">
                            +20
                        </p>
                    </div>
                </div>
            </div>

            <div className='md:grid hidden gap-8 grid-cols-1'>
                {/* Hero Image 1 */}
                <div className='rounded-2xl overflow-hidden h-48 shadow-lg transition-transform duration-300 hover:scale-105'>
                    <Image
                        src='/images/hero-1.jpeg'
                        alt='hero-1'
                        width={300}
                        height={300}
                        className='img object-cover w-full h-full'
                    />
                </div>

                {/* Hero Image 2 & 3 */}
                <div className='grid grid-cols-2 gap-8 h-48'>
                    <div className='rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
                        <Image
                            src='/images/hero-2.jpeg'
                            alt='hero-2'
                            width={300}
                            height={300}
                            className='img object-cover w-full h-full'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
                        <Image
                            src='/images/hero-3.jpeg'
                            alt='hero-3'
                            width={300}
                            height={300}
                            className='img object-cover w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
