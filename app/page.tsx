import React from "react";
import 'next/image';
import { Cards } from "./hello/card";

const img1 = "/img/1.jpg";
const img2 = "/img/2.jpg";
const img3 = "/img/3.jpg";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-wrap gap-7 justify-center">
        <Cards image={img1} name={"Juanid"} age={17} id={12345} class={7} />
        <Cards image={img2} name={"Ali"} age={16} id={56728} class={6} />
        <Cards image={img3} name={"Khan"} age={19} id={91011} class={8} />
      </div>
    </div>
  );
}
