"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  className?: string;
  priority?: boolean;
  showSkeleton?: boolean;
  fallbackSrc?: string;
}

export function OptimizedImage({ 
  src, 
  className, 
  alt,
  priority = false,
  showSkeleton = true,
  fallbackSrc = "/images/placeholder.jpg",
  ...props 
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(!priority);

  const handleLoad = (e: any) => {
    setIsLoading(false);
    if (props.onLoad) {
      props.onLoad(e);
    }
  };

  const handleError = (e: any) => {
    setError(true);
    setIsLoading(false);
    if (props.onError) {
      props.onError(e);
    }
  };

  const imgProps: ImageProps = {
    src: error ? fallbackSrc : src,
    alt: alt || "",
    quality: 90,
    priority,
    loading: priority ? "eager" : "lazy",
    ...props,
    className: cn(
      "object-cover transition-all duration-300",
      isLoading && "scale-110 blur-2xl",
      !isLoading && "scale-100 blur-0",
      className
    ),
    sizes: props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    onError: handleError,
    onLoad: handleLoad,
    placeholder: "blur",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT47Pi01RkZHUX1RUV54X3FxcUZNYnBwiWj/2wBDARUXFx4aHR4eHWhuOTo5bm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
  };

  if (showSkeleton && isLoading && !priority) {
    return (
      <div className={cn("relative", className)}>
        <Skeleton className="absolute inset-0" />
        <Image {...imgProps} />
      </div>
    );
  }

  return <Image {...imgProps} />;
}
