'use client'

import { SodaCanProps } from "@/components/SodaCan";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
    { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
    { flavor: "grape", color: "#572981", name: "Grape Goodness" },
    { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
    {
      flavor: "strawberryLemonade",
      color: "#690B3D",
      name: "Strawberry Lemonade",
    },
    { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
  ];

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.price_copy} />
    </section>
  );
};

export default Carousel;
