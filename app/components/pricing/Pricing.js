"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProjects } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
// import ReactPaginate from 'react-paginate'

import { motion } from "framer-motion";

const packContent = {
  heading: {
    title: "When creativity meets developement web",
    subTitle: "How it work",
  },
  packs: [
    {
      img: "/images/screens-pack-training-athlete.jpg",
      title: "Pack Traning Atheler",
      price: "100€",
      content:
        "Programme d’entraînement personnalisé en fonction de ta discipline (Football, Boxe , ...). ",
      subContent:
        "Programme de réathlétisation adapté à ta pathologie et ta discipline",
      suivi: "Suivi entraînement avec correction des mouvements",
      messagerie: "Messagerie privée 7j/7 sur WhatsApp / mail",
      application: "Application Fournie Team Ricco",
      plan: "Plan 100% personnalisé et adapté",
      bilan: "Bilan toutes les 2 semaines",
      btn: {
        href: "/projects",
        label: "Paiement",
      },
    },
    {
      img: "/images/screens-pack-programmes-starter.jpg",
      title: "Pack Starter",
      price: "100 €",
      content:
        "Programme d’entraînement personnalisé en fonction de ta discipline (Football, Boxe , ...). ",
      subContent:
        "Programme de réathlétisation adapté à ta pathologie et ta discipline",
      suivi: "Suivi entraînement avec correction des mouvements",
      messagerie: "Messagerie privée 7j/7 sur WhatsApp / mail",
      application: "Application Fournie Team Ricco",
      plan: "Plan 100% personnalisé et adapté",
      bilan: "Bilan toutes les 2 semaines",
      btn: {
        href: "/projects",
        label: "Paiement",
      },
    },
    {
      img: "/images/screens-pack-programmes-vip-premium.jpg",
      title: "Pack Vip Premium",
      price: "200 €",
      content:
        "Programme d’entraînement personnalisé en fonction de ta discipline (Football, Boxe , ...). ",
      subContent:
        "Programme de réathlétisation adapté à ta pathologie et ta discipline",
      suivi: "Suivi entraînement avec correction des mouvements",
      messagerie: "Messagerie privée 7j/7 sur WhatsApp / mail",
      application: "Application Fournie Team Ricco",
      plan: "Plan 100% personnalisé et adapté",
      bilan: "Bilan toutes les 2 semaines",
      btn: {
        href: "/projects",
        label: "Paiement",
      },
    },
    {
      img: "/images/screen-pack-nutrition-1.jpg",
      title: "Pack Nutrition",
      price: "80 €",
      content:
        "Programme d’entraînement personnalisé en fonction de ta discipline (Football, Boxe , ...). ",
      subContent:
        "Programme de réathlétisation adapté à ta pathologie et ta discipline",
      suivi: "Suivi entraînement avec correction des mouvements",
      messagerie: "Messagerie privée 7j/7 sur WhatsApp / mail",
      application: "Application Fournie Team Ricco",
      plan: "Plan 100% personnalisé et adapté",
      bilan: "Bilan toutes les 2 semaines",
      btn: {
        href: "/projects",
        label: "Paiement",
      },
    },
  ],
};

