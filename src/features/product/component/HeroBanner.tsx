'use client';

import { motion } from 'framer-motion';
import productIntro from '@images/product-intro.png';
import newArrival from '@images/new-arrival.png';
import theDJ from '@images/the-dj.png';
import Image from "next/image";
import background from '@images/baner-background.png';

export default function HeroBanner() {
  return (
    <section
      aria-label="New Arrival - The DJ"
      className={`flex-1 relative bg-[url(/assets/images/baner-background.png)] bg-center bg-no-repeat bg-cover pt-[5.25rem]`}
    >
      <div className='absolute top-0 left-0 w-full h-full' >
        <Image src={background} alt="banner background" className='w-full h-full object-cover -z-10' />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[#000000B2]' />
      <div className='aspect-[1920/804] relative w-full'>
        <motion.div
          className='absolute top-[18.65%] left-[9.27%] w-[56.93%] aspect-[1093/292]'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [0.95, 1.1, 1] }}
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          <Image
            src={newArrival}
            alt="New Arrival Collection - Tymex Marketplace"
            priority
          />
        </motion.div>
        <motion.div
          className='absolute bottom-0 right-[8.33%] aspect-[471/665] w-[24.53%] z-10'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [0.95, 1.1, 1] }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeInOut"
          }}
        >
          <Image
            src={theDJ}
            className='w-full h-full object-cover'
            alt="The DJ - Featured Digital Asset"
            priority
          />
        </motion.div>
        <Image
          className='absolute bottom-0 left-0'
          src={productIntro}
          alt="Tymex Marketplace Product Introduction"
          priority
        />
      </div>
    </section >
  );
}
