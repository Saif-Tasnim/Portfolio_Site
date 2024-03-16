import React from "react";
import { FRONT_END } from "../../../static/PROJECTS";
import client from "../../../assets/projects/customer-service.png";
import live from "../../../assets/projects/live.png";

const FrontEnd = () => {
  return (
    <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap-7 mx-16 py-4">
      {FRONT_END.map((fc) => (
        <div key={fc.id} className="border border-purple-500 w-full rounded-md">
          <div className="w-[98%] mx-auto py-3">
            <img
              src={fc.images}
              alt={fc.project_name + ".png"}
              className="rounded h-[275px] w-auto mx-auto"
            />
          </div>
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
              <span>GitHub - Client Side URL</span>{" "}
            </a>
            {fc.live_site ? (
              <a href={fc.live_site} className="flex items-center gap-3 py-3">
                <img src={live} alt="live" className="w-8" />
                <span>Live Site URL</span>{" "}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontEnd;
