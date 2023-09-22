"use client";
// next image
import Image from "next/image";
// react countup
import CountUp from "react-countup";
// react Intersection Observer
import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import { useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../varients";
function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* image  */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20xl]"
              src="/images/about/car01.png"
              width={600}
              height={448}
            />
          </motion.div>
          {/* text & stats */}
          <div className="flex  items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Car services simplified
              </motion.h2>
              <motion.p 
               variants={fadeIn("up", 0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.6 }}
              className="mb-[42px] max-w-md">
                flex items-center xl:justify-center Rent,Choose and repair with
                us . Our convenient locations , diverse car types , and reliable
                repair points ensure a seamless car experience{" "}
              </motion.p>
              {/* stats  */}
              <motion.div 
               variants={fadeIn("up", 0.8)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.2 }}
              className="flex flex-1 items-center gap-x-8 mb-12">
                {/* car types  */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase font-semibold text-secondary text-[13px]">
                    car <br /> types
                  </div>
                </div>
                {/* rental outlets  */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase font-semibold text-secondary text-[13px]">
                    rental <br /> outlets
                  </div>
                </div>
                {/* repair points  */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase font-semibold text-secondary text-[13px]">
                    repair <br /> points
                  </div>
                </div>
              </motion.div>
              <motion.button 
               variants={fadeIn("up", 1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.6 }}
              className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]">
                See All Cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
