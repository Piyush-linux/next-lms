import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full relative h-screen">
        <Image
          src={"/hero.gif"}
          width={1000}
          height={1000}
          alt="Hero Image"
          className="w-full h-full object-cover inset-0  absolute"
        />
        {/*CONTENT*/}
        <div className="absolute w-full flex flex-col justify-center items-center h-full">
          <div
            className="text-8xl font-bold font-game text-center
            [text-shadow:4px_4px_0px_#000,-4px_4px_0px_#000,4px_-4px_0px_#000,-4px_-4px_0px_#000]"
          >
            Start Your Journey Today
          </div>
          <h2 className="font-bold font-game text-5xl [text-shadow:4px_4px_0px_#000,-4px_4px_0px_#000,4px_-4px_0px_#000,-4px_-4px_0px_#000]">
            Coding Adventure
          </h2>
          <p className="mt-20 mb-6 font-game font-bold text-2xl">
            Beginner Friendly Coding Courses
          </p>
          <Button className="font-game text-3xl p-6" variant={"pixel"}>
            Get Started{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
