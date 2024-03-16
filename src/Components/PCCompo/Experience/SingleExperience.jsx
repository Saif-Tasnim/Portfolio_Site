import React from "react";
import { Zoom } from "react-awesome-reveal";

const SingleExperience = ({ exp }) => {
  return (
  
      <div className="w-[90%] md:w-3/4 flex flex-col md:flex-row gap-12 p-6 rounded-md md:mx-auto bg-purple-700">
        <div className="w-full md:w-1/2">
          <h1 className="text-lg md:text-xl font-bold">{exp.position}</h1>
          <p className="py-2">{exp.jobName}</p>
          <p className="py-1">{exp.duration}</p>
          <p className="py-1">{exp.location}</p>
          <p className="py-1">{exp.jobType}</p>
        </div>

        <div>
          <h3 className="font-bold pb-2 whitespace-normal md:whitespace-nowrap">My Role as {exp.position} : </h3>
          <ul className="w-[95%]">
            {exp.description.map((exd) => (
              <li className="list-disc list-inside text-sm py-2">{exd}</li>
            ))}
          </ul>

          <h3 className="pt-6 font-bold">Skills : </h3>
          <ul className="flex flex-col md:flex-row gap-2 whitespace-nowrap">
            {exp.skills.map((exd) => (
              <li className="list-disc list-inside md:list-none">{exd} </li>
            ))}
          </ul>
        </div>
      </div>
 
  );
};

export default SingleExperience;
