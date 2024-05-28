import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [tabContent, setTabContent] = useState("Please select one tab");

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleClick("Components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("JSX");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("Props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("State");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
