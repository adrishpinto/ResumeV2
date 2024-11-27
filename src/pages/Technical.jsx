import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useRef } from "react";

function Item({ title, text1, text2, text3, text4, text5, BG }) {
  return (
    <div>
      <div
        className={`tech-box mx-5 my-10 w-[90%] border p-7 pt-4 sm:h-[400px] sm:w-[420px]`}
        style={{
          "--after-bg-color": BG,
          "--bg-color": BG,
          boxShadow: `0px 0px 20px ${BG}`,
        }}
      >
        <div className="text-2xl font-bold">
          <BgEffectTitle text={title} color={BG} />
        </div>
        <div className="mt-5">
          <BgEffect text={text1} color={BG} />
        </div>
        <div className="mt-2">
          <BgEffect text={text2} color={BG} />
        </div>
        <div className="mt-2">
          <BgEffect text={text3} color={BG} />
        </div>
        <div className="mt-2">
          <BgEffect text={text4} color={BG} />
        </div>
        <div className="mt-2">
          <BgEffect text={text5} color={BG} />
        </div>
      </div>
    </div>
  );
}

function Technical() {
  const text1 = "TECHNICAL";
  const text2 = "SKILLS";
  return (
    <motion.div className="">
      <div className="border border-black">
        <div className="mb-2 mt-20 text-center font-bold tracking-[-3px] sm:mb-8 sm:mt-[150px]">
          {text1.split("").map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-[50px] hover:cursor-pointer sm:text-[95px]"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="text-center font-bold tracking-tighter">
          {text2.split("").map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{ y: -20 }}
              onTap={{ y: -20 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-[50px] hover:cursor-pointer sm:text-[95px]"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-0 flex w-[95%] flex-wrap items-center justify-center sm:mt-10">
        <Item
          text1="Websites that are compatible across all devices"
          text2="Tailwind + CSS for simple responsive design"
          text3="Pure CSS for complex responsive design"
          text4="Conditional rendering for unique designs (e.g., mobile and desktop nav will be completely different)"
          title="Responsive"
          BG="#3B82F6" // Lighter blue shade
        />

        <Item
          text1="Quick design process using Tailwind"
          text2="Designs can be made using Figma"
          text3="Knowledge of color palettes, fonts, and visual styling"
          text4="Design replication of sites without access to their code or dimensions"
          text5="Familiar with UI libraries (Material-UI, etc.)"
          title="UI/UX Design"
          BG="#2563EB" // Slightly deeper blue
        />

        <Item
          text1="Familiar with simple and complex animations"
          text2="Simple animations such as hover and onClick animations"
          text3="Complex animations such as scroll, viewport, and onLoad renders"
          text4="This website features both CSS and Framer Motion animations"
          title="Animation"
          BG="#1E40AF" // Deeper blue shade
        />

        <Item
          text1="Familiar with simple useState hooks and complex Redux setups"
          text2="Best use cases for different state management tools"
          text3="Well-versed in React hooks and their best practices"
          text4="Optimized management for both small and large applications"
          title="State Management"
          BG="#34D399" // Emerald 400
        />

        <Item
          text1="Highly component-based architecture"
          text2="Can be used anywhere (spacing and responsiveness preserved)"
          text3="Components are iteration-compatible without causing issues"
          text4="Optimized components to interact with backend data"
          title="Component Based"
          BG="#10B981" // Emerald 500
        />

        <Item
          text1="Skilled in creating and working with REST APIs"
          text2="API testing done with tools such as Postman"
          text3="Securing APIs using OAuth, JWT, and other authentication methods"
          text4="Experience integrating third-party APIs (e.g., OpenWeather, NewsAPI)"
          title="API Integration"
          BG="#047857" // Emerald 700
        />

        <Item
          text1="Managing databases with a focus on NoSQL (MongoDB)"
          text2="Comfortable with SQL (MySQL, PostgreSQL) for simpler tasks"
          text3="Designing flexible schemas that scale with NoSQL"
          text4="Familiar with data modeling and mapping"
          title="DB Management"
          BG="#A78BFA" // Purple 400
        />

        <Item
          title="Web Hosting"
          text1="Understand environment variable management for secure deployments"
          text2="Web hosting using Render and Vercel"
          text3="Familiar with hosting config and settings, adaptable to other platforms"
          text4="Set up automatic deployments from GitHub or GitLab for CI/CD"
          BG="#8B5CF6" // Purple 500
        />

        <Item
          text1="With the skills mentioned, I can build a full-fledged, ready-to-host website."
          text2="I’ll create great-looking components and a highly interactive UI that works on any device."
          text3="On the backend, I can ensure security, handle API integrations, and manage databases."
          title="Final Overview"
          BG="#6D28D9" // Purple 700
        />
      </div>
    </motion.div>
  );
}

export default Technical;

function BgEffect({ text, color }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <div className="relative inline-block">
      <motion.div
        className="z-1 absolute left-0 top-0 h-full"
        style={{ backgroundColor: color }}
        initial={{ width: "100%" }}
        animate={{ width: inView ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      />
      <div className="mb-3 flex items-start">
        <div
          ref={ref}
          className={`text-xl font-[300] ${inView ? "opacity" : "opacity"}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

function BgEffectTitle({ text, color }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <div className="relative inline-block">
      <motion.div
        className="z-1 absolute top-0 h-full"
        style={{ backgroundColor: color }}
        initial={{ width: "100%" }}
        animate={{ width: inView ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      />
      <div
        ref={ref}
        className={`text-4xl font-semibold ${inView ? "opacity" : "opacity"}`}
      >
        {text}
      </div>
    </div>
  );
}
