"use client";
import Image from "next/image";
import React from "react";

const CustomImageRenderer = ({ data }: any) => {
  const src = data.file.url;
  return (
    <div className="relative w-full min-h-[15rem]">
      <Image alt="post-image" src={src} className="object-contain" fill />
    </div>
  );
};

export default CustomImageRenderer;
