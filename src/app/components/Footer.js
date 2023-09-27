"use client";

import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";

// icons
// components
import CopyRight from "./CopyRight";
// motion
import { motion } from 'framer-motion';
// varients 
import { fadeIn } from "../varients";
export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* grid item */}
        <motion.div 
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo  */}
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              <Image src={"/icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            {/* text  */}
            <div className="text-secondary">
              We are dedicated to providing you with the ultimate automobile
              buying experience.
            </div>
            {/* phone & email  */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone  */}
              <div className="flex gap-x-[10px] items-center">
                <FaPhone />
                <div className="font-medium">+880 1746967028</div>
              </div>
              {/* email */}
              <div className="flex gap-x-[10px] items-center">
                <FaEnvelope />
                salauddincse011@gmail.com
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            {/* links  */}
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  {" "}
                  <a href=""></a> New York
                </li>
                <li>
                  {" "}
                  <a href=""></a> Careers
                </li>
                <li>
                  {" "}
                  <a href=""></a> Mobile
                </li>
                <li>
                  {" "}
                  <a href=""></a> Blog
                </li>
                <li>
                  {" "}
                  <a href=""></a> How we works
                </li>
              </ul>
            </div>
          </div>
           {/* programs  */}
            <div className="flex-1">
              <h3 className="h3 font-bold mb-8">Working Hours</h3>
              <div className="flex flex-col gap-y-4" >
                <div className="flex gap-x-2">
                  <div className="text-secondary"> Mon -Fri</div>
                  <div className="font-semibold">09:00 AM -09.00 PM</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary"> Sat:</div>
                  <div className="font-semibold">09:00 AM -7.00PM</div>
                </div>
                <div className="flex gap-x-2">
                  <div className="text-secondary"> Sun :</div>
                  <div className="font-semibold">Closed</div>
                </div>

              </div>
            </div>
          {/* Newsletter */}
          <div className="flex-1">
              <h3 className="h3 font-bold mb-8">Newsletter</h3>
               <div className="text-secondary mb-9">Search Your Cars</div>
                <form className="flex gap-x-2 h-14 ">
               <input type="email" placeholder="Your Email :" className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"></input>
                 <button type="submit" className="btn btn-sm bg-accent w-24 hover:bg-accent-hover ">Submit</button>
                </form>
            </div>
        </motion.div>
      </div>
      <CopyRight/>
    </footer>
  );
}
