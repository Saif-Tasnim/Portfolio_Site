import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Technologies from "./Technologies";
import Tools from "./Tools";

const Skills = () => {
  return (
    <section name="skills" className="pt-40">
      <h1 className="text-center text-xl font-bold"> Skills </h1>

      <div>
        <Tabs>
          <TabList className="mt-2 md:mt-10 flex justify-center flex-row gap-16 cursor-pointer">
            <Tab className="bg-purple-500 px-4 py-2 rounded-lg text-lg hidden md:block">
              Technologies{" "}
            </Tab>
            <Tab className="bg-purple-500 px-4 py-2 rounded-lg text-lg hidden md:block">
              Tools
            </Tab>
          </TabList>

          <TabPanel>
            <h2>
              <Technologies />
            </h2>
          </TabPanel>
          <TabPanel>
            <Tools />
          </TabPanel>     
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
