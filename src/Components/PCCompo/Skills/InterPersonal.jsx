import React from "react";
import SkillBar from "react-skillbars";
import { COLORS, PERSONAL_SKILLS } from "../../../static/SKILL";

const InterPersonal = () => {
  return (
    <div className="my-8 flex justify-center gap-10 mx-20">
      <div className={`w-4/5`}>
        <SkillBar
          skills={PERSONAL_SKILLS}
          colors={COLORS}
          animationDelay={100}
          animationDuration={3000}
        />
      </div>
    </div>
  );
};

export default InterPersonal;
