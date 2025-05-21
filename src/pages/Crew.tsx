import AnimatedLayout from "../components/AnimatedLayout";
import { useBreakpoint } from "../Hooks/useBreakpoints";
import { useState, useEffect } from "react";
import data from "../assets/data.json";
import { type Crew } from "../Types";
import { AnimatePresence } from "framer-motion";
const images = import.meta.glob("/src/assets/crew/*.{jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});
const Crew = () => {
  const breakpoint = useBreakpoint();

  const [nowPerson, setNowPerson] = useState(data.crew[0].name);
  const [nowData, setNowData] = useState(data.crew[0]);

  useEffect(() => {
    const found = data.crew.find((person: Crew) => person.name === nowPerson);
    if (found) setNowData(found);
  }, [nowPerson]);

  return (
    <AnimatedLayout style={{ position: "absolute", width: "100%" }}>
      <div
        className="flex min-h-screen min-w-screen w-full bg-cover bg-center flex-col items-center pt-27
         lg:flex-row lg:justify-around lg:items-center"
        style={{
          backgroundImage: `url('./src/assets/crew/background-crew-${breakpoint}.jpg')`,
        }}
      >
        {/* pc左邊 */}
        <div
          className="flex flex-col lg:flex-1 items-center w-full
        lg:h-[70vh] lg:pl-20 lg:items-start lg:ml-[5vw]
        "
        >
          <div
            className="flex flex-row items-center gap-4
        md:self-start md:ml-[5vw] lg:ml-0
        
        "
          >
            <span className="text-white/50 text-lg  tracking-[2px] font-barlow-condensed uppercase mr-2
            lg:text-3xl lg:tracking-[4px]">
              02
            </span>
            <p className="text-white text-lg font-barlow-condensed  tracking-[2px] uppercase
            lg:text-3xl lg:tracking-[4px]
            ">
              Meet your crew
            </p>
          </div>
          <div className="h-[300px] reletive flex w-full mt-6 justify-center md:h-[260px]
          lg:flex-5 lg:pt-40  lg:min-w-[30vw] lg:ml-10
          ">
            <AnimatePresence mode="sync">
              <AnimatedLayout key={nowPerson} style={{ position: "absolute" }}>
                <div className="flex flex-0 flex-col mt-6 justify-center items-center gap-1 md:gap-4
                lg:items-start 
                ">
                  <p className="text-white/50 text-xl font-bellefair  tracking-[1px] uppercase
                  lg:text-3xl 
                  ">
                    {nowData.role}
                  </p>

                  <p className="text-white text-2xl md:text-4xl font-bellefair  tracking-[1px] uppercase
                  lg:text-6xl
                  ">
                    {nowData.name}
                  </p>
                </div>
                <p
                  className="flex-0 min-h-[184px] text-[#D0D6F9] text-base font-barlow text-center leading-7  px-8 mt-6
              w-[70vw]  md:min-h-[0px]
              lg:w-[40vw] lg:text-start lg:px-0 lg:text-lg lg:leading-8
              "
                >
                  {nowData.bio}
                </p>
              </AnimatedLayout>
            </AnimatePresence>
          </div>

          {/* nav */}
          <div className="flex flex-0 flex-row items-start gap-5 mt-2 lg:gap-10">
            {data.crew.map((person: Crew) => (
              <button
                key={person.name}
                onClick={() => setNowPerson(person.name)}
                className={`
               w-3 h-3 rounded-full
               hover:bg-white/50 cursor-pointer transition-all duration-500
               lg:w-4 lg:h-4
              ${nowPerson === person.name ? "bg-white" : " bg-white/10"}
              `}
              ></button>
            ))}
          </div>
        </div>

        {/* pc右邊 */}
        <div className="flex items-center flex-col lg:flex-1 lg:items-start lg:mx-10 lg:pt-20">
          {/* img */}
          <div
            className="w-[75vw] max-w-[400px] h-[75vw] max-h-[400px] flex items-end justify-center relative mx-auto my-5 mt-15
        md:w-[80vw] md:max-w-[450px] md:h-[80vw] md:max-h-[450px]
        lg:w-[55vw]  lg:h-[55vw] lg:max-w-[650px] lg:max-h-[650px]
        "
          >
            <AnimatePresence mode="sync">
              <AnimatedLayout
                key={nowPerson}
                style={{ position: "absolute", height: "100%" }}
              >
                <img
                  src={
                    images[
                      `/src/assets/crew/image-${nowPerson
                        .toLowerCase()
                        .replace(" ", "-")}.png`
                    ] as string
                  }
                  alt={nowPerson}
                  className="h-full w-auto object-contain "
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />
              </AnimatedLayout>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Crew;
