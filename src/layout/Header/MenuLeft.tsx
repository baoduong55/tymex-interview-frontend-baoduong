'use client';

import { MenuOutlined } from '@ant-design/icons';
import { Col, Divider, Drawer } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const headers = [
  {
    key: 'home',
    label: 'HOME',
  },
  {
    key: 'about-us',
    label: 'ABOUT US',
  },
  {
    key: 'our-teams',
    label: 'OUR TEAMS',
  },
  {
    key: 'marketplace',
    label: 'MARKETPLACE',
  },
  {
    key: 'roadmap',
    label: 'ROADMAP',
  },
  {
    key: 'whitepaper',
    label: 'WHITEPAPER',
  },
];

const Logo = () => <a href="https://vietnam.tyme.com/" className="block w-[110px] h-[56px]" rel="home" aria-current="page">
  <Image
    src="https://vietnam.tyme.com/wp-content/uploads/2022/10/TymeX_1_white-3-1.png"
    alt="TymeX"
    width={1000}
    height={439}
    className="custom-logo"
    sizes="(max-width: 1000px) 100vw, 1000px"
    priority // equivalent to fetchPriority="high"
    decoding="async"
  /></a>
export const MenuLeft = () => {
  const [displayDrawer, setdisplayDrawer] = useState(false);
  const [page, setPage] = useState('marketplace');

  const menuItems = headers.map((header) => (
    <Col
      className={`font-bold cursor-pointer  ${page === header.key
        ? "text-[#da458f] before:content-[''] before:absolute before:top-[0.3rem] before:left-[0.2rem] before:w-4 before:h-full before:border-b-[2px] before:border-[#da458f]"
        : "text-white"
        }`}
      onClick={() => setPage(header.key)}
      key={header.key}
    >
      {header.label}
    </Col>
  ));

  return (
    <>
      <div className='desktop:hidden flex items-center gap-4 justify-center'>
        <MenuOutlined style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }} onClick={() => setdisplayDrawer(true)} />
        <div className='mobile:flex hidden  justify-center'>
          <Logo />
        </div>
      </div>

      <div className='desktop:flex gap-14 hidden items-center'>
        <Logo />
        {menuItems}
      </div>
      <Col className='desktop:hidden block'>
        <Drawer
          className='!bg-[#17161a]'
          placement="left"
          onClose={() => setdisplayDrawer(false)}
          open={displayDrawer}
          width={320}
        >
          <Logo />
          <Divider style={{ borderColor: 'white', marginTop: '2rem' }} />
          <div className=' flex flex-col gap-6'>
            {menuItems}
          </div>
        </Drawer>
      </Col>
    </>
  );
};
