import { useBreakpoint } from "../Hooks/useBreakpoints";
import AnimatedLayout from "../components/AnimatedLayout";
import { Link } from "react-router-dom";
const images = import.meta.glob("/src/assets/home/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const Home = () => {
  const breakpoint = useBreakpoint();

  const bgImg = images[`/src/assets/home/background-home-${breakpoint}.jpg`];

  return (
    <AnimatedLayout style={{ position: "absolute" }}>
      <div
        className="flex flex-col min-h-screen min-w-screen bg-cover bg-center px-6 text-white text-center
        lg:flex-row lg:justify-between lg:items-center lg:pt-90
        "
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div
          className="flex flex-2 mt-30 flex-col items-center mx-auto w-[80vw]
        md:w-[68vw]
        lg:mt-0 lg:items-start lg:ml-40
        "
        >
          <p
            className="flex flex-1 text-[#D0D6F9] text-base tracking-[2.5px] font-barlow-condensed mb-2 uppercase
          md:text-2xl md:tracking-[4px] md:items-end md:flex-3
          lg:text-3xl lg:tracking-[4px]
          "
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1
            className="flex-2 text-[80px]  font-bellefair mb-4
          md:text-[150px]  md:flex-0 md:mb-0
          "
          >
            SPACE
          </h1>
          <p
            className="flex-3 font-barlow text-base leading-7 text-[#D0D6F9] mb-10
          md:text-lg 
          lg:w-[35vw] lg:text-start
          "
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" flex flex-2 flex-col items-center mb-15">
          <div className="relative group">
            <Link
              to="/destination"
              className="w-[35vw] h-[35vw] rounded-full bg-white text-[#0B0D17] text-lg font-bellefair tracking-normal shadow-lg  transition-transform duration-300 flex items-center justify-center
             md:text-3xl
             lg:w-[18vw] lg:h-[18vw]
            "
            >
              EXPLORE
            </Link>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[57vw] h-[57vw] rounded-full bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-500 z-50
              lg:w-[27vw] lg:h-[27vw]
              "
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Home;
