import "./App.css";
import Wrapper from "./Components/Wrapper";
import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import Button from "./Components/Button";
import CalcProvider from "./Context/CalcContext";
const btnValue = [
  ["c", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["0", ".", "=", "del"]
];
function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValue.flat().map((btn, i) => {
            return <Button value={btn} key={i} />;
          })}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
