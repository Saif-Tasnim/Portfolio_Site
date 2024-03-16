import React from "react";
import SkillBar from "react-skillbars";
import { COLORS, TOOLS_SKILLS } from "../../../static/SKILL";

const Tools = () => {
  return (
    <div className="my-8 flex justify-center gap-10 mx-20">
      <div className="w-1/2"> 
        <SkillBar
          skills={TOOLS_SKILLS}
          colors={COLORS}
          animationDelay={100}
          animationDuration={3000}
        />
      </div>
    </div>
  );
};

export default Tools;
