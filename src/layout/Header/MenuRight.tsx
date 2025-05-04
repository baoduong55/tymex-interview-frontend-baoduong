'use client';

import { Dropdown, MenuProps } from 'antd';
import Image from 'next/image';
import world from '@icons/world.svg';
import arrowDown from '@icons/arrow-down.svg';
import { Button } from '@/components/Button/Button';

const items: MenuProps['items'] = [
  {
    key: 'eng',
    label: <div className="font-black">English</div>,
  },
];

export const MenuRight = () => {
  return (
    <div className='flex gap-[2.5rem] items-center'>
      <Button>Connect Wallet</Button>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()} className='flex cursor-pointer items-center gap-2'>
          <div className='flex items-center gap-2'>
            <Image
              width={16}
              height={16}
              src={world}
              alt="select language"
            />
            <Image
              width={16}
              height={16}
              src={arrowDown}
              alt="select language"
            />
          </div>
        </a>
      </Dropdown>
    </div>

  );
};
