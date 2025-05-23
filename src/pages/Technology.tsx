import AnimatedLayout from "../components/AnimatedLayout";
import { useBreakpoint } from "../Hooks/useBreakpoints";
import { useState, useEffect } from "react";
import data from "../assets/data.json";
import { type TechnologyData } from "../Types";
import { AnimatePresence } from "framer-motion";
const images = import.meta.glob("/src/assets/technology/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const Technology = () => {
  const breakpoint = useBreakpoint();
  const [nowTech, setNowTech] = useState(data.technology[0].name);
  const [nowData, setNowData] = useState(data.technology[0]);

  const bgImg =
  images[`/src/assets/technology/background-technology-${breakpoint}.jpg`];

  useEffect(() => {
    const found = data.technology.find(
      (tech: TechnologyData) => tech.name === nowTech
    );
    if (found) setNowData(found);
  }, [nowTech]);

  // 根據 breakpoint 切換圖片
  const imgKey =
    breakpoint === "mobile"
      ? nowData.images.portrait.replace("./", "/src/")
      : nowData.images.landscape.replace("./", "/src/");
  const techImg = images[imgKey];

  return (
    <AnimatedLayout style={{ position: "absolute", width: "100%" }}>
      <div
        className="flex min-h-screen w-full bg-cover bg-center flex-col items-center pt-27"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {/* title */}
        <div
          className="flex flex-row items-center gap-4
        md:self-start md:ml-[5vw]
        lg:pl-20  lg:ml-[5vw] lg:mt-23
        "
        >
          <span className="text-white/50 text-lg tracking-[2px] font-barlow-condensed uppercase mr-2
          lg:text-3xl lg:tracking-[4px]
          ">
            03
          </span>
          <p className="text-white text-lg font-barlow-condensed tracking-[2px] uppercase
          lg:text-3xl lg:tracking-[4px]">
            Space launch 101
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:w-full">
          {/* 右邊 */}

          <div>
            {/* img */}
            <div className="w-[100vw] h-[30vh] overflow-hidden mt-15 md:h-[35vh]
            lg:w-[40vw] lg:h-[40vw] lg:max-w-[600px] lg:max-h-[600px] lg:mt-20 lg:pl-5
            ">
              <AnimatePresence mode="sync">
                <AnimatedLayout key={nowTech} style={{ position: "absolute" }}>
                  <div className="w-[100vw] h-[30vh] md:h-[35vh]
                  lg:w-[40vw] lg:h-[40vw] lg:max-w-[600px] lg:max-h-[600px]
                  ">
                    <img
                      src={techImg as string}
                      alt={nowData.name}
                      className="w-[100vw] h-full object-cover object-bottom
                      lg:w-[40vw] lg:h-[40vw]   lg:max-w-[600px] lg:max-h-[600px]
                      "
                    />
                  </div>
                </AnimatedLayout>
              </AnimatePresence>
            </div>
          </div>
          {/* 左邊 */}
          <div className="flex flex-col items-center text-center
          lg:flex-row lg:w-full lg:pl-20 lg:mt-30 lg:ml-10
          ">
            {/* nav */}
            <div className="flex flex-row items-center gap-4 mt-8
            lg:flex-col
            lg:gap-8
            ">
              {data.technology.map((tech: TechnologyData, idx: number) => (
                <button
                  key={tech.name}
                  onClick={() => setNowTech(tech.name)}
                  className={`w-10 h-10 rounded-full border border-white/30 text-lg font-bellefair flex items-center justify-center transition-all duration-200 
                md:w-13 md:h-13
                lg:w-20 lg:h-20 lg:text-3xl
                ${
                  nowTech === tech.name
                    ? "bg-white text-black"
                    : "bg-transparent  text-white"
                }`}
                >
                  <span className=" pt-[3px]">{idx + 1}</span>
                </button>
              ))}
            </div>
            {/* text */}
            <div className="flex flex-col items-center text-center
            lg:items-start lg:text-left lg:pl-10 lg:h-[450px] lg:justify-center
            ">
              <p
                className="text-white/40 text-lg md:text-2xl font-bellefair tracking-[0px] uppercase mb-2 mt-8
          md:mt-10 md:mb-4
          lg:mb-0 lg:mt-25
          "
              >
                THE TERMINOLOGY...
              </p>
              <div
                className="min-h-[264px] flex flex-col items-center text-center
          md:min-h-[0px]
           lg:items-start lg:text-left lg:h-full lg:justify-center"
              >
                <AnimatePresence mode="sync">
                  <AnimatedLayout
                    key={nowTech}
                    style={{ position: "absolute"}}
                  >
                    <h1 className="text-white text-2xl md:text-4xl font-bellefair uppercase mb-4">
                      {nowData.name}
                    </h1>
                    <p
                      className="text-[#D0D6F9] text-base font-barlow leading-7 max-w-2xl px-3 mb-5
                w-[70vw]
                lg:w-[35vw] lg:px-0
                "
                    >
                      {nowData.description}
                    </p>
                  </AnimatedLayout>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Technology;
