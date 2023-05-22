import "../css/calculator.css";

function Calculator() {
  return (
    <div id="container" className="calulate">
      <div id="inputbox">
        <input type="text" id="result" disabled />
      </div>
      <div className="cals">
        <div className="set">
          <button className="numbers" onClick="dis('7')">
            7
          </button>
          <button className="numbers" onClick="dis('8')">
            8
          </button>
          <button className="numbers" onClick="dis('9')">
            9
          </button>
          <button className="numbers" onClick="dis('/')">
            /
          </button>
        </div>
        <div className="set">
          <button className="numbers" onClick="dis('4')">
            4
          </button>
          <button className="numbers" onClick="dis('5')">
            5
          </button>
          <button className="numbers" onClick="dis('6')">
            6
          </button>
          <button className="numbers" onClick="dis('*')">
            <sub>*</sub>
          </button>
        </div>
        <div className="set">
          <button className="numbers" onClick="dis('1')">
            1
          </button>
          <button className="numbers" onClick="dis('2')">
            2
          </button>
          <button className="numbers" onClick="dis('3')">
            3
          </button>
          <button className="numbers" onClick="dis('-')">
            -
          </button>
        </div>
        <div className="set">
          <button className="numbers" onClick="dis('0')">
            0
          </button>
          <button className="numbers" onClick="dis('.')">
            <sup>.</sup>
          </button>
          <button className="numbers" onClick="solve ()">
            =
          </button>
          <button className="numbers" onClick="dis('+')">
            +
          </button>
        </div>
        <div className="set">
          <button className="clr" onClick="ac()">
            AC
          </button>
          <button className="clr" onClick="clr()">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
