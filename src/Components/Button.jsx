import { useContext } from "react";
import { CalContext } from "../Context/CalcContext";

function getStyleName(btn) {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
    del: "opt"
  };
  return className[btn];
}

export default function Button({ value }) {
  const { calc, setCalc } = useContext(CalContext);

  function commeClick() {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  }

  function reset() {
    setCalc({
      sign: "",
      num: 0,
      res: 0
    });
  }

  function clickNumber() {
    const numberString = value.toString();
    let numberValue;

    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue
    });
  }
  function sginClick() {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    });
  }

  function equalsClick() {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const results = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b
        };

        return results[sign] ? results[sign](a, b) : b;
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0
      });
    }
  }
  function deleteNumber() {
    const numString = calc.num.toString();
    const updatedNum = numString.slice(0, -1);
    setCalc({
      ...calc,
      num: updatedNum ? Number(updatedNum) : 0,
      sign: "",
      res: 0
    });
  }

  function peresenClick() {
    setCalc({
      ...calc,
      num: calc.num / 100,
      res: calc.res / 100,
      sign: ""
    });
  }
  function inverClick() {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    });
  }
  function handelClick() {
    const results = {
      ".": commeClick,
      c: reset,
      x: sginClick,
      "+": sginClick,
      "-": sginClick,
      "/": sginClick,
      "=": equalsClick,
      "%": peresenClick,
      "+/-": inverClick,
      del: deleteNumber
    };

    if (results[value]) {
      return results[value]();
    } else {
      return clickNumber();
    }
  }

  return (
    <button onClick={handelClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
}
