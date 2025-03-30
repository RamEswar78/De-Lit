import React from "react";
import Gallery from "@/components/gallery/Gallery";
import Head from "next/head";
import { getPlaceholderImage } from "@/utils/image-load";

const Page = async () => {
  const getRandomDimensions = () => {
    const width = Math.floor(Math.random() * (500 - 300 + 1)) + 1000;
    const height = Math.floor(Math.random() * (500 - 300 + 1)) + 1000;
    return { width, height };
  };

  const fetchImages = async () => {
    const fetchedImages = await Promise.all(
      Array.from({ length: 30 }).map(async (_, index) => {
        const { width, height } = getRandomDimensions();
        const src = `https://picsum.photos/${width}/${height}`;
        const { base64 } = await getPlaceholderImage(src);
        return {
          src: src,
          alt: `Random Image ${index + 1}`,
          caption: `Dimensions: ${width}x${height}`,
          width: width,
          height: height,
          base64: base64,
        };
      })
    );
    return fetchedImages;
  };
  const images = await fetchImages();

  return (
    <>
      <div className="text-neutral-800">
        <title>Our Memories</title>
      </div>
      <div className="flex flex-col items-center ">
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Page;
