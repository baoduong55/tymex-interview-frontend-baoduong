import SkeletonCard from "./SkeletonCard"

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