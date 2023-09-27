"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../varients";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:md-0">
            {/* text  */}
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2 
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h2">Download our App now and hit the road with ease</motion.h2>
              <motion.p 
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mb-10">
                Our Dealership is founded on trust, integrity, and respect. We
                are proud to offer these values in our sales and business
                practices , so our customers keep coming back. The vehicles on
                our lot have the best prices and quality in the area so come by
                and see us today!
              </motion.p>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta">
                  <Image
                    src={"/icons/buttons/app-store.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />{" "}
                </button>
                <button className="btn-cta">
                  <Image
                    src={"/icons/buttons/google-play.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />{" "}
                </button>
              </motion.div>
            </div>
          </div>
          {/* image  */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/images/cta/phone.svg"}
              width={320}
              height={640}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
