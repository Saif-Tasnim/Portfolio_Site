import React from "react";
import { EDUCATION } from "../../../static/EDUCATION.JS";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <section name="educations" className="pt-40">
      <h1 className="text-center text-xl font-bold">Educations </h1>

      <div className="mt-14 flex flex-col items-center md:flex-row gap-14 justify-center">
        {EDUCATION.map((edu) =>
          edu.id === 1 ? (
            <Fade direction="left" delay={5} duration={1000}>
              <div
                key={edu.id}
                className=" border border-purple-400 bg-purple-700 px-6 py-12 rounded-lg shadow-xl"
              >
                <h1 className="text-xl font-bold">{edu.name}</h1>
                <p className="py-2">{edu.degree}</p>
                <p className="py-1">{edu.cgpa}</p>
                <p className="py-1">{edu.duration}</p>
                <p className="py-1">{edu.location}</p>
              </div>
            </Fade>
          ) : (
            <Fade direction="right" delay={5} duration={1000}>
              <div
                key={edu.id}
                className=" border border-purple-400 bg-purple-700 p-12 rounded-lg shadow-xl"
              >
                <h1 className="text-xl font-bold">{edu.name}</h1>
                <p className="py-2">{edu.degree}</p>
                <p className="py-1">{edu.cgpa}</p>
                <p className="py-1">{edu.duration}</p>
                <p className="py-1">{edu.location}</p>
              </div>
            </Fade>
          )
        )}
      </div>
    </section>
  );
};

export default Education;
