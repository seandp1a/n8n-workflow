import { useEffect, useState } from "react";

export default function TestPage() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("#FFF");

  useEffect(() => {
    const isEven = counter % 2 === 0;
    setColor(isEven ? "#FFF" : "red");
    console.log("Counter changed:", counter);
    return () => {
      console.log("Cleanup function called",counter);
    };
  }, [counter]);

  return (
    <>
      <div style={{ color: color }}>Count: {counter}</div>
      <button
        style={{ color: "#000" }}
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        style={{ color: "#000" }}
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </>
  );
}
