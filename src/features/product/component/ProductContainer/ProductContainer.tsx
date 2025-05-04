'use client'
import Image from "next/image";
import NFTCard from "@/features/product/component/NFTCard/NFTCard";
import { Button } from "@/components/Button/Button";
import { useProducts } from "@/features/product/hook/useProduct";
import HeroBanner from "@/features/product/component/HeroBanner/HeroBanner";
import CategoryFilter from "@/features/product/component/CategoryFilter/CategoryFilter";
import FilterGroup from "@/features/product/component/FilterGroup/FilterGroup";
import { FilterOutlined } from "@ant-design/icons";
import { useState } from "react";
import ModalFilter from "@/features/product/component/ModalFilter/ModalFilter";
import Search from "@components/Search/Search";
import SkeletonGrid from "@/components/Card/SkeletonGrid/SkeletonGrid";


export default function ProductContainer() {
  const { products, isLoading, onSearch, onLoadMore, isFirstLoad } = useProducts()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const isNoProducts = products.length === 0 && !isFirstLoad && !isLoading
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="grid laptop:grid-cols-[16rem_1fr] desktop:grid-cols-[23.25rem_1fr] grid-cols-[1fr] gap-8 desktop:mx-8 mx-4 desktop:mt-30 laptop:mt-20 mt-10">
        <section className="flex items-center">
          <Search placeholder="Quick search" onChange={(value) => onSearch({ title: value, page: 1 })} />
          <Button onClick={() => setIsFilterModalOpen(true)} variant="secondary" className="laptop:!hidden ml-4 !bg-white">
            Filters <FilterOutlined className="text-lg ml-1" />
          </Button>
        </section>
        <CategoryFilter onApplyFilter={(category) => onSearch({ category, page: 1 })}></CategoryFilter>
        <section className="hidden laptop:block">
          <FilterGroup onApplyFilter={(filter) => onSearch({ ...filter, page: 1 })}></FilterGroup>
        </section>
        <section className="w-full overflow-hidden flex flex-col">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(267px,1fr))] desktoplg:grid-cols-4 desktopxl:gap-10 desktop:gap-8 laptop:gap-6 gap-4">
            {
              products.map((product) => (
                <NFTCard key={product.id} product={product}></NFTCard>
              ))
            }
            {isLoading && <SkeletonGrid />}
          </div>
          {
            isNoProducts && (
              <div className="flex justify-center items-center w-full flex-1">
                <p className="text-white text-center text-2xl">No products found</p>
              </div>
            )
          }
          {
            !isNoProducts && (
              <span className="flex justify-center my-[3.4375rem]">
                <Button onClick={onLoadMore} className="h-[4.375rem] w-[22.75rem]">View more</Button>
              </span>
            )
          }
        </section>
      </div>
      <Image src="/assets/images/footer-decor.png" className="w-full h-full" alt="footer decoration" width={1000} height={1000} />
      {
        isFilterModalOpen && (
          <ModalFilter onApplyFilter={(filter) => onSearch({ ...filter, page: 1 })} open={isFilterModalOpen} onclose={() => setIsFilterModalOpen(false)}></ModalFilter>
        )
      }
    </>
  );
}