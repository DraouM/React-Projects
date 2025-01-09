import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "preact/hooks";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>This is an alert</Alert>}

      <br />
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
