import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = ({
  scrollAbout,
  scrollTech,
  scrollProjects,
  scrollExperience,
  scrollEducation,
}) => {
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState(true);
  const [LS, setLS] = useState(0);
  const [navExpand, setNavExpand] = useState(false);
  const clickScroll = useRef(false);

  const scrollHandler = (scroll) => {
    return () => {
      clickScroll.current = true;
      scroll();

      setTimeout(() => {
        clickScroll.current = false;
      }, 500);
    };
  };

  useEffect(() => {
    const navChanges = scrollY.onChange((currentScrollY) => {
      if (currentScrollY > LS && !clickScroll.current) {
        setShowNavbar(false);
        setNavExpand(false);
      } else if (currentScrollY <= LS || clickScroll.current) {
        setShowNavbar(true);
      }
      setLS(currentScrollY);
    });

    return () => {
      navChanges();
    };
  }, [LS, scrollY]);

  const MobileMenuItem = ({ children, onClick }) => (
    <motion.button
      className="blclickk prounded-3xlext-left w-full outline-none transition-colors duration-200 hover:bg-gray-900 focus:bg-blue-800"
      onClick={() => {
        onClick();
        setNavExpand(false);
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 bg-black p-2"
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile Menu Toggle */}
      <div className="flex justify-end bg-black sm:hidden">
        <button
          className="rounded-full bg-gray-900 bg-opacity-50 p-2"
          onClick={() => setNavExpand((prev) => !prev)}
        >
          {navExpand ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </button>
      </div>

      {/* SM menu */}
      {navExpand && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setNavExpand(false)}
        />
      )}

      {/* SM menu */}
      <motion.div
        className={`bg-opacity-1 fixed left-0 right-0 top-14 z-50 overflow-hidden rounded-b-2xl bg-gray-800 sm:hidden ${
          navExpand ? "blclickk" : "hidden"
        }`}
        initial={{ height: 0 }}
        animate={{ height: navExpand ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="block flex flex-col">
          <MobileMenuItem onClick={scrollHandler(scrollAbout)}>
            About
          </MobileMenuItem>
          <MobileMenuItem onClick={scrollHandler(scrollTech)}>
            Technical
          </MobileMenuItem>
          <MobileMenuItem onClick={scrollHandler(scrollProjects)}>
            Projects
          </MobileMenuItem>
          <MobileMenuItem onClick={scrollHandler(scrollExperience)}>
            Experience
          </MobileMenuItem>
          <MobileMenuItem onClick={scrollHandler(scrollEducation)}>
            Education
          </MobileMenuItem>
        </div>
      </motion.div>

      {/* laptop nav */}
      <div className="hidden justify-center sm:flex">
        <div className="flex space-x-4 rounded-full bg-gray-900 bg-opacity-50 px-6 py-2">
          <button
            className="rounded-3xl px-3 py-1 text-white outline-none transition-colors hover:bg-gray-900 focus:bg-blue-800"
            onClick={scrollHandler(scrollAbout)}
          >
            About
          </button>
          <button
            className="rounded-3xl px-3 py-1 text-white outline-none transition-colors hover:bg-gray-900 focus:bg-blue-800"
            onClick={scrollHandler(scrollTech)}
          >
            Technical
          </button>
          <button
            className="rounded-3xl px-3 py-1 text-white outline-none transition-colors hover:bg-gray-900 focus:bg-blue-800"
            onClick={scrollHandler(scrollProjects)}
          >
            Projects
          </button>
          <button
            className="rounded-3xl px-3 py-1 text-white outline-none transition-colors hover:bg-gray-900 focus:bg-blue-800"
            onClick={scrollHandler(scrollExperience)}
          >
            Experience
          </button>
          <button
            className="rounded-3xl px-3 py-1 text-white outline-none transition-colors hover:bg-gray-900 focus:bg-blue-800"
            onClick={scrollHandler(scrollEducation)}
          >
            Education
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
