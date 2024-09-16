import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
      t1.from("#section1", { opacity: 0, x: -200, duration: 1 });
      t1.from("#section2", { opacity: 0, x: 200, duration: 1 });
      t1.from("#section3", { opacity: 0, x: -200, duration: 1 });
      return t1;
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="bg-white text-black py-20 lg:px-64 md:px-28 " id="Education">
      <h1 className="text-4xl mb-5 text-center font-bold">Education</h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        {/* Left side content */}
        <div id="section1" className="col-span-4 w-full h-full">
          <div className="w-full h-full p-2 md:pl-4">
            <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
              2021-Present
            </time>
            <h3 className="text-lg font-semibold text-black my-2 dark:text-white">
              Bachelor&apos;s Degree
            </h3>
            <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
              Parul University
              <div>Vadodara Gujarat India</div>
              <div>CGPA: 8.05</div>
            </p>
          </div>
        </div>

        {/* Timeline connector and dot */}
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-[1px] bg-green-700"></div>
          <div className="absolute w-3 h-3 rounded-full bg-green-400 z-10"></div>
        </div>

        {/* Right side blank space */}
        <div className="col-span-4 w-full h-full"></div>

        {/* Right side content */}
        <div className="col-span-4 w-full h-full"></div>

        <div id="section2" className="col-span-4 w-full h-full">
          <div className="w-full h-full p-2 md:ml-24">
            <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
              2020-2021
            </time>
            <h3 className="text-lg font-semibold text-black my-2 dark:text-white">
              Senior Secondary
            </h3>
            <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
               Mother Ayesha Children Academy
              <div>Jaunpur Uttar Pradesh India</div>
              <div>Percentage: 73%</div>
            </p>
          </div>
        </div>

        <div id="section3" className="col-span-4 w-full h-full">
          <div className="w-full h-full p-2 md:pl-4">
            <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
              2018-2019
            </time>
            <h3 className="text-lg font-semibold text-black my-2 dark:text-white">
              High School
            </h3>
            <p className="mb-4 text-base font-normal text-black dark:text-gray-400">
              Shahana International School
              <div>Jaunpur Uttar Pradesh India</div>
              <div>Percentage: 88%</div>
            </p>
          </div>
        </div>

        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-[1px] bg-green-700"></div>
          <div className="absolute w-3 h-3 rounded-full bg-green-400 z-10"></div>
        </div>

        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
      </div>
    </div>
  );
}
