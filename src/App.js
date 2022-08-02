import { useState } from "react";
import * as math from "mathjs";

import "./App.css";
import Button from "./components/Button"
import Input from "./components/Input"

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");


  const addText = (val) => {
    setText((text) => [...text, val])
  }

  const clear = () => {
    setText("");
    setResult("");
  }

  const calculateResult = () =>{
    const input = text.join("")

    setResult(math.evaluate(input))
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="1" click={addText}/>
          <Button symbol="2" click={addText}/>
          <Button symbol="3" click={addText}/>
          <Button symbol="/" color="#6d9ad1"click={addText}/>
        </div>
        <div className="row">
          <Button symbol="4" click={addText}/>
          <Button symbol="5" click={addText}/>
          <Button symbol="6" click={addText}/>
          <Button symbol="*" color="#6d9ad1"click={addText}/>
        </div>
        <div className="row">
          <Button symbol="7" click={addText}/>
          <Button symbol="8" click={addText}/>
          <Button symbol="9" click={addText}/>
          <Button symbol="+" color="#6d9ad1"click={addText}/>
        </div>
        <div className="row">
          <Button symbol="0" click={addText}/>
          <Button symbol="."click={addText}/>
          <Button symbol="=" click={calculateResult}/>
          <Button symbol="-" color="#6d9ad1"click={addText}/>
        </div>
        <div className="row">
          <Button symbol="clear" color="#364e6b"click={clear} ></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
