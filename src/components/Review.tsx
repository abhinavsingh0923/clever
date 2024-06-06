import React from "react";
import { Crousel } from "./Crousel";

export default function Review() {
  return (
    <section className="bg-background body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="font-bold text-xl md:text-6xl  bg-clip-text mb-20">
            Some of the reviews of{" "}
            <span className="font-bold text-xl md:text-6xl  bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent mb-20">
              CleverBook
            </span>
          </div>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Crousel />
        </div>
      </div>
    </section>
  );
}