const Project = ({ className }) => {
  const ref = useRef(null);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:w-10/12 mx-auto">
          {/* <Items currentItems={currentItems} /> */}
          <div className="w-full py-10" key={packContent.packs[0]}>
            <div className="block md:flex overflow-y-visible items-scretch bg-white rounded-lg md:h-[500px] h-[800px]">
              <div className="md:w-5/12">
                <Image
                  src={packContent.packs[0].img}
                  alt={packContent.packs[0].name}
                  width={379}
                  height={320}
                  className="object-fit object-center !h-full !w-full sm:rounded-t-lg rounded-l-lg"
                />
              </div>
              <div className="md:w-8/12 md:p-4 flex items-center ">
                <div>
                  <h3
                    className="text-orange-400 text-center text-[24px] mb-3
                    pt-0 pb-3 mt-3 duration-300 transistion-all ease-in-out
                    border-b-[1px] border-spacing-[7px] md:pl-20 "
                  >
                    {packContent.packs[0].title}
                  </h3>
                  <ul
                    role="list"
                    className="marker:text-orange-400 list-disc pl-10 md:pl-20 space-y-1 text-gray-500"
                  >
                    <li className="list-none text-center text-2xl text-orange-400 pt-0 pb-3 mt-3 ">
                      {packContent.packs[0].price}
                      <span className="text-gray-500">/mois</span>
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].content}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].subContent}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].suivi}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].messagerie}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].application}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].plan}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-spacing-[7px] text-left"
                    >
                      {packContent.packs[0].bilan}
                    </li>
                    {/* btn link */}
                    <div>
                      {packContent.packs[0].btn && (
                        <motion.btn
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.5 },
                          }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={packContent.packs[0].btn.href}
                            className="transistion-all duration-300 ease-in-out
                                text-[11.5px] tracking-[2px] font-bold uppercase
                                bg-orange-600 py-2 px-2 rounded text-white
                                inline-flex hover:bg-white hover:text-orange-600
                                hover:shadow-2xl hover:border-[2px] ml-40 mt-5 md:ml-80 md:pt-[10]"
                          >
                            {packContent.packs[0].btn.label}
                          </Link>
                        </motion.btn>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <Items currentItems={currentItems} /> */}
          <div className="w-full py-10" key={packContent.packs[1]}>
            <div className="block md:flex overflow-y-visible items-scretch bg-white rounded-lg md:h-[460px] h-[800px]">
              <div className="md:w-5/12 ">
                <Image
                  src={packContent.packs[1].img}
                  alt={packContent.packs[1].name}
                  width={379}
                  height={320}
                  className="object-fit object-center !h-full !w-full sm:rounded-t-lg"
                />
              </div>
              <div className="md:w-8/12 md:p-4 flex items-center ">
                <div>
                  <h3
                    className="text-orange-400 text-center text-[24px] mb-3
                    pt-1 pb-3 duration-300 transistion-all ease-in-out
                    border-b-[1px] border-spacing-[7px] md:pl-20 "
                  >
                    {packContent.packs[1].title}
                  </h3>
                  <ul
                    role="list"
                    className="marker:text-orange-400 list-disc pl-10 md:pl-20 space-y-1 text-gray-500"
                  >
                    <li className="list-none text-center text-2xl text-orange-400 pt-0 pb-3 mt-3 ">
                      {packContent.packs[1].price}
                      <span className="text-gray-500">/mois</span>
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].content}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].subContent}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].suivi}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].messagerie}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].application}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].plan}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-spacing-[7px] text-left"
                    >
                      {packContent.packs[1].bilan}

                      {/* btn link */}
                    </li>
                    <div>
                      {packContent.packs[1].btn && (
                        <motion.btn
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.5 },
                          }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={packContent.packs[1].btn.href}
                            className="transistion-all duration-300 ease-in-out
                                text-[11.5px] tracking-[2px] font-bold uppercase
                                bg-orange-600 py-2 px-2 rounded text-white
                                inline-block hover:bg-white hover:text-orange-600
                                hover:shadow-2xl hover:border-[2px] ml-40 mt-5"
                          >
                            {packContent.packs[0].btn.label}
                          </Link>
                        </motion.btn>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <Items currentItems={currentItems} /> */}
          <div className="w-full py-10" key={packContent.packs[2]}>
            <div className="block md:flex overflow-y-visible items-scretch bg-white rounded-lg md:h-[460px] h-[800px]">
              <div className="md:w-5/12 ">
                <Image
                  src={packContent.packs[2].img}
                  alt={packContent.packs[2].name}
                  width={379}
                  height={320}
                  className="object-fit object-center !h-full !w-full sm:rounded-t-lg"
                />
              </div>
              <div className="md:w-8/12 md:p-4 flex items-center ">
                <div>
                  <h3
                    className="text-orange-400 text-center text-[24px] mb-3
                    pt-1 pb-3 duration-300 transistion-all ease-in-out
                    border-b-[1px] border-spacing-[7px] md:pl-20 "
                  >
                    {packContent.packs[2].title}
                  </h3>
                  <ul
                    role="list"
                    className="marker:text-orange-400 list-disc pl-10 md:pl-20 space-y-1 text-gray-500"
                  >
                    <li className="list-none text-center text-2xl text-orange-400 pt-0 pb-3 mt-3 ">
                      {packContent.packs[2].price}
                      <span className="text-gray-500">/mois</span>
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].content}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].subContent}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].suivi}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].messagerie}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].application}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].plan}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px]
                    text-gray-500 pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-spacing-[7px] text-left"
                    >
                      {packContent.packs[2].bilan}
                    </li>

                    {/* btn link */}
                    <div>
                      {packContent.packs[2].btn && (
                        <motion.btn
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.5 },
                          }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={packContent.packs[2].btn.href}
                            className=" text-left transistion-all duration-300
                              ease-in-out text-[11.5px] tracking-[2px] font-bold
                              uppercase bg-orange-600 py-2 px-2 rounded text-white
                              inline-block hover:bg-white hover:text-orange-600
                              hover:shadow-2xl hover:border-[2px] ml-40 mt-5"
                          >
                            {packContent.packs[0].btn.label}
                          </Link>
                        </motion.btn>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <Items currentItems={currentItems} /> */}
          <div className="w-full py-10" key={packContent.packs[3]}>
            <div className="block md:flex overflow-y-visible items-scretch bg-white rounded-lg md:h-[460px] h-[800px]">
              <div className="md:w-5/12 ">
                <Image
                  src={packContent.packs[3].img}
                  alt={packContent.packs[3].name}
                  width={379}
                  height={320}
                  className="object-fit object-center !h-full !w-full sm:rounded-t-lg"
                />
              </div>
              <div className="md:w-8/12 md:p-4 flex items-center ">
                <div>
                  <h3
                    className="text-orange-400 text-center text-[24px] mb-3
                    pt-1 pb-3 duration-300 transistion-all ease-in-out
                    border-b-[1px] border-spacing-[7px] md:pl-20 "
                  >
                    {packContent.packs[3].title}
                  </h3>
                  <ul
                    role="list"
                    className="marker:text-orange-400 list-disc pl-10 md:pl-20 space-y-1 text-gray-500"
                  >
                    <li className="list-none text-center text-2xl text-orange-400 pt-0 pb-3 mt-3 ">
                      {packContent.packs[3].price}
                      <span className="text-gray-500">/mois</span>
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].content}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].subContent}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].suivi}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].messagerie}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].application}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-b-[1px] border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].plan}
                    </li>
                    <li
                      className="leading-relaxed w-[300px] md:w-[650px] text-[15px] text-gray-500
                      pt-0 pb-3 mt-3  duration-300 transistion-all ease-in-out
                      border-spacing-[7px] text-left"
                    >
                      {packContent.packs[3].bilan}

                      {/* btn link */}
                    </li>
                    <span>
                      {packContent.packs[3].btn && (
                        <motion.btn
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.5 },
                          }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={packContent.packs[3].btn.href}
                            className="transistion-all duration-300 ease-in-out
                                text-[11.5px] tracking-[2px] font-bold uppercase
                                bg-orange-600 py-2 px-2 rounded text-white
                                inline-block hover:bg-white hover:text-orange-600
                                hover:shadow-2xl hover:border-[2px] ml-40 mt-5"
                          >
                            {packContent.packs[3].btn.label}
                          </Link>
                        </motion.btn>
                      )}
                    </span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
