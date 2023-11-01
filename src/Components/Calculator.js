import React, { useMemo } from "react";

export default function Calculator() {
  let wt = document.getElementById("customRange1");

  let count = 0;
  const OnHeightChange = (event) => {
    count++;
    console.log(event);
  };

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
        ></div>

        <label
          for="customRange1"
          className="form-label "
          style={{ position: "relative", left: 65, top: 20 }}
        >
          Weight :{count}
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
        ></div>
        {/* <label for="customRange1" className="form-label " >Height : </label> */}
        <input
          type="range"
          className="form-range"
          id="customRange1"
          onChange={OnHeightChange}
          style={{ width: 380, position: "relative", left: 60, bottom: 30 }}
        />

        <label
          for="customRange1"
          className="form-label "
          style={{ position: "relative", right: 317, top: 10 }}
        >
          Height :{count}
        </label>

        <input
          type="range"
          className="form-range"
          id="customRange2"
          style={{ width: 380, position: "relative", left: 60, top: 10 }}
        />
      </div>
    </>
  );
}
