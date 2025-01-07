import Image from "next/image";
export const heading1 = (
  <>
    <h1 className="font-heading mb-6 text-3xl lg:text-5xl font-bold">
      Explore Our Exquisite Hotel
    </h1>
    <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
      Experience an Exquisite Hotel Immersed in Rich History and Timeless
      Elegance.
    </p>
    <button className="btn-primary mb-10">Get Started</button>
  </>
);
export const section2 = (
    <>
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
    </>
)