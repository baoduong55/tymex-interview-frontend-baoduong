import Field from "@/components/Field/Field";
import RangeSlider from "@/components/Slider/RangeSlider";
import Dropdown from "@/components/Dropdown/Dropdown";
import { tiers, themes, prices, times } from '@/features/product/const/filter';
import clsx from "clsx";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";
import { initialFilter } from "@/features/product/const/filter";
import { TFilter } from "@/features/product/type/filter";

type TFilterProps = {
  className?: string;
  onApplyFilter: (filter: TFilter) => void;
}

export default function Filter({ className, onApplyFilter }: TFilterProps) {
  const [filter, setFilter] = useState<TFilter>(initialFilter)

  const onResetFilter = () => {
    setFilter(initialFilter)
    onApplyFilter(initialFilter)
  }

  return <div className={clsx("flex flex-col gap-4", className)}>
    <Field label="PRICE" labelClass="text-white">
      {filter.minPrice} {filter.maxPrice}
      <RangeSlider key={`${filter.minPrice}-${filter.maxPrice}`} minValue={filter.minPrice} maxValue={filter.maxPrice} onChange={(values) => setFilter({ ...filter, minPrice: values[0], maxPrice: values[1] })} />
    </Field>
    <Field label="TIER">
      <Dropdown items={tiers} value={filter.tier} onChange={(value) => setFilter({ ...filter, tier: value })} />
    </Field>
    <Field label="THEME">
      <Dropdown items={themes} value={filter.theme} onChange={(value) => setFilter({ ...filter, theme: value })} />
    </Field>
    <Field label="TIME">
      <Dropdown items={times} value={filter.timeSort} onChange={(value) => setFilter({ ...filter, timeSort: value })} />
    </Field>
    <Field label="PRICE">
      <Dropdown items={prices} value={filter.priceSort} onChange={(value) => setFilter({ ...filter, priceSort: value })} />
    </Field>
    <span className="text-white flex items-center justify-between mb-4">
      <div className="flex items-center gap-2 cursor-pointer" onClick={onResetFilter}>
        <Image src="/assets/icons/close.svg" alt="close" width={24} height={24} /> Reset filter
      </div>
      <Button className="w-[8rem]" onClick={() => onApplyFilter(filter)}>Search</Button>
    </span>
  </div>;
}

