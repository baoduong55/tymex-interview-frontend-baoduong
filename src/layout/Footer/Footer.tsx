'use client';

import { Input } from '@/shared/components/Input/Input';
import { Button } from '@/shared/components/Button/Button';
import Link from 'next/link';
import phone from '@icons/phone.svg';
import comunicate from '@icons/comunicate.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Section */}
          <div>
            <h2 className="text-xl font-bold mb-6">NAVIGATION</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Link href="/" className="block mb-3 hover:text-gray-300">Home</Link>
                <Link href="/about-us" className="block mb-3 hover:text-gray-300">About us</Link>
                <Link href="/our-teams" className="block mb-3 hover:text-gray-300">Our teams</Link>
              </div>
              <div>
                <Link href="/whitepaper" className="block mb-3 hover:text-gray-300">Whitepaper</Link>
                <Link href="/marketplace" className="block mb-3 hover:text-gray-300">Marketplace</Link>
                <Link href="/roadmap" className="block mb-3 hover:text-gray-300">Roadmap</Link>
              </div>
              <div>
                <Link href="/faqs" className="block mb-3 hover:text-gray-300">FAQs</Link>
                <Link href="/news" className="block mb-3 hover:text-gray-300">News</Link>
                <Link href="/community" className="block mb-3 hover:text-gray-300">Community</Link>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-6">CONTACT US</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src={phone} alt="phone" width={16} height={16} />
                <span>01234568910</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={comunicate} alt="comunicate" width={16} height={16} />
                <span>tymex-talent@tyme.com</span>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="text-xl font-bold mb-6">SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</h2>
            <div className="flex gap-5 flex-col laptop:flex-row">
              <Input placeholder="Your email address" className='!border-[2px] !min-w-[200px]' type="email" />
              <Button className='laptop:w-auto !w-full h-11'>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center">
          <div className="text-sm text-gray-400">
            ©2023 Tyme - Edit. All Rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/security" className="hover:text-gray-300">Security</Link>
            <Link href="/legal" className="hover:text-gray-300">Legal</Link>
            <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


