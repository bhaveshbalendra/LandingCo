import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface SkeletonLoaderProps {
  type?: "card" | "text" | "image" | "profile";
  count?: number;
}

export function SkeletonLoader({
  type = "card",
  count = 1,
}: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <Card className="w-full">
            <CardHeader className="space-y-2">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-4 w-2/3" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-28" />
            </CardFooter>
          </Card>
        );

      case "text":
        return (
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        );

      case "image":
        return <Skeleton className="h-[300px] w-full rounded-xl" />;

      case "profile":
        return (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        );

      default:
        return <Skeleton className="h-10 w-full" />;
    }
  };

  return (
    <div
      className={`grid gap-6 ${
        count > 1 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""
      }`}
    >
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{renderSkeleton()}</div>
        ))}
    </div>
  );
}
