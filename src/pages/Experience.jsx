import { useRef, useState } from "react";
import resume from "../assets/resume.jpg";
import { motion, useInView } from "framer-motion";

function Experience() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const inView1 = useInView(ref1, { amount: 0.3 });
  const inView2 = useInView(ref2, { amount: 0.3 });

  const [certificate, setCertificate] = useState(0);

  return (
    <motion.div className="relative mb-24">
      <div className="mt-2 text-center text-5xl font-semibold tracking-tighter sm:text-[80px] md:text-[110px]">
        EXPERIENCE
      </div>

      {/* Experience Item 1 */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: inView1 ? 1 : 0,
          filter: inView1 ? "blur(0)" : "blur(10px)",
        }}
        transition={{ duration: 0.7 }}
        className="sm:[80%] mx-auto mt-[130px] w-[90%] rounded-2xl border p-3 sm:p-10 md:w-[60%]"
      >
        <h1 className="mx-auto mb-5 w-fit bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-5xl text-transparent sm:mx-0 md:text-7xl">
          Infits
        </h1>
        <p className="text-2xl font-[200]">
          Worked for two months in Infits, in a team consisting of three members
          including me. Our task was to build a Job Seeker website from scratch.
          Our responsibilities included:
          <ul className="ml-5 text-[20px] marker:ml-0.5">
            <li className="bullet ml-5">
              Creating 45 pages and 100+ components using React + Tailwind.
            </li>
            <li className="bullet ml-5">
              Making each page responsive for small/medium devices.
            </li>
            <li className="bullet ml-5">
              Creating backend and using JWT for Auth.
            </li>
            <li className="bullet ml-5">
              Creating multiple RESTful APIs for required pages.
            </li>
            <li className="bullet ml-5">
              Used multiple APIs, including email-otp, mobile-otp, and ML/AI
              custom from our ML team.
            </li>
            <li className="bullet ml-5">
              Created "View PDF" and "Create Resume" features and a custom
              calendar.
            </li>
            <li className="bullet ml-5">
              Created a Chrome extension for autofill in job-seeking sites.
            </li>
          </ul>
          <div
            onClick={() => setCertificate((prev) => !prev)}
            className="mx-auto mt-6 w-fit border px-2 py-1 hover:cursor-pointer hover:bg-gray-900 md:mx-0"
          >
            View Certificate
          </div>
          {certificate == 1 && (
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-50"
              onClick={() => setCertificate((prev) => !prev)}
            >
              <div className="absolute left-[50%] top-[40%] z-50 translate-x-[-50%] translate-y-[-50%]">
                <img src={resume} alt="Resume Certificate" />
              </div>
            </div>
          )}
        </p>
      </motion.div>

      {/* Experience Item 2 */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: inView2 ? 1 : 0,
          filter: inView2 ? "blur(0)" : "blur(10px)",
        }}
        transition={{ duration: 0.7 }}
        className="sm:[80%] mx-auto mt-20 w-[90%] rounded-2xl border p-3 sm:p-10 md:w-[60%]"
      >
        <h1 className="mb-5 w-fit bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-4xl text-transparent sm:text-left sm:text-5xl md:text-7xl">
          Clients and Other Projects
        </h1>
        <p className="px-3 text-2xl font-[200] md:px-0">
          I worked on two client projects alongside one other person through
          online platforms. Both projects were product management tools with
          simple frontend designs. We implemented CRUD (Create, Read, Update,
          Delete) operations and added a dashboard for easy operation. These
          projects were intended for small-scale use, so there was no need to
          account for high scaling. Our main task was to ensure that the CRUD
          operations functioned smoothly without any issues.
          <p className="mt-6">
            Before the client projects, I worked on various projects, including
            personal, college, and Imarticus projects. Imarticus was a
            comprehensive course that involved multiple assessments, hands-on
            projects, and a final exam. Upon successful completion, I was
            awarded a certificate and gained access to additional resources.
          </p>
          {/* <div
            onClick={() => setCertificate((prev) => !prev)}
            className="mx-auto mt-6 w-fit border px-2 py-1 hover:cursor-pointer hover:bg-gray-900 md:mx-0"
          >
            View Certificate
          </div>
          {certificate === 1 && (
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-50"
              onClick={() => setCertificate((prev) => !prev)}
            >
              <div className="absolute left-[50%] top-[40%] z-50 translate-x-[-50%] translate-y-[-50%]">
                <img src={resume} alt="Resume Certificate" />
              </div>
            </div>
          )} */}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
