'use client'
import { Skeleton } from 'antd';

export default function SkeletonCard() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading content" className='skeleton-card w-full aspect-[267/365] bg-gray-200 rounded-lg flex flex-col justify-between p-3 gap-2'>
      <Skeleton.Avatar active size={235} style={{ width: '100%' }} shape='square' />
      <Skeleton.Input active style={{ width: '100%' }} />
      <Skeleton.Input active style={{ width: '100%' }} />
      <section className='flex gap-2'>
        <Skeleton.Avatar active />
        <Skeleton.Input active className='!w-full' />
      </section>
    </div>
  );
}
