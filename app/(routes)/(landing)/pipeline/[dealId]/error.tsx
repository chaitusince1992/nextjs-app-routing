'use client';
export default function DealRouteError({
    error,
    reset,
  }: {
    error: Error
    reset: () => void
  }) {
    return <div>Not found Deal</div>
}