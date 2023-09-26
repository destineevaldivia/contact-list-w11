import { useState } from "react";
import Contacts from "./components/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Contacts />
    </>
  );
}

export default App;
