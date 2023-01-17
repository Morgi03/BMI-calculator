import React, { ChangeEvent, Component, FormEventHandler } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";

interface State {
  bmival: number;
  height: number;
  weight: number;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      bmival: 0,
      height: 0,
      weight: 0,
    };
  }

  heightEvent = () => {
    let newheight = parseInt((document.getElementById('magassag') as HTMLInputElement).value);
    this.setState({
      height: newheight,
    });
  };

  weightEvent = () => {
    let newweight = parseInt((document.getElementById('suly') as HTMLInputElement).value);
    this.setState({
      weight: newweight,
    });
  };

  bmicalc = () => {
    this.setState({
      bmival:
        Math.round(
          (this.state.weight / Math.pow(this.state.height / 100, 2)) * 100
        ) / 100,
    });
  };

  render(): React.ReactNode {
    return (
      <div id="content">
        <div className="header">
          <p>
            Írja be cm-ben számított testmagasságát (cipő nélkül mérve):
            <span className="inp">
              <input
                type="number"
                id="magassag"
                onInput={this.heightEvent}
              />
              <span className="mertekegyseg">cm</span>
            </span>
          </p>
          <p>
            Írja be kg-ban számított testsúlyát:
            <span className="inp">
              <input
                type="number"
                id="suly"
                onInput={this.weightEvent}
              />
              <span className="mertekegyseg">kg</span>
            </span>
          </p>
          <button onClick={this.bmicalc}>Számítás</button>
        </div>
        <div>
          <h2 className="orangehp">A ÖN BMI ÉRTÉKE: {this.state.bmival}</h2>
          <table>
            <tr className={(this.state.bmival <= 18.5) ? "selection" : "nothing"}>
              <td className="firstcol">18,5 vagy kevesebb</td>
              <td>SOVÁNY</td>
            </tr>
            <tr className={(this.state.bmival > 18.5 && this.state.bmival < 25) ? "selection" : "nothing"}>
              <td className="firstcol">18,5 - 24,9</td>
              <td>NORMÁL</td>
            </tr>
            <tr className={(this.state.bmival >= 25  && this.state.bmival < 35) ? "selection" : "nothing"}>
              <td className="firstcol">25 - 34,9</td>
              <td>I. FOKÚ ELHÍZÁS</td>
            </tr>
            <tr className={(this.state.bmival >= 35 && this.state.bmival < 40) ? "selection" : "nothing"}>
              <td className="firstcol">35 - 39,9</td>
              <td>II. FOKÚ ELHÍZÁS</td>
            </tr>
            <tr className={(this.state.bmival >= 40) ? "selection" : "nothing"} id='lasttr'>
              <td className="firstcol">40 vagy több</td>
              <td>III. FOKÚ ELHÍZÁS</td>
            </tr>
          </table>
        </div>
        <h2 className="orangehp">AZ IDEÁLIS TESTTÖMEGE:  KG</h2>
        <div>
        <span id="minWeight">0 - 0 kg</span>
        <p id="goodvals">Kívánatos szélső értékek</p>
        </div>
      </div>
    );
  }
}
export default App;
