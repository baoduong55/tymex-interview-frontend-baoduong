import { TProduct } from "@/features/product/type/product";
import { Button } from "@/components/Button/Button";
import { useState, useRef, useEffect } from "react";
import { categories } from "@/features/product/const/filter";

type TProps = {
  onApplyFilter: (category: TProduct['category'] | "all") => void;
}

export default function CategoryFilter({ onApplyFilter }: TProps) {
  const [selectedCategory, setSelectedCategory] = useState<TProduct['category'] | "all">('all');
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

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  function handleChange(category: TProduct['category'] | "all") {
    setSelectedCategory(category);
    onApplyFilter(category);
  }

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
        {categories.map((category, index) => (
          <Button
            className="!w-fit"
            key={index}
            isActive={selectedCategory === category.key}
            onClick={() => handleChange(category.key)}
          >
            {category.label}
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
