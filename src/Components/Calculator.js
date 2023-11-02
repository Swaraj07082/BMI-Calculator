import React, { useMemo, useState } from "react";

export default function Calculator() {
  const [weight, setweight] = useState(70);
  const [height, setheight] = useState(150);

  const SETHEIGHT = (event) => {
    setheight(event.target.value);
  };

  const SETWEIGHT = (event) => {
    setweight(event.target.value);
  };
  const bmicalculation = (weight, height) => {
    let newheight = height / 100;
    let bmi = (weight / (newheight * newheight)).toFixed(1);
    // returns upto 1 decimal place

    return bmi;
  };

  const calculation = useMemo(
    () => bmicalculation(weight, height),
    [height, weight]
  );

  return (
    <>
      <div
        style={{
          border: 2,
          borderColor: "red",
          backgroundColor: "white",

          height: 300,
          width: 600,
          position: "relative",
          left: 450,
          top: 200,
        }}
      >
        <div
          style={{
            border: 2,
            height: 80,
            widths: 100,
            // ******
            backgroundColor: "#1b1096",
          }}
        >
          {" "}
          <p
            style={{
              color: "white",
              fontSize: 45,
              position: "relative",
              left: 120,
              top: 7,
            }}
          >
            {" "}
            BMI CALCULATOR
          </p>
        </div>

        <label
          for="customRange1"
          className="form-label "
          style={{ position: "relative", left: 65, top: 30 }}
        >
          Weight :{weight} kgs
        </label>

        <div
          style={{
            border: 2,
            height: 50,
            width: 70,
            backgroundColor: "#1b1096",
            position: "relative",
            top: 125,
            left: 260,
            borderRadius: 15,
          }}
        >
          {" "}
          <p
            style={{ color: "white", position: "relative", left: 19, top: 12 }}
          >
            {" "}
            {calculation}
          </p>{" "}
        </div>

        <input
          type="range"
          className="form-range"
          id="customRange1"
          onClick={SETWEIGHT}
          style={{ width: 480, position: "relative", left: 60, bottom: 30 }}
          min="0"
          max="150"
        />

        <label
          for="customRange1"
          className="form-label "
          style={{ position: "relative", right: 417, top: 10 }}
        >
          Height :{height} cms
        </label>

        <input
          type="range"
          className="form-range"
          id="customRange2"
          onClick={SETHEIGHT}
          style={{ width: 480, position: "relative", left: 60, top: 10 }}
          min="50"
          max="250"
        />
      </div>
    </>
  );
}
