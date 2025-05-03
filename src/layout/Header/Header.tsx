import { MenuLeft } from './MenuLeft';
import { MenuRight } from './MenuRight';

export default function Header() {
  return (
    <header className="flex items-center fixed top-0 w-full h-[5.25rem] bg-[#17161ab2] z-[99]">
      <div className='flex justify-between items-center px-8 w-full relative max-w-[1680px] mx-auto'>
        <MenuLeft />
        <MenuRight />
      </div>
    </header>
  );
}