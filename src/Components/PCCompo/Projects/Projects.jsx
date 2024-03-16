import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FullStack from "./FullStack";
import FrontEnd from "./FrontEnd";
import SystemDevelop from "./SystemDevelop";

const Projects = () => {
  return (
    <section name="projects" className="pt-44">
      <h1 className="text-center font-bold text-xl">Projects</h1>

      <div>
        <Tabs>
          <TabList className="mt-2 md:mt-10 flex justify-center flex-row gap-16 cursor-pointer">
            <Tab className="bg-purple-500 px-4 py-2 rounded-lg text-lg">
              FullStack Sites
            </Tab>
            <Tab className="bg-purple-500 px-4 py-2 rounded-lg text-lg hidden md:block">
              FrontEnd Sites
            </Tab>
            <Tab className="bg-purple-500 px-4 py-2 rounded-lg text-lg">
              System Develop
            </Tab>
          </TabList>

          <TabPanel>
            <FullStack/>
          </TabPanel>
          <TabPanel> <FrontEnd/> </TabPanel>
          <TabPanel> <SystemDevelop /> </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
