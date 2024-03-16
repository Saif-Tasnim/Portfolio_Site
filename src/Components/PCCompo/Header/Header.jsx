import React, { useEffect, useState } from "react";
import MobileNav from "../../MobileCompo/MobileNav/MobileNav";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  // const scrollToTop = () => {
  //     scroll.scrollToTop({
  //         smooth: true,
  //         duration: 500,
  //     });
  // };

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {};

  return (
    <section className="px-5 fixed top-0 bg-[#1b2022] w-full py-2 lg:py-6 flex justify-between items-center z-10">
      <div>
        <h1
          className={`uppercase font-bold tracking-widest lg:mx-24 hover:cursor-pointer ${
            open
              ? "-translate-y-20 transition-all duration-700"
              : "block transition-all duration-700"
          }`}
        >
          <Link to="home" smooth={true} onClick={scrollToTop} duration={100}>
            {" "}
            saif tasnim chy{" "}
          </Link>
        </h1>
      </div>

      <div className="mr-7 hidden lg:block  z-30">
        <ul className="flex items-center gap-7">
          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all cursor-pointer duration-700">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              onSetActive={handleSetActive}
              onClick={scrollToTop}
            >
              {" "}
              Home{" "}
            </Link>{" "}
          </li>

          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              onSetActive={handleSetActive}
            >
              {" "}
              About{" "}
            </Link>
          </li>

          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              onSetActive={handleSetActive}
            >
              Experience{" "}
            </Link>
          </li>

          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              onSetActive={handleSetActive}
            >
              {" "}
              Skills{" "}
            </Link>
          </li>

          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              to="educations"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              {" "}
              Education
            </Link>
          </li>

          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              {" "}
              Projects{" "}
            </Link>{" "}
          </li>

          {/* <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              Testimonial{" "}
            </Link>{" "}
          </li> */}

          <li className="border-b-4 border-[#1b2022] hover:border-purple-600 hover:transition-all duration-700 cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={100}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile nav  */}
      <div className="lg:hidden">
        <MobileNav open={open} setOpen={setOpen}></MobileNav>
      </div>
    </section>
  );
};

export default Header;
