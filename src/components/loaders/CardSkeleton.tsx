import Skeleton from "@/components/ui/Skeleton";

type CardSkeletonProps = {
  count?: number;
};

export default function CardSkeleton({ count = 4 }: CardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <article
          key={`project-card-skeleton-${idx}`}
          className="glass-strong rounded-(--radius) overflow-hidden border border-border/60"
          aria-hidden="true"
        >
          <Skeleton className="h-44 md:h-48 rounded-none" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/5" />
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-[92%]" />
              <Skeleton className="h-3.5 w-4/5" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-7 w-16 rounded-full" />
              <Skeleton className="h-7 w-20 rounded-full" />
              <Skeleton className="h-7 w-14 rounded-full" />
            </div>
            <div className="flex gap-5 pt-1">
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-18" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
