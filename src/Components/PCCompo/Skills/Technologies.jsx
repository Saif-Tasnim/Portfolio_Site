import React from "react";
import SkillBar from "react-skillbars";
import { COLORS, TECHNOLOGY_SKILLS } from "../../../static/SKILL";

const Technologies = () => {
  const midIndex = Math.round(TECHNOLOGY_SKILLS.length / 2);
  const first_half = TECHNOLOGY_SKILLS.slice(0, midIndex);
  const second_half = TECHNOLOGY_SKILLS.slice(midIndex);

  return (
    <div className="my-8 flex flex-col md:flex-row justify-center gap-0 md:gap-10 mx-5 md:mx-20">
      <div className="w-full md:w-1/3">
        <SkillBar
          skills={first_half}
          colors={COLORS}
          animationDelay={100}
          animationDuration={3000}
        />
      </div>
      <div className="w-full md:w-1/3">
        <SkillBar
          skills={second_half}
          colors={COLORS}
          animationDelay={1000}
          animationDuration={3000}
        />
      </div>
    </div>
  );
};

export default Technologies;
