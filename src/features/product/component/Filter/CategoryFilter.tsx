import { TProduct } from "@/app/api/product/type";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

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

  return (
    <div className="relative w-full">
      <div
        className="flex gap-y-3 gap-x-4 primary w-full flex-wrap justify-center scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
    </div>
  );
}
