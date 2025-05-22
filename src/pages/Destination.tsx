import { useEffect, useState } from "react";
import { useBreakpoint } from "../Hooks/useBreakpoints";
import AnimatedLayout from "../components/AnimatedLayout";
import { AnimatePresence } from "framer-motion";
import data from "../assets/data.json";
import { type DestinationData } from "../Types";
const images = import.meta.glob("/src/assets/destination/*.{jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const Destination = () => {
  const breakpoint = useBreakpoint();
  const [nowPlanet, setNowPlanet] = useState(data.destinations[0].name);
  const [nowData, setNowData] = useState(data.destinations[0]);
  const bgImg =
    images[`/src/assets/destination/background-destination-${breakpoint}.jpg`];

  useEffect(() => {
    const found = data.destinations.find(
      (planet: DestinationData) => planet.name === nowPlanet
    );
    if (found) setNowData(found);
  }, [nowPlanet]);

  return (
    <AnimatedLayout style={{ position: "absolute" }}>
      <div
        className="flex min-h-screen min-w-screen bg-cover bg-center flex-col items-center pt-27
        lg:flex-row lg:justify-around lg:items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        key={nowPlanet}
      >
        {/* pc左邊 */}
        <div className="flex flex-col lg:flex-4 items-center w-full
        lg:h-[70vh] lg:pl-20
        ">
          <div
            className="flex flex-row items-center gap-4
        md:self-start md:ml-[5vw]
        
        "
          >
            <span className="text-white/50 text-lg lg:text-3xl tracking-[2px] font-barlow-condensed uppercase mr-2">
              01
            </span>
            <p className="text-white text-lg lg:text-3xl font-barlow-condensed  tracking-[2px] lg:tracking-[4px] uppercase">
              Pick your destination
            </p>
          </div>

          {/* img */}
          <div className="pt-10 md:my-5 lg:mt-30">
            <AnimatePresence mode="sync">
              <AnimatedLayout key={nowPlanet}>
                <img
                  src={
                    images[
                      `/src/assets/destination/image-${nowPlanet.toLowerCase()}.png`
                    ] as string
                  }
                  className="w-[18vh] h-[18vh] md:w-[30vh] md:h-[30vh] lg:w-[35vw] lg:h-[35vw] lg:max-w-[500px] lg:max-h-[500px]"
                  alt={nowPlanet}
                />
              </AnimatedLayout>
            </AnimatePresence>
          </div>
        </div>

        {/* nav */}
        {/* pc右邊 */}
        <div className="flex items-center flex-col lg:flex-3 lg:items-start lg:m-10 lg:pt-20">
          <div
            className="flex flex-row items-start gap-10 mt-12
        md:gap-7
        "
          >
            {data.destinations.map((planet: DestinationData) => (
              <button
                key={planet.name}
                onClick={() => setNowPlanet(planet.name)}
                className={`
                h-[35px] flex items-start
                font-barlow-condensed uppercase tracking-[2px]
                cursor-pointer
              ${nowPlanet === planet.name ? "text-white" : "text-[#D0D6F9]"}
              `}
                style={{ background: "none", border: "none" }}
              >
                <span
                  className={`h-[35px] inline-block transition-all duration-500 border-b-3
                   hover:border-white/50
               ${
                 nowPlanet === planet.name
                   ? " border-white"
                   : "border-transparent"
               }
             `}
                >
                  {planet.name}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center mt-10">
            <div>
              <AnimatePresence mode="sync">
                <AnimatedLayout key={nowPlanet}>
                  <h1
                    className="text-white text-5xl  font-bellefair uppercase text-center
                md:text-7xl
                lg:text-8xl lg:text-left
                "
                  >
                    {nowData.name}
                  </h1>
                  <p
                    className="text-center min-h-[156px] text-[#D0D6F9] text-base font-barlow leading-7 pt-4
                w-[70vw]
                lg:w-[30vw]  lg:text-left lg:text-lg lg:leading-8
                "
                  >
                    {nowData.description}
                  </p>
                </AnimatedLayout>
              </AnimatePresence>
            </div>
            <hr
              className="mt-6 w-[85vw] border-t-[1px] border-white/30
          md:w-[70vw] md:mt-0
          lg:w-[30vw] lg:my-5
          "
            />

            {/* 下面兩個數值 */}
            <div
              className="flex flex-col items-center mt-10 gap-6
          md:flex-row md:w-full md:mt-5 md:mb-10 md:gap-0
          
          "
            >
              <div className="flex flex-col items-center gap-2 flex-1 lg:items-start">
                <p className="text-[#D0D6F9] text-base font-barlow-condensed tracking-[2px]">
                  AVG. DISTANCE
                </p>
                <div>
                  <AnimatePresence mode="sync">
                    <AnimatedLayout key={nowPlanet}>
                      <p className="text-white text-3xl font-bellefair">
                        {nowData.distance.toUpperCase()}
                      </p>
                    </AnimatedLayout>
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2  flex-1 lg:items-start">
                <p className="text-[#D0D6F9] text-base font-barlow-condensed tracking-[2px] ">
                  EST. TRAVEL TIME
                </p>
                <div>
                  <AnimatePresence mode="sync">
                    <AnimatedLayout key={nowPlanet}>
                      <p className="text-white text-3xl font-bellefair">
                        {nowData.travel.toUpperCase()}
                      </p>
                    </AnimatedLayout>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Destination;
