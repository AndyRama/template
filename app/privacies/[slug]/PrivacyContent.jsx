"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { allPrivacies } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import PrivacyCard from "@/app/components/privacy/category/PrivacyCard";

import { getMDXComponent } from "next-contentlayer/hooks";

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const PrivacyContent = ({ privacy }) => {
  const privacies = allPrivacies.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  let MDXContent;

  if (!privacies) return null;

  if (!privacy) {
    console.log("Blog privacy not found");
  } else {
    MDXContent = getMDXComponent(privacy.body.code);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transistion: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 lg:py-44 container px-4 mx-auto"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Content title privacy */}
          <h1 className="text-slate-900 text-center text-4xl/none lg:text-6xl/none font-medium">
            {privacies.title}
          </h1>

          <p className="text-slate-500 mt-10">
            <span className="inline-flex space-x-3">

              <span>•</span>
              <span>{privacies.author}</span>
            </span>

            <span className="mx-3">•</span>

            {privacies.categories?.map((category, index) => (
              <Link
                href={`/privacy/categories/${slugify(category.title)}`}
                key={category.title}
                className="font-medium"
              >
                {category.title}
                {index < privacies.categories.length - 1 ? ` | ` : ``}
              </Link>
            ))}
          </p>
        </div>

        {/* Content Image privacies */}
        <div className="mb-16">
          <Image
            src={privacies.image}
            width={1065}
            height={644}
            className="object-cover object-top rounded-md"
            alt={privacies.title}
          />
        </div>

        {/* Content Article */}
        <article className="prose mx-auto max-w-2xl">
          <MDXContent />
        </article>

        <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
          <h2 className="text-2xl text-gray-700 mb-10"> More Blogs Posts</h2>

          {/* Card others posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {privacies
              .filter((a) => privacies.title !== a.title)
              .map((item, index) => {
                if (index > 2) return null;
                return <PrivacyCard key={index} index={index} privacies={item} />;
              })}
          </div>

          {/* Btn others post */}
          <div className="flex justify-center mt-10">
            <Link
              href="/blog"
              className="transition-all duration-300 ease-in-out
              text-[11.5px] tracking-[2px] font-bold uppercase bg-orange-600
              hover:text-orange-600 py-4 px-5 text-white hover:bg-white hover:shadown-2xl rounded-md"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyContent;
