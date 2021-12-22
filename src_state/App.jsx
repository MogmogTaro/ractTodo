import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
