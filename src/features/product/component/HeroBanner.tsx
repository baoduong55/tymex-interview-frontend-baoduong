'use client';

import { motion } from 'framer-motion';
import productIntro from '@images/product-intro.png';
import newArrival from '@images/new-arrival.png';
import theDJ from '@images/the-dj.png';
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className={`flex-1 pt-18 laptop:pt-9 desktop:pt-0 relative bg-[url(/assets/images/baner-background.png)] bg-center bg-no-repeat bg-cover`}>
      <div className='absolute top-0 left-0 w-full h-full bg-[#000000B2]' />
      <div className='aspect-[1920/804] relative w-full'>
        <motion.div
          className='absolute top-[18.65%] left-[9.27%] w-[56.93%] aspect-[1093/292]'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [0.95, 1.1, 1] }} // bắt đầu từ nhỏ hơn, rồi to hơn, rồi về chuẩn
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          <Image
            src={newArrival}
            alt="new arrival"
          />
        </motion.div>
        <motion.div
          className='absolute bottom-0 right-[8.33%] aspect-[471/665] w-[24.53%] z-10'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [0.95, 1.1, 1] }} // bắt đầu từ nhỏ hơn, rồi to hơn, rồi về chuẩn
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeInOut"
          }}
        >
          <Image
            src={theDJ}
            className='w-full h-full object-cover'
            alt="the DJ"
          />
        </motion.div>
        <Image className='absolute bottom-0 left-0' src={productIntro} alt="product intro" />
      </div>
    </div>
  );
}
