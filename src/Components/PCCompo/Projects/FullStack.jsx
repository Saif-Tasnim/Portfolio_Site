import React from "react";
import { FULL_STACK } from "../../../static/PROJECTS";
import client from "../../../assets/projects/customer-service.png";
import server from "../../../assets/projects/database-storage.png";
import live from "../../../assets/projects/live.png";
import docs from "../../../assets/projects/documentation.png";
import video from "../../../assets/projects/clapperboard.png";

const FullStack = () => {
  return (
    <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap-7 mx-16">
      {FULL_STACK.map((fc) => (
        <div key={fc.id} className="border border-purple-500 w-full rounded-md">
          <div className="w-[98%] mx-auto py-3">
            <img src={fc.images} alt={fc.project_name + ".png"} className="rounded"/>
          </div>
          <div className="flex flex-col mx-4">
            <h1 className="text-center font-bold text-xl py-2">{fc.project_name}</h1>
            <a
              href={fc.github_url_client}
              className="flex items-center gap-3 py-1"
            >
              {" "}
              <img src={client} alt="" className="w-8" />{" "}
              <span>GitHub - Client Side URL</span>{" "}
            </a>

            <a
              href={fc.github_url_server}
              className="flex items-center gap-3 py-1"
            >
              <img src={server} alt="server" className="w-8"/>
              <span>GitHub - Server Side URL</span>{" "}
            </a>

            {fc.live_site ? (
              <a href={fc.live_site} className="flex items-center gap-3 py-1">
                <img src={live} alt="live" className="w-8"/>
                <span>Live Site URL</span>{" "}
              </a>
            ) : (
              ""
            )}
            {fc.documentation ? (
              <a
                href={fc.documentation}
                className="flex items-center gap-3 py-1"
              >
               <img src={docs} alt="documentation" className="w-8"/>
                <span>Documentation</span>{" "}
              </a>
            ) : (
              ""
            )}
            {fc.live_demo ? (
              <a href={fc.live_demo} className="flex items-center gap-3 py-1">
               <img src={video} alt="demonstration" className="w-8"/>
                <span>Live Demonstration</span>{" "}
              </a>
            ) : (
              ""
            )}
            <ul className="md:flex md:flex-row gap-2 py-5 hidden">
              <span className="font-bold">Technology :</span>
              {fc.technologies.map((ft) => (
                <li>{ft}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullStack;
