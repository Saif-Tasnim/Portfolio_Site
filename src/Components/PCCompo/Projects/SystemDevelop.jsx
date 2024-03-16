import React from "react";
import { SYSTEM } from "../../../static/PROJECTS";
import client from "../../../assets/projects/customer-service.png";
import live from "../../../assets/projects/live.png";
import docs from "../../../assets/projects/documentation.png";

const SystemDevelop = () => {
  return (
    <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap-7 mx-16 py-4">
      {SYSTEM.map((fc) => (
        <div key={fc.id} className="border border-purple-500 w-full rounded-md">
          <div className="flex flex-col mx-4">
            <h1 className="text-center font-bold text-xl py-2">
              {fc.project_name}
            </h1>
            <a
              href={fc.github_url_client}
              className="flex items-center gap-3 py-1"
            >
              {" "}
              <img src={client} alt="" className="w-8" />{" "}
              <span>GitHub URL</span>{" "}
            </a>
            {fc.live_demo ? (
              <a href={fc.live_site} className="flex items-center gap-3 py-3">
                <img src={live} alt="live" className="w-8" />
                <span>Live Demo</span>{" "}
              </a>
            ) : (
              ""
            )}
            <p className="flex gap-3 items-center mb-3 text-lg">
              <img src={docs} alt="" className="w-8" />{" "}
              <span className="font-bold pt-2">Description</span>{" "}
             </p>
             <p>{fc.project_desc}</p>
            <p className="my-4">
              <span className="font-bold mr-5">Technology : </span>{" "}
              <span>{fc.technology}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemDevelop;
