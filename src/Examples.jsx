import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";
export default function Examples() {
  const [tabContent, setTabContent] = useState("");

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }

  let selectedTab = <p>Please select a topic</p>;

  if (tabContent) {
    selectedTab = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <code>{EXAMPLES[tabContent].code}</code>
      </div>
    );
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <menu>
          <TabButton
            isSelected={tabContent == "components"}
            onClick={() => {
              handleClick("components");
            }}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={tabContent == "jsx"}
            onClick={() => {
              handleClick("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={tabContent == "props"}
            onClick={() => {
              handleClick("props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={tabContent == "state"}
            onClick={() => {
              handleClick("state");
            }}
          >
            State
          </TabButton>
        </menu>
        {selectedTab}
      </Section>
    </>
  );
}
