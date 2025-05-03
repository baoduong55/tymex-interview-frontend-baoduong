import { TProduct } from "@/app/api/product/type";
import { Button } from "@/components/Button/Button";
import { useState, useRef, useEffect } from "react";

const categories: TProduct['category'][] = [
  'All',
  'Upper Body',
  'Lower Body',
  'Hat',
  'Shoes',
  'Accessory',
  'Legendary',
  'Mythic',
  'Epic',
  'Rare',
  'Common',
]
export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<TProduct['category']>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
        setCanScrollLeft(scrollLeft - 2 > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    // Add scroll event listener to update button visibility
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkOverflow);
    }

    return () => {
      window.removeEventListener('resize', checkOverflow);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkOverflow);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {showScrollButtons && canScrollLeft && (
        <div className="absolute flex justify-center left-0 top-1/2 transform -translate-y-1/2 z-10 p-1 text-white ">
          <button
            onClick={scrollLeft}
            className="rounded-full bg-gradient-to-r from-[#da458f] to-[#da34dd] hover:from-[#d85697] hover:to-[#d34dd6] transition-colors"
            style={{ height: '40px', width: '40px' }}
          >
            &lt;
          </button>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className="flex gap-4 primary w-full overflow-hidden scrollbar-hide my-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={() => {
          if (scrollContainerRef.current) {
            const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
          }
        }}
      >
        {categories.map((category) => (
          <Button
            className="!w-fit"
            key={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {showScrollButtons && canScrollRight && (
        <div className="absolute flex justify-center right-0 top-1/2 transform -translate-y-1/2 z-10 p-1 text-white ">
          <button
            onClick={scrollRight}
            className="rounded-full bg-gradient-to-r from-[#da458f] to-[#da34dd] hover:from-[#d85697] hover:to-[#d34dd6] transition-colors"
            style={{ height: '40px', width: '40px' }}
          >
            &gt;
          </button>


        </div>

      )}
    </div>
  );
}
