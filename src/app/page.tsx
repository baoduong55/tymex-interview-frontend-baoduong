'use client'
import Image from "next/image";
import NFTCard from "@/components/Card/NFTCard";
import SkeletonCard from "@/components/Card/SkeletonCard";

import SearchIcon from "@icons/search.svg";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import OneColumnsLayout from "@/layout/OneColumnsLayout";

import { useProducts } from "@/features/product/hook/useProduct";
import HeroBanner from "@/features/product/component/HeroBanner";
import CategoryFilterWithScroll from "@/features/product/component/Filter/CategoryFilterWithScroll";
import FilterContainer from "@/features/product/component/Filter/FilterContainer";
import { FilterOutlined } from "@ant-design/icons";
import { useState } from "react";
import ModalFilter from "@/features/product/component/Filter/ModalFilter";

const SkeletonCards = () => {
  return (
    Array(12).fill(0).map((_, index) => (
      <SkeletonCard key={index} />
    ))
  )
}

export default function ProductList() {
  const { products, isLoading, fetchProducts } = useProducts()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  return (
    <OneColumnsLayout>
      <HeroBanner></HeroBanner>
      <div className="grid laptop:grid-cols-[16rem_1fr] desktop:grid-cols-[23.25rem_1fr] grid-cols-[1fr] gap-8 desktop:mx-8 mx-4 desktop:mt-30 laptop:mt-20 mt-10">
        <section className="flex items-center gap-4">
          <Input placeholder="Quick search" prefix={<Image src={SearchIcon} alt="search" />} className="h-11" />
          <Button onClick={() => setIsFilterModalOpen(true)} variant="secondary" className="laptop:!hidden !bg-white text-xl">
            Filters <FilterOutlined className="text-2xl ml-1" />
          </Button>
        </section>
        <CategoryFilterWithScroll></CategoryFilterWithScroll>
        <section className="hidden laptop:block">
          <FilterContainer onApplyFilter={() => { console.log('apply filter') }}></FilterContainer>
        </section>
        <section className="w-full overflow-hidden">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(227px,1fr))] desktopxl:gap-10 desktop:gap-8 laptop:gap-6 gap-4">
            {
              products.map((product) => (
                <NFTCard key={product.id} product={product}></NFTCard>
              ))
            }
            {isLoading && <SkeletonCards></SkeletonCards>}
          </div>
          <span className="flex justify-center my-[3.4375rem]">
            <Button onClick={() => fetchProducts({ page: 2, limit: 12 })} className="h-[4.375rem] w-[22.75rem]">View more</Button>
          </span>
        </section>
      </div>
      <Image src="/assets/images/footer-decor.png" className="w-full h-full" alt="footer decoration" width={1000} height={1000} />
      <ModalFilter open={isFilterModalOpen} onclose={() => setIsFilterModalOpen(false)}></ModalFilter>
    </OneColumnsLayout>
  );
}