import React, { useEffect, useState } from "react";
import { useClickCounter } from "./customHook";

export const BackgroundColorComponent = () => {
  const [color, setColor] = useState("#fff");
  const [counter, raiseCounter] = useClickCounter();

  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  return (
    <div>
      <h1>The useEffect hook!</h1>
      <h4>
        <a href="https://reactjs.org/docs/hooks-overview.html#effect-hook">
          React docs
        </a>
      </h4>
      <p>
        As the React docs state:{" "}
        <i>
          The Effect Hook, useEffect, adds the ability to perform side effects
          from a function component. It serves the same purpose as
          componentDidMount, componentDidUpdate, and componentWillUnmount in
          React classes, but unified into a single API.
        </i>
        Side Effects are those things that can't be done during page rendering
        just like fetching data, changing the DOM or other stuff. <br />
        <code>useEffect</code> is called on each render.{" "}
        <b>Also during the initial rendering of the page!</b> <br />
        There can also be a <i>clean up function</i> which is called when the
        component unmounts. This is done via returning a function in the hook.
        This function is called as soon as the component unmounts.
      </p>
      <h5>You changed the background {counter} times!</h5>
      <button
        onClick={() => {
          setColor(getRandomColor());
          raiseCounter();
        }}
      >
        Change background color!
      </button>
    </div>
  );
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
