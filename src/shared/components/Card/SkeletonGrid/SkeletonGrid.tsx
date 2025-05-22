import SkeletonCard from "../SkeletonCard/SkeletonCard"

export default function SkeletonCards({ count = 12 }: { count?: number }) {
  return (
    <>
      {
        Array(count).fill(0).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      }
    </>
  )
}