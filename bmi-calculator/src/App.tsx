import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="content">
      <div className="header">
        <p>
          Írja be cm-ben számított testmagasságát (cipő nélkül mérve):
          <span className="inp">
            <input type="number" id="magassag" />
            <span className="mertekegyseg">cm</span>
          </span>
        </p>
        <p>
          Írja be kg-ban számított testsúlyát:{" "}
          <span className="inp">
            <input type="number" id="suly" />
            <span className="mertekegyseg">kg</span>
          </span>
        </p>
      </div>
      <div>
        <h2 className="orangehp">A ÖN BMI ÉRTÉKE:</h2>
      </div>
    </div>
  );
}

export default App;
