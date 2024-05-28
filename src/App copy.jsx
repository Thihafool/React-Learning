import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
// import * as util from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  //spread operator
  const hobbie = ["sports", "cooking"];
  const user = {
    name: "Max",
    age: "21",
  };
  const newHobbies = ["reading"];

  const mergedHobbies = [...hobbie, ...newHobbies];

  const extendedUser = {
    isAdmin: true,
    ...user,
  };

  for (let prop in user) {
    console.log(user[prop]);
  }

  // const editedNumber = numberArray.map((item) => ({ text: item }));

  // console.log(editedNumber);
  const numberArray = [1, 2, 3];

  // function transformToObjects(numberArray) {
  //   return numberArray.map((item) => ({ number: item }));
  // }

  // const editedNumber = transformToObjects(numberArray);
  // console.log(editedNumber);

  //Array map
  const transformToObjects = (numberArray) => {
    return numberArray.map((item) => ({ number: item }));
  };

  // const editedNumber = transformToObjects(numberArray);
  console.log(transformToObjects(numberArray));

  console.log(extendedUser);
  console.log(mergedHobbies);

  //Destructuring
  const [firstName, lastName] = ["Max", "Melody"];
  console.log(firstName + lastName);

  const { name, age } = { name: "Maxx", age: "3" };

  console.log(name, age);

  let tabContent = "Please select one tab";

  function handleClick(selectedButton) {
    tabContent = selectedButton;
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
          {/* <ul>
            <CoreConcept {...util.default[0]}></CoreConcept>
            <CoreConcept {...util.default[1]}></CoreConcept>
            <CoreConcept {...util.default[2]}></CoreConcept>
            <CoreConcept {...util.default[3]}></CoreConcept>
          </ul> */}
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
