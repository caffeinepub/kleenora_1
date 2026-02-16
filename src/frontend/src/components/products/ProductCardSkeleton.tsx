export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="aspect-square bg-muted/50 animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-muted/50 rounded animate-pulse" />
        <div className="h-4 bg-muted/50 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-muted/50 rounded w-1/2 animate-pulse" />
        <div className="h-8 bg-muted/50 rounded animate-pulse" />
      </div>
    </div>
  );
}
