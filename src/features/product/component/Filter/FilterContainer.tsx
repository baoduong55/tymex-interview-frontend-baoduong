import Field from "@/components/Field/Field";
import RangeSlider from "@/components/Slider/RangeSlider";
import Dropdown from "@/components/Dropdown/Dropdown";
import { tiers, themes, prices, times } from '@/features/product/component/Filter/const';
import clsx from "clsx";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { TProduct } from "@/app/api/product/type";
import { useState } from "react";

const initialFilter: TFilter = {
  priceMin: 0,
  priceMax: 1000,
  priceSort: 'asc',
  tier: 'All',
  theme: 'All',
  timeSort: 'asc',
}

export type TFilter = {
  priceMin: number;
  priceMax: number;
  priceSort: 'asc' | 'desc';
  tier: 'All' | TProduct['tier'];
  theme: 'All' | TProduct['theme'];
  timeSort: 'asc' | 'desc';
}
type TFilterProps = {
  className?: string;
  onApplyFilter: (filter: TFilter) => void;
}

export default function Filter({ className, onApplyFilter }: TFilterProps) {
  const [filter, setFilter] = useState<TFilter>(initialFilter)

  return <div className={clsx("flex flex-col gap-4", className)}>
    <Field label="PRICE" labelClass="text-white">
      <RangeSlider minValue={filter.priceMin} maxValue={filter.priceMax} onChange={(values) => setFilter({ ...filter, priceMin: values[0], priceMax: values[1] })} />
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
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setFilter(initialFilter)}>
        <Image src="/assets/icons/close.svg" alt="close" width={24} height={24} /> Reset filter
      </div>
      <Button className="w-[8rem]" onClick={() => onApplyFilter(filter)}>Search</Button>
    </span>
  </div>;
}

