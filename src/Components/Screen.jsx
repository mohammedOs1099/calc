import { useContext } from "react";
import { Textfit } from "react-textfit";
import { CalContext } from "../Context/CalcContext";
export default function Screen(props) {
  const { calc } = useContext(CalContext);

  return (
    <>
      <Textfit className="screen"  max={70} mode="single">
        <p>{calc.num ? calc.num : calc.res}</p>
      </Textfit>
    </>
  );
}
