import React from "react";
import { useClickCounter } from "./customHook";

export const ButtonComponent = () => {
  const [counter, raiseCounter] = useClickCounter();

  return (
    <div>
      <h1>The useState Hook!</h1>
      <h4>
        <a href="https://reactjs.org/docs/hooks-overview.html#state-hook">
          React Docs
        </a>
      </h4>
      <p>
        Key takeaway: <code>useState</code> returns a pair: the current state
        value and a function that lets you update it. The only argument it takes
        is the initial state. The <code>useState</code> hook can be used
        multiple times in a functional component.
      </p>
      <br />
      <h5>You clicked {counter} times!</h5>
      <button onClick={() => raiseCounter()}>Click me!</button>
    </div>
  );
};
