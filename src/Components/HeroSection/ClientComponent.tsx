"use client";

import CountUpNumber from "../CountUpNumber/CountUpNumber";
import React, { FC } from 'react';

type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
}

const ClientComponent:FC<Props> = props => {

    const { heading1 } = props;
    const { section2 } = props;

  return (
    <section className='flex flex-col md:flex-row px-4 items-center gap-12 container mx-auto'>
    <div className='py-10 h-full'>
       {heading1}
        <div className="flex justify-between gap-8">
            <div className='flex gap-3 flex-col items-center justify-center'>
                <p className='text-xs lg:text-xl text-center'>Basic Room</p>
                <CountUpNumber   endValue={105} duration={5000} />
            </div>
            <div className='flex gap-3 flex-col items-center justify-center'>
                <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
                <CountUpNumber   endValue={70} duration={5000} />
            </div>
            <div className='flex gap-3 flex-col items-center justify-center'>
                <p className='text-xs lg:text-xl text-center'>Suite</p>
                <CountUpNumber   endValue={65} duration={5000} />
            </div>
        </div>
    </div>
   {section2}
</section>
);
}

export default ClientComponent
