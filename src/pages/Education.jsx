import React, { useState } from "react";
import { motion } from "framer-motion";
import EducationCard from "../components/EducationCard";
import EducationCardSlide from "../components/EducationCardSlide";
import project1 from "../assets/project1.png";
const Education = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="h-[150vh] sm:h-[70vh]">
      <div className="mb-20 mt-10 text-center text-5xl font-bold leading-3 sm:text-7xl">
        Education
      </div>
      <div>
        <div className="mb-8 mt-2 block w-full text-center text-3xl font-thin">
          Click on Cards to view more information.
        </div>
        <div className="mb-10 flex h-full w-full flex-col items-center justify-center gap-5 space-y-5 bg-black sm:mt-0 sm:flex-row sm:space-y-0">
          <EducationCardSlide
            name="Imarticus Course"
            bg="bg-gradient-to-r from-cyan-600 to-indigo-600"
            bg2="bg-gradient-to-r from-yellow-500 to-amber-600"
            year="2023-2024"
            course="FullStack Developer"
            marks="73%"
            visible={visible}
            setVisible={setVisible}
          />
          <EducationCardSlide
            name="St.Josephs University"
            bg="bg-gradient-to-r from-indigo-600 to-violet-600"
            bg2="bg-gradient-to-r from-amber-600 to-orange-600"
            year="(2020-2023)"
            course="BCA"
            marks="70%"
            visible={visible}
            setVisible={setVisible}
          />
          <EducationCardSlide
            name="CMR National PU College"
            bg="bg-gradient-to-r from-violet-600 to-purple-600"
            bg2="bg-gradient-to-r from-orange-600 to-red-600"
            year="(2019)"
            course="PCMC"
            marks="72%"
            visible={visible}
            setVisible={setVisible}
          />
          <EducationCardSlide
            name="Legacy School"
            bg="bg-gradient-to-r from-purple-600 to-fuchsia-600"
            bg2="bg-gradient-to-r from-red-600 to-red-800"
            year="(2017)"
            marks="80%"
            course="IGCSE"
            visible={visible}
            setVisible={setVisible}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
