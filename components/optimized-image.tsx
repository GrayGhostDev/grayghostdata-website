import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${isLoading ? 'animate-pulse bg-muted' : ''}`}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc(fallbackSrc)}
        onLoad={() => setIsLoading(false)}
        quality={90}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`${props.className || ''} ${
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        } transition-all duration-300 ease-in-out`}
      />
    </div>
  );
}
