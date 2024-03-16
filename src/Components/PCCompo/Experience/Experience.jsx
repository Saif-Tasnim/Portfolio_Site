import React from "react";
import { EXPERIENCE } from "../../../static/EXPERIENCE";
import SingleExperience from "./SingleExperience";
import { Zoom } from "react-awesome-reveal";

const Experience = () => {
  return (
    <section name="experience" className="pt-44">
      <h1 className="text-center mt-8 mb-20 text-xl font-bold"> Experience </h1>
      <Zoom direction="up" duration={1200}>
        <div className="flex flex-col gap-4 justify-center items-center">
          {EXPERIENCE.map((exp) => (
            <SingleExperience key={exp.id} exp={exp} />
          ))}
        </div>
      </Zoom>
    </section>
  );
};

export default Experience;
