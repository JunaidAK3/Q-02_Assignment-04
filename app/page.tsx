import React from "react";
import 'next/image';
import { Cards } from "./hello/card";

const img1 = "/img/1.jpg";
const img2 = "/img/2.jpg";
const img3 = "/img/3.jpg";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-yellow-500 flex items-center justify-center">
      <div className="flex space-x-7">
        <Cards image={img1} name={"Juanid"} rollno={12345} day={"Monday"} />
        <Cards image={img2} name={"Ali"} rollno={56728} day={"Tuesday"} />
        <Cards image={img3} name={"Khan"} rollno={91011} day={"Wednesday"} />
      </div>
    </div>
  );
}
