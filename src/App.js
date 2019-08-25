import React from "react";
import "./App.css";
import { ButtonComponent } from "./components/buttonComponent";
import { BackgroundColorComponent } from "./components/backgroundColorComponent";

function App() {
  return (
    <div className="App">
      <h1>The two hook rules: </h1>
      <p>
        <ul>
          <li>
            Only call Hooks at the top level. Don’t call Hooks inside loops,
            conditions, or nested functions.
          </li>
          <li>
            Only call Hooks from React function components. Don’t call Hooks
            from regular JavaScript functions. (There is just one other valid
            place to call Hooks — your own custom Hooks. We’ll learn about them
            in a moment.)
          </li>
        </ul>
      </p>
      <ButtonComponent />
      <BackgroundColorComponent />
    </div>
  );
}

export default App;
