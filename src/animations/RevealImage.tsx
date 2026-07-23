"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RevealImageProps extends ImageProps {
  /** Classes for the wrapping div — use this for sizing/positioning
   * (e.g. `absolute inset-0` for a `fill` image, or `overflow-hidden`
   * for a fixed-aspect thumbnail), since that div is the actual
   * containing block when `fill` is used. */
  containerClassName?: string;
}

/**
 * Image wrapper with a load-triggered fade + subtle scale-settle.
 *
 * A true blur-up placeholder (`placeholder="blur"`) needs a
 * build-time-generated `blurDataURL`, which Next.js only produces
 * automatically for statically-imported images — not the string paths
 * coming from projects.json/home.json here. This is the practical
 * substitute: a muted surface-color box (DESIGN.md's `--color-surface`)
 * holds the space, then the image fades and settles into place once
 * actually loaded, rather than popping in abruptly.
 *
 * Uses the same DURATION/EASE tokens as every other animation layer, so
 * this reads as part of one motion language, not a separate effect.
 * Deliberately restrained per DESIGN.md's "Motion" section — opacity +
 * a 5% scale settle, nothing more.
 *
 * Client Component — needs the `onLoad` callback and load-state.
 */
export function RevealImage({
  className,
  containerClassName,
  onLoad,
  ...props
}: RevealImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-surface", containerClassName)}>
      <Image
        {...props}
        className={cn(
          "transition-[opacity,transform] duration-slow ease-cinematic",
          isLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0",
          className,
        )}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}