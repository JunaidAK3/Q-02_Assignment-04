import React from "react";
import Image from 'next/image';

interface Tcard {
    name: string;
    rollno: number;
    day: string;
    image: string;
}

export const Cards = (props: Tcard) => {
    return (
        <>
            <div id="studentCard" className="h-[230px] w-[400px] text-white/70 text-[40px] font-semibold bg-gray-400 flex items-center justify-center rounded-lg">
                <div className="h-[125px] w-[120px] border-2 border-black ml-8 relative">
                    <Image src={`${props.image}`} alt="Image Londing" layout="fill" objectFit="cover" />
                </div>
                <div id="detail" className="pt-0 h-[150px] w-[250px] leading-[40px] text-black text-[20px] font-bold pl-2 ml-5">
                    <p>Name: {props.name}</p>
                    <p>ID: {props.rollno}</p>
                    <p>Day: {props.day}<br/><span className="text-sm">(2:00 pm to 5:00 pm)</span></p>
                </div>
            </div>
        </>
    );
};

